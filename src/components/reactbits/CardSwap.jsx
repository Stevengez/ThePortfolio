import React, { Children, cloneElement, forwardRef, isValidElement, useCallback, useEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';

export const Card = forwardRef(({ customClass, ...rest }, ref) => (
  <div
    ref={ref}
    {...rest}
    className={`absolute top-1/2 left-1/2 rounded-xl border border-white bg-black [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden] shadow-2xl ${customClass ?? ''} ${rest.className ?? ''}`.trim()}
  />
));
Card.displayName = 'Card';

const makeSlot = (i, distX, distY, total) => ({
  x: i * distX,
  y: -i * distY,
  z: -i * 50,
  zIndex: total - i
});

const placeNow = (el, slot, skew) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: 'center center',
    zIndex: slot.zIndex,
    force3D: true
  });

const CardSwap = ({
  width = 500,
  height = 400,
  cardDistance = 35,
  verticalDistance = 25,
  delay = 2500,
  pauseOnHover = false,
  onCardClick,
  skewAmount = 0,
  easing = 'elastic',
  children
}) => {
  const config = useMemo(() => 
    easing === 'elastic'
      ? {
          ease: 'power2.out',
          durDrop: 0.6,
          durMove: 0.6,
          durReturn: 0.6,
          promoteOverlap: 0.7,
          returnDelay: 0.05
        }
      : {
          ease: 'power1.inOut',
          durDrop: 0.5,
          durMove: 0.5,
          durReturn: 0.5,
          promoteOverlap: 0.45,
          returnDelay: 0.1
        },
    [easing]
  );

  const childArr = useMemo(() => Children.toArray(children), [children]);
  const refs = useMemo(
    () => childArr.map(() => React.createRef()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [childArr.length]
  );

  const order = useRef(Array.from({ length: childArr.length }, (_, i) => i));
  const tlRef = useRef(null);
  const intervalRef = useRef();
  const container = useRef(null);
  const isHoveredRef = useRef(false);
  const swapRef = useRef();

  const swap = useCallback(() => {
    if (order.current.length < 2) return;
    if (tlRef.current && tlRef.current.isActive()) return;

    const [front, ...rest] = order.current;
    const elFront = refs[front]?.current;
    if (!elFront) return;

    const tl = gsap.timeline();
    tlRef.current = tl;

    tl.to(elFront, {
      y: '+=380',
      opacity: 0,
      scale: 0.9,
      duration: config.durDrop,
      ease: config.ease
    });

    tl.addLabel('promote', `-=${config.durDrop * config.promoteOverlap}`);
    rest.forEach((idx, i) => {
      const el = refs[idx]?.current;
      if (!el) return;
      const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
      tl.set(el, { zIndex: slot.zIndex }, 'promote');
      tl.to(
        el,
        {
          x: slot.x,
          y: slot.y,
          z: slot.z,
          opacity: 1,
          scale: 1,
          duration: config.durMove,
          ease: config.ease
        },
        `promote+=${i * 0.1}`
      );
    });

    const backSlot = makeSlot(refs.length - 1, cardDistance, verticalDistance, refs.length);
    tl.addLabel('return', `promote+=${config.durMove * config.returnDelay}`);
    tl.call(
      () => {
        gsap.set(elFront, { zIndex: backSlot.zIndex });
      },
      undefined,
      'return'
    );
    tl.to(
      elFront,
      {
        x: backSlot.x,
        y: backSlot.y,
        z: backSlot.z,
        opacity: 0.85,
        scale: 0.95,
        duration: config.durReturn,
        ease: config.ease
      },
      'return'
    );

    tl.call(() => {
      order.current = [...rest, front];
    });
  }, [refs, config, cardDistance, verticalDistance]);

  useEffect(() => {
    swapRef.current = swap;
  }, [swap]);

  useEffect(() => {
    const total = refs.length;
    refs.forEach((r, i) => placeNow(r.current, makeSlot(i, cardDistance, verticalDistance, total), skewAmount));

    const startInterval = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = window.setInterval(() => {
        swapRef.current?.();
      }, delay);
    };

    startInterval();

    const node = container.current;
    if (pauseOnHover && node) {
      const onEnter = () => {
        isHoveredRef.current = true;
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
      const onLeave = () => {
        isHoveredRef.current = false;
        startInterval();
      };
      node.addEventListener('mouseenter', onEnter);
      node.addEventListener('mouseleave', onLeave);
      return () => {
        node.removeEventListener('mouseenter', onEnter);
        node.removeEventListener('mouseleave', onLeave);
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [cardDistance, verticalDistance, delay, pauseOnHover, skewAmount, refs]);

  const handleCardClick = (e, index, childOnClick) => {
    // If clicking an explicit anchor or button inside the card, do not swap
    if (e.target.closest('a') || e.target.closest('button')) {
      return;
    }
    childOnClick?.(e);
    onCardClick?.(index);
    swap();
    if (!isHoveredRef.current) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = window.setInterval(() => {
        swapRef.current?.();
      }, delay);
    }
  };

  const rendered = childArr.map((child, i) =>
    isValidElement(child)
      ? cloneElement(child, {
          key: i,
          ref: refs[i],
          style: {
            width: typeof width === 'number' ? `${width}px` : width,
            height: typeof height === 'number' ? `${height}px` : height,
            maxWidth: 'calc(100vw - 3rem)',
            ...(child.props.style ?? {})
          },
          onClick: e => handleCardClick(e, i, child.props.onClick)
        })
      : child
  );

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center overflow-visible max-w-full cursor-pointer select-none"
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        maxWidth: '100%'
      }}
    >
      {rendered}
    </div>
  );
};

export default CardSwap;

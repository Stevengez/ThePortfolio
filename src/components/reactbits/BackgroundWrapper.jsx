import React from 'react';
import LetterGlitch from './LetterGlitch';
import Dither from './Dither';

const BackgroundWrapper = () => {
  const bgType = (process.env.REACT_APP_BG_TYPE || 'letter-glitch').toLowerCase();

  if (bgType === 'none') {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
      {bgType === 'dither' ? (
        <div className="w-full h-full">
          <Dither
            waveColor={[0.15, 0.25, 0.55]}
            backgroundColor={[0.04, 0.06, 0.12]}
            waveSpeed={0.03}
            waveFrequency={2.5}
            waveAmplitude={0.3}
            enableMouseInteraction={false}
          />
        </div>
      ) : (
        <LetterGlitch
          glitchColors={['#1e293b', '#3b82f6', '#1d4ed8']}
          glitchSpeed={60}
          centerVignette={false}
          outerVignette={true}
          smooth={true}
          className="w-full h-full"
        />
      )}
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px]" />
    </div>
  );
};

export default BackgroundWrapper;

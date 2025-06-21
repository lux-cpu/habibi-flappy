import React from 'react';
import { PIPES } from '../lib/constants';

export default function Pipes({ pipes }) {
  return (
    <>
      {pipes.map((pipe, index) => (
        <React.Fragment key={`pipe-${index}-${pipe.x}`}>
          {/* Top Pipe */}
          <div
            className="absolute pipe-sprite pipe-smooth"
            style={{
              left: pipe.x,
              top: 0,
              width: PIPES.WIDTH,
              height: pipe.topHeight,
              background: 'linear-gradient(to right, #00ffff, #0080ff)',
              clipPath: 'polygon(0 0, 100% 0, 90% 100%, 10% 100%)'
            }}
          />
          
          {/* Bottom Pipe */}
          <div
            className="absolute pipe-sprite pipe-smooth"
            style={{
              left: pipe.x,
              top: pipe.topHeight + PIPES.GAP,
              width: PIPES.WIDTH,
              height: `calc(100% - ${pipe.topHeight + PIPES.GAP}px)`,
              background: 'linear-gradient(to right, #00ffff, #0080ff)',
              clipPath: 'polygon(10% 0, 90% 0, 100% 100%, 0% 100%)'
            }}
          />
        </React.Fragment>
      ))}
    </>
  );
}
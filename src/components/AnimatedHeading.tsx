import React, { useEffect, useState } from 'react';

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  initialDelay?: number;
}

export function AnimatedHeading({ text, className = '', initialDelay = 200 }: AnimatedHeadingProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, initialDelay);
    return () => clearTimeout(timer);
  }, [initialDelay]);

  const lines = text.split('\n');
  const charDelay = 30;
  const transitionDuration = 500;

  return (
    <h1 className={className}>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="block overflow-hidden">
          {line.split(' ').map((word, wordIndex, array) => (
            <span key={wordIndex} className="inline-block whitespace-nowrap">
              {word.split('').map((char, charIndex) => {
                const delay = (lineIndex * line.length * charDelay) + (wordIndex * 5 * charDelay) + (charIndex * charDelay);
                return (
                  <span
                    key={charIndex}
                    className="inline-block transition-all ease-out"
                    style={{
                      opacity: isAnimating ? 1 : 0,
                      transform: isAnimating ? 'translateX(0)' : 'translateX(-18px)',
                      transitionDuration: `${transitionDuration}ms`,
                      transitionDelay: `${delay}ms`,
                    }}
                  >
                    {char}
                  </span>
                );
              })}
              {wordIndex !== array.length - 1 && (
                <span className="inline-block">&nbsp;</span>
              )}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}

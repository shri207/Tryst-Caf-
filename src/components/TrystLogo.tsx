import React from 'react';

interface TrystLogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
}

export const TrystLogo: React.FC<TrystLogoProps> = ({
  variant = 'dark',
  size = 'md',
  className = '',
  onClick,
}) => {
  const isLight = variant === 'light';
  const textColor = isLight ? '#F7F5EF' : '#0B0B0B';
  const subtextColor = isLight ? '#EFECE4' : '#171717';
  const lineColor = isLight ? '#F7F5EF' : '#0B0B0B';

  const sizeClasses = {
    sm: 'w-28 py-0.5',
    md: 'w-36 py-1',
    lg: 'w-48 py-2',
    xl: 'w-64 py-3',
  };

  return (
    <div
      onClick={onClick}
      className={`inline-flex flex-col items-center justify-center select-none cursor-pointer transition-opacity hover:opacity-85 ${sizeClasses[size]} ${className}`}
      role="banner"
      aria-label="Tryst Café Logo"
    >
      {/* SVG Wordmark reproducing the exact supplied logo */}
      <svg
        viewBox="0 0 240 95"
        className="w-full h-auto overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left Horizontal Line */}
        <line
          x1="12"
          y1="40"
          x2="56"
          y2="40"
          stroke={lineColor}
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* 'tryst' Wordmark */}
        <text
          x="120"
          y="49"
          textAnchor="middle"
          fill={textColor}
          style={{
            fontFamily: "'Cormorant Garamond', 'Plus Jakarta Sans', Georgia, serif",
            fontWeight: 700,
            fontSize: '44px',
            letterSpacing: '-0.02em',
            fontStyle: 'normal',
          }}
        >
          tryst
        </text>

        {/* Right Horizontal Line */}
        <line
          x1="184"
          y1="40"
          x2="228"
          y2="40"
          stroke={lineColor}
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* 'CAFÉ' Subtitle underneath with wide tracking */}
        <text
          x="120"
          y="82"
          textAnchor="middle"
          fill={subtextColor}
          style={{
            fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
            fontWeight: 400,
            fontSize: '18px',
            letterSpacing: '0.38em',
          }}
        >
          CAFÉ
        </text>
      </svg>
    </div>
  );
};

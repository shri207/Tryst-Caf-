import React from 'react';

interface OrnamentalDividerProps {
  label?: string;
  variant?: 'dark' | 'light';
  className?: string;
  sublabel?: string;
}

export const OrnamentalDivider: React.FC<OrnamentalDividerProps> = ({
  label,
  variant = 'dark',
  className = '',
  sublabel,
}) => {
  const isLight = variant === 'light';
  const lineColor = isLight ? 'border-[#77736B]/40' : 'border-[#171717]/25';
  const accentColor = isLight ? 'text-[#EFECE4]' : 'text-[#171717]';
  const diamondColor = isLight ? '#EFECE4' : '#171717';

  return (
    <div className={`flex flex-col items-center justify-center my-6 ${className}`}>
      <div className="flex items-center justify-center w-full max-w-xl gap-3">
        {/* Left Double Line with Accent Diamond */}
        <div className={`flex-1 flex flex-col gap-1 border-t ${lineColor}`} />
        <div className="flex items-center gap-1.5 px-2">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <polygon points="6,1 11,6 6,11 1,6" fill={diamondColor} />
          </svg>
          {label && (
            <span
              className={`text-xs uppercase tracking-[0.3em] font-medium px-2 ${accentColor}`}
            >
              {label}
            </span>
          )}
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <polygon points="6,1 11,6 6,11 1,6" fill={diamondColor} />
          </svg>
        </div>
        <div className={`flex-1 flex flex-col gap-1 border-t ${lineColor}`} />
      </div>
      {sublabel && (
        <span className="text-[11px] font-sans text-[#77736B] tracking-widest uppercase mt-1">
          {sublabel}
        </span>
      )}
    </div>
  );
};

interface OrnamentalFrameProps {
  children: React.ReactNode;
  variant?: 'dark' | 'light';
  className?: string;
  innerClassName?: string;
}

export const OrnamentalFrame: React.FC<OrnamentalFrameProps> = ({
  children,
  variant = 'dark',
  className = '',
  innerClassName = '',
}) => {
  const isLight = variant === 'light';
  const outerBorder = isLight ? 'border-[#77736B]/60' : 'border-[#171717]/80';
  const innerBorder = isLight ? 'border-[#77736B]/30' : 'border-[#171717]/30';
  const cornerBg = isLight ? 'bg-[#0B0B0B]' : 'bg-[#F7F5EF]';
  const cornerColor = isLight ? '#EFECE4' : '#171717';

  return (
    <div className={`relative p-3 sm:p-4 border ${outerBorder} ${className}`}>
      {/* Corner geometric diamonds */}
      <div
        className={`absolute -top-1.5 -left-1.5 w-3 h-3 ${cornerBg} flex items-center justify-center`}
      >
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <polygon points="4,0 8,4 4,8 0,4" fill={cornerColor} />
        </svg>
      </div>
      <div
        className={`absolute -top-1.5 -right-1.5 w-3 h-3 ${cornerBg} flex items-center justify-center`}
      >
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <polygon points="4,0 8,4 4,8 0,4" fill={cornerColor} />
        </svg>
      </div>
      <div
        className={`absolute -bottom-1.5 -left-1.5 w-3 h-3 ${cornerBg} flex items-center justify-center`}
      >
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <polygon points="4,0 8,4 4,8 0,4" fill={cornerColor} />
        </svg>
      </div>
      <div
        className={`absolute -bottom-1.5 -right-1.5 w-3 h-3 ${cornerBg} flex items-center justify-center`}
      >
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <polygon points="4,0 8,4 4,8 0,4" fill={cornerColor} />
        </svg>
      </div>

      {/* Inner thin border */}
      <div className={`border ${innerBorder} p-4 sm:p-6 ${innerClassName}`}>
        {children}
      </div>
    </div>
  );
};

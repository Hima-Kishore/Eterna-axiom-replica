import React from "react";

interface TokenImageProps {
  src?: string;
  alt: string;
}

export const TokenImage = ({ src, alt }: TokenImageProps) => {
  return (
    <div className="relative w-10 h-10 rounded-md overflow-hidden bg-card-hover border border-card-border shrink-0">
      {/* Fallback if no image is provided */}
      <img 
        src={src || "https://placehold.co/40x40/18181A/FFF?text=?"} 
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
};
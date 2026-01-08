import React from "react";
import { cn } from "@/lib/utils";

interface TokenImageProps {
  src?: string;
  alt: string;
  borderColor?: string;
}

export const TokenImage = ({ src, alt, borderColor = "border-brand-primary" }: TokenImageProps) => {
  return (
    <div className={cn(
      "relative w-[74px] h-[74px] rounded-md overflow-hidden border shrink-0 p-0.5 bg-card",
      borderColor
    )}>
      <img 
        src={src || "images/googleLogo.webp"} 
        alt={alt}
        className="w-full h-full object-cover rounded-md"
      />
    </div>
  );
};
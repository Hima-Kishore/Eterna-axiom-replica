import React from "react";
import { cn } from "@/lib/utils";

interface TokenImageProps {
  src?: string;
  alt: string;
  borderColor?: string;
}

export const TokenImage = ({ src, alt, borderColor = "border-status-decrease" }: TokenImageProps) => {
  return (
    <div className={cn(
      "relative w-[78px] h-[78px] rounded-md overflow-hidden border shrink-0 p-0.5 bg-card",
      borderColor
    )}>
      <img 
        src={src || "images/GoogleLogo.webp"} 
        alt={alt}
        className="w-full h-full object-cover rounded-md"
      />
    </div>
  );
};
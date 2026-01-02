import { Star } from "lucide-react";

export const StarIcon = () => {
    return (
        <button className="p-2 text-white bg-[#1A1D24] rounded-full transition-colors">
            <Star size={18} />
        </button>
    );
}
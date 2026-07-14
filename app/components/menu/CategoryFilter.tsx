"use client";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="sticky top-20 z-40 w-full bg-[#fcfdfe]/80 backdrop-blur-md border-y border-[#6e3568]/5 shadow-[0_2px_20px_rgba(110,53,104,0.01)] select-none">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-4">
        
        {/* Horizontal Scrollable Slider Bar */}
        <div className="flex items-center gap-3 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden scroll-smooth whitespace-nowrap pb-1 sm:pb-0">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 transform-gpu ${
                  isActive
                    ? "bg-[#6e3568] text-[#fcfdfe] shadow-[0_4px_15px_rgba(110,53,104,0.15)]"
                    : "bg-[#6e3568]/5 text-[#6e3568]/80 hover:bg-[#6e3568]/10 hover:text-[#6e3568]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
}
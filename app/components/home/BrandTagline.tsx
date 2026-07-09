export default function BrandTagline() {
  return (
    <section className="w-full bg-[#6e3568] text-[#fcfdfe] md:py-24 py-10 relative overflow-hidden">
      <div className="absolute right-0 bottom-0 translate-x-1/3 translate-y-1/3 w-[30vw] h-[30vw] rounded-full border border-[#fcfdfe]/5 pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#b68cb2]">
            Our Culinary Philosophy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-wide">
            “Where Premium Craftsmanship <br />
            Meets <span className="font-extrabold italic text-[#b68cb2]">Uncompromised Luxury</span>”
          </h2>
          <div className="w-16 h-[2px] bg-[#b68cb2] mx-auto mt-4" />
        </div>
      </div>
    </section>
  );
}
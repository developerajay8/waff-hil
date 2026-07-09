"use client";

interface GoogleMapsEmbedProps {
  embedUrl: string;
  storeName: string;
}

export default function GoogleMapsEmbed({ embedUrl, storeName }: GoogleMapsEmbedProps) {
  return (
    <div className="relative w-full h-[50vh] lg:h-full min-h-[400px] lg:min-h-[600px] rounded-[2.5rem] overflow-hidden border border-[#6e3568]/10 shadow-[0_20px_50px_rgba(110,53,104,0.06)] bg-[#6e3568]/5 transform-gpu">
      {/* Decorative Outer Matte Masking Frame */}
      <div className="absolute inset-0 pointer-events-none border-[12px] border-[#fcfdfe] rounded-[2.5rem] z-20" />
      
      <iframe
        title={`Google Maps location pinpoint tracking for ${storeName}`}
        src={embedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full relative z-10 grayscale-[15%] contrast-[105%] saturate-[95%]"
      />
    </div>
  );
}
"use client";

export default function InvestmentDetails() {
  const breakdown = [
    { component: "Franchise Brand Fee", allocation: "₹2,50000", description: "Brand license validation, trademark usage rights, and initial setup asset protection." },
    { component: "Kitchen Equipment Set", allocation: "₹2,00000", description: "Automated digital waffle bakers, deep chillers, custom blenders, and inventory racks." },
    { component: "Initial Raw Inventory", allocation: "₹50,000", description: "Centralized signature premixes, fine premium chocolates, toppings, and branded packaging units." },
    { component: "Interior Branding & Signage", allocation: "₹1,00000", description: "Acrylic glowing brand signage board, complete interior thematic design wall structures." },
    { component: "Grand Launch Marketing", allocation: "₹50,000", description: "Hyper-local geo-targeted social media campaign, print assets, influencer marketing activation." }
  ];

  return (
    <section className="w-full py-24 bg-[#6e3568]/[0.02] border-y border-[#6e3568]/5 select-none">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#b68cb2]">FINANCIAL ARCHITECTURE</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#6e3568] tracking-tight">Kiosk Setup Breakdown (₹6.5 Lakhs)</h2>
          <p className="text-xs text-[#6e3568]/60 max-w-lg mx-auto">Transparent capital distribution layout calculated to secure rapid operational breakeven points.</p>
        </div>

        <div className="w-full overflow-x-auto rounded-3xl border border-[#6e3568]/10 bg-[#fcfdfe] shadow-sm">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-[#6e3568] text-[#fcfdfe] text-[11px] font-bold uppercase tracking-wider">
                <th className="p-5 pl-8">Cost Component Node</th>
                <th className="p-5">Capital Allocation</th>
                <th className="p-5 pr-8">Operational Utility Coverage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#6e3568]/5 text-xs sm:text-sm text-[#6e3568]/80">
              {breakdown.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#6e3568]/[0.01] transition-colors">
                  <td className="p-5 pl-8 font-bold text-[#6e3568]">{row.component}</td>
                  <td className="p-5 font-semibold text-[#b68cb2]">{row.allocation}</td>
                  <td className="p-5 pr-8 font-normal text-[#6e3568]/70 max-w-xs">{row.description}</td>
                </tr>
              ))}
              <tr className="bg-[#6e3568]/5 font-bold text-sm">
                <td className="p-5 pl-8 text-[#6e3568]">Total Initial Investment Matrix</td>
                <td className="p-5 text-[#6e3568]">₹6.50,000</td>
                <td className="p-5 pr-8 text-[10px] uppercase text-[#b68cb2] tracking-wider">Fully Loaded Operational Asset Setup Ready</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
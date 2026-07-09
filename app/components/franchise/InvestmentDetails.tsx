export default function InvestmentDetails() {
  const tiers = [
    { name: "Kiosk Model", space: "100 - 150 Sq Ft", investment: "₹12 - 15 Lakhs", franchiseFee: "Included" },
    { name: "Cafe Lounge", space: "300 - 500 Sq Ft", investment: "₹20 - 25 Lakhs", franchiseFee: "Included" },
    { name: "Flagship Node", space: "500+ Sq Ft", investment: "₹30 Lakhs+", franchiseFee: "Included" }
  ];

  return (
    <section className="w-full py-24 bg-[#6e3568]/[0.02]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#b68cb2]">Capital Mapping</span>
          <h2 className="font-serif text-3xl font-extrabold text-[#6e3568]">Investment Architecture</h2>
        </div>

        <div className="w-full overflow-x-auto rounded-2xl border border-[#6e3568]/10 bg-[#fcfdfe]">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-[#6e3568] text-[#fcfdfe] text-xs font-bold uppercase tracking-wider">
                <th className="p-6">Format Type</th>
                <th className="p-6">Space Required</th>
                <th className="p-6">Est. Setup Cost</th>
                <th className="p-6">Brand Fee</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#6e3568]/5 text-sm text-[#6e3568]/80">
              {tiers.map((tier, idx) => (
                <tr key={idx} className="hover:bg-[#6e3568]/5 transition-colors">
                  <td className="p-6 font-bold text-[#6e3568]">{tier.name}</td>
                  <td className="p-6 font-light">{tier.space}</td>
                  <td className="p-6 font-semibold text-[#b68cb2]">{tier.investment}</td>
                  <td className="p-6 font-light">{tier.franchiseFee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
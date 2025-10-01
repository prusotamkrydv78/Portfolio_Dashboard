export default function ContactInfo() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-white">Contact Information</h2>
      <div className="space-y-3">
        <div className="bg-[#1a1b1e] p-4 rounded-lg">
          <label className="text-gray-400 text-sm">Email</label>
          <input 
            type="email"
            value="sophia.chen@example.com"
            readOnly
            className="w-full bg-transparent text-white mt-1 focus:outline-none"
          />
        </div>
        <div className="bg-[#1a1b1e] p-4 rounded-lg">
          <label className="text-gray-400 text-sm">Phone</label>
          <input 
            type="tel"
            value="+1 (555) 123-4567"
            readOnly
            className="w-full bg-transparent text-white mt-1 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}

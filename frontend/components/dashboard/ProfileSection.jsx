export default function ProfileSection() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse absolute -inset-1" />
        <img
          src="/avatar.jpg"
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover border-2 border-white/20 relative"
        />
        <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 rounded-full border-2 border-[#1a1b1e]" />
      </div>
      
      <div className="mt-4 text-center">
        <h3 className="text-xl font-semibold text-white">John Doe</h3>
        <p className="text-gray-400">Full Stack Developer</p>
      </div>

      <div className="w-full mt-6 grid grid-cols-3 gap-4 text-center">
        <div className="bg-white/5 rounded-lg p-3">
          <p className="text-2xl font-semibold text-white">24</p>
          <p className="text-xs text-gray-400">Projects</p>
        </div>
        <div className="bg-white/5 rounded-lg p-3">
          <p className="text-2xl font-semibold text-white">12k</p>
          <p className="text-xs text-gray-400">Followers</p>
        </div>
        <div className="bg-white/5 rounded-lg p-3">
          <p className="text-2xl font-semibold text-white">2.4k</p>
          <p className="text-xs text-gray-400">Views</p>
        </div>
      </div>
    </div>
  );
}

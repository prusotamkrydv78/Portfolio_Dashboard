export default function ProfileSection() {
  return (
    <div className="flex items-start space-x-6">
      <div className="w-24 h-24 rounded-full overflow-hidden">
        <img 
          src="/profile-image.jpg" 
          alt="Sophia Chen"
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h3 className="text-xl font-medium text-white">Sophia Chen</h3>
        <p className="text-gray-400 mt-1">Full Stack Developer</p>
        <p className="text-gray-400 mt-2 text-sm max-w-xl">
          Experienced full stack developer with a passion for creating innovative web applications.
        </p>
      </div>
    </div>
  );
}

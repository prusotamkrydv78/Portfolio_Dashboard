import ProfileSection from "./dashboard/ProfileSection";
import SocialLinks from "./dashboard/SocialLinks";
import ProjectsList from "./dashboard/ProjectsList";
import ContactInfo from "./dashboard/ContactInfo";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#13151a]">
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-2xl font-semibold text-white mb-6">Dashboard</h1>

        {/* Profile Section */}
        <div className="bg-[#1a1b1e] rounded-xl p-6 mb-6">
          <h2 className="text-lg text-gray-400 mb-4">Profile</h2>
          <ProfileSection />
        </div>

        {/* Social Media Section */}
        <div className="bg-[#1a1b1e] rounded-xl p-6 mb-6">
          <h2 className="text-lg text-gray-400 mb-4">Social Media</h2>
          <SocialLinks />
        </div>

        {/* Other sections */}
        <div className="space-y-6">
          <ProjectsList />
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}

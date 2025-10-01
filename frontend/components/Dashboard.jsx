import { FiActivity, FiUsers, FiEye, FiStar } from 'react-icons/fi';
import ProfileSection from "./dashboard/ProfileSection";
import SocialLinks from "./dashboard/SocialLinks";
import ProjectsList from "./dashboard/ProjectsList";
import ContactInfo from "./dashboard/ContactInfo";

export default function Dashboard() {
  const stats = [
    { label: 'Total Views', value: '2.4k', icon: <FiEye />, trend: '+12%' },
    { label: 'Profile Visits', value: '1.2k', icon: <FiUsers />, trend: '+8%' },
    { label: 'Projects Completed', value: '24', icon: <FiStar />, trend: '+5%' },
    { label: 'Active Projects', value: '6', icon: <FiActivity />, trend: '+2%' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#13151a] to-[#1a1b1e]">
      <div className="max-w-7xl mx-auto p-8 space-y-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-2">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Dashboard
            </h1>
            <p className="text-gray-400 mt-1">Welcome back, John Doe</p>
          </div>
          <div className="flex space-x-4">
            {/* Add quick action buttons if needed */}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-400">{stat.label}</p>
                  <h3 className="text-2xl font-semibold text-white mt-2">{stat.value}</h3>
                </div>
                <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                  {stat.icon}
                </div>
              </div>
              <p className="text-green-400 text-sm mt-4">{stat.trend} from last month</p>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile and Social Section */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10">
              <div className="p-6 border-b border-white/10">
                <h2 className="text-xl font-semibold text-white">Profile</h2>
              </div>
              <div className="p-6">
                <ProfileSection />
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10">
              <div className="p-6 border-b border-white/10">
                <h2 className="text-xl font-semibold text-white">Social Links</h2>
              </div>
              <div className="p-6">
                <SocialLinks />
              </div>
            </div>
          </div>

          {/* Projects and Contact Section */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10">
              <div className="p-6 border-b border-white/10">
                <h2 className="text-xl font-semibold text-white">Recent Projects</h2>
              </div>
              <div className="p-6">
                <ProjectsList />
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10">
              <div className="p-6 border-b border-white/10">
                <h2 className="text-xl font-semibold text-white">Contact Information</h2>
              </div>
              <div className="p-6">
                <ContactInfo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

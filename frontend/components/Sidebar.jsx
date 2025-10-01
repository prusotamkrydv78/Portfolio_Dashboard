"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { 
  FiHome, 
  FiCode,
  FiUser, 
  FiBriefcase, 
  FiMail,
  FiSettings,
  FiSun, 
  FiMoon 
} from 'react-icons/fi'; 

const navItems = [
  { name: 'Overview', path: '/', icon: <FiHome className="w-5 h-5" /> },
  { name: 'Projects', path: '/projects', icon: <FiCode className="w-5 h-5" /> },
  { name: 'About', path: '/about', icon: <FiUser className="w-5 h-5" /> },
  { name: 'Blog', path: '/blog', icon: <FiBriefcase className="w-5 h-5" /> },
  { name: 'Contact', path: '/contact', icon: <FiMail className="w-5 h-5" /> },
  { name: 'Settings', path: '/settings', icon: <FiSettings className="w-5 h-5" /> },
];

export default function Sidebar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  // Ensure the component is mounted before rendering to avoid hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <aside className="fixed inset-y-0 left-0 hidden lg:block w-60 bg-[#1a1b1e]/95 backdrop-blur-lg border-r border-white/10">
      {/* Profile Section */}
      <div className="p-6">
        <div className="relative w-16 h-16 mx-auto mb-4">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" />
          <img
            src="/avatar.jpg"
            alt="Profile"
            className="relative w-full h-full rounded-full object-cover border-2 border-white/20"
          />
        </div>
        <h1 className="text-lg font-medium text-center text-white">John Doe</h1>
        <p className="text-sm text-center text-gray-400">Full Stack Developer</p>
      </div>

      {/* Navigation */}
      <nav className="px-3 py-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 group
                  ${pathname === item.path 
                    ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white' 
                    : 'text-gray-400 hover:bg-white/5'
                  }`}
              >
                <span className={`w-5 h-5 mr-3 transition-transform group-hover:scale-110
                  ${pathname === item.path ? 'text-purple-400' : ''}`}>
                  {item.icon}
                </span>
                <span className="font-medium">{item.name}</span>
                {pathname === item.path && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-purple-400" />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Theme Toggle */}
      <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="flex items-center w-full px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 transition-colors"
        >
          {theme === 'dark' ? (
            <>
              <FiSun className="w-5 h-5 mr-3 text-amber-400" />
              <span>Light Mode</span>
            </>
          ) : (
            <>
              <FiMoon className="w-5 h-5 mr-3" />
              <span>Dark Mode</span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
}

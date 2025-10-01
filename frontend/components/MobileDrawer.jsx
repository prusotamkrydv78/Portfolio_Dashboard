'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FiX, FiHome, FiCode, FiBriefcase, FiMail } from 'react-icons/fi';

export default function MobileDrawer({ isOpen, onClose }) {
  const pathname = usePathname();

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { name: 'Overview', path: '/', icon: <FiHome className="w-5 h-5" /> },
    { name: 'Projects', path: '/projects', icon: <FiCode className="w-5 h-5" /> },
    { name: 'Blog', path: '/blog', icon: <FiBriefcase className="w-5 h-5" /> },
    { name: 'Contact', path: '/contact', icon: <FiMail className="w-5 h-5" /> },
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-all duration-300
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Drawer with improved animation */}
      <div 
        className={`fixed inset-y-0 left-0 w-[280px] bg-[#1a1b1e]/95 backdrop-blur-lg border-r border-white/10 z-50 lg:hidden
          transform transition-all duration-500 ease-out
          ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white"
          >
            <FiX className="w-6 h-6" />
          </button>

          {/* Profile Section */}
          <div className="mt-8 mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
              <div>
                <h3 className="text-white font-medium">John Doe</h3>
                <p className="text-sm text-gray-400">Developer</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    onClick={onClose}
                    className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                      pathname === item.path
                        ? 'bg-purple-500/20 text-purple-400'
                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

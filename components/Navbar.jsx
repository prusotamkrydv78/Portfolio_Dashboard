"use client";
import React from "react";

import { useState } from "react";
import { usePathname } from "next/navigation";

import Sidebar from "@/components/Sidebar";
import MobileDrawer from "@/components/MobileDrawer";
import { FiMenu } from "react-icons/fi";
const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const isAuthRoute = pathname?.includes("/auth");

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };
  return (
    !isAuthRoute && (
      <>
        {!isMobileOpen && (
          <button
            onClick={toggleMobileMenu}
            className="fixed bottom-6 right-6 z-50 p-3 bg-white/10 rounded-full backdrop-blur-lg border border-white/10 lg:hidden hover:bg-white/20 transition-all duration-300 animate-slide-in-right"
          >
            <FiMenu className="w-6 h-6 text-white" />
          </button>
        )}
        <MobileDrawer
          isOpen={isMobileOpen}
          onClose={() => setIsMobileOpen(false)}
        />
        <div className="hidden lg:block">
          <Sidebar />
        </div>
      </>
    )
  );
};

export default Navbar;

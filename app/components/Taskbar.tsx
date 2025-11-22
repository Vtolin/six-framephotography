"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Taskbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About us" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* MAIN TASKBAR (Hidden when scrolled) */}
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-in-out backdrop-blur-md bg-white/90 border-b border-black/10
        ${isScrolled ? "opacity-0 -translate-y-full pointer-events-none" : "opacity-100 translate-y-0 pointer-events-auto"}
        `}
      >
        <div className="max-w-[1370px] mx-auto flex justify-between items-center px-4 py-4">
          <Link href="/" className="text-2xl font-bold">DFR</Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-6 text-gray-700 font-semibold">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md hover:bg-black/5 transition"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out
          ${isMenuOpen && !isScrolled ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="bg-white border-t border-gray-200 px-4 py-2 space-y-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={closeMenu}>
                <div className="py-3 px-3 rounded-md hover:bg-black hover:text-white text-gray-700 transition font-semibold">
                  {link.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* FLOATING BUTTON WHEN SCROLLED */}
      <div
        className={`fixed top-4 right-4 z-50 transition-all duration-500 ease-in-out
        ${isScrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
        `}
      >
        <button
          onClick={toggleMenu}
          className={`p-3 ${
            isMenuOpen ? "rounded-md" : "rounded-full"
          } bg-white/80 backdrop-blur-md shadow-lg border border-black/20 
          hover:scale-105 transition-all duration-300`}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" />
          )}
        </button>

        {/* Floating Dropdown */}
        <div
          className={`absolute top-full right-0 mt-3 origin-top-right transition-all duration-300
          ${isMenuOpen && isScrolled ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
          `}
        >
          <div className="bg-white backdrop-blur-lg border border-gray-200 rounded-xl shadow-xl min-w-[200px] p-2">
            {navLinks.map((link, i) => (
              <Link key={link.href} href={link.href} onClick={closeMenu}>
                <div
                  className="px-4 py-3 rounded-lg text-sm font-semibold text-gray-700 hover:bg-black hover:text-white transition"
                  style={{ animation: `fadeSlide 0.3s ease-out ${(i + 1) * 50}ms both` }}
                >
                  {link.label}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Backdrop */}
        {isMenuOpen && isScrolled && (
          <div
            className="fixed inset-0 bg-black/10 backdrop-blur-sm z-[-1]"
            onClick={closeMenu}
          />
        )}
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeSlide {
          from {
            opacity: 0;
            transform: translateY(-6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}

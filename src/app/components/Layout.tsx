import React, { useState, useEffect } from 'react';
import { Link, useLocation, Outlet } from 'react-router';
import { Menu, X, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ChevronDown, ChevronRight, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import clsx from 'clsx';
import logoImg from "@/assets/64d35df419fe6ccaee5f446044cb9e637f6e862c.png";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Pillars', path: '/pillars' },
    { name: 'News & Events', path: '/news' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const pillarsSubmenu = [
    {
      name: 'Education & Development',
      path: '/pillars/education',
      subItems: [
        { name: 'Bursary Programme', path: '/pillars/education/bursary' },
        { name: 'Skills Development Programme', path: '/pillars/education/skills' },
        { name: 'Revive & Thrive Programme', path: '/pillars/education/revive' },
      ]
    },
    { name: 'Food Security', path: '/pillars/food-security' },
    { name: 'Women & Youth', path: '/pillars/women-youth' },
    { name: 'Conservation & Environment', path: '/pillars/conservation' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#EBF3F5] text-[#1A1A1A]">
      {/* Header - Premium Glass */}
      <header className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_20px_rgba(0,0,0,0.06)]"
          : "bg-[#EBF3F5]/80 backdrop-blur-sm"
      )}>
        <div className="container mx-auto px-6 md:px-12">
          <div className={clsx(
            "flex items-center justify-between transition-all duration-500",
            scrolled ? "h-20" : "h-24",
            !scrolled && "border-b border-[#1A1A1A]/5"
          )}>
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <motion.img
                src={logoImg}
                alt="Alfeco Foundation"
                className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                whileHover={{ rotate: [0, -3, 3, 0] }}
                transition={{ duration: 0.5 }}
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-9">
              {navLinks.filter(link => link.name !== 'Home').map((link) => {
                if (link.name === 'Our Pillars') {
                  return (
                    <div key={link.name} className="contents">
                      {/* Pillars Dropdown */}
                      <div className="relative group">
                        <Link
                          to={link.path}
                          className={clsx(
                            "text-[13px] font-bold tracking-wide uppercase transition-all hover:text-[#C1272D] flex items-center gap-1 py-2",
                            location.pathname.startsWith('/pillars') ? "text-[#C1272D]" : "text-[#1A1A1A]"
                          )}
                        >
                          {link.name}
                          <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
                        </Link>

                        {/* Dropdown Menu */}
                        <div className="absolute top-full left-0 pt-4 hidden group-hover:block w-72 z-50">
                          <div className="bg-white/95 backdrop-blur-xl border border-[#1A1A1A]/5 rounded-3xl shadow-premium overflow-visible p-2 flex flex-col gap-0.5">
                            {pillarsSubmenu.map((subItem) => {
                              if ('subItems' in subItem) {
                                return (
                                  <div key={subItem.name} className="relative group/sub">
                                    <div className="flex items-center justify-between px-4 py-3 text-sm font-bold text-[#1A1A1A] hover:bg-[#EBF3F5] hover:text-[#C1272D] rounded-2xl transition-all cursor-pointer">
                                      {subItem.name}
                                      <ChevronRight className="w-4 h-4" />
                                    </div>

                                    {/* Sub-dropdown */}
                                    <div className="absolute left-full top-0 pl-2 hidden group-hover/sub:block w-72 z-50">
                                      <div className="bg-[#C1272D] rounded-3xl shadow-2xl overflow-hidden p-2 flex flex-col gap-0.5">
                                        {subItem.subItems?.map((nestedItem) => (
                                          <Link
                                            key={nestedItem.name}
                                            to={nestedItem.path}
                                            className="block px-4 py-3 text-sm font-bold text-white hover:bg-white/15 rounded-2xl transition-all"
                                          >
                                            {nestedItem.name}
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                );
                              }

                              return (
                                <Link
                                  key={subItem.name}
                                  to={subItem.path}
                                  className="block px-4 py-3 text-sm font-bold text-[#1A1A1A] hover:bg-[#EBF3F5] hover:text-[#C1272D] rounded-2xl transition-all"
                                >
                                  {subItem.name}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      {/* Get Involved Link */}
                      <Link
                        to="/get-involved"
                        className={clsx(
                          "text-[13px] font-bold tracking-wide uppercase transition-all hover:text-[#C1272D] py-2",
                          location.pathname === '/get-involved' ? "text-[#C1272D]" : "text-[#1A1A1A]"
                        )}
                      >
                        Get Involved
                      </Link>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={clsx(
                      "text-[13px] font-bold tracking-wide uppercase transition-all hover:text-[#C1272D] py-2 relative",
                      location.pathname === link.path ? "text-[#C1272D]" : "text-[#1A1A1A]"
                    )}
                  >
                    {link.name}
                    {location.pathname === link.path && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-[#C1272D] rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
              <Link
                to="/contact"
                className="playful-btn px-6 py-2.5 bg-[#1A1A1A] text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#C1272D] hover:shadow-lg"
              >Get Involved</Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-[#1A1A1A]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Menu</span>
              {isMenuOpen ? <X /> : <span className="text-xs font-bold uppercase tracking-widest border-2 border-[#1A1A1A] px-4 py-1.5 rounded-full playful-btn inline-block">Menu</span>}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav - Outside header to avoid clipping */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={clsx(
              "md:hidden bg-white fixed inset-0 z-[60] overflow-y-auto",
              scrolled ? "top-20" : "top-24"
            )}
          >
            <nav className="flex flex-col p-8 pb-24 gap-5 items-center text-center">
              {navLinks.filter(link => link.name !== 'Our Pillars').map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, type: "spring", stiffness: 300, damping: 25 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-2xl font-bold text-[#1A1A1A] hover:text-[#C1272D] transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, type: "spring", stiffness: 300, damping: 25 }}
              >
                <Link
                  to="/get-involved"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-bold text-[#1A1A1A] hover:text-[#C1272D] transition-colors"
                >
                  Get Involved
                </Link>
              </motion.div>

              {/* Mobile Pillars Sub-links */}
              <div className="w-full border-t border-[#1A1A1A]/10 pt-6 mt-2">
                <p className="text-xs font-bold uppercase tracking-widest text-[#7E8083] mb-4">Our Pillars</p>
                {pillarsSubmenu.map((subItem) => (
                  <React.Fragment key={subItem.name}>
                    <Link
                      to={subItem.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-lg font-bold text-[#1A1A1A] hover:text-[#C1272D] py-2 transition-colors"
                    >
                      {subItem.name}
                    </Link>
                    {'subItems' in subItem && subItem.subItems?.map((nested) => (
                      <Link
                        key={nested.name}
                        to={nested.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm font-bold text-[#7E8083] hover:text-[#C1272D] py-1.5 pl-4 transition-colors"
                      >
                        {nested.name}
                      </Link>
                    ))}
                  </React.Fragment>
                ))}
              </div>

              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="mt-8 px-10 py-4 bg-[#C1272D] text-white text-sm font-bold uppercase tracking-widest rounded-full playful-btn">
                Donate
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow pt-24">
        <ScrollToTop />
        <Outlet />
      </main>

      {/* Get in Touch + Footer */}
      <footer className="relative bg-[#1A1A1A] text-white overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#48B2A9]/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E8AB36]/10 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl pointer-events-none" />

        {/* Get in Touch Section */}
        <div className="relative z-10 px-6 md:px-12 pt-24 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left – Text */}
              <div>
                <div className="inline-flex items-center gap-2 bg-[#48B2A9]/15 rounded-full px-4 py-1.5 mb-6">
                  <Mail className="w-3.5 h-3.5 text-[#48B2A9]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#48B2A9]">Get in Touch</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight">Lets make a lasting difference together<br /></h2>
                <p className="text-white/50 text-lg max-w-lg mb-8">
                  Whether you want to partner, volunteer, or simply learn more about our work — we'd love to hear from you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="playful-btn inline-flex items-center justify-center gap-2 bg-[#C1272D] text-white font-bold py-4 px-10 rounded-full uppercase tracking-widest text-sm hover:shadow-lg"
                  >
                    <Mail className="w-4 h-4" /> Contact Us
                  </Link>
                  <Link
                    to="/get-involved"
                    className="playful-btn inline-flex items-center justify-center gap-2 bg-white/10 text-white font-bold py-4 px-10 rounded-full uppercase tracking-widest text-sm hover:bg-white/20 border border-white/10"
                  >
                    <Heart className="w-4 h-4" /> Get Involved
                  </Link>
                </div>
              </div>

              {/* Right – Contact Details */}
              <div className="bg-white/5 backdrop-blur-sm rounded-[40px] p-8 md:p-10 border border-white/10">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#E8AB36]/15 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-[#E8AB36]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Visit Us</h4>
                      <p className="text-white/50 text-sm">29 Autumn Street, Edenburg, Sandton, 2128</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#48B2A9]/15 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-[#48B2A9]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Call Us</h4>
                      <p className="text-white/50 text-sm">011-908 9440</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#C1272D]/15 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-[#C1272D]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Email Us</h4>
                      <p className="text-white/50 text-sm">info@alfecofoundation.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="border-t border-white/10" />
        </div>

        {/* Footer Links */}
        <div className="relative z-10 px-6 md:px-12 pt-16 pb-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
              {/* Logo & tagline */}
              <div className="md:col-span-4">
                <img src={logoImg} alt="Alfeco Foundation" className="h-12 w-auto mb-6 brightness-0 invert opacity-90" />
                <p className="text-white/50 font-medium mb-8 max-w-xs">
                  Empowering communities through compassion, collaboration, and practical solutions.
                </p>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, label: 'Facebook' },
                    { icon: Twitter, label: 'Twitter' },
                    { icon: Instagram, label: 'Instagram' },
                    { icon: Linkedin, label: 'LinkedIn' },
                  ].map(({ icon: Icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#48B2A9] flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label={label}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick links */}
              <div className="md:col-span-3">
                <h4 className="font-bold text-white/80 uppercase tracking-widest text-xs mb-6">Navigation</h4>
                <div className="flex flex-col gap-3">
                  {([
                    { name: 'About Us', path: '/about' },
                    { name: 'Our Pillars', path: '/pillars' },
                    { name: 'News & Events', path: '/news' },
                    { name: 'Get Involved', path: '/get-involved' },
                    { name: 'Contact Us', path: '/contact' },
                  ] as { name: string; path: string }[]).map(({ name, path }) => (
                    <Link key={name} to={path} className="text-white/50 hover:text-[#E8AB36] transition-colors font-medium text-sm">
                      {name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Pillars */}
              <div className="md:col-span-3">
                <h4 className="font-bold text-white/80 uppercase tracking-widest text-xs mb-6">Our Pillars</h4>
                <div className="flex flex-col gap-3">
                  {['Education & Development', 'Food Security', 'Women & Youth', 'Conservation'].map(name => (
                    <span key={name} className="text-white/50 font-medium text-sm">{name}</span>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="md:col-span-2">
                <h4 className="font-bold text-white/80 uppercase tracking-widest text-xs mb-6">Contact</h4>
                <div className="flex flex-col gap-3 text-sm text-white/50 font-medium">
                  <p>29 Autumn Street<br />Edenburg, Sandton<br />2128</p>
                  <p>011-9089440</p>
                  <p>info@alfecofoundation.com</p>
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] uppercase tracking-widest text-white/30 border-t border-white/10 pt-8">
              <p className="flex items-center gap-1">
                Made with <Heart className="w-3 h-3 text-[#C1272D] fill-[#C1272D]" /> &copy; {new Date().getFullYear()} Alfeco Foundation
              </p>
              <div className="flex gap-6">
                <Link to="/privacy" className="hover:text-white/70 transition-colors">Privacy</Link>
                <Link to="/terms" className="hover:text-white/70 transition-colors">Terms</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
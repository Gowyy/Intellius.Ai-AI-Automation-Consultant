import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { NAV_ITEMS, HIRE_MENU } from '../../constants';
import { Button } from '../UI/Button';
import { AnimatePresence, motion } from 'framer-motion';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => setActiveDropdown(label);
  const handleMouseLeave = () => setActiveDropdown(null);

  // Helper to render Mega Menu content based on label
  const renderMegaMenu = (item: typeof NAV_ITEMS[0]) => {
    if (item.label === 'Hire developer') {
      return (
        <div className="grid grid-cols-4 gap-6 w-[800px]">
          {Object.entries(HIRE_MENU).map(([category, roles]) => (
            <div key={category}>
               <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">{category}</h4>
               <ul className="space-y-2">
                 {roles.map(role => (
                   <li key={role}>
                     <Link to={`/hire/${role.toLowerCase().replace(/ /g, '-')}`} className="text-sm text-zinc-600 hover:text-brand-600 block py-1">
                       {role}
                     </Link>
                   </li>
                 ))}
               </ul>
            </div>
          ))}
        </div>
      );
    }

    // Default multi-column layout for other long lists (Services, Solutions, Industries)
    if (item.subItems && item.subItems.length > 0) {
      // Determine columns based on item count to keep it balanced
      const gridClass = item.subItems.length > 12 ? 'grid-cols-3 w-[800px]' : item.subItems.length > 6 ? 'grid-cols-2 w-[500px]' : 'grid-cols-1 w-[240px]';
      
      return (
        <div className={`grid ${gridClass} gap-x-8 gap-y-2`}>
          {item.subItems.map((sub) => (
            <Link key={sub.label} to={sub.href} className="group/item block py-1.5 text-sm text-zinc-600 hover:text-brand-600">
              {sub.label}
            </Link>
          ))}
        </div>
      );
    }

    return null;
  };

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled || mobileMenuOpen ? 'bg-white/95 backdrop-blur-md border-b border-zinc-200 shadow-sm py-2' : 'bg-white border-b border-zinc-100 py-4'
  }`;

  return (
    <header className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* 1. Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-2xl tracking-tight text-zinc-900 mr-8 shrink-0">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center shadow-md text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            Intellius.Ai
          </Link>

          {/* 2. Centered Navigation Tabs */}
          <nav className="hidden xl:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => (
              <div 
                key={item.label} 
                className="relative group h-12 flex items-center px-4"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link 
                  to={item.href} 
                  className={`flex items-center gap-1.5 text-[15px] font-medium transition-colors ${activeDropdown === item.label ? 'text-brand-600' : 'text-zinc-600 hover:text-zinc-900'}`}
                >
                  {item.label}
                  {(item.subItems || item.label === 'Hire developer') && (
                    <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  )}
                </Link>

                {/* Dropdown Container */}
                <AnimatePresence>
                  {activeDropdown === item.label && (item.subItems || item.label === 'Hire developer') && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                    >
                      <div className="bg-white border border-zinc-200 rounded-xl shadow-2xl p-6 relative">
                        {/* Little triangle arrow at top */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[6px] w-3 h-3 bg-white border-t border-l border-zinc-200 rotate-45"></div>
                        
                        {renderMegaMenu(item)}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* 3. Right Side: Online Estimate Button */}
          <div className="hidden xl:flex items-center ml-8 shrink-0">
             <Button 
               onClick={() => navigate('/estimate')}
               className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold rounded-full px-6 py-2.5 shadow-lg shadow-blue-500/20 border-0 flex items-center gap-2 group"
             >
                Online Estimate
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
             </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="xl:hidden text-zinc-900 p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: '100vh', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="xl:hidden bg-white border-t border-zinc-100 absolute top-full left-0 right-0 overflow-y-auto"
            style={{ maxHeight: 'calc(100vh - 80px)' }}
          >
            <div className="px-6 py-6 space-y-6 pb-24">
              {NAV_ITEMS.map(item => (
                <div key={item.label} className="border-b border-zinc-100 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Link to={item.href} className="text-lg font-bold text-zinc-900" onClick={() => setMobileMenuOpen(false)}>
                      {item.label}
                    </Link>
                  </div>
                  {/* Render a few sub-items preview for mobile */}
                  {item.subItems && item.subItems.length > 0 && (
                    <div className="pl-4 border-l-2 border-zinc-100 space-y-2 mt-2">
                       {item.subItems.slice(0, 5).map(sub => (
                         <Link key={sub.label} to={sub.href} className="block text-sm text-zinc-500" onClick={() => setMobileMenuOpen(false)}>
                           {sub.label}
                         </Link>
                       ))}
                       {item.subItems.length > 5 && (
                         <span className="text-xs text-brand-600 font-medium">+ {item.subItems.length - 5} more</span>
                       )}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-2">
                 <Button fullWidth onClick={() => { navigate('/estimate'); setMobileMenuOpen(false); }} className="bg-gradient-to-r from-blue-500 to-cyan-400 border-0 rounded-full py-3">
                   Online Estimate
                 </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
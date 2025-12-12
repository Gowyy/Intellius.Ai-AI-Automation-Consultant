import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_ITEMS } from '../../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          
          <div className="lg:col-span-2">
            <Link to="/" className="text-2xl font-bold text-white mb-4 block">Intellius.Ai</Link>
            <p className="text-zinc-400 mb-6 max-w-sm">
              Premium software engineering and AI solutions for forward-thinking enterprises. We build the future of digital infrastructure.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              {[1, 2, 3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-brand-500 transition-all cursor-pointer">
                  <span className="text-xs">Soc</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {NAV_ITEMS[0].subItems?.map(sub => (
                <li key={sub.label}>
                  <Link to={sub.href} className="text-sm text-zinc-400 hover:text-brand-400 transition-colors">
                    {sub.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/company" className="text-sm text-zinc-400 hover:text-brand-400">About Us</Link></li>
              <li><Link to="/blog" className="text-sm text-zinc-400 hover:text-brand-400">Blog</Link></li>
              <li><Link to="/careers" className="text-sm text-zinc-400 hover:text-brand-400">Careers</Link></li>
              <li><Link to="/contacts" className="text-sm text-zinc-400 hover:text-brand-400">Contact</Link></li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-semibold mb-4">Contact</h4>
             <p className="text-sm text-zinc-400 mb-2">hello@intellius.ai</p>
             <p className="text-sm text-zinc-400 mb-2">+1 (555) 123-4567</p>
             <p className="text-sm text-zinc-400">100 Innovation Dr,<br/>San Francisco, CA</p>
          </div>

        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-500">© 2024 Intellius.Ai Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-zinc-500 hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-zinc-500 hover:text-white">Terms of Service</Link>
            <Link to="/cookies" className="text-sm text-zinc-500 hover:text-white">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
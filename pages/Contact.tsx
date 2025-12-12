import React from 'react';
import { Button } from '../components/UI/Button';
import { Mail, MapPin, Phone, Upload } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-4 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h1 className="text-5xl font-bold text-zinc-900 mb-6">Let's build something <span className="text-brand-600">extraordinary</span>.</h1>
            <p className="text-xl text-zinc-600 mb-12">
              Ready to modernize your infrastructure or build a new product? Our team is ready to analyze your needs and provide a strategic roadmap.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-zinc-100 flex items-center justify-center text-brand-600 border border-zinc-200">
                  <Mail />
                </div>
                <div>
                  <h3 className="text-zinc-900 font-semibold mb-1">Email Us</h3>
                  <p className="text-zinc-500">hello@intellius.ai</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                 <div className="w-12 h-12 rounded-lg bg-zinc-100 flex items-center justify-center text-brand-600 border border-zinc-200">
                  <Phone />
                </div>
                <div>
                  <h3 className="text-zinc-900 font-semibold mb-1">Call Us</h3>
                  <p className="text-zinc-500">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                 <div className="w-12 h-12 rounded-lg bg-zinc-100 flex items-center justify-center text-brand-600 border border-zinc-200">
                  <MapPin />
                </div>
                <div>
                  <h3 className="text-zinc-900 font-semibold mb-1">Visit Us</h3>
                  <p className="text-zinc-500">100 Innovation Dr, Suite 500<br/>San Francisco, CA 94105</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-zinc-200 rounded-2xl p-8 shadow-xl shadow-zinc-200/50">
            <h2 className="text-2xl font-bold text-zinc-900 mb-6">Send a message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-500 mb-1 uppercase">Full Name</label>
                  <input type="text" className="w-full bg-zinc-50 border border-zinc-200 rounded-lg p-3 text-zinc-900 focus:border-brand-500 focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-500 mb-1 uppercase">Industry</label>
                  <select className="w-full bg-zinc-50 border border-zinc-200 rounded-lg p-3 text-zinc-900 focus:border-brand-500 focus:outline-none transition-colors">
                    <option>Fintech</option>
                    <option>Healthcare</option>
                    <option>Retail</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-500 mb-1 uppercase">Email</label>
                  <input type="email" className="w-full bg-zinc-50 border border-zinc-200 rounded-lg p-3 text-zinc-900 focus:border-brand-500 focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-500 mb-1 uppercase">Phone</label>
                  <input type="tel" className="w-full bg-zinc-50 border border-zinc-200 rounded-lg p-3 text-zinc-900 focus:border-brand-500 focus:outline-none transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-500 mb-1 uppercase">Project Details</label>
                <textarea rows={4} className="w-full bg-zinc-50 border border-zinc-200 rounded-lg p-3 text-zinc-900 focus:border-brand-500 focus:outline-none transition-colors" placeholder="Tell us about your goals..."></textarea>
              </div>

              <div>
                <label className="flex items-center gap-3 w-full p-4 border border-dashed border-zinc-300 rounded-lg cursor-pointer hover:bg-zinc-50 transition-colors bg-zinc-50">
                  <Upload className="text-zinc-400" size={20} />
                  <span className="text-sm text-zinc-500">Attach files (Max 10MB)</span>
                  <input type="file" className="hidden" />
                </label>
              </div>

              <div className="pt-4">
                <Button fullWidth size="lg">Send Message</Button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/UI/Button';
import { ArrowRight, Bot, Zap, Shield, ChevronRight, Star, ChevronLeft, ArrowDown, ArrowUp, Eye, FileCheck, RefreshCw, PieChart, TrendingUp, BarChart3 } from 'lucide-react';
import { AGENTS, TESTIMONIALS, AWARDS } from '../constants';

const FEATURES_LIST = [
  "Calendar & Bookings", "Inventory Tracking", "Staff Scheduling", "Website Builder",
  "Expense Management", "Online Booking", "Offers & Packages", "MultiLingual Support",
  "Referral Program", "Customer Management", "Payroll Processing", "Multi-Branch Management",
  "Mobile App Access", "Payment & No Show Protection", "Whatsapp Automation", "Gift Cards", "Reports",
  "AI Assistant", "Cash Register", "Customer Forms", "Memberships", "Client Portal", "Expenses",
  "Sales", "Time Clock"
];

const SUGGESTIONS = [
  "Workflow",
  "Analytics",
  "Customer support",
  "Inventory"
];

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [promptText, setPromptText] = useState('');

  const toSlug = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      // We assume uniformity; get the width of the first child
      const card = current.children[0] as HTMLElement;
      if (!card) return;

      // Scroll amount = card width + gap (24px for gap-6)
      const scrollAmount = card.offsetWidth + 24;
      
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        {/* Abstract Background - Subtle for Light Mode */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
           <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-50/80 rounded-full blur-[128px]" />
           <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-50/80 rounded-full blur-[128px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-sm font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                </span>
                AI-First Engineering
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-zinc-900 tracking-tight leading-[1.1] mb-6">
                Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600">Intelligent</span> Enterprise.
              </h1>
              <p className="text-xl text-zinc-600 mb-8 max-w-lg leading-relaxed">
                We design and deploy scalable software systems infused with generative AI, helping market leaders automate complexity and accelerate growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => window.open('https://calendly.com')}>Schedule Consultation</Button>
                <Button size="lg" variant="outline" onClick={() => navigate('/estimate')}>Estimate Project</Button>
              </div>
              
              <div className="mt-12 flex items-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Trust Badges Mockup */}
                <div className="flex -space-x-4">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-zinc-200" />
                   ))}
                </div>
                <div className="text-sm text-zinc-500">
                  Trusted by <span className="text-zinc-900 font-semibold">50+ innovative companies</span>
                </div>
              </div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
               <div className="relative rounded-2xl bg-white border border-zinc-200 p-2 shadow-2xl">
                 <div className="absolute inset-0 bg-gradient-to-br from-brand-50/50 to-transparent rounded-2xl pointer-events-none" />
                 <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" 
                    alt="Dashboard Interface" 
                    className="rounded-xl w-full h-auto"
                 />
                 {/* Floating UI Card Overlay */}
                 <div className="absolute -bottom-6 -left-6 bg-white border border-zinc-200 p-4 rounded-xl shadow-xl flex items-center gap-4 w-64">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                      <Zap size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-zinc-500">Optimization</div>
                      <div className="text-zinc-900 font-bold">+245% Efficiency</div>
                    </div>
                 </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI AGENTS SECTION - CAROUSEL SCROLL */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          
          <div className="flex flex-col items-center text-center">
             <div className="px-4 py-1.5 rounded-full border border-zinc-200 bg-white shadow-sm text-zinc-600 text-sm font-medium mb-6">
               AI Agents & Pre-built Solutions
             </div>
             <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 max-w-3xl leading-tight">
               Ready-to-Deploy AI Agents tailored to your business needs
             </h2>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative group">
           {/* Navigation Arrows */}
           <button 
             onClick={() => scroll('left')} 
             className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-20 bg-white text-zinc-800 p-3 rounded-full shadow-xl border border-zinc-100 transition-all hover:scale-110 hover:shadow-2xl disabled:opacity-0 hidden md:flex items-center justify-center"
             aria-label="Scroll left"
           >
             <ChevronLeft size={24} />
           </button>
           <button 
             onClick={() => scroll('right')} 
             className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-20 bg-white text-zinc-800 p-3 rounded-full shadow-xl border border-zinc-100 transition-all hover:scale-110 hover:shadow-2xl disabled:opacity-0 hidden md:flex items-center justify-center"
             aria-label="Scroll right"
           >
             <ChevronRight size={24} />
           </button>

           {/* Carousel Container */}
           <div 
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0"
           >
              {AGENTS.map((agent, idx) => (
                <div 
                  key={idx} 
                  className="flex-none w-[85vw] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start cursor-pointer group/card h-auto"
                  onClick={() => navigate(`/services/${toSlug(agent.title)}`)}
                >
                  <div className="bg-white rounded-3xl p-6 hover:shadow-xl transition-all duration-300 border border-zinc-200 flex flex-col h-full shadow-sm relative overflow-hidden">
                    
                    {/* Card Image Area (Abstract Infographic Style) */}
                    <div className="relative h-56 mb-6 overflow-hidden rounded-2xl bg-zinc-50 border border-zinc-100">
                       <img 
                          src={agent.image} 
                          alt={agent.title} 
                          className="h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-105" 
                       />
                       {/* Subtle overlay to unify styles */}
                       <div className="absolute inset-0 bg-brand-900/5 group-hover/card:bg-transparent transition-colors duration-300" />
                    </div>

                    {/* Card Content */}
                    <div className="flex flex-col flex-grow">
                      <h3 className="text-2xl font-bold text-zinc-900 mb-3 group-hover/card:text-brand-600 transition-colors">{agent.title}</h3>
                      <p className="text-zinc-500 mb-6 text-sm leading-relaxed line-clamp-3">
                        {agent.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                        {agent.tags.slice(0, 2).map((tag, i) => (
                          <span key={i} className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-600 shadow-sm whitespace-nowrap">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-2 pt-4 border-t border-zinc-100">
                        <span className="flex items-center gap-2 text-zinc-900 font-semibold text-sm group-hover/card:gap-3 transition-all">
                          Read more <ArrowRight size={16} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* FLOATING FEATURES CLOUD SECTION */}
      <section className="pb-24 pt-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-3xl md:text-4xl font-bold text-zinc-900 mb-12"
          >
            Intellius Got You Covered!
          </motion.h2>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
            {FEATURES_LIST.map((feature, i) => (
              <motion.div
                key={i}
                // Sequential Highlighting Animation
                animate={{ 
                  scale: [1, 1.15, 1],
                  backgroundColor: ["#ffffff", "#f0f9ff", "#ffffff"],
                  borderColor: ["#e4e4e7", "#0ea5e9", "#e4e4e7"],
                  color: ["#52525b", "#0284c7", "#52525b"],
                  boxShadow: [
                    "0 1px 2px 0 rgba(0, 0, 0, 0.05)", 
                    "0 10px 30px -5px rgba(14, 165, 233, 0.2)", 
                    "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
                  ]
                }}
                transition={{
                  duration: 0.6, // Pulse duration
                  repeat: Infinity,
                  delay: i * 0.8, // Stagger delays for sequence (0.8s)
                  repeatDelay: (FEATURES_LIST.length * 0.8) - 0.6 // Wait for loop to finish
                }}
                whileHover={{ 
                  scale: 1.2, 
                  backgroundColor: "#f0f9ff", 
                  borderColor: "#0ea5e9", 
                  color: "#0284c7", 
                  boxShadow: "0 10px 30px -5px rgba(14, 165, 233, 0.3)",
                  zIndex: 20,
                  transition: { duration: 0.1 }
                }}
                className="px-6 py-3 rounded-full border border-zinc-200 bg-white text-zinc-600 font-medium text-sm sm:text-base cursor-default shadow-sm relative"
              >
                {feature}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ANALYTICS & DASHBOARD SECTION (NEW) */}
      <section className="py-24 bg-zinc-50 overflow-hidden relative border-t border-zinc-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header with Pie Icon */}
            <div className="flex flex-col items-center justify-center mb-16 relative">
               {/* Decorative curved arrow */}
               <div className="absolute top-0 right-1/2 translate-x-[200px] -translate-y-8 hidden lg:block opacity-30">
                  <svg width="120" height="60" viewBox="0 0 120 60" fill="none">
                     <path d="M10 50 Q 60 10 110 40" stroke="currentColor" strokeWidth="3" strokeDasharray="6 4" className="text-orange-400" />
                     <path d="M105 35 L 110 40 L 102 43" stroke="currentColor" strokeWidth="3" className="text-orange-400" />
                  </svg>
               </div>

               <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-orange-100 rounded-lg text-orange-500 transform -rotate-6 shadow-sm">
                     <PieChart size={28} />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight">
                    Turn reporting data into <span className="text-zinc-900 relative">
                      money
                      <span className="absolute bottom-1 left-0 w-full h-3 bg-orange-200/50 -z-10 rounded-sm"></span>
                    </span>
                  </h2>
               </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
               {/* Left Content */}
               <div className="order-2 lg:order-1">
                  <h3 className="text-2xl font-bold text-zinc-900 mb-6 leading-tight">
                    Smart decisions are based on accurate and real-time data.
                  </h3>
                  <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                    Dig deeper into your sales metrics with revenue forecasts, team performance analysis, and custom dashboards. Transform raw numbers into actionable insights that drive profitability.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                       <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0 mt-1">
                          <BarChart3 size={20} />
                       </div>
                       <div>
                          <h4 className="font-bold text-zinc-900">Revenue Forecasts</h4>
                          <p className="text-sm text-zinc-500 mt-1">Predict future earnings with AI-driven trend analysis.</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-4">
                       <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 flex-shrink-0 mt-1">
                          <TrendingUp size={20} />
                       </div>
                       <div>
                          <h4 className="font-bold text-zinc-900">Performance Analysis</h4>
                          <p className="text-sm text-zinc-500 mt-1">Track team efficiency and identify growth opportunities instantly.</p>
                       </div>
                    </div>
                  </div>
               </div>

               {/* Right Content: Chart Simulation */}
               <div className="order-1 lg:order-2">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white rounded-2xl shadow-2xl shadow-zinc-200 border border-zinc-100 p-6 md:p-8 relative"
                  >
                     {/* Dashboard Header UI */}
                     <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-50">
                        <div className="flex gap-2">
                           <span className="px-3 py-1.5 bg-brand-900 text-white rounded-md text-xs font-semibold shadow-sm">Measures ▼</span>
                           <span className="px-3 py-1.5 bg-zinc-100 text-zinc-600 rounded-md text-xs font-medium">Insert in Spreadsheet</span>
                        </div>
                        <div className="flex gap-1">
                           <div className="w-8 h-8 bg-zinc-50 rounded flex items-center justify-center text-zinc-400 border border-zinc-100"><BarChart3 size={14} /></div>
                           <div className="w-8 h-8 bg-zinc-50 rounded flex items-center justify-center text-zinc-400 border border-zinc-100"><TrendingUp size={14} /></div>
                        </div>
                     </div>

                     {/* The Chart */}
                     <div className="h-64 w-full relative pl-8 pb-6">
                        {/* Grid Lines */}
                        <div className="absolute inset-0 flex flex-col justify-between pl-8 pb-6 pointer-events-none">
                           {[14, 12, 10, 8, 6, 4, 2, 0].map((val) => (
                              <div key={val} className="w-full border-t border-zinc-100 relative">
                                 <span className="absolute -left-8 -top-2 text-[10px] text-zinc-400 w-6 text-right">{val}</span>
                              </div>
                           ))}
                        </div>

                        {/* Bars Container */}
                        <div className="absolute inset-0 pl-8 pb-6 flex items-end justify-between px-4 gap-4">
                           {/* Bar 1 */}
                           <div className="w-full h-full flex items-end relative group">
                              <div className="w-full flex flex-col gap-0.5 relative z-10 transition-transform group-hover:-translate-y-1 duration-300">
                                 <div className="h-32 bg-orange-500 rounded-t-sm w-full relative">
                                    <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-zinc-500 rounded-full border-2 border-white z-20"></div>
                                 </div>
                                 <div className="h-20 bg-brand-600 w-full rounded-b-sm"></div>
                              </div>
                              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-zinc-500 font-medium">New</span>
                           </div>

                           {/* Bar 2 */}
                           <div className="w-full h-full flex items-end relative group">
                              <div className="w-full flex flex-col gap-0.5 relative z-10 transition-transform group-hover:-translate-y-1 duration-300">
                                 <div className="h-12 bg-orange-200 w-full rounded-t-sm relative"></div>
                                 <div className="h-6 bg-brand-200 w-full"></div>
                                 <div className="h-10 bg-orange-500 w-full"></div>
                                 <div className="h-24 bg-brand-600 w-full rounded-b-sm"></div>
                              </div>
                              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-zinc-500 font-medium">Qualified</span>
                           </div>

                           {/* Bar 3 */}
                           <div className="w-full h-full flex items-end relative group">
                              <div className="w-full flex flex-col gap-0.5 relative z-10 transition-transform group-hover:-translate-y-1 duration-300">
                                 <div className="h-16 bg-orange-500 w-full rounded-t-sm relative">
                                     <div className="absolute -top-1.5 right-0 w-3 h-3 bg-zinc-500 rounded-full border-2 border-white z-20"></div>
                                 </div>
                                 <div className="h-16 bg-brand-600 w-full rounded-b-sm"></div>
                              </div>
                              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-zinc-500 font-medium">Proposition</span>
                           </div>

                           {/* Bar 4 */}
                           <div className="w-full h-full flex items-end relative group">
                              <div className="w-full flex flex-col gap-0.5 relative z-10 transition-transform group-hover:-translate-y-1 duration-300">
                                 <div className="h-6 bg-orange-200 w-full rounded-t-sm relative"></div>
                                 <div className="h-12 bg-brand-200 w-full rounded-b-sm"></div>
                              </div>
                              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-zinc-500 font-medium">Won</span>
                           </div>

                           {/* Bar 5 */}
                           <div className="w-full h-full flex items-end relative group">
                              <div className="w-full flex flex-col gap-0.5 relative z-10 transition-transform group-hover:-translate-y-1 duration-300">
                                 <div className="h-20 bg-orange-500 w-full rounded-t-sm relative">
                                    <div className="absolute -top-1.5 right-1/2 w-3 h-3 bg-zinc-500 rounded-full border-2 border-white z-20"></div>
                                 </div>
                              </div>
                              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-zinc-500 font-medium">Pre-Q</span>
                           </div>
                        </div>

                        {/* Trend Line Overlay (SVG) */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none pl-8 pb-6" style={{ overflow: 'visible' }}>
                           <path 
                             d="M 30 70 L 140 120 L 220 180 L 300 180" 
                             fill="none" 
                             stroke="#71717a" 
                             strokeWidth="2" 
                             strokeDasharray="4 4" 
                             className="opacity-50"
                           />
                           {/* Connecting dots already in bars */}
                        </svg>

                        {/* Legend */}
                        <div className="absolute top-2 right-4 flex gap-3">
                           <div className="flex items-center gap-1">
                              <div className="w-2 h-2 bg-brand-600 rounded-sm"></div>
                              <span className="text-[10px] text-zinc-500">November 2023</span>
                           </div>
                           <div className="flex items-center gap-1">
                              <div className="w-2 h-2 bg-orange-500 rounded-sm"></div>
                              <span className="text-[10px] text-zinc-500">December 2023</span>
                           </div>
                        </div>
                     </div>
                  </motion.div>
               </div>
            </div>
         </div>
      </section>

      {/* AUTOMATION PLAYGROUND SECTION (Background updated to match image) */}
      <section className="py-24 bg-[#2E102F] relative overflow-hidden">
        {/* Grid Pattern Background to match image style */}
        <div className="absolute inset-0 opacity-[0.2] pointer-events-none" 
             style={{ 
               backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }}>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <motion.h2 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight"
          >
            Automate your business and save cost
          </motion.h2>

          {/* Badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8"
          >
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-md text-xs font-medium text-white">
              <Shield size={14} className="text-orange-400" /> Secure
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-md text-xs font-medium text-white">
              <Eye size={14} className="text-orange-400" /> Observable
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-md text-xs font-medium text-white">
              <FileCheck size={14} className="text-orange-400" /> Compliant
            </div>
          </motion.div>

          {/* Input Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl shadow-2xl p-2 mb-8 group focus-within:ring-2 focus-within:ring-orange-500/50 transition-all text-left"
          >
            <textarea
              className="w-full h-40 p-4 resize-none border-none bg-transparent focus:ring-0 text-lg md:text-xl placeholder:text-white/40 text-white font-medium rounded-xl"
              placeholder="Describe your requirement..."
              value={promptText}
              onChange={(e) => setPromptText(e.target.value)}
            />
            <div className="flex justify-end p-2">
              <Button onClick={() => navigate('/estimate')} className="shadow-lg bg-orange-500 hover:bg-orange-600 text-white border-none">
                Submit <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </motion.div>

          {/* Suggestion Chips */}
          <div className="flex flex-wrap justify-center gap-3">
            {SUGGESTIONS.map((suggestion, idx) => (
              <motion.button
                key={`${suggestion}-${idx}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
                onClick={() => setPromptText(suggestion)}
                className="px-5 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-sm text-white hover:bg-orange-500 hover:border-orange-500 transition-all shadow-sm font-medium"
              >
                {suggestion}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ESTIMATOR CTA */}
      <section className="py-24 relative bg-zinc-50 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold text-zinc-900 mb-6">Curious about the cost?</h2>
          <p className="text-xl text-zinc-600 mb-8">
            Answer 6 simple questions and get an instant, AI-generated estimate range for your project timeline and budget.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10 text-left">
             <div className="flex items-center gap-3 text-zinc-700">
               <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-zinc-900 text-xs border border-zinc-300 shadow-sm">1</div>
               Select Type
             </div>
             <div className="w-px h-8 bg-zinc-300 hidden md:block" />
             <div className="flex items-center gap-3 text-zinc-700">
               <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-zinc-900 text-xs border border-zinc-300 shadow-sm">2</div>
               Define Features
             </div>
             <div className="w-px h-8 bg-zinc-300 hidden md:block" />
             <div className="flex items-center gap-3 text-zinc-700">
               <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-zinc-900 text-xs border border-zinc-300 shadow-sm">3</div>
               Get Report
             </div>
          </div>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white shadow-xl border-0" onClick={() => navigate('/estimate')}>Get AI Estimate</Button>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-2">Client Stories</h2>
              <p className="text-zinc-500">Don't just take our word for it.</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm"><ArrowRight size={16} /></Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(s => <Star key={s} size={16} className="text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-zinc-600 mb-6 leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full grayscale object-cover" />
                  <div>
                    <div className="text-zinc-900 font-semibold text-sm">{t.name}</div>
                    <div className="text-zinc-500 text-xs">{t.role}, {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FINAL CONSULTATION BLOCK */}
      <section className="py-20 border-t border-zinc-200 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-4">
           <div className="bg-white border border-zinc-200 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-sm">
              <div className="flex-shrink-0">
                 <div className="w-24 h-24 rounded-full bg-zinc-100 border-2 border-brand-500 p-1 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" alt="Consultant" className="w-full h-full object-cover grayscale" />
                 </div>
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-2xl font-bold text-zinc-900 mb-2">Talk to an expert, not a salesperson.</h3>
                <p className="text-zinc-600 mb-6">Book a 30-minute discovery call with our Lead Architect to discuss your technical challenges and potential solutions.</p>
                <Button onClick={() => window.open('https://calendly.com')}>Book Discovery Call</Button>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};
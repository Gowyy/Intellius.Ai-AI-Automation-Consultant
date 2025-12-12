import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../components/UI/Button';
import { Check, ArrowRight, ArrowLeft, UploadCloud, Cpu, Layers, DollarSign, Calendar } from 'lucide-react';
import { EstimationState } from '../types';

export const Estimator: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState<EstimationState>({
    projectType: '',
    industry: '',
    features: [],
    timeline: '',
    budget: '',
    contact: { name: '', email: '', phone: '' }
  });

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 7));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const updateField = (field: keyof EstimationState, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleFeature = (feature: string) => {
    setFormData(prev => {
      const exists = prev.features.includes(feature);
      return {
        ...prev,
        features: exists ? prev.features.filter(f => f !== feature) : [...prev.features, feature]
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setCurrentStep(7);
    }, 2000);
  };

  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-900 mb-6">What are we building?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['Web Application', 'Mobile App', 'AI Integration', 'Custom Software', 'E-Commerce', 'Legacy Modernization'].map(opt => (
                <button
                  key={opt}
                  onClick={() => updateField('projectType', opt)}
                  className={`p-6 rounded-xl border text-left transition-all ${formData.projectType === opt ? 'bg-brand-50 border-brand-500 text-brand-900 shadow-sm' : 'bg-white border-zinc-200 text-zinc-600 hover:border-brand-300 hover:shadow-sm'}`}
                >
                  <span className="font-semibold">{opt}</span>
                </button>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-900 mb-6">Which industry?</h2>
            <select 
              className="w-full bg-white border border-zinc-200 rounded-lg p-4 text-zinc-900 focus:ring-2 focus:ring-brand-500 focus:border-transparent shadow-sm"
              value={formData.industry}
              onChange={(e) => updateField('industry', e.target.value)}
            >
              <option value="">Select an industry...</option>
              <option value="Fintech">Fintech & Banking</option>
              <option value="Healthcare">Healthcare & MedTech</option>
              <option value="Retail">Retail & E-commerce</option>
              <option value="Manufacturing">Manufacturing & Logistics</option>
              <option value="Education">Education & EdTech</option>
              <option value="Other">Other</option>
            </select>
          </div>
        );
      case 3:
        return (
           <div className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-900 mb-6">Key Features (Select all that apply)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {['User Authentication', 'Payment Processing', 'AI/ML Capabilities', 'Real-time Chat', 'Admin Dashboard', 'Third-party Integrations', 'Multi-language Support', 'Advanced Search'].map(feat => (
                <div 
                  key={feat}
                  onClick={() => toggleFeature(feat)}
                  className={`cursor-pointer p-4 rounded-lg border flex items-center gap-3 transition-all ${formData.features.includes(feat) ? 'bg-brand-50 border-brand-500 text-brand-900' : 'bg-white border-zinc-200 text-zinc-600 hover:border-zinc-300'}`}
                >
                  <div className={`w-5 h-5 rounded border flex items-center justify-center ${formData.features.includes(feat) ? 'bg-brand-500 border-brand-500' : 'border-zinc-300 bg-zinc-50'}`}>
                    {formData.features.includes(feat) && <Check size={14} className="text-white" />}
                  </div>
                  {feat}
                </div>
              ))}
            </div>
           </div>
        );
      case 4:
         return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-900 mb-6">Target Timeline</h2>
             <div className="grid grid-cols-1 gap-3">
              {['ASAP (< 1 month)', '1-3 Months', '3-6 Months', '6+ Months'].map(opt => (
                <button
                  key={opt}
                  onClick={() => updateField('timeline', opt)}
                  className={`p-4 rounded-xl border text-left flex items-center gap-4 transition-all ${formData.timeline === opt ? 'bg-brand-50 border-brand-500 text-brand-900' : 'bg-white border-zinc-200 text-zinc-600 hover:border-zinc-300'}`}
                >
                  <Calendar className="w-5 h-5 opacity-50" />
                  <span className="font-semibold">{opt}</span>
                </button>
              ))}
            </div>
          </div>
         );
      case 5:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-900 mb-6">Approximate Budget</h2>
             <div className="grid grid-cols-1 gap-3">
              {['<$20k', '$20k - $50k', '$50k - $100k', '$100k+'].map(opt => (
                <button
                  key={opt}
                  onClick={() => updateField('budget', opt)}
                  className={`p-4 rounded-xl border text-left flex items-center gap-4 transition-all ${formData.budget === opt ? 'bg-brand-50 border-brand-500 text-brand-900' : 'bg-white border-zinc-200 text-zinc-600 hover:border-zinc-300'}`}
                >
                  <DollarSign className="w-5 h-5 opacity-50" />
                  <span className="font-semibold">{opt}</span>
                </button>
              ))}
            </div>
          </div>
         );
      case 6:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-900 mb-6">Where should we send the estimate?</h2>
            <div className="space-y-3">
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full bg-white border border-zinc-200 rounded-lg p-3 text-zinc-900 focus:ring-brand-500 focus:outline-none focus:border-brand-500"
                value={formData.contact.name}
                onChange={e => setFormData(prev => ({...prev, contact: {...prev.contact, name: e.target.value}}))}
              />
              <input 
                type="email" 
                placeholder="Business Email" 
                className="w-full bg-white border border-zinc-200 rounded-lg p-3 text-zinc-900 focus:ring-brand-500 focus:outline-none focus:border-brand-500"
                value={formData.contact.email}
                onChange={e => setFormData(prev => ({...prev, contact: {...prev.contact, email: e.target.value}}))}
              />
              <div className="border border-dashed border-zinc-300 rounded-lg p-6 flex flex-col items-center justify-center text-zinc-500 hover:bg-zinc-50 hover:border-brand-500 transition-colors cursor-pointer relative bg-zinc-50">
                <UploadCloud className="w-8 h-8 mb-2" />
                <span className="text-sm">Attach RFP/Specs (Optional)</span>
                <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
              </div>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">Estimation Ready!</h2>
            <p className="text-zinc-500 mb-8 max-w-md mx-auto">
              Based on your inputs, we've generated a preliminary scope. Check your email inbox for the full PDF breakdown.
            </p>
            <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-6 text-left max-w-md mx-auto mb-8">
              <div className="flex justify-between border-b border-zinc-200 pb-3 mb-3">
                <span className="text-zinc-500">Est. Duration</span>
                <span className="text-zinc-900 font-medium">8-12 Weeks</span>
              </div>
              <div className="flex justify-between border-b border-zinc-200 pb-3 mb-3">
                <span className="text-zinc-500">Team Size</span>
                <span className="text-zinc-900 font-medium">3-5 Experts</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Tech Stack</span>
                <span className="text-zinc-900 font-medium">Next.js + Node</span>
              </div>
            </div>
            <Button variant="primary" onClick={() => window.location.href = '/'}>Back to Home</Button>
          </div>
        );
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Progress Bar */}
        {currentStep < 7 && (
          <div className="mb-12">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-zinc-500">Step {currentStep} of 6</span>
              <span className="text-sm text-brand-600 font-medium">{Math.round((currentStep / 6) * 100)}%</span>
            </div>
            <div className="h-1 bg-zinc-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-brand-600 transition-all duration-500"
                style={{ width: `${(currentStep / 6) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Content Card */}
        <div className="bg-white border border-zinc-200 rounded-2xl p-8 shadow-2xl shadow-zinc-200/50 relative overflow-hidden">
           <AnimatePresence mode="wait">
             <motion.div
               key={currentStep}
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -20 }}
               transition={{ duration: 0.2 }}
             >
               {renderStep()}
             </motion.div>
           </AnimatePresence>

           {/* Navigation Buttons */}
           {currentStep < 7 && (
             <div className="flex justify-between mt-8 pt-8 border-t border-zinc-100">
               <Button 
                 variant="ghost" 
                 onClick={prevStep} 
                 disabled={currentStep === 1}
                 className={currentStep === 1 ? 'invisible' : ''}
               >
                 <ArrowLeft size={16} className="mr-2" /> Back
               </Button>
               
               {currentStep === 6 ? (
                 <Button variant="primary" onClick={handleSubmit} disabled={isSubmitting}>
                    {isSubmitting ? 'Calculating...' : 'Get AI Estimate'}
                 </Button>
               ) : (
                 <Button variant="secondary" onClick={nextStep}>
                   Next <ArrowRight size={16} className="ml-2" />
                 </Button>
               )}
             </div>
           )}
        </div>
      </div>
    </div>
  );
};
import React from 'react';

const Form: React.FC = () => {
  return (
    <section id="form" className="py-24 bg-stone-950 scroll-mt-24 border-t border-stone-900 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-hell-950/20 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-200 mb-4 tracking-tight">WELCOME TO HELL</h2>
          <div className="w-24 h-1 bg-hell-800 mx-auto mb-6"></div>
          <p className="text-stone-500">Submit your soul... or just your attendance.</p>
        </div>

        <div className="bg-stone-900 rounded-sm shadow-2xl border border-stone-800 overflow-hidden">
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSeHfa-C2Vr4d6QYLPLId2wlAifKalgcMd-0sy1GHilrQSin6A/viewform?embedded=true" 
            width="100%" 
            height="800" 
            className="w-full border-0 bg-stone-200 filter contrast-[0.9] hover:contrast-100 transition-all duration-500"
            title="Form"
          >
            Loading…
          </iframe>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-stone-600 text-sm">Form stuck in purgatory? <a href="https://forms.gle/r1RJohBXxje9f2437" target="_blank" rel="noopener noreferrer" className="text-hell-600 underline hover:text-hell-500 transition-colors">Open in new window</a>.</p>
        </div>
      </div>
    </section>
  );
};

export default Form;
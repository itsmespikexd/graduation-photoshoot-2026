import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    // navbar becomes transparent when user scroll down a bit
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-stone-950/90 backdrop-blur-md shadow-lg shadow-black/50 border-b border-stone-900 py-3' : 'bg-transparent py-5'}`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="shrink-0 flex items-center">
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" className={`font-serif text-2xl transition-colors ${scrolled ? 'text-stone-200' : 'text-stone-100'}`}>
                            Spike · <span className="text-hell-600 drop-shadow-[0_0_8px_rgba(220,38,38,0.5)]">2026</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
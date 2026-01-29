import React, { useState, useEffect } from 'react';
import { ArrowDown, MapPin, Calendar, Clock } from 'lucide-react';


// cam on thuy dang vi da cho anh nha
const CBN_IMAGES = [
"https://i.im.ge/2026/01/29/eTuCW8.anh1.jpeg",
"https://i.im.ge/2026/01/29/eTuxoh.anh2.jpeg",
"https://i.im.ge/2026/01/29/eTuyO9.anh3.jpeg",
"https://i.im.ge/2026/01/29/eTuPzK.anh4.jpeg",
"https://i.im.ge/2026/01/29/eTum4z.anh5.jpeg",
]

const Hero: React.FC = () => {
    const [bg] = useState(() => {
        return CBN_IMAGES[Math.floor(Math.random() * CBN_IMAGES.length)];
    });

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const goDate = new Date('2026-02-01T14:00:00+07:00');

        const calcTimeRemain = () => {
            const now = new Date();
            const timeDiff = goDate.getTime() - now.getTime();

            if (timeDiff > 0) {
                setTimeLeft({
                    days: Math.floor(timeDiff / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((timeDiff / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((timeDiff / 1000 / 60) % 60),
                    seconds: Math.floor((timeDiff / 1000) % 60),
                });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        calcTimeRemain();
        const timer = setInterval(calcTimeRemain, 1000);

        return () => clearInterval(timer);
    }, []);

    const scrollToForm = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();

        const element = document.getElementById('form');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-28">
            <div className="absolute inset-0 z-0">
                <img
                    src={bg}
                    alt="Anh CBN"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-linear-to-b from-black/80 via-stone-950/60 to-black"></div>
                <div className="absolute inset-0 bg-hell-950/20 mix-blend-overlay"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
                <p className="text-hell-500 tracking-[0.3em] text-sm md:text-base font-bold uppercase mb-4 animate-fade-in-up drop-shadow-[0_0_5px_rgba(220,38,38,0.8)]">
                    The Final Judgement
                </p>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight drop-shadow-2xl">
                    Phuong Dong's <br />
                    <span className="italic font-light text-hell-600 drop-shadow-[0_0_10px_rgba(185,28,28,0.6)]">Photoshoot</span>
                </h1>

                <p className="text-stone-400 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-light leading-relaxed border-l-2 border-hell-900 pl-4">
                    Join me in the abyss for an afternoon of chaos and memories.
                </p>

                <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-10 animate-fade-in-up">
                    {[
                        { label: 'Days', value: timeLeft.days },
                        { label: 'Hours', value: timeLeft.hours },
                        { label: 'Minutes', value: timeLeft.minutes },
                        { label: 'Seconds', value: timeLeft.seconds }
                    ].map((item) => (
                        <div key={item.label} className="flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm border border-hell-900/60 rounded-xl p-3 w-20 h-20 md:w-24 md:h-24 shadow-[0_0_15px_rgba(0,0,0,0.8)]">
                            <span className="text-2xl md:text-3xl font-serif text-hell-500 leading-none mb-1">
                                {String(item.value).padStart(2, '0')}
                            </span>
                            <span className="text-[10px] md:text-xs uppercase tracking-widest text-stone-500 font-medium">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="bg-stone-900/40 backdrop-blur-md border border-stone-800 rounded-sm p-6 mb-10 w-full max-w-lg text-stone-200 animate-fade-in-up shadow-2xl">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <Calendar className="text-hell-600" size={24} />
                            <span className="text-lg font-medium tracking-wide">Sunday, February 1st, 2026</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Clock className="text-hell-600" size={24} />
                            <span className="text-lg font-medium tracking-wide">2:00 PM - 5:00 PM</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <MapPin className="text-hell-600" size={24} />
                            <span className="text-lg font-medium tracking-wide">CBN (You already know where it is)</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                        href="#form"
                        onClick={scrollToForm}
                        className="px-8 py-3 bg-hell-800 text-stone-100 font-medium text-lg rounded-sm shadow-[0_4px_14px_0_rgba(220,38,38,0.39)] hover:shadow-[0_6px_20px_rgba(220,38,38,0.23)] hover:bg-hell-700 hover:text-white transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer border border-hell-900"
                    >
                        Leave me a message &lt;3
                    </a>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-hell-600 animate-bounce">
                <a href="#form" onClick={scrollToForm} aria-label="Scroll down" className="cursor-pointer hover:text-hell-500 transition-colors">
                    <ArrowDown size={32} />
                </a>
            </div>
        </section>
    );
};

export default Hero;




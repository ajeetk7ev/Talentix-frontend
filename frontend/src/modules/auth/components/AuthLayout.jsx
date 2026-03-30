import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Rocket, ShieldCheck, ArrowLeft } from 'lucide-react';

const AuthLayout = ({ children, title, subtitle, role = 'candidate', images = [] }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentImageIndex(prev => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images]);

    const isRecruiter = role === 'recruiter';
    const accentColor = isRecruiter ? 'text-indigo-500' : 'text-primary';
    const bgColor = isRecruiter ? 'bg-indigo-600' : 'bg-primary';

    return (
        <div className="min-h-screen flex bg-background selection:bg-primary/30 overflow-hidden">
            {/* Left Side: Auth Card */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-12 relative z-10 bg-background/80 backdrop-blur-sm lg:bg-background">
                
                {/* Back to Home Navigation */}
                <div className="absolute top-8 left-8 sm:left-12 lg:left-20">
                    <Link 
                        to="/" 
                        className="flex items-center gap-2 text-muted-foreground hover:text-foreground font-bold text-sm transition-colors group"
                    >
                        <div className="p-2 rounded-lg bg-secondary/50 border border-border/50 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                            <ArrowLeft className="w-4 h-4" />
                        </div>
                        Back to Home
                    </Link>
                </div>


                <div className="max-w-md w-full mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-5 duration-700">
                    <div className="space-y-3">
                        <h1 className="text-4xl md:text-5xl font-heading font-black tracking-tighter text-foreground leading-[0.95]">
                            {title}
                        </h1>
                        <p className="text-muted-foreground font-sans text-lg">
                            {subtitle}
                        </p>
                    </div>

                    <div className="bg-card/40 backdrop-blur-xl p-0 rounded-4xl border border-transparent sm:border-border/50">
                        {children}
                    </div>
                </div>

                {/* Mobile Decorative Elements */}
                <div className="lg:hidden absolute top-1/2 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 -z-10"></div>
            </div>

            {/* Right Side: Visual Narrative */}
            <div className="hidden lg:flex lg:w-1/2 relative bg-secondary overflow-hidden">
                {/* Images Carousel */}
                {images.map((img, index) => (
                    <div 
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
                    >
                        <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent z-10"></div>
                        <img 
                            src={img.src} 
                            alt={`Narrative ${index}`} 
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}

                {/* Overlays */}
                <div className="absolute inset-0 z-20 p-20 flex flex-col justify-end">
                    <div className="max-w-lg space-y-8 animate-in fade-in slide-in-from-right-10 duration-1000">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-bold uppercase tracking-widest">
                            <ShieldCheck className="w-4 h-4" />
                            <span>Premium Experience</span>
                        </div>
                        
                        <div className="space-y-4">
                            <h2 className="text-5xl font-heading font-black text-white tracking-tighter leading-none">
                                {images[currentImageIndex]?.title || 'Elevate Your Career'}
                            </h2>
                            <p className="text-xl text-white/80 font-sans leading-relaxed">
                                {images[currentImageIndex]?.desc || 'Join the most exclusive direct-connect market in the world.'}
                            </p>
                        </div>

                        <div className="flex gap-2">
                            {images.map((_, i) => (
                                <div 
                                    key={i} 
                                    className={`h-1.5 rounded-full transition-all duration-300 ${i === currentImageIndex ? 'w-8 bg-white' : 'w-2 bg-white/30'}`}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Decorative Accents */}
                <div className={`absolute top-20 right-20 w-32 h-32 ${bgColor} rounded-full blur-[80px] opacity-20`}></div>
                <div className="absolute bottom-40 left-20 w-64 h-64 bg-cyan-400 rounded-full blur-[120px] opacity-10 animate-pulse"></div>
            </div>
        </div>
    );
};

export default AuthLayout;

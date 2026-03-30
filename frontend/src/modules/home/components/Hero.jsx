import React from 'react';
import { Search, MapPin, Briefcase, TrendingUp } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 animate-pulse duration-5000"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-700/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>

            <div className="w-[92%] max-w-[1400px] mx-auto relative z-10 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs md:text-sm font-semibold mb-6 animate-in fade-in duration-600 scale-90">
                    <TrendingUp className="w-4 h-4" />
                    <span>#1 Access to Hidden & Unlisted Market Jobs</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black tracking-tight text-foreground mb-6 max-w-4xl mx-auto leading-tight md:leading-none text-balance">
                    Unlock <span className="text-primary italic underline decoration-wavy decoration-2 underline-offset-8">Hidden Jobs</span> Before They Hit the Market
                </h1>
                
                {/* Sub-headline */}
                <p className="text-lg md:text-xl text-muted-foreground font-sans max-w-2xl mx-auto mb-12 leading-relaxed">
                    70% of premium roles never reach public boards. Access <span className="font-bold text-foreground">Daily Fresh, Unlisted Jobs</span> and connect directly with hiring leads.
                </p>



                {/* Search Bar */}
                <div className="max-w-4xl mx-auto bg-card/60 backdrop-blur-md p-2 md:p-3 rounded-2xl border border-border shadow-2xl flex flex-col md:flex-row gap-2">
                    <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-background/50 rounded-xl border border-transparent focus-within:border-primary/50 transition-colors">
                        <Search className="w-5 h-5 text-muted-foreground" />
                        <input 
                            type="text" 
                            placeholder="Job title, keywords..." 
                            className="bg-transparent border-none outline-none w-full text-sm font-medium"
                        />
                    </div>
                    <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-background/50 rounded-xl border border-transparent focus-within:border-primary/50 transition-colors">
                        <MapPin className="w-5 h-5 text-muted-foreground" />
                        <input 
                            type="text" 
                            placeholder="Location (e.g., Remote)" 
                            className="bg-transparent border-none outline-none w-full text-sm font-medium"
                        />
                    </div>
                    <button className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-bold text-sm md:text-base hover:opacity-90 transition-opacity shadow-lg flex items-center justify-center gap-2">
                        <Search className="w-5 h-5 md:hidden lg:block " />
                        Search Jobs
                    </button>
                </div>

                {/* Trending Keywords */}
                <div className="mt-8 flex flex-wrap justify-center items-center gap-4 text-sm text-muted-foreground">
                    <span className="font-semibold">Trending:</span>
                    {['Product Designer', 'Frontend Dev', 'Project Manager', 'Marketing'].map((tag) => (
                        <button key={tag} className="px-3 py-1 bg-secondary/50 rounded-full hover:bg-primary/20 hover:text-primary transition-all border border-transparent hover:border-primary/30">
                            {tag}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;

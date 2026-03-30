import React from 'react';
import { EyeOff, Zap, Shield, ArrowRight } from 'lucide-react';

const HiddenMarket = () => {
    return (
        <section className="py-20 md:py-32 bg-secondary/20 relative overflow-hidden">
            {/* Background decorative element */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/2"></div>
            
            <div className="w-[92%] max-w-[1400px] mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Visual Side */}
                    <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                        <div className="space-y-4">
                            <div className="h-48 bg-card rounded-3xl border border-border/50 p-6 flex flex-col justify-end shadow-xl">
                                <Zap className="w-8 h-8 text-primary mb-2" />
                                <h4 className="font-bold text-sm uppercase tracking-wider">Instant Feed</h4>
                                <span className="text-xs text-muted-foreground">Updated 2m ago</span>
                            </div>
                            <div className="h-64 bg-primary rounded-3xl p-8 text-primary-foreground flex flex-col justify-between shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                                <Shield className="w-10 h-10" />
                                <div className="space-y-1">
                                    <h4 className="text-xl font-black">Verified Only</h4>
                                    <p className="text-xs opacity-80">Only 100% verified HR leads.</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4 pt-12">
                            <div className="h-64 bg-card rounded-3xl border border-border/50 p-6 flex flex-col justify-center gap-4 shadow-xl">
                                <div className="p-3 bg-secondary rounded-xl w-fit">
                                    <EyeOff className="w-6 h-6 text-primary" />
                                </div>
                                <h4 className="text-2xl font-black tracking-tight">70% Unlisted</h4>
                                <p className="text-sm text-muted-foreground">Premium roles that stay hidden from public boards.</p>
                            </div>
                            <div className="h-48 bg-background rounded-3xl border border-border p-6 flex flex-col justify-center items-center gap-2 group cursor-default">
                                <span className="text-5xl font-black text-primary group-hover:scale-110 transition-transform tracking-tighter">DAILY</span>
                                <span className="text-xs font-black tracking-[0.3em] uppercase opacity-60">Success Stories</span>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="lg:w-1/2 max-w-xl">
                        <div className="inline-flex items-center gap-2 text-primary font-bold text-sm tracking-widest uppercase mb-4">
                            <span className="w-2 h-2 bg-primary rounded-full animate-ping"></span>
                            Live Exclusive Market
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black tracking-tighter mb-8 leading-[0.95]">
                            Access the <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-cyan-400">Hidden Market</span>
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground font-sans leading-relaxed mb-10">
                            The best roles aren’t public. They happen in a 1:1 conversation between verified recruiters and selected talent. We give you the key to this hidden marketplace.
                        </p>
                        
                        <div className="space-y-6 mb-10">
                            {[
                                'Daily fresh, unlisted jobs before they go public.',
                                'Direct unlock of HR contact details for selected candidates.',
                                'Reduced candidate-pool density for higher signal.'
                            ].map((text, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                                        <ArrowRight className="w-3 h-3 text-primary" />
                                    </div>
                                    <p className="font-bold text-foreground/80 leading-snug">{text}</p>
                                </div>
                            ))}
                        </div>

                        <button className="w-full sm:w-auto bg-primary text-primary-foreground px-10 py-5 rounded-2xl font-black text-lg hover:opacity-90 transition-opacity shadow-2xl flex items-center justify-center gap-3 group">
                            Explore The Hidden Market
                            <Zap className="w-5 h-5 group-hover:scale-125 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HiddenMarket;

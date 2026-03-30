import React from 'react';
import { Zap, ShieldCheck, Users, Target } from 'lucide-react';

const features = [
    {
        title: 'Direct HR Connect',
        description: 'Skip the generic portals. Connect directly with HR managers and hiring leads who are actively looking for talent.',
        icon: <Users className="w-8 h-8 text-cyan-500" />,
        color: 'bg-cyan-500/5 border-cyan-500/20'
    },
    {
        title: 'Zero Noise, Just Quality',
        description: 'Our handpicked selection process reduces the "crowd," ensuring you only see roles that match your high-standard skills.',
        icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />,
        color: 'bg-emerald-500/5 border-emerald-500/20'
    },
    {
        title: 'Instant Feedback Loop',
        description: 'We prioritize fresh, active listings. Our direct-connect strategy significantly increases your chances of getting an instant call.',
        icon: <Zap className="w-8 h-8 text-amber-500" />,
        color: 'bg-amber-500/5 border-amber-500/20'
    },
    {
        title: 'High-Signal Matching',
        description: 'Reach job leads faster. We bridge the gap between world-class candidates and innovative teams without the clutter.',
        icon: <Target className="w-8 h-8 text-rose-500" />,
        color: 'bg-rose-500/5 border-rose-500/20'
    }
];

const WhyUs = () => {
    return (
        <section className="py-20 md:py-32 bg-background">
            <div className="w-[92%] max-w-[1400px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Left: Content */}
                    <div className="lg:w-1/2">
                        <span className="text-sm font-bold text-primary uppercase tracking-widest mb-3 block">Why Talentix?</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight mb-6 leading-tight">
                            Not just another job board. <br />A <span className="text-primary italic">Direct-Connect</span> platform.
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground font-sans leading-relaxed mb-8">
                            Most platforms are built for volume. Talentix is built for <span className="font-bold text-foreground">Speed and Precision</span>. 
                            We’ve cut out the noise and the middlemen to put you directly in front of the people who make the hiring decisions.
                        </p>
                        
                        <div className="flex items-center gap-6 p-6 bg-secondary/50 rounded-4xl border border-border/50">
                            <div className="flex -space-x-3">
                                {[1,2,3,4].map(i => (
                                    <div key={i} className="w-12 h-12 rounded-full border-2 border-background bg-secondary flex items-center justify-center text-xs font-bold">
                                        HR
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm font-medium">Trusted by 1000+ HR Managers for direct-to-candidate outreach.</p>
                        </div>
                    </div>

                    {/* Right: Feature Grid */}
                    <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {features.map((f, i) => (
                            <div key={i} className={`p-8 rounded-[2.5rem] border ${f.color} hover:-translate-y-2 transition-all duration-300`}>
                                <div className="w-14 h-14 bg-background rounded-2xl border flex items-center justify-center mb-6 shadow-sm">
                                    {f.icon}
                                </div>
                                <h3 className="text-xl font-heading font-bold mb-3">{f.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed font-sans">{f.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;

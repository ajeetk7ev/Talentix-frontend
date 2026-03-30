import React from 'react';
import { UserCheck, Key, PhoneCall, ArrowRight } from 'lucide-react';

const steps = [
    {
        title: 'Verified Profile',
        description: 'Create a high-signal profile. Our HR network prioritizes 100% verified identities for fast processing.',
        icon: <UserCheck className="w-8 h-8 text-cyan-400" />,
        number: '01'
    },
    {
        title: 'Unlock Direct Connect',
        description: 'Get exclusive access to recruiters and hiring leads for Hidden Market jobs. Skip the generic portal queue.',
        icon: <Key className="w-8 h-8 text-primary" />,
        number: '02'
    },
    {
        title: 'Direct HR Call',
        description: 'Connect directly over calls or structured interviews. No ghosting, just real career conversations.',
        icon: <PhoneCall className="w-8 h-8 text-emerald-400" />,
        number: '03'
    }
];

const Process = () => {
    return (
        <section className="py-20 md:py-32 bg-background border-y border-border/50">
            <div className="w-[92%] max-w-[1400px] mx-auto text-center mb-16">
                <span className="text-sm font-bold text-primary uppercase tracking-widest mb-3 block">Full Velocity</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight mb-6">The Direct Connect Flow</h2>
                <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto italic tracking-wide">
                    We bridge the gap. No middlemen, no clutter. Just three steps to your next great opportunity.
                </p>
            </div>

            <div className="w-[92%] max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                {/* Connecting Lines for Desktop */}
                <div className="hidden md:block absolute top-[15%] left-[20%] right-[20%] h-px bg-linear-to-r from-cyan-400/0 via-primary/50 to-emerald-400/0 z-0"></div>

                {steps.map((step, i) => (
                    <div key={i} className="relative z-10 group bg-card border border-border/30 p-10 rounded-[3rem] hover:border-primary/50 hover:shadow-2xl transition-all duration-300">
                        <div className="w-20 h-20 bg-background rounded-3xl border flex items-center justify-center mb-8 relative group-hover:scale-110 transition-transform shadow-lg mx-auto md:mx-0">
                            {step.icon}
                            <span className="absolute -top-4 -right-4 w-10 h-10 bg-primary text-primary-foreground rounded-full border-4 border-background flex items-center justify-center font-black text-xs">
                                {step.number}
                            </span>
                        </div>
                        <h3 className="text-2xl font-heading font-black mb-4 tracking-tight md:text-left text-center">{step.title}</h3>
                        <p className="text-muted-foreground leading-relaxed font-sans md:text-left text-center">{step.description}</p>
                        
                        {i < steps.length - 1 && (
                            <ArrowRight className="hidden md:block absolute top-1/2 -right-4 w-8 h-8 text-primary opacity-20 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Process;

import React from 'react';
import { Users, Briefcase, Building2, Globe } from 'lucide-react';

const stats = [
    { label: 'Active Users', value: '450K+', icon: <Users className="w-6 h-6" /> },
    { label: 'Total Jobs', value: '25K+', icon: <Briefcase className="w-6 h-6" /> },
    { label: 'Companies', value: '1,200+', icon: <Building2 className="w-6 h-6" /> },
    { label: 'Locations', value: '50+', icon: <Globe className="w-6 h-6" /> },
];

const Stats = () => {
    return (
        <section className="py-12 bg-secondary/30 border-y">
            <div className="w-[92%] max-w-[1400px] mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center text-primary shadow-sm border mb-4 group-hover:scale-110 transition-transform">
                                {stat.icon}
                            </div>
                            <span className="text-3xl font-heading font-black tracking-tighter mb-1">{stat.value}</span>
                            <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;

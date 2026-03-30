import React from 'react';
import { 
    Code, 
    Palette, 
    BarChart3, 
    Megaphone, 
    Database, 
    Layout, 
    Headphones, 
    FileText,
    ArrowUpRight
} from 'lucide-react';

const categories = [
    { title: 'Software Dev', count: '1.2k+ jobs', icon: <Code className="w-8 h-8 text-cyan-500" />, color: 'from-cyan-500/10 to-blue-500/10 hover:border-cyan-500/30' },
    { title: 'Design & Creative', count: '850+ jobs', icon: <Palette className="w-8 h-8 text-rose-500" />, color: 'from-rose-500/10 to-pink-500/10 hover:border-rose-500/30' },
    { title: 'Analytics', count: '450+ jobs', icon: <BarChart3 className="w-8 h-8 text-emerald-500" />, color: 'from-emerald-500/10 to-teal-500/10 hover:border-emerald-500/30' },
    { title: 'Marketing', count: '600+ jobs', icon: <Megaphone className="w-8 h-8 text-amber-500" />, color: 'from-amber-500/10 to-orange-500/10 hover:border-amber-500/30' },
    { title: 'Cloud/DevOps', count: '300+ jobs', icon: <Database className="w-8 h-8 text-indigo-500" />, color: 'from-indigo-500/10 to-violet-500/10 hover:border-indigo-500/30' },
    { title: 'Product Mgmt', count: '200+ jobs', icon: <Layout className="w-8 h-8 text-sky-500" />, color: 'from-sky-500/10 to-blue-500/10 hover:border-sky-500/30' },
    { title: 'Support', count: '150+ jobs', icon: <Headphones className="w-8 h-8 text-fuchsia-500" />, color: 'from-fuchsia-500/10 to-purple-500/10 hover:border-fuchsia-500/30' },
    { title: 'Content/Writing', count: '100+ jobs', icon: <FileText className="w-8 h-8 text-slate-500" />, color: 'from-slate-500/10 to-gray-500/10 hover:border-slate-500/30' },
];

const CategorySection = () => {
    return (
        <section className="py-20 md:py-32 bg-background relative overflow-hidden">
            <div className="w-[92%] max-w-[1400px] mx-auto">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
                    <div className="max-w-xl">
                        <span className="text-sm font-bold text-primary uppercase tracking-widest mb-3 block">Explore Sectors</span>
                        <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tight mb-4">Browse by Category</h2>
                        <p className="text-muted-foreground font-sans text-lg">Looking for a specific field? Explore thousands of opportunities across the most in-demand sectors today.</p>
                    </div>
                    <button className="flex items-center gap-2 font-bold text-primary hover:underline group">
                        Browse all categories <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category, index) => (
                        <div 
                            key={index} 
                            className={`
                                relative p-8 rounded-4xl border border-border group overflow-hidden transition-all duration-300
                                bg-linear-to-br ${category.color} hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2
                            `}
                        >
                            <div className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center shadow-sm border group-hover:scale-110 transition-transform mb-6">
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-heading font-bold mb-1">{category.title}</h3>
                            <p className="text-sm font-medium text-muted-foreground">{category.count}</p>
                            
                            {/* Decorative element */}
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategorySection;

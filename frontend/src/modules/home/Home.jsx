import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import CategorySection from './components/CategorySection';
import HiddenMarket from './components/HiddenMarket';
import HiringTicker from './components/HiringTicker';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import Footer from './components/Footer';

const Home = () => {
    return (
        <main className="min-h-screen bg-background selection:bg-primary/30 text-foreground overflow-x-hidden">
            {/* Navigation */}
            <Navbar />

            {/* Core Sections */}
            <Hero />
            <HiringTicker />
            <HiddenMarket />
            
            <div className="relative">
                {/* Background decorative blur */}
                <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-x-1/2"></div>
                
                <WhyUs />
                <Process />
                <CategorySection />
                <Stats />
                
                {/* Bottom CTA */}
                <section className="py-20 md:py-40 w-[92%] max-w-[1400px] mx-auto">
                    <div className="bg-primary rounded-4xl p-8 md:p-24 text-primary-foreground relative overflow-hidden group shadow-3xl">
                        {/* Decorative background */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 group-hover:scale-110 transition-transform duration-1000"></div>
                        
                        <div className="max-w-3xl relative z-10 text-balance">
                            <h2 className="text-4xl md:text-7xl font-heading font-black tracking-tight mb-8">Access the Market Others Can't See.</h2>
                            <p className="text-lg md:text-2xl font-sans opacity-90 mb-12 leading-relaxed font-medium">Join 450,000+ professionals who have already unlocked the hidden job market. Start your direct connect journey now.</p>
                            <div className="flex flex-wrap gap-6">
                                <button className="bg-white text-primary px-10 py-5 rounded-2xl font-black text-xl hover:bg-slate-200 transition-colors shadow-2xl scale-100 active:scale-95 transition-transform">Get Started Now</button>
                                <button className="bg-primary-foreground/10 border-2 border-white/30 backdrop-blur-sm px-10 py-5 rounded-2xl font-black text-xl hover:bg-white/20 transition-colors">Post a Job</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Footer */}
            <Footer />
        </main>
    );
};


export default Home;

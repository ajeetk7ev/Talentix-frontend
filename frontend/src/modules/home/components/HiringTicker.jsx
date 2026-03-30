import React from 'react';

const companies = [
  { name: 'Google', slug: 'google' },
  { name: 'Microsoft', slug: 'microsoft' },
  { name: 'Apple', slug: 'apple' },
  { name: 'Amazon', slug: 'amazon' },
  { name: 'Meta', slug: 'meta' },
  { name: 'Stripe', slug: 'stripe' },
  { name: 'Netflix', slug: 'netflix' },
  { name: 'Spotify', slug: 'spotify' },
  { name: 'Airbnb', slug: 'airbnb' },
  { name: 'Tesla', slug: 'tesla' }
];

const HiringTicker = () => {
    return (
        <div className="py-12 bg-secondary/30 border-y overflow-hidden">
            <div className="w-[92%] max-w-[1400px] mx-auto mb-10">
                <p className="text-center text-sm font-bold text-muted-foreground uppercase tracking-[0.2em] opacity-80">
                    Directly Connecting Candidates with Teams @
                </p>
            </div>
            
            <div className="flex relative items-center">
                <div className="animate-marquee flex whitespace-nowrap gap-20 items-center">
                    {[...companies, ...companies].map((company, index) => (
                        <div key={index} className="flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer px-4">
                           <img 
                                src={`https://cdn.simpleicons.org/${company.slug}/71717a`} 
                                alt={company.name}
                                className="h-8 md:h-10 w-auto object-contain"
                                /* Use light colors for better visibility in both modes if needed, but grayscale-filter is cleaner */
                           />
                           {/* For real premium feel, on hover we could switch to brand color, 
                               but consistent grayscale transition is the gold standard for landing pages */}
                        </div>
                    ))}
                </div>
                
                {/* Gradient Fades for a seamless look */}
                <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-background to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-background to-transparent z-10 pointer-events-none"></div>
            </div>
        </div>
    );
};


export default HiringTicker;

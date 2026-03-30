import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Globe, Send, Briefcase, Camera, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-background border-t pt-20 pb-10 overflow-hidden">
            <div className="w-[92%] max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    {/* Brand column */}
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground shadow-lg group-hover:scale-110 transition-transform">
                                <Rocket className="w-6 h-6" />
                            </div>
                            <span className="text-2xl font-heading font-bold tracking-tight text-foreground">
                                Talentix
                            </span>
                        </Link>
                        <p className="text-muted-foreground font-sans leading-relaxed">
                            Connecting world-class talent with the most innovative companies on the planet. Start your journey today.
                        </p>
                        <div className="flex items-center gap-4">
                            <button className="p-2 bg-secondary rounded-lg hover:bg-primary/20 hover:text-primary transition-colors">
                                <Send className="w-5 h-5" />
                            </button>
                            <button className="p-2 bg-secondary rounded-lg hover:bg-primary/20 hover:text-primary transition-colors">
                                <Briefcase className="w-5 h-5" />
                            </button>
                            <button className="p-2 bg-secondary rounded-lg hover:bg-primary/20 hover:text-primary transition-colors">
                                <Globe className="w-5 h-5" />
                            </button>
                            <button className="p-2 bg-secondary rounded-lg hover:bg-primary/20 hover:text-primary transition-colors">
                                <Camera className="w-5 h-5" />
                            </button>
                        </div>
                    </div>


                    {/* Resources */}
                    <div>
                        <h4 className="text-lg font-heading font-black mb-6 uppercase tracking-widest text-primary">Resources</h4>
                        <ul className="space-y-4 text-sm font-semibold text-muted-foreground">
                            <li><Link to="/jobs" className="hover:text-primary transition-colors">Browse Jobs</Link></li>
                            <li><Link to="/companies" className="hover:text-primary transition-colors">Companies</Link></li>
                            <li><Link to="/salaries" className="hover:text-primary transition-colors">Salary Explorer</Link></li>
                            <li><Link to="/guides" className="hover:text-primary transition-colors">Career Guides</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-lg font-heading font-black mb-6 uppercase tracking-widest text-primary">Support</h4>
                        <ul className="space-y-4 text-sm font-semibold text-muted-foreground">
                            <li><Link to="/help" className="hover:text-primary transition-colors">Help Center</Link></li>
                            <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-heading font-black mb-6 uppercase tracking-widest text-primary">Contact Info</h4>
                        <ul className="space-y-4 text-sm font-semibold text-muted-foreground">
                            <li className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-primary" />
                                <span>support@talentix.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-primary" />
                                <span>+1 (234) 567-890</span>
                            </li>
                            <li className="flex items-center gap-3 leading-relaxed">
                                <MapPin className="w-4 h-4 text-primary shrink-0" />
                                <span>123 Tech Avenue, Silicon Valley, CA 94025</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm font-medium text-muted-foreground">
                    <p>© 2026 Talentix Platform. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link to="/cookies" className="hover:text-primary transition-colors">Cookie Settings</Link>
                        <Link to="/sitemap" className="hover:text-primary transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

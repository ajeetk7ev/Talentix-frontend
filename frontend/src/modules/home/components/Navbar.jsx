import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Menu, X, User, Briefcase, Rocket } from 'lucide-react';
import ThemeToggle from '../../../components/common/ThemeToggle';

const Navbar = () => {

    const { isAuthenticated, user } = useSelector((state) => state.auth);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`
            fixed top-0 left-0 right-0 z-50 transition-all duration-300
            ${isScrolled ? 'bg-background/80 backdrop-blur-lg border-b py-3 shadow-sm' : 'bg-transparent py-5'}
        `}>

            <div className="w-[92%] max-w-[1400px] mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground shadow-lg group-hover:scale-110 transition-transform">
                        <Rocket className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-heading font-bold tracking-tight text-foreground">
                        Talentix
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <Link to="/jobs" className="text-sm font-medium hover:text-primary transition-colors">Browse Jobs</Link>
                    <Link to="/companies" className="text-sm font-medium hover:text-primary transition-colors">Companies</Link>
                    <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">About Us</Link>
                </div>

                {/* Auth Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <ThemeToggle />
                    {isAuthenticated ? (
                        <div className="flex items-center gap-3 bg-secondary/50 p-1 pr-4 rounded-full border">
                            <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                                <User className="w-4 h-4 text-primary" />
                            </div>
                            <span className="text-sm font-medium">{user?.fullName || 'User'}</span>
                        </div>
                    ) : (
                        <>
                            <Link 
                                to="/login?type=candidate" 
                                className="text-sm font-semibold px-4 py-2 rounded-lg hover:bg-secondary transition-colors"
                            >
                                Candidate Login
                            </Link>
                            <Link 
                                to="/login?type=recruiter" 
                                className="text-sm font-semibold bg-primary text-primary-foreground px-5 py-2 rounded-lg hover:opacity-90 transition-opacity shadow-md"
                            >
                                Recruiter Login
                            </Link>
                        </>
                    )}
                </div>


                {/* Mobile Toggle */}
                <button 
                    className="md:hidden p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b p-4 flex flex-col gap-4 animate-in fade-in slide-in-from-top-5">
                    <Link to="/jobs" className="text-lg font-medium p-2">Browse Jobs</Link>
                    <Link to="/companies" className="text-lg font-medium p-2">Companies</Link>
                    <Link to="/about" className="text-lg font-medium p-2">About Us</Link>
                    <hr />
                    <div className="flex flex-col gap-3">
                        <Link to="/login?type=candidate" className="text-center py-3 border rounded-xl font-semibold">Candidate Login</Link>
                        <Link to="/login?type=recruiter" className="text-center py-3 bg-primary text-primary-foreground rounded-xl font-semibold">Recruiter Login</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

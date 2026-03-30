import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, Briefcase, Rocket, LogOut } from 'lucide-react';
import { useDispatch } from 'react-redux';
import ThemeToggle from '../../../components/common/ThemeToggle';
import { logout } from '../../../store/slices/authSlice';
import useToast from '../../../hooks/useToast';
import api from '../../../services/api';

const Navbar = () => {
    const dispatch = useDispatch();
    const toast = useToast();
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleLogout = async () => {
        try {
            const response = await api.post('/auth/logout');
            if (response.data.success) {
                dispatch(logout());
                toast.success('Logged out successfully. See you soon!');
            }
        } catch (error) {
            console.error('Logout error:', error);
            // Even if API fails, clear local state for better UX
            dispatch(logout());
            toast.success('Session cleared.');
        }
    };


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
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3 bg-secondary/50 p-1 pr-4 rounded-full border border-border/50">
                                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
                                    <User className="w-4 h-4 text-primary" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase tracking-tighter text-muted-foreground font-black leading-none">Welcome</span>
                                    <span className="text-sm font-bold leading-tight">{user?.name || 'Explorer'}</span>
                                </div>
                            </div>
                            <button 
                                onClick={handleLogout}
                                className="p-2.5 rounded-xl hover:bg-red-500/10 hover:text-red-500 text-muted-foreground transition-all duration-300 border border-transparent hover:border-red-500/20 group"
                                title="Sign Out"
                            >
                                <LogOut className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-3">
                            <Link 
                                to="/login?type=candidate" 
                                className="text-sm font-bold px-4 py-2.5 rounded-xl hover:bg-secondary transition-all"
                            >
                                Sign In
                            </Link>
                            <Link 
                                to="/signup?type=candidate" 
                                className="text-sm font-black bg-primary text-primary-foreground px-6 py-2.5 rounded-xl hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-primary/20 border border-primary/20"
                            >
                                Get Started
                            </Link>
                        </div>
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
                    {isAuthenticated ? (
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3 p-3 bg-secondary/30 rounded-2xl border border-border/50">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                                    <User className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-xs font-black text-muted-foreground uppercase tracking-widest">Account</p>
                                    <p className="text-lg font-bold">{user?.name || 'Explorer'}</p>
                                </div>
                            </div>
                            <button 
                                onClick={handleLogout}
                                className="w-full py-4 bg-red-500/10 text-red-500 rounded-2xl font-black flex items-center justify-center gap-2 active:scale-95 transition-all border border-red-500/20"
                            >
                                <LogOut className="w-5 h-5" />
                                Sign Out From Account
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-3">
                            <Link to="/login?type=candidate" className="text-center py-4 border border-border/50 rounded-2xl font-black text-foreground hover:bg-secondary transition-all">Sign In</Link>
                            <Link to="/signup?type=candidate" className="text-center py-4 bg-primary text-primary-foreground rounded-2xl font-black shadow-lg shadow-primary/20 transition-all active:scale-95">Create Free Account</Link>
                        </div>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;

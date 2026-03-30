import React, { useState } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { User, Mail, Lock, Phone, Eye, EyeOff, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useDispatch } from 'react-redux';
import AuthLayout from './components/AuthLayout';
import useToast from '../../hooks/useToast';
import api from '../../services/api';
import { setLoading, setUser } from '../../store/slices/authSlice';

// Official Social SVGs
const GoogleIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.07-3.71 1.07-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.11c-.22-.66-.35-1.36-.35-2.11s.13-1.45.35-2.11V7.05H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.95l3.66-2.84z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.05l3.66 2.84c.87-2.6 3.3-4.51 6.16-4.51z" fill="#EA4335"/>
    </svg>
);

const GithubIcon = () => (
    <svg className="w-5 h-5 fill-foreground" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.085 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
);

// Import local images
import candidate1 from '../../assets/auth/candidate-1.png';
import candidate2 from '../../assets/auth/candidate-2.png';
import candidate3 from '../../assets/auth/candidate-3.png';
import recruiter1 from '../../assets/auth/recruiter-1.png';
import recruiter2 from '../../assets/auth/recruiter-2.png';
import recruiter3 from '../../assets/auth/recruiter-3.png';

const Signup = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const toast = useToast();
    const role = searchParams.get('type') || 'candidate';

    
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        password: '',
        terms: true
    });

    const isRecruiter = role === 'recruiter';
    const accentColor = isRecruiter ? 'text-indigo-500' : 'text-primary';
    const bgColor = isRecruiter ? 'bg-indigo-600' : 'bg-primary';
    const ringColor = isRecruiter ? 'focus:ring-indigo-500/20' : 'focus:ring-primary/20';
    const borderColor = isRecruiter ? 'focus:border-indigo-500' : 'focus:border-primary';

    const images = isRecruiter ? [
        { src: recruiter1, title: 'Scale Your Team', desc: 'Access the top 1% of verified talent in a direct-connect marketplace.' },
        { src: recruiter2, title: 'Precision Hiring', desc: 'No more generic resumes. Just high-signal profiles matched to your needs.' },
        { src: recruiter3, title: 'Executive Speed', desc: 'Reduce your time-to-hire by 65% with our direct HR network.' }
    ] : [
        { src: candidate1, title: 'Join the Elite', desc: 'Talentix is the only place to access unlisted, high-impact premium roles.' },
        { src: candidate2, title: 'Direct Impact', desc: 'Skip the black hole of portals. Land directly on the HR desk.' },
        { src: candidate3, title: 'Your Global Reach', desc: 'Connect with innovative companies across the planet.' }
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        dispatch(setLoading(true));

        try {
            // Map roles to backend expected values
            const backendRole = role === 'recruiter' ? 'RECRUITER' : 'USER';

            const response = await api.post('/auth/signup', {
                name: formData.fullName,
                email: formData.email,
                password: formData.password,
                role: backendRole
            });

            if (response.data.success) {
                // Instant login after signup
                dispatch(setUser(response.data.data)); 
                toast.success(response.data.message || 'Welcome to Talentix! Your account is ready.');
                navigate('/');
            }

        } catch (error) {
            console.error('Signup error:', error);
            // Global toast handles the message
        } finally {
            setIsLoading(false);
            dispatch(setLoading(false));
        }
    };



    return (
        <AuthLayout 
            role={role}
            images={images}
            title={isRecruiter ? 'Recruiter Signup' : 'Begin Your Journey'}
            subtitle={isRecruiter ? 'Build your elite talent pipeline today.' : 'Join the most exclusive direct-connect market.'}
        >
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div className="space-y-1.5 group">
                    <label className="text-sm font-bold text-foreground/80 ml-1">Full Name</label>
                    <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        <input 
                            type="text"
                            required
                            placeholder="John Doe"
                            className={`w-full bg-secondary/50 border border-border/50 rounded-2xl py-3.5 pl-12 pr-4 outline-hidden ${ringColor} ${borderColor} transition-all duration-300 font-medium`}
                            value={formData.fullName}
                            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        />
                    </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5 group">
                    <label className="text-sm font-bold text-foreground/80 ml-1">Email Address</label>
                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        <input 
                            type="email"
                            required
                            placeholder="name@company.com"
                            className={`w-full bg-secondary/50 border border-border/50 rounded-2xl py-3.5 pl-12 pr-4 outline-hidden ${ringColor} ${borderColor} transition-all duration-300 font-medium`}
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                    </div>
                </div>

                {/* Phone */}
                <div className="space-y-1.5 group">
                    <label className="text-sm font-bold text-foreground/80 ml-1">Phone Number</label>
                    <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        <input 
                            type="tel"
                            placeholder="+1 (234) 567-890"
                            className={`w-full bg-secondary/50 border border-border/50 rounded-2xl py-3.5 pl-12 pr-4 outline-hidden ${ringColor} ${borderColor} transition-all duration-300 font-medium`}
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                    </div>
                </div>

                {/* Password */}
                <div className="space-y-1.5 group">
                    <label className="text-sm font-bold text-foreground/80 ml-1 text-balance">Password (Min 8 Characters)</label>
                    <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        <input 
                            type={showPassword ? 'text' : 'password'}
                            required
                            placeholder="••••••••"
                            className={`w-full bg-secondary/50 border border-border/50 rounded-2xl py-3.5 pl-12 pr-12 outline-hidden ${ringColor} ${borderColor} transition-all duration-300 font-medium`}
                            value={formData.password}
                            onChange={(e) => setFormData({...formData, password: e.target.value})}
                        />
                        <button 
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Submit */}
                <button 
                    disabled={isLoading}
                    className={`w-full ${bgColor} text-primary-foreground py-4 mt-6 rounded-2xl font-black text-lg shadow-xl hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-3 group relative overflow-hidden`}
                >
                    {isLoading ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                        <>
                            Create Global Account
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                    )}
                </button>

                {/* Social Login Divider */}
                <div className="relative flex items-center gap-4 pt-4">
                    <div className="flex-1 h-px bg-border/50"></div>
                    <span className="text-xs font-black text-muted-foreground uppercase tracking-widest bg-background px-2">OR START WITH</span>
                    <div className="flex-1 h-px bg-border/50"></div>
                </div>

                {/* Social Buttons */}
                <div className="grid grid-cols-2 gap-4">
                    <button type="button" className="flex items-center justify-center gap-3 bg-card border border-border/50 py-3 rounded-xl hover:bg-secondary transition-colors font-bold text-sm">
                        <GoogleIcon />
                        Google
                    </button>
                    <button type="button" className="flex items-center justify-center gap-3 bg-card border border-border/50 py-3 rounded-xl hover:bg-secondary transition-colors font-bold text-sm">
                        <GithubIcon />
                        GitHub
                    </button>
                </div>



                {/* Login Link */}
                <p className="text-center text-sm font-medium text-muted-foreground pt-4">
                    Already have an account? {' '}
                    <Link to={`/login?type=${role}`} className={`font-black ${accentColor} hover:underline underline-offset-4`}>
                        Sign In
                    </Link>
                </p>
            </form>
        </AuthLayout>
    );
};

export default Signup;

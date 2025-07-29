import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        if (error) setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        if (!formData.email || !formData.password) {
            setError('Please fill in all fields');
            setIsLoading(false);
            return;
        }

        if (!formData.email.includes('@')) {
            setError('Please enter a valid email address');
            setIsLoading(false);
            return;
        }

        try {
            await new Promise(resolve => setTimeout(resolve, 1500));

            if (formData.email === 'admin@gnsolutions.eu' && formData.password === 'admin123') {
                const userData = {
                    id: 1,
                    name: 'Admin User',
                    email: 'admin@gnsolutions.eu',
                    role: 'Administrator',
                    permissions: ['all']
                };
                const token = 'mock-jwt-token-' + Date.now();
                onLogin(userData, token);
            } else {
                setError('Invalid email or password');
            }
        } catch (err) {
            setError('Login failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleDemoLogin = () => {
        setFormData({
            email: 'admin@gnsolutions.eu',
            password: 'admin123',
            rememberMe: false
        });
    };

    return (
        <div className="login-page">
            <div className="container-fluid px-0">
                <div className="row justify-content-center align-items-center min-vh-100 mx-0">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4" style={{
                        maxWidth: '480px',
                        width: '100%'
                    }}>
                        <div className="card border-0 shadow-lg" style={{
                            maxWidth: '100%',
                            margin: '0 auto'
                        }}>
                            <div className="card-body p-4 p-md-5">
                                {/* Logo and Header */}
                                <div className="text-center mb-4">
                                    <div className="logo d-inline-flex align-items-center justify-content-center mb-3"
                                    >
                                        <img
                                            src="/images/logo.png"
                                            alt="GN Solutions Logo"
                                            className="img-fluid"
                                            style={{ maxWidth: '100%', maxHeight: '100%' }}
                                        />
                                    </div>
                                    <h2 className="fw-bold mb-2" style={{ color: "var(--secondary-color)" }}>Admin Dashboard</h2>
                                    <p className="text-muted mb-0">Sign in to manage your GN Solutions platform</p>
                                </div>

                                {/* Error Alert */}
                                {error && (
                                    <div className="alert alert-danger d-flex align-items-center mb-4">
                                        <i className="fas fa-exclamation-triangle me-2 flex-shrink-0"></i>
                                        <div className="text-break">{error}</div>
                                    </div>
                                )}

                                {/* Login Form */}
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label fw-semibold">
                                            Email Address
                                        </label>
                                        <div className="input-group">
                                            <span className="input-group-text">
                                                <i className="fas fa-envelope text-muted"></i>
                                            </span>
                                            <input
                                                type="email"
                                                className={`form-control ${error && !formData.email ? 'is-invalid' : ''}`}
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="Enter your email"
                                                disabled={isLoading}
                                                style={{ minWidth: '0' }}
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label fw-semibold">
                                            Password
                                        </label>
                                        <div className="input-group">
                                            <span className="input-group-text">
                                                <i className="fas fa-lock text-muted"></i>
                                            </span>
                                            <input
                                                type={showPassword ? 'text' : 'password'}
                                                className={`form-control ${error && !formData.password ? 'is-invalid' : ''}`}
                                                id="password"
                                                name="password"
                                                value={formData.password}
                                                onChange={handleInputChange}
                                                placeholder="Enter your password"
                                                disabled={isLoading}
                                                style={{ minWidth: '0' }}
                                            />
                                            <button
                                                type="button"
                                                className="btn btn-outline-secondary flex-shrink-0"
                                                onClick={() => setShowPassword(!showPassword)}
                                                disabled={isLoading}
                                            >
                                                <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="rememberMe"
                                                    name="rememberMe"
                                                    checked={formData.rememberMe}
                                                    onChange={handleInputChange}
                                                    disabled={isLoading}
                                                />
                                                <label className="form-check-label text-muted small" htmlFor="rememberMe">
                                                    Remember me
                                                </label>
                                            </div>
                                            <button type="button" className="btn btn-link small text-decoration-none p-0" style={{ color: "var(--primary-color)" }}>
                                                Forgot password?
                                            </button>
                                        </div>
                                    </div>

                                    <div className="d-grid mb-4">
                                        <button
                                            type="submit"
                                            className="btn btn-lg"
                                            disabled={isLoading}
                                            style={{ backgroundColor: "var(--primary-color)" }}
                                        >
                                            {isLoading ? (
                                                <>
                                                    <span className="spinner-border spinner-border-sm me-2" role="status">
                                                        <span className="visually-hidden">Loading...</span>
                                                    </span>
                                                    Signing in...
                                                </>
                                            ) : (
                                                <>
                                                    <i className="fas fa-sign-in-alt me-2"></i>
                                                    Sign In
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>

                                {/* Additional Links */}
                                <div className="text-center">
                                    <div className="text-muted small mb-3">
                                        Having trouble accessing your account?
                                    </div>
                                    <div className="d-flex justify-content-center gap-3 flex-wrap">
                                        <a href="#" className="small text-decoration-none" style={{ color: "var(--primary-color)" }}>
                                            <i className="fas fa-headset me-1"></i>
                                            Contact Support
                                        </a>
                                        <a href="#" className="small text-decoration-none" style={{ color: "var(--primary-color)" }}>
                                            <i className="fas fa-question-circle me-1"></i>
                                            Help Center
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="card-footer bg-light text-center py-3">
                                <small className="text-muted">
                                    © {new Date().getFullYear()} GN Solutions. All rights reserved.
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
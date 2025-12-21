import { useState } from 'react';
import FloatingLabelInput from '../components/FloatingLabelInput';
import InstagramSection from '../components/InstagramSection';
import errorIcon from '../assets/icons/errorIcon.svg';
import sendIcon from '../assets/icons/sendIcon.svg';

const ClientPortal = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Test credentials for "client not found" error
    // Use: notfound@test.com with any password
    if (formData.email === 'notfound@test.com') {
      setErrorMessage('not-found');
      return;
    }

    // Simulate successful login for any other credentials
    if (formData.email && formData.password) {
      setIsLoggedIn(true);
    }
  };

  // If logged in, show client portal page
  if (isLoggedIn) {
    return (
      <div>
        {/* Client Portal Content */}
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
          <h1
            className="font-editors-note text-[#380F05] text-center"
            style={{
              fontWeight: 1,
              fontSize: '64px',
              lineHeight: '100%',
              letterSpacing: '0.03em'
            }}
          >
            CLIENT PORTAL
          </h1>
        </section>

        {/* Instagram Section */}
        <InstagramSection />
      </div>
    );
  }

  // Default login view
  return (
    <div>
      {/* Split Layout Section - No top padding/margin */}
      <section className="min-h-screen flex flex-col lg:flex-row">
        {/* Left Side - Image */}
        <div className="lg:w-1/2 h-[50vh] lg:h-auto lg:min-h-screen">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&auto=format&fit=crop"
            alt="Client Portal"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Form */}
        <div className="lg:w-1/2 bg-[#FFFEFD] flex items-center px-6 lg:px-16 py-20 lg:py-24">
          <div className="w-full max-w-xl">
            {/* Header */}
            <h1
              className="font-editors-note text-[#380F05] mb-8"
              style={{
                fontWeight: 1,
                fontSize: '64px',
                lineHeight: '100%',
                letterSpacing: '0.03em'
              }}
            >
              CLIENT PORTAL
            </h1>

            {/* First Paragraph */}
            <p
              className="font-newsreader text-[#380F05] mb-4"
              style={{
                fontWeight: 300,
                fontSize: '16px',
                lineHeight: '25px'
              }}
            >
              Welcome to your Hephzibah Luxe Client Portal. This curated space gives you effortless access to your planning documents, timelines, proposals, and shared updates — ensuring a beautifully coordinated journey from start to finish.
            </p>

            {/* Second Paragraph - Italic */}
            <p
              className="font-newsreader text-[#380F05] mb-12"
              style={{
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '25px',
                fontStyle: 'italic'
              }}
            >
              Please note: New accounts cannot be created on this page. After your booking is confirmed, our team will create your portal account and email you instructions to set your password.
            </p>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Error Message - Client Not Found */}
              {errorMessage === 'not-found' && (
                <div
                  className="w-full px-6 py-4 flex items-center gap-3"
                  style={{
                    backgroundColor: 'rgba(213, 0, 0, 0.4)', // #D50000 with 40% opacity
                    border: '1px solid #D50000'
                  }}
                >
                  <img
                    src={errorIcon}
                    alt="Error"
                    className="flex-shrink-0 w-5 h-5"
                  />
                  <div
                    className="font-lato flex flex-wrap items-center gap-1"
                    style={{
                      fontWeight: 400,
                      fontSize: '15px',
                      lineHeight: '22px',
                      color: '#2B0202'
                    }}
                  >
                    <span>Client not found. Please</span>
                    <a
                      href="/inquiry"
                      className="underline hover:opacity-70 transition-opacity font-medium inline-flex items-center"
                    >
                      Send an Inquiry
                    </a>
                    <span>to become a client</span>
                    <img
                      src={sendIcon}
                      alt="Send"
                      className="w-3.5 h-3.5 ml-1"
                    />
                  </div>
                </div>
              )}

              {/* Email Input */}
              <FloatingLabelInput
                label="Your Email Address"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
              />

              {/* Password Input with Toggle */}
              <div className="relative">
                <FloatingLabelInput
                  label="Enter Your Password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                />

                {/* Show/Hide Password Toggle */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 font-lato flex items-center gap-2"
                  style={{
                    fontWeight: 300,
                    fontSize: '14px'
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#380F05"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ opacity: 0.5 }}
                  >
                    {showPassword ? (
                      <>
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                      </>
                    ) : (
                      <>
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </>
                    )}
                  </svg>
                  <span style={{ color: '#380F05', opacity: 0.75 }}>
                    {showPassword ? 'Hide' : 'Show'}
                  </span>
                </button>
              </div>

              {/* Log In Button and Forgot Password - Right aligned */}
              <div className="flex flex-col items-end gap-4">
                <button
                  type="submit"
                  className="bg-[#380F05] text-[#FFFEFD] font-lato py-3 px-9 transition-all duration-300 hover:bg-[#4a1407] flex items-center justify-center gap-3 group"
                  style={{
                    fontWeight: 500,
                    fontSize: '18px',
                    letterSpacing: '0.05em'
                  }}
                >
                  LOG IN
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>

                {/* Forgot Password Link */}
                <a
                  href="#"
                  className="font-lato text-[#380F05] underline hover:opacity-70 transition-opacity"
                  style={{
                    fontWeight: 300,
                    fontSize: '15px'
                  }}
                >
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <InstagramSection />
    </div>
  );
};

export default ClientPortal;
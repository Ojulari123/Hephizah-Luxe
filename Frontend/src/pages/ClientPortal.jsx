import { useState } from 'react';
import FloatingLabelInput from '../components/FloatingLabelInput';
import InstagramSection from '../components/InstagramSection';
import errorIcon from '../assets/icons/errorIcon.svg';
import sendIcon from '../assets/icons/sendIcon.svg';
import circleErrorIcon from '../assets/icons/circleerrorIcon.svg';
import passwordResetImage from '../assets/icons/passwordresetImage.svg';

const ClientPortal = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  const [codeSent, setCodeSent] = useState(false);
  const [verificationCode, setVerificationCode] = useState(['', '', '', '']);
  const [codeError, setCodeError] = useState(false);
  const [forgotPasswordError, setForgotPasswordError] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [resetPasswordData, setResetPasswordData] = useState({
    password: '',
    confirmPassword: ''
  });
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordRequirements, setPasswordRequirements] = useState({
    length: false,
    uppercase: false,
    special: false
  });
  const [passwordResetSuccess, setPasswordResetSuccess] = useState(false);

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

  const handleForgotPasswordClick = (e) => {
    e.preventDefault();
    setShowForgotPassword(true);
  };

  const handleBackToLogin = () => {
    setShowForgotPassword(false);
    setCodeSent(false);
    setForgotPasswordEmail('');
    setVerificationCode(['', '', '', '']);
  };

  const handleSendCode = (e) => {
    e.preventDefault();
    
    // Test email for "no client profile" error
    // Use: noclient@test.com
    if (forgotPasswordEmail === 'noclient@test.com') {
      setForgotPasswordError(true);
      return;
    }
    
    // Clear error and simulate sending code
    setForgotPasswordError(false);
    setCodeSent(true);
  };

  const handleCodeChange = (index, value) => {
    // Only allow single digit
    if (value.length > 1) return;
    
    // Clear error when user starts typing
    if (codeError) setCodeError(false);
    
    const newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);

    // Auto-focus next input
    if (value && index < 3) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleCodeKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === 'Backspace' && !verificationCode[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleVerifyCode = (e) => {
    e.preventDefault();
    const code = verificationCode.join('');
    
    // Simulate incorrect code (for testing, use "1234" as correct code)
    if (code !== '1234') {
      setCodeError(true);
      return;
    }
    
    // Code is correct, show reset password screen
    setShowResetPassword(true);
  };

  const handleResetPasswordChange = (e) => {
    const { name, value } = e.target;
    setResetPasswordData(prev => ({ ...prev, [name]: value }));

    // Check password requirements only for the password field
    if (name === 'password') {
      setPasswordRequirements({
        length: value.length >= 8,
        uppercase: /[A-Z]/.test(value),
        special: /[!@#$%^&*(),.?":{}|<>0-9]/.test(value)
      });
    }
  };

  const handleResetPasswordSubmit = (e) => {
    e.preventDefault();
    // Simulate successful password reset
    setPasswordResetSuccess(true);
  };

  // Check if all 4 digits are filled
  const isCodeComplete = verificationCode.every(digit => digit !== '');

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

  // Forgot Password Flow
  if (showForgotPassword) {
    // Show Password Reset Success screen
    if (passwordResetSuccess) {
      return (
        <div>
          {/* Split Layout Section */}
          <section className="min-h-screen flex flex-col lg:flex-row">
            {/* Right Side - Image */}
            <div className="lg:w-1/2 lg:order-2 h-[50vh] lg:h-auto lg:min-h-screen">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&auto=format&fit=crop"
                alt="Client Portal"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Left Side - Success Message */}
            <div className="lg:w-1/2 lg:order-1 bg-[#FFFEFD] flex items-center justify-center px-6 lg:px-8 py-20 lg:py-24">
              <div className="w-full max-w-xl text-center">
                {/* Header */}
                <h1
                  className="font-editors-note text-[#380F05] mb-6"
                  style={{
                    fontWeight: 1,
                    fontSize: '64px',
                    lineHeight: '100%',
                    letterSpacing: '0.03em'
                  }}
                >
                  PASSWORD RESET
                </h1>

                {/* Description */}
                <p
                  className="font-newsreader text-[#380F05] mb-12"
                  style={{
                    fontWeight: 300,
                    fontSize: '16px',
                    lineHeight: '25px'
                  }}
                >
                  Password reset was successful. Please log in with new password.
                </p>

                {/* Illustration */}
                <div className="mb-12 flex justify-center">
                  <img 
                    src={passwordResetImage} 
                    alt="Password Reset Success" 
                    className="w-64 h-auto"
                  />
                </div>

                {/* Back to Login Button */}
                <button
                  onClick={() => {
                    setShowForgotPassword(false);
                    setPasswordResetSuccess(false);
                    setShowResetPassword(false);
                    setCodeSent(false);
                    setVerificationCode(['', '', '', '']);
                    setResetPasswordData({ password: '', confirmPassword: '' });
                  }}
                  className="text-[#FFFEFD] font-lato py-3 px-9 transition-all duration-300 hover:bg-[#4a1407] inline-flex items-center justify-center gap-3 group"
                  style={{
                    fontWeight: 500,
                    fontSize: '18px',
                    letterSpacing: '0.05em',
                    backgroundColor: '#380F05'
                  }}
                >
                  BACK TO LOGIN
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </div>
            </div>
          </section>

          {/* Instagram Section */}
          <InstagramSection />
        </div>
      );
    }

    // Show Reset Password screen if code was verified
    if (showResetPassword) {
      return (
        <div>
          {/* Split Layout Section */}
          <section className="min-h-screen flex flex-col lg:flex-row">
            {/* Right Side - Image */}
            <div className="lg:w-1/2 lg:order-2 h-[50vh] lg:h-auto lg:min-h-screen">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&auto=format&fit=crop"
                alt="Client Portal"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Left Side - Reset Password Form */}
            <div className="lg:w-1/2 lg:order-1 bg-[#FFFEFD] flex items-center px-6 lg:px-8 py-20 lg:py-24">
              <div className="w-full max-w-xl">
                {/* Header */}
                <h1
                  className="font-editors-note text-[#380F05] mb-8 whitespace-nowrap"
                  style={{
                    fontWeight: 1,
                    fontSize: '64px',
                    lineHeight: '100%',
                    letterSpacing: '0.03em'
                  }}
                >
                  RESET PASSWORD?
                </h1>

                {/* Description */}
                <p
                  className="font-newsreader text-[#380F05] mb-12"
                  style={{
                    fontWeight: 300,
                    fontSize: '16px',
                    lineHeight: '25px'
                  }}
                >
                  Please set your new password. Ensure it is something you will remember
                </p>

                {/* Reset Password Form */}
                <form onSubmit={handleResetPasswordSubmit} className="space-y-6">
                  {/* New Password Input */}
                  <div className="relative">
                    <FloatingLabelInput
                      label="Enter Your Password"
                      name="password"
                      type={showNewPassword ? "text" : "password"}
                      required
                      value={resetPasswordData.password}
                      onChange={handleResetPasswordChange}
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
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
                        {showNewPassword ? (
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
                        {showNewPassword ? 'Hide' : 'Show'}
                      </span>
                    </button>
                  </div>

                  {/* Confirm Password Input */}
                  <div className="relative">
                    <FloatingLabelInput
                      label="Confirm Your Password"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      required
                      value={resetPasswordData.confirmPassword}
                      onChange={handleResetPasswordChange}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
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
                        {showConfirmPassword ? (
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
                        {showConfirmPassword ? 'Hide' : 'Show'}
                      </span>
                    </button>
                  </div>

                  {/* Password Requirements */}
                  <div className="space-y-3">
                    {/* Requirement 1 */}
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-5 h-5 flex items-center justify-center rounded"
                        style={{
                          backgroundColor: passwordRequirements.length ? 'rgba(56, 15, 5, 0.5)' : '#FFFEFD',
                          border: passwordRequirements.length ? 'none' : '2px solid #380F05'
                        }}
                      >
                        {passwordRequirements.length && (
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M11.6667 3.5L5.25 9.91667L2.33333 7" stroke="#FFFEFD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                      <span
                        className="font-lato"
                        style={{
                          fontWeight: 300,
                          fontSize: '15px',
                          color: '#380F05'
                        }}
                      >
                        Use 8 or more characters
                      </span>
                    </div>

                    {/* Requirement 2 */}
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-5 h-5 flex items-center justify-center rounded"
                        style={{
                          backgroundColor: passwordRequirements.uppercase ? 'rgba(56, 15, 5, 0.5)' : '#FFFEFD',
                          border: passwordRequirements.uppercase ? 'none' : '2px solid #380F05'
                        }}
                      >
                        {passwordRequirements.uppercase && (
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M11.6667 3.5L5.25 9.91667L2.33333 7" stroke="#FFFEFD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                      <span
                        className="font-lato"
                        style={{
                          fontWeight: 300,
                          fontSize: '15px',
                          color: '#380F05'
                        }}
                      >
                        One uppercase character
                      </span>
                    </div>

                    {/* Requirement 3 */}
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-5 h-5 flex items-center justify-center rounded"
                        style={{
                          backgroundColor: passwordRequirements.special ? 'rgba(56, 15, 5, 0.5)' : '#FFFEFD',
                          border: passwordRequirements.special ? 'none' : '2px solid #380F05'
                        }}
                      >
                        {passwordRequirements.special && (
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M11.6667 3.5L5.25 9.91667L2.33333 7" stroke="#FFFEFD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                      <span
                        className="font-lato"
                        style={{
                          fontWeight: 300,
                          fontSize: '15px',
                          color: '#380F05'
                        }}
                      >
                        One special character or 1 number
                      </span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end pt-6">
                    <button
                      type="submit"
                      disabled={!resetPasswordData.password || !resetPasswordData.confirmPassword}
                      className="text-[#FFFEFD] font-lato py-3 px-9 transition-all duration-300 flex items-center justify-center gap-3 group"
                      style={{
                        fontWeight: 500,
                        fontSize: '18px',
                        letterSpacing: '0.05em',
                        backgroundColor: (resetPasswordData.password && resetPasswordData.confirmPassword) ? '#380F05' : 'rgba(56, 15, 5, 0.5)',
                        cursor: (resetPasswordData.password && resetPasswordData.confirmPassword) ? 'pointer' : 'not-allowed'
                      }}
                    >
                      RESET PASSWORD
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>

          {/* Instagram Section */}
          <InstagramSection />
        </div>
      );
    }

    return (
      <div>
        {/* Split Layout Section */}
        <section className="min-h-screen flex flex-col lg:flex-row">
          {/* Right Side - Image (swapped for left on desktop) */}
          <div className="lg:w-1/2 lg:order-2 h-[50vh] lg:h-auto lg:min-h-screen">
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&auto=format&fit=crop"
              alt="Client Portal"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Left Side - Forgot Password Form */}
          <div className="lg:w-1/2 lg:order-1 bg-[#FFFEFD] flex items-center px-6 lg:px-8 py-20 lg:py-24">
            <div className="w-full max-w-xl">
              {/* Header */}
              <h1
                className="font-editors-note text-[#380F05] mb-8 whitespace-nowrap"
                style={{
                  fontWeight: 1,
                  fontSize: '64px',
                  lineHeight: '100%',
                  letterSpacing: '0.03em'
                }}
              >
                FORGOT PASSWORD?
              </h1>

              {!codeSent ? (
                <>
                  {/* Description */}
                  <p
                    className="font-newsreader text-[#380F05] mb-12"
                    style={{
                      fontWeight: 300,
                      fontSize: '16px',
                      lineHeight: '25px'
                    }}
                  >
                    Please enter the email associated with your Hephzibah Luxe Client Portal, we will send 4 digits code to your email.
                  </p>

                  {/* Email Form */}
                  <form onSubmit={handleSendCode} className="space-y-6">
                    {/* Error Message - No Client Profile */}
                    {forgotPasswordError && (
                      <div
                        className="w-full px-6 py-4 flex items-center gap-3"
                        style={{
                          backgroundColor: 'rgba(213, 0, 0, 0.4)',
                          border: '1px solid #D50000'
                        }}
                      >
                        <img
                          src={errorIcon}
                          alt="Error"
                          className="flex-shrink-0 w-5 h-5"
                        />
                        <p
                          className="font-lato"
                          style={{
                            fontWeight: 500,
                            fontSize: '16px',
                            color: '#2B0202'
                          }}
                        >
                          Sorry, no client profile associated with this email was found.
                        </p>
                      </div>
                    )}

                    <FloatingLabelInput
                      label="Your Email Address"
                      name="forgotEmail"
                      type="email"
                      required
                      value={forgotPasswordEmail}
                      onChange={(e) => {
                        setForgotPasswordEmail(e.target.value);
                        // Clear error when user starts typing
                        if (forgotPasswordError) setForgotPasswordError(false);
                      }}
                    />

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
                        SEND CODE
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </button>

                      <button
                        onClick={handleBackToLogin}
                        className="font-lato text-[#380F05] underline hover:opacity-70 transition-opacity"
                        style={{
                          fontWeight: 300,
                          fontSize: '15px'
                        }}
                      >
                        Remember password? Login
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <>
                  {/* Code Sent Message */}
                  <div
                    className="font-newsreader text-[#380F05] mb-8 whitespace-nowrap"
                    style={{
                      fontWeight: 300,
                      fontSize: '16px',
                      lineHeight: '25px'
                    }}
                  >
                    Please check your email. We have sent a code to{' '}
                    <span 
                      style={{ fontWeight: 400 }}
                    >
                      {forgotPasswordEmail}
                    </span>
                  </div>

                  {/* Verification Code Form */}
                  <form onSubmit={handleVerifyCode} className="space-y-6">
                    {/* 4-Digit Code Input - Centered */}
                    <div className="flex gap-4 justify-center">
                      {[0, 1, 2, 3].map((index) => (
                        <input
                          key={index}
                          id={`code-${index}`}
                          type="text"
                          inputMode="numeric"
                          maxLength={1}
                          value={verificationCode[index]}
                          onChange={(e) => handleCodeChange(index, e.target.value)}
                          onKeyDown={(e) => handleCodeKeyDown(index, e)}
                          className="w-16 h-16 text-center font-lato text-2xl focus:outline-none focus:ring-2 focus:ring-[#380F05] focus:border-transparent"
                          style={{
                            fontWeight: 500,
                            color: codeError ? '#D50000' : '#380F05',
                            border: codeError ? '2px solid #D50000' : '1px solid #380F05',
                            borderRadius: '15px',
                            backgroundColor: codeError ? 'rgba(213, 0, 0, 0.1)' : 'transparent'
                          }}
                        />
                      ))}
                    </div>

                    {/* Error Message - Incorrect Code */}
                    {codeError && (
                      <div className="flex items-center justify-center gap-2">
                        <img
                          src={circleErrorIcon}
                          alt="Error"
                          className="w-5 h-5"
                        />
                        <p
                          className="font-lato"
                          style={{
                            fontWeight: 400,
                            fontSize: '15px',
                            color: '#D50000'
                          }}
                        >
                          The code you entered is incorrect. Please try again
                        </p>
                      </div>
                    )}

                    {/* Resend Link - Centered */}
                    <p
                      className="font-lato text-center"
                      style={{
                        fontWeight: 300,
                        fontSize: '14px',
                        color: '#380F05'
                      }}
                    >
                      I haven't received a code.{' '}
                      <button
                        type="button"
                        onClick={handleSendCode}
                        className="underline hover:opacity-70 transition-opacity"
                        style={{
                          fontWeight: 400
                        }}
                      >
                        Resend
                      </button>
                    </p>

                    <div className="flex flex-col items-end gap-4">
                      <button
                        type="submit"
                        disabled={!isCodeComplete}
                        className="text-[#FFFEFD] font-lato py-3 px-9 transition-all duration-300 flex items-center justify-center gap-3 group"
                        style={{
                          fontWeight: 500,
                          fontSize: '18px',
                          letterSpacing: '0.05em',
                          backgroundColor: isCodeComplete ? '#380F05' : 'rgba(56, 15, 5, 0.5)',
                          cursor: isCodeComplete ? 'pointer' : 'not-allowed'
                        }}
                      >
                        VERIFY
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </button>

                      <button
                        onClick={handleBackToLogin}
                        className="font-lato text-[#380F05] underline hover:opacity-70 transition-opacity"
                        style={{
                          fontWeight: 300,
                          fontSize: '15px'
                        }}
                      >
                        Remember password? Login
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
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
                    backgroundColor: 'rgba(213, 0, 0, 0.4)',
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
                <button
                  onClick={handleForgotPasswordClick}
                  className="font-lato text-[#380F05] underline hover:opacity-70 transition-opacity"
                  style={{
                    fontWeight: 300,
                    fontSize: '15px'
                  }}
                >
                  Forgot Password?
                </button>
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
// import { useState } from 'react';
// import inquiryHeroBg from '../assets/images/inquiryHerobg.png';
// import logo from '../assets/logos/logo.svg';
// import FloatingLabelInput from '../components/FloatingLabelInput';
// import FloatingLabelSelect from '../components/FloatingLabelSelect';
// import DateRangePicker from '../components/DateRangePicker';
// import FloatingLabelTextarea from '../components/FloatingLabelTextarea';
// import PhoneInput from '../components/PhoneInput';
// import InstagramSection from '../components/InstagramSection';
// import * as flags from 'country-flag-icons/react/3x2';
// import whiteArrow from '../assets/icons/whitestraightArrow.svg';
// import darkArrow from '../assets/icons/straightArrow.svg';

// const Inquiries = () => {
//   // Form state
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     preferredContact: null,
//     eventType: null,
//     startDate: null,
//     endDate: null,
//     location: '',
//     budget: null,
//     additionalDetails: '',
//   });

//   const [countryCode, setCountryCode] = useState({
//     value: '+234',
//     code: 'NG',
//     country: 'Nigeria',
//     FlagComponent: flags.NG
//   });

//   // FAQ state
//   const [openFaqIndex, setOpenFaqIndex] = useState(null);

//   const [isHovered, setIsHovered] = useState(false);

//   const faqData = [
//     {
//       question: "What types of events do you plan?",
//       answer: `At Hephzibah Luxe, we plan every kind of celebration. From weddings and milestone birthdays to intimate dinners, naming ceremonies, private soirées, luxury picnics, corporate gatherings, and everything in between — if it deserves beauty, intention, and seamless execution, we curate it.

// No event is too small, too grand, or too unique. Whatever you're envisioning, we elevate it with elegance, structure, and thoughtful detail.`
//     },
//     {
//       question: "What planning options do you offer, and how do I choose the one that fits my event best?",
//       answer: `We offer three core levels of service across all event types — full planning, partial planning, and coordination. Each provides a different level of support depending on where you are in your planning journey and how involved you'd like us to be.

// If you're unsure which option fits your needs, we'll guide you. During your discovery conversation, we'll learn about your event's complexity, your timeline, and how much support you feel you need — and then recommend the package that serves you best.

// Because every celebration is unique, we also create custom-tailored packages for clients who require specific support. Whether you want complete end-to-end planning, selective guidance, or seamless event-day management, we ensure your experience is beautifully aligned with your vision.`
//     },
//     {
//       question: "Do you manage the event design process, including décor, styling, and visual direction?",
//       answer: `Yes — event design is an essential part of what we do. At Hephzibah Luxe, we guide the full creative direction of your event through visual boards, mood development, colour story, style curation, and overall aesthetic harmony. We shape the vision so that every detail feels intentional and beautifully aligned.

// However, we believe luxury experiences require specialists. For production, décor, florals, rentals, and technical styling, we collaborate exclusively with expert vendors who specialize in those areas. This ensures flawless execution, premium quality, and a seamless transformation of the concept we create together.

// We stay fully involved throughout the process — overseeing design consistency, managing vendor communication, and ensuring everything reflects the vision we've curated. You receive the benefit of a unified aesthetic without the stress of coordinating multiple creatives yourself.`
//     },
//     {
//       question: "How far in advance should we reach out to begin the planning process with Hephzibah Luxe?",
//       answer: `We welcome inquiries at any stage of your planning journey — whether you're far ahead, just beginning, or feeling pressed for time. However, for the most seamless experience, we encourage clients to reach out as early as possible. This allows us to secure premium vendors, build your vision intentionally, and craft a beautifully curated timeline without unnecessary pressure.

// Our recommendation:
// • For weddings, 4–6 months is ideal.
// • For social + private events, 2–3 months works beautifully.
// • For corporate events, timelines vary — but earlier is always better.

// Regardless of when you inquire, our role is the same: to bring structure, elegance, and ease to your event from the moment you connect with us.`
//     },
//     {
//       question: "How does budgeting work with Hephzibah Luxe, and do you accept events with varying investment levels?",
//       answer: `Yes — we thoughtfully guide clients across a range of budgets. Every event, whether large or intimate, deserves beauty, intention, and excellent planning. We don't exclude clients with smaller budgets; instead, we help you make the most of your investment while maintaining the elegance Hephzibah Luxe is known for.

// Our focus is always on clarity, honest guidance, and designing with purpose — ensuring the experience feels elevated at any scale. During your discovery process, we'll walk you through what's realistic, recommend the most suitable level of support, and tailor the experience to align with your priorities.`
//     },
//     {
//       question: "What does day-of presence and support look like for Hephzibah Luxe?",
//       answer: `We're with you from the very beginning to the very end of your event. Whether it's a wedding, birthday, naming ceremony, dinner, or corporate gathering, our lead planner stays onsite for the entire duration to ensure a seamless flow from setup to final wrap-up.

// There are no cut-off hours for our lead planner — you're never charged extra if things run longer than expected. Your day deserves uninterrupted support.`
//     },
//   ];

//   const toggleFaq = (index) => {
//     setOpenFaqIndex(openFaqIndex === index ? null : index);
//   };

//   const contactOptions = [
//     { value: 'email', label: 'Email Address' },
//     { value: 'phone', label: 'Phone Number' },
//   ];

//   const eventTypeOptions = [
//     { value: 'wedding', label: 'Wedding' },
//     { value: 'birthday', label: 'Birthday' },
//     { value: 'corporate', label: 'Corporate Event' },
//     { value: 'other', label: 'Other Social Event (e.g., Proposals, Naming Ceremonies, Private Dinners, etc.)' },
//   ];

//   const budgetOptions = [
//     { value: 'under-5m', label: 'Under ₦5,000,000' },
//     { value: '5m-10m', label: '₦5,000,000 - ₦10,000,000' },
//     { value: '10m-20m', label: '₦10,000,000 - ₦20,000,000' },
//     { value: '20m-50m', label: '₦20,000,000 - ₦50,000,000' },
//     { value: 'above-50m', label: 'Above ₦50,000,000' },
//   ];

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   return (
//     <div>
//       {/* CSS Animation */}
//       <style>
//         {`
//           @keyframes rotate-slow {
//             from {
//               transform: rotate(0deg);
//             }
//             to {
//               transform: rotate(360deg);
//             }
//           }
//           .rotating-text {
//             animation: rotate-slow 20s linear infinite;
//           }
//         `}
//       </style>

//       {/* Hero Section */}
//       <section className="relative w-full h-[70vh]">
//         {/* Background Image */}
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{ backgroundImage: `url(${inquiryHeroBg})` }}
//         >
//           {/* Optional overlay for better contrast */}
//           <div className="absolute inset-0 bg-black/10"></div>
//         </div>

//         {/* Rotating Logo Badge - Positioned bottom right */}
//         <div className="absolute bottom-8 right-10 lg:right-20">
//           <div className="relative w-56 h-56 lg:w-64 lg:h-64">
//             {/* Center Logo */}
//             <div className="absolute inset-0 flex items-center justify-center z-10">
//               <img src={logo} alt="Hephzibah Luxe" className="w-20 h-20 lg:w-24 lg:h-24" />
//             </div>

//             {/* Rotating Text */}
//             <svg
//               className="w-full h-full rotating-text"
//               viewBox="0 0 200 200"
//             >
//               <defs>
//                 <path
//                   id="circlePath"
//                   d="M 100, 100
//                      m -75, 0
//                      a 75,75 0 1,1 150,0
//                      a 75,75 0 1,1 -150,0"
//                 />
//               </defs>
//               <text
//                 fill="white"
//                 fontSize="14"
//                 fontFamily="Editors Note, serif"
//                 fontWeight="400"
//               >
//                 <textPath href="#circlePath" textLength="470" spacing="auto">
//                   • WORK WITH US • WORK WITH US • WORK WITH US&#160;
//                 </textPath>
//               </text>
//             </svg>
//           </div>
//         </div>
//       </section>

//       {/* Intro Text Section */}
//       <section className="bg-background px-6 lg:px-10 py-16 lg:py-20">
//         <div className="max-w-7xl mx-auto">
//           <div className="max-w-5xl">
//             {/* Main Heading */}
//             <h1
//               className="font-editors-note text-secondary text-6xl lg:text-7xl xl:text-8xl italic mb-8"
//               style={{ fontWeight: 100 }}
//             >
//               To Hephzibah Luxe:
//             </h1>

//             {/* Description Paragraphs */}
//             <div className="space-y-4">
//               <p className="font-newsreader text-primary text-base font-light leading-relaxed">
//                 We value each inquiry deeply, and we're excited to explore how we can bring grace, beauty, and excellence to your event. From weddings to milestone birthdays to elevated corporate gatherings, we design experiences that are intentional, refined, and unforgettable. Kindly share your details below, and our team will connect with you within 1-2 business days.
//               </p>
//               <p className="font-newsreader text-primary text-base font-light">
//                 Have a quick question? View our <a
//                   href="#faqs"
//                   className="underline font-medium"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     document.getElementById('faqs')?.scrollIntoView({ behavior: 'smooth' });
//                   }}
//                 >FAQs</a> below before submitting your inquiry.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Tell Us About Yourself Section */}
//       <section className="bg-background px-6 lg:px-10 pb-16">
//         <div className="max-w-7xl mx-auto">
//           {/* Section Header */}
//           <div className="mb-8">
//             <h2 className="font-newsreader text-secondary text-[28px] font-light italic mb-2">
//               Tell Us about Yourself
//             </h2>
//             <div className="w-full h-px bg-[#380F05] opacity-30"></div>
//           </div>

//           {/* Section Description */}
//           <p className="font-newsreader text-secondary text-[17px] font-light mb-10 max-w-4xl">
//             Let's begin with the essentials — how we can reach you. Your contact details ensure we reach out promptly and continue this conversation with the care and attention your event deserves.
//           </p>

//           {/* Form Fields */}
//           <div className="space-y-6">
//             {/* First Name & Last Name Row */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <FloatingLabelInput
//                 label="First Name"
//                 name="firstName"
//                 required
//                 value={formData.firstName}
//                 onChange={handleInputChange}
//               />
//               <FloatingLabelInput
//                 label="Last Name"
//                 name="lastName"
//                 required
//                 value={formData.lastName}
//                 onChange={handleInputChange}
//               />
//             </div>

//             {/* Email Address */}
//             <FloatingLabelInput
//               label="Your Email Address"
//               name="email"
//               type="email"
//               required
//               value={formData.email}
//               onChange={handleInputChange}
//             />

//             {/* Phone Number with Country Code */}
//             <PhoneInput
//               label="Your Phone Number"
//               name="phone"
//               required
//               value={formData.phone}
//               onChange={handleInputChange}
//               countryCode={countryCode}
//               onCountryChange={setCountryCode}
//             />

//             {/* Preferred Method of Contact */}
//             <FloatingLabelSelect
//               label="Your Preferred method of contact"
//               name="preferredContact"
//               required
//               options={contactOptions}
//               value={formData.preferredContact}
//               onChange={(option) => setFormData(prev => ({ ...prev, preferredContact: option }))}
//             />
//           </div>
//         </div>
//       </section>

//       {/* Tell Us About Your Event Section */}
//       <section className="bg-background px-6 lg:px-10 pb-16">
//         <div className="max-w-7xl mx-auto">
//           {/* Section Header */}
//           <div className="mb-8">
//             <h2 className="font-newsreader text-secondary text-[28px] font-light italic mb-2">
//               Tell Us about Your Event
//             </h2>
//             <div className="w-full h-px bg-[#380F05] opacity-30"></div>
//           </div>

//           {/* Section Description */}
//           <p className="font-newsreader text-secondary text-[17px] font-light mb-10 max-w-4xl">
//             Now, tell us a little about your celebration — whether it's a wedding, birthday, or corporate event. These details help us understand your vision and begin shaping an experience that feels intentional, elegant, and uniquely yours."
//           </p>

//           {/* Form Fields */}
//           <div className="space-y-6">
//             {/* Event Type */}
//             <FloatingLabelSelect
//               label="What type of event are you planning?"
//               name="eventType"
//               required
//               options={eventTypeOptions}
//               value={formData.eventType}
//               onChange={(option) => setFormData(prev => ({ ...prev, eventType: option }))}
//             />

//             {/* Preferred Date */}
//             <DateRangePicker
//               label="What are your preferred date(s)?"
//               name="preferredDate"
//               required
//               startDate={formData.startDate}
//               endDate={formData.endDate}
//               onStartDateChange={(date) => setFormData(prev => ({ ...prev, startDate: date }))}
//               onEndDateChange={(date) => setFormData(prev => ({ ...prev, endDate: date }))}
//             />

//             {/* Location */}
//             <FloatingLabelInput
//               label="What is your desired Location (State, Country)?"
//               name="location"
//               required
//               value={formData.location}
//               onChange={handleInputChange}
//             />

//             {/* Budget Range */}
//             <FloatingLabelSelect
//               label="What is your Budget Range?"
//               name="budget"
//               required
//               options={budgetOptions}
//               value={formData.budget}
//               onChange={(option) => setFormData(prev => ({ ...prev, budget: option }))}
//             />

//             {/* Additional Details */}
//             <FloatingLabelTextarea
//               label="Share some details with us about your wedding/event/project or add any additional comments you might find helpful"
//               name="additionalDetails"
//               required
//               value={formData.additionalDetails}
//               onChange={handleInputChange}
//               placeholder="e.g. my event date is approaching quickly, and I'm beginning to feel the pressure. I'm looking for a team who can step in and guide the entire process."
//               rows={6}
//             />
//           </div>

//           {/* Form Footer */}
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-12 gap-6">
//             {/* reCAPTCHA Notice */}
//             <p className="font-lato text-sm text-secondary">
//               This form is protected by reCAPTCHA and the Google{' '}
//               <a href="https://policies.google.com/privacy" className="underline" target="_blank" rel="noopener noreferrer">
//                 Privacy Policy
//               </a>{' '}
//               and{' '}
//               <a href="https://policies.google.com/terms" className="underline" target="_blank" rel="noopener noreferrer">
//                 Terms of Service
//               </a>{' '}
//               apply.
//             </p>

//             {/* Submit Button */}
//       <button
//         type="submit"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         className="bg-primary text-white font-lato text-base px-10 py-2 flex items-center gap-8 transition-all duration-500 hover:bg-[#FFFEFD] hover:text-[#2B0202] border-[1.5px] border-transparent hover:border-[#2B0202]"
//       >
//         <span 
//           style={{ 
//             fontWeight: 500,
//             fontSize: '20px',
//             lineHeight: '35px'
//           }}
//           className="font-lato"
//         >
//           SEND MESSAGE
//         </span>
        
//         <img 
//           src={isHovered ? darkArrow : whiteArrow} 
//           alt="arrow" 
//           className="w-5 h-auto transition-all duration-300" 
//         />
//       </button>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section id="faqs" className="bg-primary px-6 lg:px-10 py-16 lg:py-24">
//         <div className="max-w-7xl mx-auto">
//           {/* Section Title */}
//           <h2
//             className="font-editors-note text-[#FFFEFD] text-4xl lg:text-[48px] text-center mb-16"
//             style={{ fontWeight: 100 }}
//           >
//             Frequently Asked Questions
//           </h2>

//           {/* FAQ Items */}
//           <div className="space-y-0">
//             {faqData.map((faq, index) => (
//               <div key={index} className="border-t border-[#FFFEFD]/20">
//                 {/* Question */}
//                 <button
//                   onClick={() => toggleFaq(index)}
//                   className="w-full flex items-center justify-between py-6 text-left"
//                 >
//                   <span className="font-newsreader text-[#FFFEFD] text-[19px] font-normal pr-8">
//                     {faq.question}
//                   </span>
//                   <span className="text-[#FFFEFD] text-2xl font-light flex-shrink-0">
//                     {openFaqIndex === index ? '−' : '+'}
//                   </span>
//                 </button>

//                 {/* Answer */}
//                 <div
//                   className={`
//                     overflow-hidden transition-all duration-300 ease-in-out
//                     ${openFaqIndex === index ? 'max-h-[1000px] opacity-100 pb-8' : 'max-h-0 opacity-0'}
//                   `}
//                 >
//                   <div className="font-lato text-[#FFFEFD] text-base font-light leading-relaxed whitespace-pre-line">
//                     {faq.answer}
//                   </div>
//                 </div>
//               </div>
//             ))}
//             {/* Bottom border for last item */}
//             <div className="border-t border-[#FFFEFD]/20"></div>
//           </div>
//         </div>
//       </section>

//       {/* Instagram Section */}
//       <InstagramSection />
//     </div>
//   );
// };

// export default Inquiries;





import { useState, useEffect } from 'react';
import inquiryHeroBg from '../assets/images/inquiryHerobg.png';
import inquiryImage2 from '../assets/images/inquiryImage2.jpg';
import inquiryImage3 from '../assets/images/inquiryImage3.jpg';
import inquiryImage4 from '../assets/images/inquiryImage4.jpg';
import inquiryImage5 from '../assets/images/inquiryImage5.jpg';
import inquiryImage6 from '../assets/images/inquiryImage6.jpg';
import logo from '../assets/logos/logo.svg';
import FloatingLabelInput from '../components/FloatingLabelInput';
import FloatingLabelSelect from '../components/FloatingLabelSelect';
import DateRangePicker from '../components/DateRangePicker';
import FloatingLabelTextarea from '../components/FloatingLabelTextarea';
import PhoneInput from '../components/PhoneInput';
import InstagramSection from '../components/InstagramSection';
import * as flags from 'country-flag-icons/react/3x2';
import whiteArrow from '../assets/icons/whitestraightArrow.svg';
import darkArrow from '../assets/icons/straightArrow.svg';

// Hero images array
const heroImages = [
  inquiryHeroBg,
  inquiryImage2,
  inquiryImage3,
  inquiryImage4,
  inquiryImage5,
  inquiryImage6
];

const Inquiries = () => {
  // Hero image carousel state
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  // Hero image rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredContact: null,
    eventType: null,
    startDate: null,
    endDate: null,
    location: '',
    budget: null,
    additionalDetails: '',
  });

  const [countryCode, setCountryCode] = useState({
    value: '+234',
    code: 'NG',
    country: 'Nigeria',
    FlagComponent: flags.NG
  });

  // FAQ state
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const [isHovered, setIsHovered] = useState(false);

  const faqData = [
    {
      question: "What types of events do you plan?",
      answer: `At Hephzibah Luxe, we plan every kind of celebration. From weddings and milestone birthdays to intimate dinners, naming ceremonies, private soirées, luxury picnics, corporate gatherings, and everything in between — if it deserves beauty, intention, and seamless execution, we curate it.

No event is too small, too grand, or too unique. Whatever you're envisioning, we elevate it with elegance, structure, and thoughtful detail.`
    },
    {
      question: "What planning options do you offer, and how do I choose the one that fits my event best?",
      answer: `We offer three core levels of service across all event types — full planning, partial planning, and coordination. Each provides a different level of support depending on where you are in your planning journey and how involved you'd like us to be.

If you're unsure which option fits your needs, we'll guide you. During your discovery conversation, we'll learn about your event's complexity, your timeline, and how much support you feel you need — and then recommend the package that serves you best.

Because every celebration is unique, we also create custom-tailored packages for clients who require specific support. Whether you want complete end-to-end planning, selective guidance, or seamless event-day management, we ensure your experience is beautifully aligned with your vision.`
    },
    {
      question: "Do you manage the event design process, including décor, styling, and visual direction?",
      answer: `Yes — event design is an essential part of what we do. At Hephzibah Luxe, we guide the full creative direction of your event through visual boards, mood development, colour story, style curation, and overall aesthetic harmony. We shape the vision so that every detail feels intentional and beautifully aligned.

However, we believe luxury experiences require specialists. For production, décor, florals, rentals, and technical styling, we collaborate exclusively with expert vendors who specialize in those areas. This ensures flawless execution, premium quality, and a seamless transformation of the concept we create together.

We stay fully involved throughout the process — overseeing design consistency, managing vendor communication, and ensuring everything reflects the vision we've curated. You receive the benefit of a unified aesthetic without the stress of coordinating multiple creatives yourself.`
    },
    {
      question: "How far in advance should we reach out to begin the planning process with Hephzibah Luxe?",
      answer: `We welcome inquiries at any stage of your planning journey — whether you're far ahead, just beginning, or feeling pressed for time. However, for the most seamless experience, we encourage clients to reach out as early as possible. This allows us to secure premium vendors, build your vision intentionally, and craft a beautifully curated timeline without unnecessary pressure.

Our recommendation:
• For weddings, 4–6 months is ideal.
• For social + private events, 2–3 months works beautifully.
• For corporate events, timelines vary — but earlier is always better.

Regardless of when you inquire, our role is the same: to bring structure, elegance, and ease to your event from the moment you connect with us.`
    },
    {
      question: "How does budgeting work with Hephzibah Luxe, and do you accept events with varying investment levels?",
      answer: `Yes — we thoughtfully guide clients across a range of budgets. Every event, whether large or intimate, deserves beauty, intention, and excellent planning. We don't exclude clients with smaller budgets; instead, we help you make the most of your investment while maintaining the elegance Hephzibah Luxe is known for.

Our focus is always on clarity, honest guidance, and designing with purpose — ensuring the experience feels elevated at any scale. During your discovery process, we'll walk you through what's realistic, recommend the most suitable level of support, and tailor the experience to align with your priorities.`
    },
    {
      question: "What does day-of presence and support look like for Hephzibah Luxe?",
      answer: `We're with you from the very beginning to the very end of your event. Whether it's a wedding, birthday, naming ceremony, dinner, or corporate gathering, our lead planner stays onsite for the entire duration to ensure a seamless flow from setup to final wrap-up.

There are no cut-off hours for our lead planner — you're never charged extra if things run longer than expected. Your day deserves uninterrupted support.`
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const contactOptions = [
    { value: 'email', label: 'Email Address' },
    { value: 'phone', label: 'Phone Number' },
  ];

  const eventTypeOptions = [
    { value: 'wedding', label: 'Wedding' },
    { value: 'birthday', label: 'Birthday' },
    { value: 'corporate', label: 'Corporate Event' },
    { value: 'other', label: 'Other Social Event (e.g., Proposals, Naming Ceremonies, Private Dinners, etc.)' },
  ];

  const budgetOptions = [
    { value: 'under-5m', label: 'Under ₦5,000,000' },
    { value: '5m-10m', label: '₦5,000,000 - ₦10,000,000' },
    { value: '10m-20m', label: '₦10,000,000 - ₦20,000,000' },
    { value: '20m-50m', label: '₦20,000,000 - ₦50,000,000' },
    { value: 'above-50m', label: 'Above ₦50,000,000' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      {/* CSS Animation */}
      <style>
        {`
          @keyframes rotate-slow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          .rotating-text {
            animation: rotate-slow 20s linear infinite;
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="relative w-full h-[70vh]">
        {/* Background Images with Crossfade */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentHeroImage ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Rotating Logo Badge - Positioned bottom right */}
        <div className="absolute bottom-8 right-10 lg:right-20">
          <div className="relative w-56 h-56 lg:w-64 lg:h-64">
            {/* Center Logo */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <img src={logo} alt="Hephzibah Luxe" className="w-20 h-20 lg:w-24 lg:h-24" />
            </div>

            {/* Rotating Text */}
            <svg
              className="w-full h-full rotating-text"
              viewBox="0 0 200 200"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 100, 100
                     m -75, 0
                     a 75,75 0 1,1 150,0
                     a 75,75 0 1,1 -150,0"
                />
              </defs>
              <text
                fill="white"
                fontSize="14"
                fontFamily="Editors Note, serif"
                fontWeight="400"
              >
                <textPath href="#circlePath" textLength="470" spacing="auto">
                  • WORK WITH US • WORK WITH US • WORK WITH US&#160;
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="bg-background px-6 lg:px-10 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-5xl">
            {/* Main Heading */}
            <h1
              className="font-editors-note text-secondary text-6xl lg:text-7xl xl:text-8xl italic mb-8"
              style={{ fontWeight: 100 }}
            >
              To Hephzibah Luxe:
            </h1>

            {/* Description Paragraphs */}
            <div className="space-y-4">
              <p className="font-newsreader text-primary text-base font-light leading-relaxed">
                We value each inquiry deeply, and we're excited to explore how we can bring grace, beauty, and excellence to your event. From weddings to milestone birthdays to elevated corporate gatherings, we design experiences that are intentional, refined, and unforgettable. Kindly share your details below, and our team will connect with you within 1-2 business days.
              </p>
              <p className="font-newsreader text-primary text-base font-light">
                Have a quick question? View our <a
                  href="#faqs"
                  className="underline font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('faqs')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >FAQs</a> below before submitting your inquiry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tell Us About Yourself Section */}
      <section className="bg-background px-6 lg:px-10 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-8">
            <h2 className="font-newsreader text-secondary text-[28px] font-light italic mb-2">
              Tell Us about Yourself
            </h2>
            <div className="w-full h-px bg-[#380F05] opacity-30"></div>
          </div>

          {/* Section Description */}
          <p className="font-newsreader text-secondary text-[17px] font-light mb-10 max-w-4xl">
            Let's begin with the essentials — how we can reach you. Your contact details ensure we reach out promptly and continue this conversation with the care and attention your event deserves.
          </p>

          {/* Form Fields */}
          <div className="space-y-6">
            {/* First Name & Last Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FloatingLabelInput
                label="First Name"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleInputChange}
              />
              <FloatingLabelInput
                label="Last Name"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>

            {/* Email Address */}
            <FloatingLabelInput
              label="Your Email Address"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleInputChange}
            />

            {/* Phone Number with Country Code */}
            <PhoneInput
              label="Your Phone Number"
              name="phone"
              required
              value={formData.phone}
              onChange={handleInputChange}
              countryCode={countryCode}
              onCountryChange={setCountryCode}
            />

            {/* Preferred Method of Contact */}
            <FloatingLabelSelect
              label="Your Preferred method of contact"
              name="preferredContact"
              required
              options={contactOptions}
              value={formData.preferredContact}
              onChange={(option) => setFormData(prev => ({ ...prev, preferredContact: option }))}
            />
          </div>
        </div>
      </section>

      {/* Tell Us About Your Event Section */}
      <section className="bg-background px-6 lg:px-10 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-8">
            <h2 className="font-newsreader text-secondary text-[28px] font-light italic mb-2">
              Tell Us about Your Event
            </h2>
            <div className="w-full h-px bg-[#380F05] opacity-30"></div>
          </div>

          {/* Section Description */}
          <p className="font-newsreader text-secondary text-[17px] font-light mb-10 max-w-4xl">
            Now, tell us a little about your celebration — whether it's a wedding, birthday, or corporate event. These details help us understand your vision and begin shaping an experience that feels intentional, elegant, and uniquely yours."
          </p>

          {/* Form Fields */}
          <div className="space-y-6">
            {/* Event Type */}
            <FloatingLabelSelect
              label="What type of event are you planning?"
              name="eventType"
              required
              options={eventTypeOptions}
              value={formData.eventType}
              onChange={(option) => setFormData(prev => ({ ...prev, eventType: option }))}
            />

            {/* Preferred Date */}
            <DateRangePicker
              label="What are your preferred date(s)?"
              name="preferredDate"
              required
              startDate={formData.startDate}
              endDate={formData.endDate}
              onStartDateChange={(date) => setFormData(prev => ({ ...prev, startDate: date }))}
              onEndDateChange={(date) => setFormData(prev => ({ ...prev, endDate: date }))}
            />

            {/* Location */}
            <FloatingLabelInput
              label="What is your desired Location (State, Country)?"
              name="location"
              required
              value={formData.location}
              onChange={handleInputChange}
            />

            {/* Budget Range */}
            <FloatingLabelSelect
              label="What is your Budget Range?"
              name="budget"
              required
              options={budgetOptions}
              value={formData.budget}
              onChange={(option) => setFormData(prev => ({ ...prev, budget: option }))}
            />

            {/* Additional Details */}
            <FloatingLabelTextarea
              label="Share some details with us about your wedding/event/project or add any additional comments you might find helpful"
              name="additionalDetails"
              required
              value={formData.additionalDetails}
              onChange={handleInputChange}
              placeholder="e.g. my event date is approaching quickly, and I'm beginning to feel the pressure. I'm looking for a team who can step in and guide the entire process."
              rows={6}
            />
          </div>

          {/* Form Footer */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-12 gap-6">
            {/* reCAPTCHA Notice */}
            <p className="font-lato text-sm text-secondary">
              This form is protected by reCAPTCHA and the Google{' '}
              <a href="https://policies.google.com/privacy" className="underline" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href="https://policies.google.com/terms" className="underline" target="_blank" rel="noopener noreferrer">
                Terms of Service
              </a>{' '}
              apply.
            </p>

            {/* Submit Button */}
      <button
        type="submit"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="bg-primary text-white font-lato text-base px-10 py-2 flex items-center gap-8 transition-all duration-500 hover:bg-[#FFFEFD] hover:text-[#2B0202] border-[1.5px] border-transparent hover:border-[#2B0202]"
      >
        <span 
          style={{ 
            fontWeight: 500,
            fontSize: '20px',
            lineHeight: '35px'
          }}
          className="font-lato"
        >
          SEND MESSAGE
        </span>
        
        <img 
          src={isHovered ? darkArrow : whiteArrow} 
          alt="arrow" 
          className="w-5 h-auto transition-all duration-300" 
        />
      </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faqs" className="bg-primary px-6 lg:px-10 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2
            className="font-editors-note text-[#FFFEFD] text-4xl lg:text-[48px] text-center mb-16"
            style={{ fontWeight: 100 }}
          >
            Frequently Asked Questions
          </h2>

          {/* FAQ Items */}
          <div className="space-y-0">
            {faqData.map((faq, index) => (
              <div key={index} className="border-t border-[#FFFEFD]/20">
                {/* Question */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between py-6 text-left"
                >
                  <span className="font-newsreader text-[#FFFEFD] text-[19px] font-normal pr-8">
                    {faq.question}
                  </span>
                  <span className="text-[#FFFEFD] text-2xl font-light flex-shrink-0">
                    {openFaqIndex === index ? '−' : '+'}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`
                    overflow-hidden transition-all duration-300 ease-in-out
                    ${openFaqIndex === index ? 'max-h-[1000px] opacity-100 pb-8' : 'max-h-0 opacity-0'}
                  `}
                >
                  <div className="font-lato text-[#FFFEFD] text-base font-light leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
            {/* Bottom border for last item */}
            <div className="border-t border-[#FFFEFD]/20"></div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <InstagramSection />
    </div>
  );
};

export default Inquiries;
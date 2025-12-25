import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import whiteArrow from '../assets/icons/whitestraightArrow.svg';
import straightArrow from '../assets/icons/straightArrow.svg';
import redLogo from '../assets/logos/redLogo.svg';
import howWeServeImage from '../assets/images/howweserve.svg';
// Hero section images
import fourthAfterImage from '../assets/images/fourthafter.jpg';
import weddingImage from '../assets/images/weddingImage.png';
import whyWorkImage from '../assets/images/whyWorkImage.png';
import jumaCoupleImage from '../assets/images/jumacouple.jpg';
import exploreImage from '../assets/images/exploreImage.png';
import afterImage from '../assets/images/afterImage.jpg';
import diningImage from '../assets/images/diningImage.png';
import blackCoupleImage from '../assets/images/blackcouple.png';
// About section images
import birthdayImage from '../assets/images/birthdayImage.png';
// Portfolio carousel images
import flowerImage from '../assets/images/flowerImage.png';
import secondAfterImage from '../assets/images/secondafter.png';
import brownCoupleImage from '../assets/images/browncouple.jpg';
import mindyImage from '../assets/images/mindyImage.jpg';
// Where Your Celebration Takes Shape section
import luxuryBg from '../assets/images/luxuryBg.jpg';
// Testimonial images
import risiImage from '../assets/images/risiImage.png';
import poseImage from '../assets/images/poseImage.png';
import chairImage from '../assets/images/chairImage.jpg';
import InstagramSection from '../components/InstagramSection';

// Portfolio Carousel Component
const PortfolioCarousel = () => {
  const portfolioImages = [
    flowerImage,
    jumaCoupleImage,
    secondAfterImage,
    brownCoupleImage,
    mindyImage
  ];

  return (
    <div className="relative h-full min-h-[270px] lg:min-h-[370px] bg-[#FFFEFD] overflow-hidden">
      <div className="flex h-full animate-portfolio-scroll">
        {/* Triple the images for seamless infinite loop */}
        {[...portfolioImages, ...portfolioImages, ...portfolioImages].map((image, index) => (
          <div 
            key={index} 
            className="flex-none w-1/2 h-full p-1"
            style={{ backgroundColor: '#FFFEFD' }}
          >
            <img
              src={image}
              alt={`Portfolio ${(index % portfolioImages.length) + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <style>{`
        @keyframes portfolio-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${(portfolioImages.length * 50)}%);
          }
        }
        .animate-portfolio-scroll {
          animation: portfolio-scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

const Home = () => {
  // Array of background images for hero section
  const heroImages = [
    fourthAfterImage,
    weddingImage,
    whyWorkImage,
    jumaCoupleImage,
    exploreImage,
    afterImage,
    diningImage,
    blackCoupleImage
  ];

  // Images for the about section carousel
  const aboutImages = [
    diningImage,
    exploreImage,
    birthdayImage
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeAboutImage, setActiveAboutImage] = useState(0);
  
    const testimonials = [
      {
        name: "Risi & Tunde",
        subtitle: "Their Cultural & Modern Fusion Wedding",
        quote: "\"Wow, just wow! The day felt like a celebration of legacy. Both our culture were honoured with such respect and artistry, weaving tradition and modern elegance together seamlessly. The flow, the coordination... everything was handled with such care. We were able to fully embrace the meaning of the day without stress or worry. It was powerful, beautiful, and unforgettable.\"",
        buttonText: "View their Wedding",
        image: risiImage
      },
      {
        name: "Stephanie",
        subtitle: "Her Modern 30th Birthday Dinner Soirée",
        quote: "\"From the moment we began planning, I felt completely supported. Hephzibah Luxe not only understood my style, they elevated it. The design was stunning, but the service was even more impressive — calm, organized, and so thoughtful. The evening flowed flawlessly, allowing me to simply enjoy my 30th surrounded by the people I love. It was everything I hoped for and so much more.\"",
        buttonText: "View her Birthday",
        image: poseImage
      },
      {
        name: "Shola, Manager",
        subtitle: "Focus Quest Group's Innovation Launch Event",
        quote: "\"Hephzibah Luxe delivered an exceptionally well-organised event from start to finish. Their attention to detail, calm coordination, and ability to manage multiple stakeholders allowed our team to focus on the purpose of the launch while trusting that every element was handled seamlessly. The experience was polished, professional, and executed to a very high standard.\"",
        buttonText: "View their Launch",
        image: chairImage
      }
    ];
  
    // Auto-slide testimonials every 10 seconds with infinite scroll
    useEffect(() => {
      const carousel = document.getElementById('testimonials-carousel');
      if (!carousel) return;

      const interval = setInterval(() => {
        setActiveTestimonial((prev) => {
          const nextIndex = prev + 1;
          
          // Apply smooth transition
          carousel.style.transition = 'transform 0.7s ease-in-out';
          carousel.style.transform = `translateX(-${nextIndex * 100}%)`;
          
          // When we reach the end of duplicated set, seamlessly reset
          if (nextIndex >= testimonials.length) {
            setTimeout(() => {
              carousel.style.transition = 'none';
              carousel.style.transform = `translateX(0%)`;
            }, 700);
            return 0;
          }
          
          return nextIndex;
        });
      }, 10000);
      
      return () => clearInterval(interval);
    }, [testimonials.length]);

    // Auto-slide about images every 3 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        setActiveAboutImage((prev) => (prev + 1) % aboutImages.length);
      }, 3000);
      return () => clearInterval(interval);
    }, [aboutImages.length]);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[115vh] bg-[#2B0202] overflow-hidden">

        {/* Background Image Grid 
            - Removed p-4 so images touch the edges 
            - Images will be cut off by the section bounds naturally
        */}
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-2 gap-4">
          {heroImages.map((image, index) => (
            <div key={index} className="relative overflow-hidden h-full w-full">
              <img
                src={image}
                alt={`Hero ${index + 1}`}
                // increased scale slightly to ensure good coverage
                className="w-full h-full object-cover scale-[1.6]"
              />
            </div>
          ))}
        </div>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        {/* Increased padding-top to pt-72 to push text further down */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-56 pb-20">
          {/* Main Heading */}
          <h1 className="text-center mb-8">
            {/* First Line: ARCHITECTS of THOUGHTFUL */}
            {/* Increased gap to gap-8 for more space between words */}
            <div className="flex items-center justify-center gap-8 flex-unwrap">
              <span
                className="font-editors-note text-[#FFFEFD]"
                style={{
                  fontWeight: 1,
                  fontSize: '100px',
                  lineHeight: '110px'
                }}
              >
                ARCHITECTS
              </span>
              <span
                className="font-editors-note text-[#FFFEFD] italic"
                style={{
                  fontWeight: 1,
                  fontSize: '100px',
                  lineHeight: '110px'
                }}
              >
                of
              </span>
              <span
                className="font-editors-note text-[#FFFEFD]"
                style={{
                  fontWeight: 1,
                  fontSize: '100px',
                  lineHeight: '110px'
                }}
              >
                THOUGHTFUL
              </span>
            </div>

            {/* Second Line: CELEBRATIONS */}
            <span
              className="font-editors-note text-[#FFFEFD] block mt-2"
              style={{
                fontWeight: 1,
                fontSize: '100px',
                lineHeight: '110px'
              }}
            >
              CELEBRATIONS
            </span>
          </h1>

          {/* Description */}
          <p
            className="font-newsreader text-[#FFFEFD] text-center max-w-xl"
            style={{
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '28px',
              letterSpacing: '-0.01em'
            }}
          >
            A design-led wedding and event planning & design studio shaping celebrations with intention and grace.
          </p>
        </div>
      </section>


      {/* About Section */}
      <section className="relative bg-[#FFFEFD] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            {/* Left - Content */}
            <div className="flex flex-col">
              {/* Logo */}
              <div className="mb-8">
                <img 
                  src={redLogo} 
                  alt="Hephzibah Luxe" 
                  className="h-32 lg:h-40"
                />
              </div>

              {/* Heading */}
              <h2 
                className="font-editors-note text-[#2B0202] text-[40px] lg:text-[48px] mb-8"
                style={{ 
                  fontWeight: 100,
                  lineHeight: '1.2'
                }}
              >
                Behind every seamless celebration is a team defined by care, professionalism, and genuine connection.
              </h2>

              {/* Body Text */}
              <div className="space-y-6 mb-8">
                <p 
                  className="font-newsreader text-[#2B0202] text-[16px] lg:text-[18px]"
                  style={{ 
                    fontWeight: 200,
                    lineHeight: '28px'
                  }}
                >
                  Hephzibah Luxe is a design-led wedding and event planning studio guided by intention, care, and refined execution. Our work is shaped by years of experience, a deep respect for meaningful moments, and the belief that celebrations should feel personal, considered, and beautifully brought to life.
                </p>

                <p 
                  className="font-newsreader text-[#2B0202] text-[16px] lg:text-[18px]"
                  style={{ 
                    fontWeight: 200,
                    lineHeight: '28px'
                  }}
                >
                  From intimate gatherings to milestone celebrations, we approach every event with presence, creativity, and thoughtful collaboration — curating experiences that feel effortless, warm, and memorable.
                </p>

                <p 
                  className="font-newsreader text-[#2B0202] text-[16px] lg:text-[18px] italic"
                  style={{ 
                    fontWeight: 200,
                    lineHeight: '28px'
                  }}
                >
                  The story behind our work is one best discovered through our journey.
                </p>
              </div>

              {/* Button */}
              <Link
                to="/about"
                className="inline-flex items-center justify-center border border-[#2B0202] px-6 py-3 hover:bg-[#2B0202] hover:text-[#FFFEFD] transition-colors duration-300 group w-fit"
              >
                <span
                  className="font-newsreader italic text-[#2B0202] text-[18px] lg:text-[20px] group-hover:text-[#FFFEFD]"
                  style={{ fontWeight: 300 }}
                >
                  About the Brand
                </span>
                <img
                  src={straightArrow}
                  alt=""
                  className="ml-4 w-5 h-3 group-hover:hidden"
                />
                <img
                  src={whiteArrow}
                  alt=""
                  className="ml-4 w-5 h-3 hidden group-hover:block"
                />
              </Link>
            </div>

            {/* Right - Image Carousel */}
            <div className="relative w-full h-[500px] lg:h-full">
              {aboutImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`About ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === activeAboutImage ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* How We Serve You Section */}
      <section className="bg-[#FFFEFD] py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left - SVG Image */}
          <div className="h-[600px] lg:h-[800px]">
            <img
              src={howWeServeImage}
              alt="How We Serve You"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Right - Content */}
          <div className="flex flex-col justify-end px-8 lg:px-16 py-16 lg:py-0">
            {/* Our Services Header */}
            <h3 className="mb-8">
              <span
                className="font-editors-note text-[#380F05]"
                style={{
                  fontWeight: 100,
                  fontSize: '50px',
                  lineHeight: '60px'
                }}
              >
                Our{' '}
              </span>
              <span
                className="font-editors-note italic text-[#380F05]"
                style={{
                  fontWeight: 100,
                  fontSize: '50px',
                  lineHeight: '60px'
                }}
              >
                Services
              </span>
            </h3>

            {/* Description Paragraphs */}
            <p
              className="font-newsreader text-[#380F05] mb-6"
              style={{
                fontWeight: 300,
                fontSize: '18px',
                lineHeight: '28px'
              }}
            >
              Every celebration begins with a vision — and our role is to help shape it with clarity, care, and intention. From weddings and milestone celebrations to corporate and social events, we support our clients through each decision, translating ideas into thoughtfully executed experiences.
            </p>

            <p
              className="font-newsreader text-[#380F05] mb-10"
              style={{
                fontWeight: 300,
                fontSize: '18px',
                lineHeight: '28px'
              }}
            >
              Our work is design-led and deeply personal, focused on creating environments that feel warm, inviting, and elevated — spaces where guests feel both comfortable and captivated. Whether we are working within an intimate venue or a larger setting, our approach remains the same: transforming each space into a celebration that feels immersive, meaningful, and unmistakably yours.
            </p>

            {/* CTA Button */}
            <Link
              to="/services"
              className="inline-flex items-center justify-center border border-[#380F05] px-6 py-3 hover:bg-[#380F05] hover:text-[#FFFEFD] transition-colors duration-300 group w-fit"
            >
              <span
                className="font-newsreader italic text-[#380F05] text-[18px] lg:text-[20px] group-hover:text-[#FFFEFD]"
                style={{ fontWeight: 300 }}
              >
                Explore Our Services
              </span>
              <img
                src={straightArrow}
                alt=""
                className="ml-4 w-5 h-3 group-hover:hidden"
              />
              <img
                src={whiteArrow}
                alt=""
                className="ml-4 w-5 h-3 hidden group-hover:block"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Our Portfolio Section */}
      <section className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[470px]">
          {/* Left Column - Full height with cream top and dark bottom */}
          <div className="lg:col-span-5 flex flex-col">
            {/* Top - Cream/White background with italic text */}
            <div className="bg-[#FFFEFD] px-8 lg:px-12 py-12 lg:py-16">
              <p
                className="font-newsreader italic text-[#380F05]"
                style={{
                  fontWeight: 300,
                  fontSize: '22px',
                  lineHeight: '36px'
                }}
              >
                Designed with care, guided by experience, and brought together with presence
              </p>
            </div>

            {/* Bottom - Dark background with Portfolio content - grows to fill remaining space */}
            <div className="bg-[#380F05] px-8 lg:px-12 py-12 lg:py-16 flex-1 flex flex-col justify-center">
              {/* Our Portfolio Header */}
              <h3 className="mb-6">
                <span
                  className="font-editors-note text-[#FFFEFD]"
                  style={{
                    fontWeight: 100,
                    fontSize: '50px',
                    lineHeight: '60px'
                  }}
                >
                  Our{' '}
                </span>
                <span
                  className="font-editors-note italic text-[#FFFEFD]"
                  style={{
                    fontWeight: 100,
                    fontSize: '50px',
                    lineHeight: '60px'
                  }}
                >
                  Portfolio
                </span>
              </h3>

              {/* Description */}
              <p
                className="font-newsreader text-[#FFFEFD] mb-8"
                style={{
                  fontWeight: 200,
                  fontSize: '16px',
                  lineHeight: '26px'
                }}
              >
                Explore the moments we've brought to life through intentional planning and thoughtful design. Each celebration reflects a story of care, collaboration, and experience.
              </p>

              {/* CTA Button */}
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center border border-[#FFFEFD] px-6 py-3 hover:bg-[#FFFEFD] hover:text-[#2B0202] transition-colors duration-300 group w-fit"
              >
                <span
                  className="font-newsreader italic text-[#FFFEFD] text-[16px] lg:text-[18px] group-hover:text-[#2B0202]"
                  style={{ fontWeight: 300 }}
                >
                  View Our Past Projects
                </span>
                <img
                  src={whiteArrow}
                  alt=""
                  className="ml-4 w-5 h-3 group-hover:hidden"
                />
                <img
                  src={straightArrow}
                  alt=""
                  className="ml-4 w-5 h-3 hidden group-hover:block"
                />
              </Link>
            </div>
          </div>

          {/* Right Column - Image Carousel aligned with dark section */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Spacer to align with cream section height */}
            <div className="hidden lg:block" style={{ height: '140px' }}></div>
            {/* Carousel fills remaining space */}
            <div className="flex-1 relative overflow-hidden bg-[#FFFEFD]">
              <PortfolioCarousel />
            </div>
            {/* Dark space below the carousel */}
            <div className="bg-[#380F05] h-16 lg:h-24"></div>
          </div>
        </div>
      </section>

      {/* Before & After CTA Section */}
      <section className="bg-[#FFFEFD] py-20 lg:py-28 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Text */}
          <p
            className="font-editors-note text-[#380F05] mb-12"
            style={{
              fontWeight: 100,
              fontSize: '40px',
              lineHeight: '55px'
            }}
          >
            Our work goes beyond planning — it's about reimagining spaces with intention and care. Explore how thoughtful design transforms familiar settings into meaningful, elevated celebrations. These before-and-after moments reveal how vision and design can completely change the way a space feels.
          </p>

          {/* CTA Button */}
          <Link
            to="/before-after"
            className="inline-flex items-center justify-center border border-[#380F05] px-8 py-4 hover:bg-[#380F05] hover:text-[#FFFEFD] transition-colors duration-300 group"
          >
            <span
              className="font-newsreader italic text-[#380F05] group-hover:text-[#FFFEFD]"
              style={{ 
                fontWeight: 300,
                fontSize: '20px',
                lineHeight: '35px'
              }}
            >
              View Our Before & After
            </span>
            <img
              src={straightArrow}
              alt=""
              className="ml-4 w-5 h-3 group-hover:hidden"
            />
            <img
              src={whiteArrow}
              alt=""
              className="ml-4 w-5 h-3 hidden group-hover:block"
            />
          </Link>
        </div>
      </section>

      {/* Where Your Celebration Takes Shape Section */}
      <section className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left - Image */}
          <div className="h-[500px] lg:h-[700px]">
            <img
              src={luxuryBg}
              alt="Elegant table setting"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right - Content */}
          <div className="bg-[#2B0202] flex flex-col items-center justify-center px-8 lg:px-16 py-16 lg:py-0 text-center h-[500px] lg:h-[700px]">
            {/* Header */}
            <h2
              className="font-editors-note text-[#FFFEFD] mb-8"
              style={{
                fontWeight: 100,
                fontSize: '35px',
                lineHeight: '100%',
                letterSpacing: '1%'
              }}
            >
              Where Your Celebration Takes Shape
            </h2>

            {/* Paragraph */}
            <p
              className="font-newsreader text-[#FFFEFD] mb-10 max-w-md"
              style={{
                fontWeight: 300,
                fontSize: '19px',
                lineHeight: '35px'
              }}
            >
              Ready to start planning a celebration that feels thoughtful, meaningful, and beautifully considered? Whether you're at the early stages or refining the details, we're here to listen and guide you with care. We would love to hear more about your vision.
            </p>

            {/* CTA Button */}
            <Link
              to="/inquiries"
              className="inline-flex items-center justify-center border border-[#FFFEFD] px-6 py-3 hover:bg-[#FFFEFD] hover:text-[#2B0202] transition-colors duration-300 group"
            >
              <span
                className="font-newsreader italic text-[#FFFEFD] text-[18px] group-hover:text-[#2B0202]"
                style={{ fontWeight: 300 }}
              >
                Send us a message
              </span>
              <img
                src={whiteArrow}
                alt=""
                className="ml-4 w-5 h-3 group-hover:hidden"
              />
              <img
                src={straightArrow}
                alt=""
                className="ml-4 w-5 h-3 hidden group-hover:block"
              />
            </Link>
          </div>
        </div>
      </section>


      {/* Infinite Marquee Section */}
      <section className="bg-[#FFFEFD] py-6 overflow-hidden">
        <div className="relative flex">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(10)].map((_, index) => (
              <span
                key={index}
                className="font-newsreader italic mx-4"
                style={{
                  fontWeight: 300,
                  fontSize: '40px',
                  lineHeight: '35px',
                  letterSpacing: '0.01em',
                  color: '#2B0202'
                }}
              >
                Start with intention · End with an unforgettable celebration ·
              </span>
            ))}
          </div>
          <div className="flex animate-marquee whitespace-nowrap" aria-hidden="true">
            {[...Array(10)].map((_, index) => (
              <span
                key={index}
                className="font-newsreader italic mx-4"
                style={{
                  fontWeight: 300,
                  fontSize: '40px',
                  lineHeight: '35px',
                  letterSpacing: '0.01em',
                  color: '#2B0202'
                }}
              >
                Start with intention · End with an unforgettable celebration ·
              </span>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          .animate-marquee {
            animation: marquee 120s linear infinite;
          }
        `}</style>
      </section>


      {/* Testimonials Carousel Section */}
      <section className="relative z-40 bg-[#2B0202] py-16 lg:py-20 overflow-hidden">
        <div className="relative">
          {/* Scrollable Container */}
          <div
            className="flex hide-scrollbar"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
            id="testimonials-carousel"
          >
            {/* Duplicate testimonials for infinite loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="flex-none w-full"
                data-index={index}
              >
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
                  <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-12 items-center">
                    {/* Left - Image (40%) */}
                    <div className="lg:col-span-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-[400px] lg:h-[500px] object-cover"
                      />
                    </div>

                    {/* Right - Content (60%) */}
                    <div className="lg:col-span-6 text-[#FFFEFD]">
                      <h2
                        className="font-editors-note text-[40px] lg:text-[60px] mb-6"
                        style={{ fontWeight: 100 }}
                      >
                        {testimonial.name}
                      </h2>

                      <h3
                        className="font-newsreader text-[18px] lg:text-[20px] mb-4"
                        style={{ fontWeight: 500 }}
                      >
                        {testimonial.subtitle}
                      </h3>

                      <p
                        className="font-newsreader text-[17px] lg:text-[20px] mb-8"
                        style={{ fontWeight: 300, lineHeight: '30px' }}
                      >
                        {testimonial.quote}
                      </p>

                      {/* CTA Button */}
                      <Link
                        to="/portfolio"
                        className="inline-flex items-center justify-center border border-[#FFFEFD] px-6 py-3 hover:bg-[#FFFEFD] hover:text-[#2B0202] transition-colors duration-300 group"
                      >
                        <span
                          className="font-newsreader italic text-[#FFFEFD] text-[18px] lg:text-[20px] group-hover:text-[#2B0202]"
                          style={{ fontWeight: 300 }}
                        >
                          {testimonial.buttonText}
                        </span>
                        <img
                          src={whiteArrow}
                          alt=""
                          className="ml-4 w-5 h-3 group-hover:hidden"
                        />
                        <img
                          src={straightArrow}
                          alt=""
                          className="ml-4 w-5 h-3 hidden group-hover:block"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveTestimonial(index);
                  const carousel = document.getElementById('testimonials-carousel');
                  if (carousel) {
                    carousel.style.transition = 'transform 0.7s ease-in-out';
                    carousel.style.transform = `translateX(-${index * 100}%)`;
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${activeTestimonial % testimonials.length === index
                    ? 'bg-[#FFFEFD]'
                    : 'bg-[#C4C4C4]/50 border border-[#FFFEFD]'
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>


      {/* Instagram Section */}
      <InstagramSection />
    </div>
  );
};

export default Home;
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import servicesHeroBg from '../assets/images/servicesHerobg.png';
import whyWorkImage from '../assets/images/whyWorkImage.png';
import checkIcon from '../assets/icons/checkIcon.svg';
import planningImage from '../assets/images/planningImage.png';
import creativeImage from '../assets/images/creativeImage.png';
import elevatedImage from '../assets/images/elevatedImage.png';
import curlyArrow from '../assets/icons/curlyArrow.svg';
import redCurlyArrow from '../assets/icons/redcurlyArrow.svg';
import whiteArrow from '../assets/icons/whitestraightArrow.svg';
import straightArrow from '../assets/icons/straightArrow.svg';
import luxuryBg from '../assets/images/luxuryBg.jpg';
import InstagramSection from '../components/InstagramSection';

const Services = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Risi & Tunde",
      subtitle: "Their Cultural & Modern Fusion Wedding",
      quote: "\"Wow, just wow! The day felt like a celebration of legacy. Both our culture were honoured with such respect and artistry, weaving tradition and modern elegance together seamlessly. The flow, the coordination... everything was handled with such care. We were able to fully embrace the meaning of the day without stress or worry. It was powerful, beautiful, and unforgettable.\"",
      buttonText: "View their Wedding",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop"
    },
    {
      name: "Stephanie",
      subtitle: "Her Modern 30th Birthday Dinner Soirée",
      quote: "\"From the moment we began planning, I felt completely supported. Hephzibah Luxe not only understood my style, they elevated it. The design was stunning, but the service was even more impressive — calm, organized, and so thoughtful. The evening flowed flawlessly, allowing me to simply enjoy my 30th surrounded by the people I love. It was everything I hoped for and so much more.\"",
      buttonText: "View her Birthday",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format&fit=crop"
    },
    {
      name: "Shola, Manager",
      subtitle: "Focus Quest Group's Innovation Launch Event",
      quote: "\"Hephzibah Luxe delivered an exceptionally well-organised event from start to finish. Their attention to detail, calm coordination, and ability to manage multiple stakeholders allowed our team to focus on the purpose of the launch while trusting that every element was handled seamlessly. The experience was polished, professional, and executed to a very high standard.\"",
      buttonText: "View their Launch",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop"
    },
    {
      name: "Adaeze & Chukwuemeka",
      subtitle: "Their Traditional Wedding Ceremony",
      quote: "\"Every detail was perfect. From the traditional elements to the modern touches, Hephzibah Luxe understood our vision completely. The day was seamless, elegant, and filled with so much joy. We couldn't have asked for a better team to bring our celebration to life.\"",
      buttonText: "View their Wedding",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&auto=format&fit=crop"
    },
    {
      name: "The Okonkwo Family",
      subtitle: "Baby Naming & Dedication Ceremony",
      quote: "\"Such a beautiful and intimate celebration. Hephzibah Luxe created an atmosphere that was warm, elegant, and deeply meaningful. Every guest commented on how special the day felt. We're so grateful for their care and attention.\"",
      buttonText: "View their Ceremony",
      image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=800&auto=format&fit=crop"
    }
  ];

  // Auto-slide testimonials every 5 seconds with smooth scroll
  useEffect(() => {
    const interval = setInterval(() => {
      const carousel = document.getElementById('testimonials-carousel');
      if (!carousel) return;

      const slideWidth = carousel.offsetWidth;
      const currentScroll = carousel.scrollLeft;
      const maxScroll = slideWidth * (testimonials.length - 1);

      // If at last slide, quickly reset to start then animate to first slide position
      if (currentScroll >= maxScroll - 10) {
        // We're at the last slide, smoothly scroll to first
        carousel.scrollTo({
          left: 0,
          behavior: 'smooth'
        });
        setActiveTestimonial(0);
      } else {
        // Normal scroll to next slide
        setActiveTestimonial((prev) => {
          const nextIndex = prev + 1;
          carousel.scrollTo({
            left: nextIndex * slideWidth,
            behavior: 'smooth'
          });
          return nextIndex;
        });
      }
    }, 10000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Update active testimonial on manual scroll
  useEffect(() => {
    const carousel = document.getElementById('testimonials-carousel');
    if (!carousel) return;

    let scrollTimeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollPosition = carousel.scrollLeft;
        const slideWidth = carousel.offsetWidth;
        const newIndex = Math.round(scrollPosition / slideWidth);
        if (newIndex >= 0 && newIndex < testimonials.length) {
          setActiveTestimonial(newIndex);
        }
      }, 100);
    };

    carousel.addEventListener('scroll', handleScroll);
    return () => {
      carousel.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [testimonials.length]);

  const serviceCards = [
    {
      title: "Weddings",
      description: "Thoughtfully planned weddings that honour your story, your culture, and your vision — guided with care from the first conversation to the final moment.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop"
    },
    {
      title: "Birthdays & Milestones",
      description: "From intimate dinners to meaningful milestones, we curate celebrations that feel personal, refined, and beautifully considered — shaped to honour the moment and the people in it.",
      image: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=800&auto=format&fit=crop"
    },
    {
      title: "Corporate Events",
      description: "Professional gatherings designed with intention — from conferences and galas to team celebrations — executed with precision and elevated detail.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop"
    },
    {
      title: "Private Events & Social Gatherings",
      description: "Private dinners, proposals, naming ceremonies, and intimate gatherings — each designed with warmth, elegance, and seamless coordination.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop"
    }
  ];

  const whyWorkReasons = [
    {
      title: "More Than Planning — We Shape Unforgettable Experiences",
      description: "We don't just organise events; we curate how they feel. From the first interaction to the final moment, our focus is on creating celebrations that are seamless, thoughtful, and effortless to enjoy."
    },
    {
      title: "What Makes Us Different? — We Start by Listening",
      description: "We listen and take time to understand your vision. With experience, imagination, and trusted creative partners, we bring your most meaningful ideas to life."
    },
    {
      title: "Guided With Care, Executed With Precision",
      description: "With a steady, gentle hand, we take care of what happens behind the scenes — the details, the coordination, the flow — so you're free to be fully present, unburdened, and immersed in the celebration."
    },
    {
      title: "Thoughtfully Redefining Luxury",
      description: "Extraordinary celebrations aren't reserved for only the grandest budgets. With clarity, creativity, and intention, we craft beautiful, elevated experiences at every scale — ensuring each event feels special."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[100vh]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${servicesHeroBg})` }}
        >
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Hero Text - Positioned bottom left */}
        <div className="absolute bottom-12 left-6 lg:left-10 z-10">
          <h1 className="text-[#FFFEFD]">
            <span
              className="font-editors-note text-[80px] md:text-[120px] lg:text-[140px] block leading-[0.95]"
              style={{ fontWeight: 100 }}
            >
              EXPLORE
            </span>
            <span
              className="font-editors-note text-[80px] md:text-[120px] lg:text-[140px] italic leading-[1.03]"
              style={{ fontWeight: 100 }}
            >
              our{' '}
            </span>
            <span
              className="font-editors-note text-[80px] md:text-[120px] lg:text-[140px] leading-[1.03]"
              style={{ fontWeight: 100 }}
            >
              SERVICES
            </span>
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-background px-6 lg:px-10 py-20 lg:py-28">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Heading */}
          <h2
            className="font-editors-note text-secondary text-[32px] md:text-[40px] lg:text-[45px] leading-[1.2] mb-10"
            style={{ fontWeight: 100 }}
          >
            At Hephzibah Luxe, we delight in creating celebrations that feel memorable in all the right ways — beautifully layered, deeply felt, and quietly magical.
          </h2>

          {/* Description */}
          <p className="font-newsreader text-secondary text-[17px] lg:text-[19px] font-light leading-relaxed max-w-4xl mx-auto">
            At the heart of Hephzibah Luxe is a long-standing love for celebration. What began as a natural instinct for planning meaningful gatherings — rooted in care, hospitality, and community — has grown into a thoughtfully structured event planning studio. We bring together years of lived experience with a modern, intentional approach to planning and design. From logistics to guest experience, every element is approached with clarity and care, allowing each celebration to unfold with ease and purpose.
          </p>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="bg-secondary px-6 lg:px-10 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
            {/* Left - Image (5 columns) */}
            <div className="order-2 lg:order-1 lg:col-span-5">
              <img
                src={whyWorkImage}
                alt="Elegant table setting"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Right - Content (7 columns) */}
            <div className="order-1 lg:order-2 lg:col-span-7">
              {/* Heading */}
              <h2 className="text-[#FFFEFD] mb-12">
                <span
                  className="font-editors-note text-[45px] lg:text-[60px] block"
                  style={{ fontWeight: 100, lineHeight: '65px' }}
                >
                  WHY WORK
                </span>
                <span
                  className="font-editors-note text-[45px] lg:text-[60px]"
                  style={{ fontWeight: 100, lineHeight: '65px' }}
                >
                  <span className="italic">with</span> HEPHZIBAH LUXE?
                </span>
              </h2>

              {/* Reasons List */}
              <div className="space-y-8">
                {whyWorkReasons.map((reason, index) => (
                  <div key={index} className="flex gap-4">
                    {/* Check Icon */}
                    <div className="flex-shrink-0 mt-1">
                      <img src={checkIcon} alt="" className="w-6 h-6" />
                    </div>

                    {/* Text Content */}
                    <div>
                      <h3
                        className="font-newsreader text-[#FFFEFD] text-[20px] font-light mb-2"
                        style={{ lineHeight: '25px' }}
                      >
                        {reason.title}
                      </h3>
                      <p
                        className="font-newsreader text-[#FFFEFD] text-[18px] font-extralight"
                        style={{ lineHeight: '25px' }}
                      >
                        {reason.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Our Services Section */}
      <section className="bg-background py-16 lg:py-24 overflow-hidden">
        <div className="px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

            {/* Left Side - Sticky Content (50%) */}
            <div className="lg:w-[55%] lg:sticky lg:top-32 h-fit flex-shrink-0">
              {/* Heading */}
              <h2 className="text-secondary mb-8">
                <span
                  className="font-editors-note block text-[80px] lg:text-[120px]"
                  style={{ fontWeight: 100, lineHeight: '1' }}
                >
                  EXPLORE
                </span>
                <span
                  className="font-editors-note text-[80px] lg:text-[120px]"
                  style={{ fontWeight: 100, lineHeight: '1.1' }}
                >
                  <span className="italic">our</span> SERVICES
                </span>
              </h2>

              {/* Body Text */}
              <div>
                <p
                  className="font-newsreader text-secondary text-base lg:text-[16px] font-light leading-[28px] mb-10"
                >
                  We design celebrations of every kind — weddings, milestones, corporate events,
                  and private gatherings — each approached with the same level of intention and
                  care. From intimate moments to larger-scale occasions, our focus remains on
                  thoughtful planning, seamless flow, and an experience that feels considered from
                  beginning to end.
                </p>

                {/* CTA Button */}
                <Link
                  to="/inquiries"
                  className="inline-flex items-center justify-between border border-secondary px-6 py-3 hover:bg-secondary hover:text-white transition-colors duration-300 group"
                >
                  <span
                    className="font-newsreader italic text-secondary text-[20px] font-light group-hover:text-white"
                  >
                    Send us a message
                  </span>
                  <img
                    src={straightArrow}
                    alt=""
                    className="ml-6 w-6 h-4 group-hover:hidden"
                  />
                  <img
                    src={whiteArrow}
                    alt=""
                    className="ml-6 w-6 h-4 hidden group-hover:block"
                  />
                </Link>
              </div>
            </div>

            {/* Right Side - Horizontal Scrollable Cards (50%) */}
            <div className="lg:w-[45%] min-w-0">
              <div
                className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar"
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none'
                }}
              >
                <style>{`
                  .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>

                {serviceCards.map((service, index) => (
                  <div
                    key={index}
                    className={`flex-none w-[320px] md:w-[380px] snap-center group cursor-pointer transition-all duration-500 ${index % 2 === 0 ? 'lg:mt-20' : ''}`}
                  >
                    {/* Image Container */}
                    <div className="w-full aspect-[3/4] overflow-hidden mb-6 bg-gray-200">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div>
                      <h3
                        className="font-editors-note text-secondary text-[32px] lg:text-[36px] mb-3 leading-tight"
                        style={{ fontWeight: 100 }}
                      >
                        {service.title}
                      </h3>
                      <p
                        className="font-newsreader text-secondary text-[16px] font-light leading-relaxed"
                      >
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Planning & Coordination Section - Dark */}
      <section className="sticky top-0 z-10">
        <div className="bg-primary h-screen flex items-center">
          <div className="w-full px-6 lg:px-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-12 items-stretch">
                {/* Left - Content (70%) */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <h2
                    className="font-editors-note text-[#FFFEFD] text-[36px] lg:text-[50px] mb-8 whitespace-nowrap"
                    style={{ fontWeight: 100 }}
                  >
                    PLANNING & COORDINATION
                  </h2>

                  <p className="text-[#FFFEFD] text-[18px] lg:text-[20px] leading-[30px] mb-10 pr-8">
                    <span className="font-newsreader font-medium italic">Where Vision Meets Structure</span>
                    <span className="font-newsreader font-light"> — Our planning service is rooted in clarity, intention, and seamless execution. From vendor management to timelines, logistics, and on-site coordination, we ensure every moving piece comes together effortlessly. Whether guiding you from concept to completion or stepping in to orchestrate the final details, we create a calm, organized process that allows you to actually enjoy your celebration — not manage it.</span>
                  </p>

                  {/* Links */}
                  <div className="space-y-0 pr-8">
                    <div className="border-t border-[#FFFEFD]/30"></div>
                    <Link
                      to="/portfolio"
                      className="flex items-center justify-between py-4 group"
                    >
                      <span className="font-lato text-[#FFFEFD] text-[15px] font-light tracking-wide">
                        VIEW OUR PAST PROJECTS
                      </span>
                      <img src={curlyArrow} alt="" className="w-32 h-6 group-hover:translate-x-2 transition-transform" />
                    </Link>
                    <div className="border-t border-[#FFFEFD]/30"></div>
                    <Link
                      to="/inquiries"
                      className="flex items-center justify-between py-4 group"
                    >
                      <span className="font-lato text-[#FFFEFD] text-[15px] font-light tracking-wide">
                        WORK WITH US TO CREATE AN AMAZING EVENT
                      </span>
                      <img src={curlyArrow} alt="" className="w-32 h-6 group-hover:translate-x-2 transition-transform" />
                    </Link>
                    <div className="border-t border-[#FFFEFD]/30"></div>
                  </div>
                </div>

                {/* Right - Image (30%) */}
                <div className="lg:col-span-3 flex items-center">
                  <img
                    src={planningImage}
                    alt="Planning and coordination"
                    className="w-full h-[80vh] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Direction & Design Section - Light */}
      <section className="sticky top-0 z-20">
        <div className="bg-background h-screen flex items-center">
          <div className="w-full px-6 lg:px-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-12 items-stretch">
                {/* Left - Content (70%) */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <h2
                    className="font-editors-note text-secondary text-[36px] lg:text-[50px] mb-8 whitespace-nowrap"
                    style={{ fontWeight: 100 }}
                  >
                    CREATIVE DIRECTION & DESIGN
                  </h2>

                  <p className="text-secondary text-[18px] lg:text-[20px] leading-[30px] mb-10 pr-8">
                    <span className="font-newsreader font-medium italic">Aesthetic storytelling, refined with purpose</span>
                    <span className="font-newsreader font-light"> — While we collaborate with expert décor and floral teams, Hephzibah Luxe leads the creative direction that shapes your event's visual identity. From moodboards to colour palettes, stationery, signage, guest experience touchpoints, and overall aesthetic guidance, we craft a cohesive design story that feels personal, modern, and beautifully intentional. Our role is to ensure every detail aligns with your vision — and enhances it.</span>
                  </p>

                  {/* Links */}
                  <div className="space-y-0 pr-8">
                    <div className="border-t border-secondary/30"></div>
                    <Link
                      to="/portfolio"
                      className="flex items-center justify-between py-4 group"
                    >
                      <span className="font-lato text-secondary text-[15px] font-light tracking-wide">
                        VIEW OUR PAST PROJECTS
                      </span>
                      <img src={redCurlyArrow} alt="" className="w-32 h-6 group-hover:translate-x-2 transition-transform" />
                    </Link>
                    <div className="border-t border-secondary/30"></div>
                    <Link
                      to="/inquiries"
                      className="flex items-center justify-between py-4 group"
                    >
                      <span className="font-lato text-secondary text-[15px] font-light tracking-wide">
                        WORK WITH US TO CREATE AN AMAZING EVENT
                      </span>
                      <img src={redCurlyArrow} alt="" className="w-32 h-6 group-hover:translate-x-2 transition-transform" />
                    </Link>
                    <div className="border-t border-secondary/30"></div>
                  </div>
                </div>

                {/* Right - Image (30%) */}
                <div className="lg:col-span-3 flex items-center">
                  <img
                    src={creativeImage}
                    alt="Creative direction and design"
                    className="w-full h-[80vh] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elevated Guest Experience Section - Dark */}
      <section className="sticky top-0 z-30">
        <div className="bg-primary h-screen flex items-center">
          <div className="w-full px-6 lg:px-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-12 items-stretch">
                {/* Left - Content (70%) */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <h2
                    className="font-editors-note text-[#FFFEFD] text-[36px] lg:text-[50px] mb-8 whitespace-nowrap"
                    style={{ fontWeight: 100 }}
                  >
                    ELEVATED GUEST EXPERIENCE
                  </h2>

                  <p className="text-[#FFFEFD] text-[18px] lg:text-[20px] leading-[30px] mb-10 pr-8">
                    <span className="font-newsreader font-medium italic">An experience your guests will never forget.</span>
                    <span className="font-newsreader font-light"> — Beyond logistics and décor, we curate the emotional rhythm of your celebration — how it feels to arrive, to dine, to dance, to experience the moment with you. We design thoughtful touchpoints, seamless movement, warm hospitality, and sensory details that shape an unforgettable guest journey. From atmosphere to ambience to the subtle cues that elevate a moment, our focus is on crafting experiences that linger long after the day ends.</span>
                  </p>

                  {/* Links */}
                  <div className="space-y-0 pr-8">
                    <div className="border-t border-[#FFFEFD]/30"></div>
                    <Link
                      to="/portfolio"
                      className="flex items-center justify-between py-4 group"
                    >
                      <span className="font-lato text-[#FFFEFD] text-[15px] font-light tracking-wide">
                        VIEW OUR PAST PROJECTS
                      </span>
                      <img src={curlyArrow} alt="" className="w-32 h-6 group-hover:translate-x-2 transition-transform" />
                    </Link>
                    <div className="border-t border-[#FFFEFD]/30"></div>
                    <Link
                      to="/inquiries"
                      className="flex items-center justify-between py-4 group"
                    >
                      <span className="font-lato text-[#FFFEFD] text-[15px] font-light tracking-wide">
                        WORK WITH US TO CREATE AN AMAZING EVENT
                      </span>
                      <img src={curlyArrow} alt="" className="w-32 h-6 group-hover:translate-x-2 transition-transform" />
                    </Link>
                    <div className="border-t border-[#FFFEFD]/30"></div>
                  </div>
                </div>

                {/* Right - Image (30%) */}
                <div className="lg:col-span-3 flex items-center">
                  <img
                    src={elevatedImage}
                    alt="Elevated guest experience"
                    className="w-full h-[80vh] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Section - CEO Quote */}
      <section className="relative z-40">
        <div className="relative w-full min-h-screen flex items-center justify-center py-20 px-6">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${luxuryBg})` }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
            {/* Header */}
            <h2
              className="mb-12"
              style={{
                fontFamily: "'Editors Note', serif",
                fontWeight: 100,
                fontSize: '50px',
                lineHeight: '100%',
              }}
            >
              Where intention leads, ease follows – thoughtfully planned, so every moment feels effortless.
            </h2>

            {/* Body Text */}
            <div
              className="mb-12 max-w-4xl mx-auto"
              style={{
                fontFamily: "'Newsreader', serif",
                fontWeight: 300,
                fontSize: '24px',
                lineHeight: '35px',
              }}
            >
              <p className="mb-6">
                Luxury, to us, is intention. It's found in the quiet details, the seamless flow, and the confidence that comes from knowing every moment is thoughtfully handled.
                We create events that feel beautiful, meaningful, and effortless – so you can be fully present and enjoy the celebration.
              </p>
            </div>

            {/* CEO Name */}
            <p
              className="mb-12"
              style={{
                fontFamily: "'Lato', sans-serif",
                fontWeight: 300,
                fontSize: '20px',
                lineHeight: '35px',
              }}
            >
              – WINIFRED OJULARI, CEO HEPHZIBAH LUXE
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/portfolio"
                className="inline-flex items-center px-8 py-2 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 group"
                style={{
                  fontFamily: "'Newsreader', serif",
                  fontWeight: 300,
                  fontStyle: 'italic',
                  fontSize: '20px',
                  lineHeight: '35px',
                }}
              >
                View Our Portfolio
                <img
                  src={whiteArrow}
                  alt=""
                  className="ml-3 w-5 h-3 group-hover:hidden"
                />
                <img
                  src={straightArrow}
                  alt=""
                  className="ml-3 w-5 h-3 hidden group-hover:block"
                />
              </Link>

              <Link
                to="/inquiries"
                className="inline-flex items-center px-8 py-2 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 group"
                style={{
                  fontFamily: "'Newsreader', serif",
                  fontWeight: 300,
                  fontStyle: 'italic',
                  fontSize: '20px',
                  lineHeight: '35px',
                }}
              >
                Send us a message
                <img
                  src={whiteArrow}
                  alt=""
                  className="ml-3 w-5 h-3 group-hover:hidden"
                />
                <img
                  src={straightArrow}
                  alt=""
                  className="ml-3 w-5 h-3 hidden group-hover:block"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Signature Process Section */}
      <section className="relative z-40 bg-[#FFFEFD] py-20 lg:py-28 px-6 lg:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <h2 className="text-center mb-16 lg:mb-24 text-[#380F05] whitespace-nowrap">
            <span
              className="font-editors-note text-[36px] lg:text-[60px]"
              style={{ fontWeight: 100, lineHeight: '100%' }}
            >
              A GLIMPSE INTO OUR{' '}
            </span>
            <span
              className="font-editors-note text-[36px] lg:text-[60px] italic"
              style={{ fontWeight: 100, lineHeight: '100%' }}
            >
              Signature
            </span>
            <span
              className="font-editors-note text-[36px] lg:text-[60px]"
              style={{ fontWeight: 100, lineHeight: '100%' }}
            >
              {' '}PROCESS
            </span>
          </h2>

          {/* Timeline Container */}
          <div
            className="overflow-x-auto hide-scrollbar"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {/* Inner container for proper sizing */}
            <div className="relative min-w-max">
              {/* One continuous line */}
              <div
                className="absolute left-0 right-0 h-[2px]"
                style={{ backgroundColor: '#380F05', top: '12px' }}
              ></div>

              {/* Process Steps */}
              <div className="flex gap-8 pb-8">
                {/* Step 1: CONNECT */}
                <div className="flex-none w-[280px] lg:w-[350px]">
                  {/* Circle */}
                  <div
                    className="w-6 h-6 rounded-full relative z-10 mb-8"
                    style={{ backgroundColor: '#380F05' }}
                  ></div>
                  {/* Content */}
                  <h3
                    className="font-editors-note text-[#380F05] text-[26px] lg:text-[30px] mb-3"
                    style={{ fontWeight: 100, lineHeight: '100%' }}
                  >
                    No. 01: CONNECT
                  </h3>
                  <p
                    className="font-newsreader text-[#380F05] text-[18px] lg:text-[20px] italic mb-4"
                    style={{ fontWeight: 300, lineHeight: '100%' }}
                  >
                    Understanding the meaning behind the moment
                  </p>
                  <p
                    className="font-newsreader text-[#380F05] text-[16px] lg:text-[18px]"
                    style={{ fontWeight: 300, lineHeight: '24px' }}
                  >
                    Every celebration begins with connection. Through a private conversation, we listen deeply — to your vision, your priorities, and what this moment truly represents.
                  </p>
                </div>

                {/* Step 2: ALIGN */}
                <div className="flex-none w-[280px] lg:w-[350px]">
                  <div
                    className="w-6 h-6 rounded-full relative z-10 mb-8"
                    style={{ backgroundColor: '#380F05' }}
                  ></div>
                  <h3
                    className="font-editors-note text-[#380F05] text-[26px] lg:text-[30px] mb-3"
                    style={{ fontWeight: 100, lineHeight: '100%' }}
                  >
                    No. 02: ALIGN
                  </h3>
                  <p
                    className="font-newsreader text-[#380F05] text-[18px] lg:text-[20px] italic mb-4"
                    style={{ fontWeight: 300, lineHeight: '100%' }}
                  >
                    Clarity before creativity, so every detail is made with intention
                  </p>
                  <p
                    className="font-newsreader text-[#380F05] text-[16px] lg:text-[18px]"
                    style={{ fontWeight: 300, lineHeight: '24px' }}
                  >
                    With your goals defined, we establish clarity. We define scope, priorities, and financial parameters so decisions feel grounded and effortless.
                  </p>
                </div>

                {/* Step 3: CURATE */}
                <div className="flex-none w-[280px] lg:w-[350px]">
                  <div
                    className="w-6 h-6 rounded-full relative z-10 mb-8"
                    style={{ backgroundColor: '#380F05' }}
                  ></div>
                  <h3
                    className="font-editors-note text-[#380F05] text-[26px] lg:text-[30px] mb-3"
                    style={{ fontWeight: 100, lineHeight: '100%' }}
                  >
                    No. 03: CURATE
                  </h3>
                  <p
                    className="font-newsreader text-[#380F05] text-[18px] lg:text-[20px] italic mb-4"
                    style={{ fontWeight: 300, lineHeight: '100%' }}
                  >
                    Curated with purpose — the right setting, the right partners
                  </p>
                  <p
                    className="font-newsreader text-[#380F05] text-[16px] lg:text-[18px]"
                    style={{ fontWeight: 300, lineHeight: '24px' }}
                  >
                    From venues to creative collaborators, every element is thoughtfully chosen to align with your vision and elevate the experience.
                  </p>
                </div>

                {/* Step 4: ENVISION */}
                <div className="flex-none w-[280px] lg:w-[350px]">
                  <div
                    className="w-6 h-6 rounded-full relative z-10 mb-8"
                    style={{ backgroundColor: '#380F05' }}
                  ></div>
                  <h3
                    className="font-editors-note text-[#380F05] text-[26px] lg:text-[30px] mb-3"
                    style={{ fontWeight: 100, lineHeight: '100%' }}
                  >
                    No. 04: ENVISION
                  </h3>
                  <p
                    className="font-newsreader text-[#380F05] text-[18px] lg:text-[20px] italic mb-4"
                    style={{ fontWeight: 300, lineHeight: '100%' }}
                  >
                    Shaping the experience, from first impression to final moment
                  </p>
                  <p
                    className="font-newsreader text-[#380F05] text-[16px] lg:text-[18px]"
                    style={{ fontWeight: 300, lineHeight: '24px' }}
                  >
                    This is where your celebration begins to take form. We shape the look, feel, and flow of the event as your guests will experience it.
                  </p>
                </div>

                {/* Step 5: ORCHESTRATE */}
                <div className="flex-none w-[280px] lg:w-[350px]">
                  <div
                    className="w-6 h-6 rounded-full relative z-10 mb-8"
                    style={{ backgroundColor: '#380F05' }}
                  ></div>
                  <h3
                    className="font-editors-note text-[#380F05] text-[26px] lg:text-[30px] mb-3"
                    style={{ fontWeight: 100, lineHeight: '100%' }}
                  >
                    No. 05: ORCHESTRATE
                  </h3>
                  <p
                    className="font-newsreader text-[#380F05] text-[18px] lg:text-[20px] italic mb-4"
                    style={{ fontWeight: 300, lineHeight: '100%' }}
                  >
                    Precision behind the scenes, as the day unfolds.
                  </p>
                  <p
                    className="font-newsreader text-[#380F05] text-[16px] lg:text-[18px]"
                    style={{ fontWeight: 300, lineHeight: '24px' }}
                  >
                    As plans come together, we quietly manage the details — logistics, timelines, coordination — with care and exactness.
                  </p>
                </div>

                {/* Step 6: EXECUTE */}
                <div className="flex-none w-[280px] lg:w-[350px]">
                  <div
                    className="w-6 h-6 rounded-full relative z-10 mb-8"
                    style={{ backgroundColor: '#380F05' }}
                  ></div>
                  <h3
                    className="font-editors-note text-[#380F05] text-[26px] lg:text-[30px] mb-3"
                    style={{ fontWeight: 100, lineHeight: '100%' }}
                  >
                    No. 06: EXECUTE
                  </h3>
                  <p
                    className="font-newsreader text-[#380F05] text-[18px] lg:text-[20px] italic mb-4"
                    style={{ fontWeight: 300, lineHeight: '100%' }}
                  >
                    Precision behind the scenes, as the day unfolds.
                  </p>
                  <p
                    className="font-newsreader text-[#380F05] text-[16px] lg:text-[18px]"
                    style={{ fontWeight: 300, lineHeight: '24px' }}
                  >
                    On the day itself, our presence is steady and composed. We guide the celebration moment by moment, allowing you to remain fully present.
                  </p>
                </div>

                {/* Step 7: COMPLETION */}
                <div className="flex-none w-[280px] lg:w-[350px] pr-6">
                  <div
                    className="w-6 h-6 rounded-full relative z-10 mb-8"
                    style={{ backgroundColor: '#380F05' }}
                  ></div>
                  <h3
                    className="font-editors-note text-[#380F05] text-[26px] lg:text-[30px] mb-3"
                    style={{ fontWeight: 100, lineHeight: '100%' }}
                  >
                    No. 07: COMPLETION
                  </h3>
                  <p
                    className="font-newsreader text-[#380F05] text-[18px] lg:text-[20px] italic mb-4"
                    style={{ fontWeight: 300, lineHeight: '100%' }}
                  >
                    Care that extends beyond your day of celebration.
                  </p>
                  <p
                    className="font-newsreader text-[#380F05] text-[16px] lg:text-[18px]"
                    style={{ fontWeight: 300, lineHeight: '24px' }}
                  >
                    As the celebration comes to a close, we remain attentive — ensuring loose ends are gently tied and the experience settles with intention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <section className="relative z-40 bg-[#2B0202] py-16 lg:py-20 overflow-hidden">
        <div className="relative">
          {/* Scrollable Container */}
          <div
            className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
            id="testimonials-carousel"
          >
            {testimonials.map((testimonial, index) => (
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
                    carousel.scrollTo({
                      left: index * carousel.offsetWidth,
                      behavior: 'smooth'
                    });
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeTestimonial
                    ? 'bg-[#FFFEFD]'
                    : 'bg-[#C4C4C4]/50 border border-[#FFFEFD]'
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Begin CTA Section */}
      <section className="relative z-40 bg-[#FFFEFD] py-20 lg:py-28 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <h2
            className="font-editors-note text-[#380F05] text-[36px] lg:text-[45px] mb-8"
            style={{ fontWeight: 100 }}
          >
            Ready to Begin Your Celebration With Intention?
          </h2>

          {/* Description */}
          <p
            className="font-newsreader text-[#380F05] text-[18px] mb-10"
            style={{ fontWeight: 300, lineHeight: '29px' }}
          >
            Every celebration we plan is thoughtfully customised to reflect your vision, priorities, and scale. We work with care and flexibility, guiding each client toward what's possible with intention and clarity. If you're ready to begin the conversation, we'd love to hear from you.
          </p>

          {/* CTA Button */}
          <Link
            to="/inquiries"
            className="inline-flex items-center justify-center border border-[#380F05] border-[1.5px] px-8 py-2 hover:bg-[#380F05] hover:text-[#FFFEFD] transition-colors duration-300 group"
          >
            <span
              className="font-newsreader italic text-[#380F05] text-[20px] group-hover:text-[#FFFEFD]"
              style={{ fontWeight: 300, lineHeight: '35px' }}
            >
              Send us a message
            </span>
            <img
              src={straightArrow}
              alt=""
              className="ml-4 w-6 h-4 group-hover:hidden"
            />
            <img
              src={whiteArrow}
              alt=""
              className="ml-4 w-6 h-4 hidden group-hover:block"
            />
          </Link>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="relative z-40">
        <InstagramSection />
      </section>
    </div>
  );
};

export default Services;
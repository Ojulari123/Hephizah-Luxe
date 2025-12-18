import { Link } from 'react-router-dom';
import servicesHeroBg from '../assets/images/servicesHerobg.png';
import whyWorkImage from '../assets/images/whyWorkImage.png';
import checkIcon from '../assets/icons/checkIcon.svg';
import planningImage from '../assets/images/planningImage.png';
import creativeImage from '../assets/images/creativeImage.png';
import elevatedImage from '../assets/images/elevatedImage.png';
import curlyArrow from '../assets/icons/curlyArrow.svg';
import redCurlyArrow from '../assets/icons/redcurlyArrow.svg';
import luxuryBg from '../assets/images/luxuryBg.jpg';
import InstagramSection from '../components/InstagramSection';

const Services = () => {
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
                        className="font-newsreader text-[#FFFEFD] text-[20px] font-normal mb-2"
                        style={{ lineHeight: '25px' }}
                      >
                        {reason.title}
                      </h3>
                      <p
                        className="font-newsreader text-[#FFFEFD] text-[18px] font-light"
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
            <div className="lg:w-[50%] lg:sticky lg:top-32 h-fit flex-shrink-0">
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
                <a
                  href="/inquiries"
                  className="inline-flex items-center justify-between border border-secondary px-6 py-3 hover:bg-secondary hover:text-white transition-colors duration-300 group"
                >
                  <span
                    className="font-newsreader italic text-secondary text-[20px] font-light group-hover:text-white"
                  >
                    Send us a message
                  </span>
                  <span className="text-secondary text-xl ml-6 group-hover:text-white">→</span>
                </a>
              </div>
            </div>

            {/* Right Side - Horizontal Scrollable Cards (50%) */}
            <div className="lg:w-[50%] min-w-0">
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
                className="px-8 py-2 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300"
                style={{
                  fontFamily: "'Newsreader', serif",
                  fontWeight: 300,
                  fontStyle: 'italic',
                  fontSize: '20px',
                  lineHeight: '35px',
                }}
              >
                View Our Portfolio →
              </Link>

              <Link
                to="/inquiries"
                className="px-8 py-2 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300"
                style={{
                  fontFamily: "'Newsreader', serif",
                  fontWeight: 300,
                  fontStyle: 'italic',
                  fontSize: '20px',
                  lineHeight: '35px',
                }}
              >
                Send us a message →
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
              <div className="flex gap-16 lg:gap-20 pb-8">
                {/* Step 1: CONNECT */}
                <div className="flex-none w-[280px] lg:w-[300px]">
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
                <div className="flex-none w-[280px] lg:w-[300px]">
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
                <div className="flex-none w-[280px] lg:w-[300px]">
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
                <div className="flex-none w-[280px] lg:w-[300px]">
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
                <div className="flex-none w-[280px] lg:w-[300px]">
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
                <div className="flex-none w-[280px] lg:w-[300px]">
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
                <div className="flex-none w-[280px] lg:w-[300px] pr-6">
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

      {/* Instagram Section */}
      <section className="relative z-40">
        <InstagramSection />
      </section>
    </div>
  );
};

export default Services;
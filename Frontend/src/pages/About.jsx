import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import InstagramSection from '../components/InstagramSection';
import whiteArrow from '../assets/icons/whitestraightArrow.svg';
import straightArrow from '../assets/icons/straightArrow.svg';

const About = () => {
  const heroRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredButton, setHoveredButton] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const scrolled = -rect.top;
      const totalScroll = heroRef.current.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, scrolled / totalScroll));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate image positions - start from bottom, move up
  const leftImageTop = 500 - scrollProgress * 400;
  const rightTopImageTop = 80; // Fixed position beside header
  const rightBottomImageTop = 700 - scrollProgress * 350;

  // Text content component to avoid repetition
  const TextContent = ({ textColor }) => (
    <div className="px-6 lg:px-10 pt-16 lg:pt-24">
      {/* ABOUT the BRAND */}
      <h1 className="mb-0">
        <span
          className="font-editors-note block"
          style={{
            fontWeight: 100,
            fontSize: '124px',
            lineHeight: '145px',
            color: textColor
          }}
        >
          ABOUT <span className="italic">the</span> BRAND
        </span>
      </h1>

      {/* Hephzibah Luxe - indented */}
      <h2
        className="font-editors-note italic lg:ml-48"
        style={{
          fontWeight: 100,
          fontSize: '124px',
          lineHeight: '145px',
          color: textColor
        }}
      >
        Hephzibah Luxe
      </h2>
    </div>
  );

  return (
    <div>
      {/* Hero Section with Sticky Text */}
      <section
        ref={heroRef}
        className="relative bg-[#FFFEFD]"
        style={{ height: '200vh' }}
      >
        {/* Sticky Container */}
        <div className="sticky top-0 min-h-screen overflow-hidden">

          {/* Layer 1: Images (z-0) */}
          <div className="absolute inset-0 z-0">
            {/* Left Image */}
            <div
              className="absolute left-6 lg:left-10 w-[280px] lg:w-[340px] h-[380px] lg:h-[480px]"
              style={{ top: `${leftImageTop}px` }}
            >
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop"
                alt="Event decoration"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Top Image - beside header */}
            <div
              className="absolute right-6 lg:right-10 w-[240px] lg:w-[300px] h-[200px] lg:h-[250px]"
              style={{ top: `${rightTopImageTop}px` }}
            >
              <img
                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&auto=format&fit=crop"
                alt="Table setting"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Bottom Image */}
            <div
              className="absolute right-6 lg:right-10 w-[180px] lg:w-[220px] h-[160px] lg:h-[200px]"
              style={{ top: `${rightBottomImageTop}px` }}
            >
              <img
                src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&auto=format&fit=crop"
                alt="Celebration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Layer 2: Dark Text - Base layer (z-10) */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            <TextContent textColor="#380F05" />

            {/* Paragraphs */}
            <div className="absolute left-[320px] lg:left-[400px] right-[260px] lg:right-[340px] top-[380px] lg:top-[360px]">
              <p
                className="font-newsreader text-[#380F05] mb-6"
                style={{ fontWeight: 300, fontSize: '19px', lineHeight: '31px' }}
              >
                Hephzibah Luxe was born from years of experience long before it had a name. For over a decade, we planned informally — bringing together family celebrations, milestone moments, and meaningful gatherings with care, precision, and heart. What began as a natural calling evolved into a refined practice shaped by trust, relationships, and an understanding of what truly makes a celebration memorable.
              </p>

              <p
                className="font-newsreader text-[#380F05] mb-6"
                style={{ fontWeight: 300, fontSize: '19px', lineHeight: '31px' }}
              >
                Rooted in faith and inspired by God, Hephzibah Luxe is guided by the belief that celebrations are sacred moments — worthy of intention, beauty, and excellence. Through long-standing relationships with a trusted network of vendors, we curate experiences that feel seamless, thoughtful, and elevated.
              </p>

              <p
                className="font-newsreader text-[#380F05]"
                style={{ fontWeight: 300, fontSize: '19px', lineHeight: '31px' }}
              >
                Today, Hephzibah Luxe blends heritage with modern execution. Design sits at the heart of everything we do, combining creative direction with thoughtful planning systems to offer a more refined way to plan — one that prioritises clarity, collaboration, and ease, while honouring each couple's individuality.
              </p>
            </div>
          </div>

          {/* Layer 3: White Text with Image Background - Clipped overlays (z-20) */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            {/* Left Image with White Text */}
            <div
              className="absolute left-6 lg:left-10 w-[280px] lg:w-[340px] h-[380px] lg:h-[480px] overflow-hidden"
              style={{ top: `${leftImageTop}px` }}
            >
              {/* Image as background */}
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* White text positioned to align with base text */}
              <div
                className="absolute"
                style={{
                  top: `-${leftImageTop}px`,
                  left: '-24px',
                  width: '100vw',
                }}
              >
                <TextContent textColor="#FFFEFD" />
              </div>
            </div>

            {/* Right Top Image with White Text */}
            <div
              className="absolute right-6 lg:right-10 w-[240px] lg:w-[300px] h-[200px] lg:h-[250px] overflow-hidden"
              style={{ top: `${rightTopImageTop}px` }}
            >
              {/* Image as background */}
              <img
                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&auto=format&fit=crop"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* White text positioned to align with base text */}
              <div
                className="absolute"
                style={{
                  top: `-${rightTopImageTop}px`,
                  left: '0px',
                  right: '-24px',
                  width: '100vw',
                  marginLeft: 'auto',
                  transform: 'translateX(calc(100% - 300px))'
                }}
              >
                <TextContent textColor="#FFFEFD" />
              </div>
            </div>

            {/* Right Bottom Image with White Text */}
            <div
              className="absolute right-6 lg:right-10 w-[180px] lg:w-[220px] h-[160px] lg:h-[200px] overflow-hidden"
              style={{ top: `${rightBottomImageTop}px` }}
            >
              {/* Image as background */}
              <img
                src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&auto=format&fit=crop"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* White text positioned to align with base text */}
              <div
                className="absolute"
                style={{
                  top: `-${rightBottomImageTop}px`,
                  left: '0px',
                  right: '-24px',
                  width: '100vw',
                  marginLeft: 'auto',
                  transform: 'translateX(calc(100% - 220px))'
                }}
              >
                <TextContent textColor="#FFFEFD" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Celebration Delight Section */}
      <section className="bg-[#2B0202] py-20 lg:py-28 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Quote */}
          <h2
            className="font-editors-note text-[#FFFEFD] mb-12"
            style={{
              fontWeight: 100,
              fontSize: '45px',
              lineHeight: '100%'
            }}
          >
            At Hephzibah Luxe, we delight in creating celebrations that feel memorable in all the right ways — beautifully layered, deeply felt, and quietly magical.
          </h2>

          {/* Description */}
          <p
            className="font-newsreader text-[#FFFEFD]"
            style={{
              fontWeight: 300,
              fontSize: '19px',
              lineHeight: '31px'
            }}
          >
            At the heart of Hephzibah Luxe is a long-standing love for celebration. What began as a natural instinct for planning meaningful gatherings — rooted in care, hospitality, and community — has grown into a thoughtfully structured event planning studio. We bring together years of lived experience with a modern, intentional approach to planning and design. From logistics to guest experience, every element is approached with clarity and care, allowing each celebration to unfold with ease and purpose.
          </p>
        </div>
      </section>

      {/* Behind the Brand Section */}
      <section className="bg-[#FFFEFD] py-20 lg:py-28 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">

          {/* First Row - Winnie */}
          {/* Flex container with items-stretch ensures image and text are same height */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-20 lg:mb-28 items-stretch">

            {/* Image (45%) */}
            <div className="w-full lg:w-[45%] relative min-h-[500px] lg:min-h-auto">
              <img
                src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&auto=format&fit=crop"
                alt="Winnie O."
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Content (55%) */}
            <div className="w-full lg:w-[55%] flex flex-col justify-center">
              {/* Behind the Brand Header - inside column for alignment */}
              <h2
                className="font-editors-note text-[#380F05] mb-12"
                style={{
                  fontWeight: 100,
                  fontSize: '100px',
                  lineHeight: '90px'
                }}
              >
                BEHIND<br /><span className="italic">the</span> BRAND
              </h2>

              {/* Subtext */}
              <p
                className="font-newsreader italic text-[#380F05] mb-8"
                style={{
                  fontWeight: 300,
                  fontSize: '16px',
                  lineHeight: '26px'
                }}
              >
                Hephzibah Luxe is founded on the belief that celebrations are more than events — they are expressions of legacy, love, and intention. At the helm are a mother-daughter duo whose combined strengths bring warmth, precision, and unmistakable elegance to every experience.
              </p>

              {/* Name and Role */}
              <h3
                className="font-newsreader text-[#380F05] mb-4"
                style={{
                  fontWeight: 500,
                  fontSize: '18px',
                  lineHeight: '24px'
                }}
              >
                Winnie O. | Founder & CEO | Client Experience Curator & On-Site Lead
              </h3>

              {/* Bio Content - Reduced font size to 16px */}
              <p
                className="font-newsreader text-[#380F05] mb-6"
                style={{
                  fontWeight: 300,
                  fontSize: '16px',
                  lineHeight: '26px'
                }}
              >
                Winnie is the heart of Hephzibah Luxe. With a calm presence and a deeply intuitive approach, she brings reassurance, wisdom, and grace to every celebration. Known for her thoughtful guidance and genuine warmth, Winnie has a gift for making clients feel at ease — even amid the most intricate planning moments. From venue walk-throughs to vendor relationships, she ensures every detail feels personal, considered, and beautifully aligned with your vision.
              </p>

              <p
                className="font-newsreader text-[#380F05]"
                style={{
                  fontWeight: 300,
                  fontSize: '16px',
                  lineHeight: '26px'
                }}
              >
                Her love for event planning began long before Hephzibah Luxe. For years, Winnie was the trusted "go-to" for family celebrations, community gatherings, and milestone moments — naturally stepping into the role of organiser, guide, and calm anchor. What started as instinct has grown into experience, shaped by years of hands-on involvement and a genuine joy in bringing people together. When she isn't planning, Winnie enjoys spending time with family and nurturing the sense of hospitality that inspires everything she does.
              </p>
            </div>
          </div>

          {/* Second Row - Tosin */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">

            {/* Content (55%) */}
            <div className="w-full lg:w-[55%] flex flex-col justify-center lg:order-1 order-2">
              {/* Name and Role */}
              <h3
                className="font-newsreader text-[#380F05] mb-4"
                style={{
                  fontWeight: 500,
                  fontSize: '18px',
                  lineHeight: '24px'
                }}
              >
                Tosin O. | Co-Founder | Strategy, Systems & Creative Direction
              </h3>

              {/* Bio Content - Reduced font size to 16px */}
              <p
                className="font-newsreader text-[#380F05] mb-6"
                style={{
                  fontWeight: 300,
                  fontSize: '16px',
                  lineHeight: '26px'
                }}
              >
                Tosin is the mind behind the seamlessness. Detail-driven and design-led, she brings structure, clarity, and strategic oversight to every celebration. With a background in digital management and a deep love for intentional design, Tosin ensures that timelines flow, communication remains effortless, and nothing is left to chance. Her approach blends creative vision with operational excellence — allowing beauty and precision to coexist effortlessly.
              </p>

              <p
                className="font-newsreader text-[#380F05] mb-10"
                style={{
                  fontWeight: 300,
                  fontSize: '16px',
                  lineHeight: '26px'
                }}
              >
                Her path to Hephzibah Luxe has been shaped by years of balancing multiple roles, disciplines, and responsibilities — each sharpening her eye for detail, structure, and foresight. Working alongside her mother allows Tosin to pair strategy with intuition, systems with presence. Their constant back-and-forth — refining, questioning, and perfecting — ensures every decision is thoughtful and every experience held to the highest standard.
              </p>

              {/* Tagline */}
              <p
                className="font-newsreader italic text-[#380F05] mb-4"
                style={{
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '24px'
                }}
              >
                One Vision. Two Perspectives. Elegance in Every Element.
              </p>

              {/* Closing Statement */}
              <p
                className="font-newsreader italic text-[#380F05]"
                style={{
                  fontWeight: 300,
                  fontSize: '16px',
                  lineHeight: '26px'
                }}
              >
                A partnership rooted in trust, perspective, and a shared commitment to excellence. Together, Winnie and Tosin create celebrations that ARE thoughtful, refined, and deeply meaningful — where every element is considered, every moment intentional, and every experience elevated.
              </p>
            </div>

            {/* Image (45%) */}
            <div className="w-full lg:w-[45%] relative min-h-[500px] lg:min-h-auto lg:order-2 order-1">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop"
                alt="Tosin O."
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="relative bg-[#2B0202] py-24 lg:py-32 overflow-hidden">
        <div className="hidden lg:block absolute top-16 left-0 w-[150px] xl:w-[200px] h-[350px] xl:h-[450px]">
          <img
            src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&auto=format&fit=crop"
            alt="Event Detail"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="hidden lg:block absolute bottom-16 right-0 w-[150px] xl:w-[200px] h-[350px] xl:h-[450px]">
          <img
            src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&auto=format&fit=crop"
            alt="Event Detail"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Container - Left Aligned */}
        <div className="max-w-7xl mx-auto px-6 lg:px-24 relative z-10 flex justify-center">
          <div className="max-w-4xl lg:ml-[7%] xl:ml-[7%]">
            {/* Quote Text */}
            <p
              className="font-editors-note text-[#FFFEFD] mb-10"
              style={{
                fontWeight: 1, // Hairline
                fontStyle: 'normal',
                fontSize: '45px',
                lineHeight: '55px'
              }}
            >
              “I walked into a room filled with love, laughter, and surprises I never saw coming. The celebration was seamless, and beautifully put together. My wife and Hephzibah Luxe created an evening that was deeply meaningful and beyond my wildest dreams — a birthday I will never forget. I am truly grateful to the Hephzibah Luxe team.”
            </p>

            {/* Testifier Name */}
            <p
              className="font-lato text-[#FFFEFD] tracking-[0.2em] mb-14"
              style={{
                fontWeight: 300, // Light
                fontSize: '20px',
                lineHeight: '35px'
              }}
            >
              — SHOLA, THE CELEBRANT
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-start">

              {/* Portfolio Button */}
              <Link
                to="/portfolio"
                onMouseEnter={() => setHoveredButton('portfolio')}
                onMouseLeave={() => setHoveredButton(null)}
                className="group border border-[#FFFEFD] px-8 py-3 flex items-center gap-8 transition-all duration-500 hover:bg-[#FFFEFD]"
              >
                <span
                  className={`font-newsreader italic transition-colors duration-500 ${hoveredButton === 'portfolio' ? 'text-[#2B0202]' : 'text-[#FFFEFD]'}`}
                  style={{
                    fontWeight: 300,
                    fontSize: '20px',
                    lineHeight: '35px'
                  }}
                >
                  View Our Portfolio
                </span>
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

              {/* Services Button */}
              <Link
                to="/services"
                onMouseEnter={() => setHoveredButton('services')}
                onMouseLeave={() => setHoveredButton(null)}
                className="group border border-[#FFFEFD] px-8 py-3 flex items-center gap-8 transition-all duration-500 hover:bg-[#FFFEFD]"
              >
                <span
                  className={`font-newsreader italic transition-colors duration-500 ${hoveredButton === 'services' ? 'text-[#2B0202]' : 'text-[#FFFEFD]'}`}
                  style={{
                    fontWeight: 300,
                    fontSize: '20px',
                    lineHeight: '35px'
                  }}
                >
                  Explore Our Services
                </span>
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

      {/* Instagram Section */}
      <InstagramSection />
    </div>
  );
};

export default About;
import { useState, useRef } from 'react';
import beforeImage from '../assets/images/beforeImage.png';
import afterImage from '../assets/images/afterImage.jpg';
import andIcon from '../assets/icons/andIcon.svg';
import bnaSlider from '../assets/icons/bnaSlider.svg';
import InstagramSection from '../components/InstagramSection';

// Comparison Slider Component
const ComparisonSlider = ({ beforeImg, afterImg }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleMove = (clientX) => {
    if (!containerRef.current || !isDragging.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    isDragging.current = true;
    document.body.style.cursor = 'grabbing';
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    document.body.style.cursor = 'default';
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    handleMove(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[400px] overflow-hidden select-none"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      {/* After Image (Background) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${afterImg})` }}
      >
        {/* AFTER Label */}
        <span
          className="absolute bottom-8 right-8 font-lato text-[#FFFEFD] text-[20px] tracking-wider"
          style={{ fontWeight: 300 }}
        >
          AFTER
        </span>
      </div>

      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${beforeImg})`,
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
      >
        {/* BEFORE Label */}
        <span
          className="absolute bottom-8 left-8 font-lato text-[#FFFEFD] text-[20px] tracking-wider"
          style={{ fontWeight: 300 }}
        >
          BEFORE
        </span>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        {/* Slider Circle with Arrows */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          {/* Left Arrow */}
          <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="pointer-events-none">
            <path d="M9 1L2 8L9 15" stroke="#380F05" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {/* Spacer */}
          <div className="w-3"></div>
          {/* Right Arrow */}
          <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="pointer-events-none">
            <path d="M1 1L8 8L1 15" stroke="#380F05" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const BeforeAfter = () => {
  // Transformation data
  const transformations = [
    {
      location: "LAGOS, NIGERIA — 2023",
      subtitle: "A Contemporary Outdoor Wedding",
      title: "ROMANCE\nREIMAGINED",
      description: "What began as a simple open lawn became a contemporary landscape of sculptural florals, soft draping, and clean architectural lines. We carved out an aisle that framed the water's edge, layered muted tones against the natural greenery, and introduced intentional elevation points that created depth and flow. The transformation turned an ordinary outdoor clearing into a refined, modern ceremony space — light-filled, airy, and romantic.",
      beforeImg: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&auto=format&fit=crop",
      afterImg: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&auto=format&fit=crop",
      layout: "left" // text on left, images on right
    },
    {
      location: "ABUJA, NIGERIA — 2023",
      subtitle: "Corporate Hospitality, Elevated",
      title: "CIVIC CENTRE\nREIMAGINED",
      description: "What began as a stark conference hall was transformed into a warm, contemporary dining environment. Clean lines and subtle brand cues shaped the design, while immersive lighting softened the room's edges and invited guests into a more intimate experience. Sterile layouts gave way to elegantly dressed tables, curated florals, and a gentle glow that echoed BlueTech's identity. The result was a space where corporate formality dissolved into refined hospitality — polished and thoughtfully composed.",
      beforeImg: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=800&auto=format&fit=crop",
      afterImg: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&auto=format&fit=crop",
      layout: "right" // text on right, images on left
    },
    {
      location: "LAGOS, NIGERIA — 2024",
      subtitle: "A Cultural & Modern Fusion Wedding",
      title: "TRADITION\nILLUMINATED",
      description: "A plain events hall became the stage for a modern interpretation of cultural heritage. Vibrant traditional textiles were paired with minimalist florals, while soft lighting highlighted ceremonial areas with intention. The result was a warm, contemporary scene where colour and structure danced together — a fusion of culture and modernity brought to life in rich detail.",
      beforeImg: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&auto=format&fit=crop",
      afterImg: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&auto=format&fit=crop",
      layout: "left"
    },
    {
      location: "LAGOS, NIGERIA — 2022",
      subtitle: "A Birthday Dinner in Modern Bloom",
      title: "INTIMATE\nGIRLS DINNER",
      description: "What began as a simple private dining room blossomed into a softly lit, modern sanctuary. Clean tablescapes, layered with delicate florals and gentle candlelight, wrapped the room in a warm, luminous glow. Tonal accents added depth, turning the space into a cocoon of quiet elegance. The transformation shifted the atmosphere from ordinary to intimate — a tender, luxurious setting crafted for connection, warmth, and a beauty that felt both effortless and intentional.",
      beforeImg: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop",
      afterImg: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&auto=format&fit=crop",
      layout: "right"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[100vh] overflow-hidden">
        {/* Split Background Images */}
        <div className="absolute inset-0 flex">
          {/* Before (Left Side) */}
          <div
            className="w-1/2 bg-cover bg-center"
            style={{ backgroundImage: `url(${beforeImage})` }}
          ></div>

          {/* After (Right Side) */}
          <div
            className="w-1/2 bg-cover bg-center"
            style={{ backgroundImage: `url(${afterImage})` }}
          ></div>
        </div>

        {/* Text Overlay - & at dead center */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* BEFORE - positioned to end at the & */}
          <h1
            className="font-editors-note italic absolute"
            style={{
              fontWeight: 100,
              fontSize: '140px',
              color: '#380F05',
              lineHeight: '1',
              right: '50%',
              marginRight: '110px',
            }}
          >
            BEFORE
          </h1>

          {/* & Icon - dead center */}
          <img
            src={andIcon}
            alt="&"
            className="w-24 h-24 lg:w-28 lg:h-28 object-contain z-10"
          />

          {/* AFTER - positioned to start at the & */}
          <h1
            className="font-editors-note italic absolute"
            style={{
              fontWeight: 100,
              fontSize: '190px',
              color: '#FFFEFD',
              lineHeight: '1',
              left: '50%',
              marginLeft: '110px',
            }}
          >
            After
          </h1>
        </div>
      </section>

      {/* Reimagining Spaces Section */}
      <section className="bg-[#2B0202] py-20 lg:py-28 px-6 lg:px-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Header */}
          <h2
            className="font-editors-note text-[#FFFEFD] text-[45px] lg:text-[65px] mb-10"
            style={{
              fontWeight: 100,
              lineHeight: '79px'
            }}
          >
            <span className="block">Reimagining Spaces With</span>
            <span className="block">Purpose & Artistry</span>
          </h2>

          {/* Description */}
          <p
            className="font-newsreader text-[#FFFEFD] text-[18px] lg:text-[20px] max-w-4xl mx-auto"
            style={{
              fontWeight: 300,
              lineHeight: '28.8px'
            }}
          >
            We see possibility in every space — even the ones that appear ordinary at first glance. From plain halls reimagined into softly lit atmospheres, to open fields transformed into tented celebrations along the water, to simple dining rooms elevated with texture and light, we curate environments that feel intentional, personal, and beautifully immersive. While we love venues that are stunning on their own, our joy lies in crafting designs that reflect the heart of your celebration. Use the slider below to explore each transformation.
          </p>
        </div>
      </section>

      {/* Transformation Sections */}
      {transformations.map((item, index) => (
        <section key={index} className="bg-[#FFFEFD] py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className={`grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16 items-stretch`}>

              {/* Text Content - 60% (6 columns) */}
              <div className={`lg:col-span-6 ${item.layout === 'right' ? 'lg:order-2' : 'lg:order-1'}`}>
                {/* Location & Year - NOT centered */}
                <p
                  className={`font-lato text-[#380F05] text-[15px] tracking-wider mb-2 ${item.layout === 'right' ? 'text-right' : 'text-left'}`}
                  style={{ fontWeight: 300 }}
                >
                  {item.location}
                </p>

                {/* Subtitle/Header - NOT centered, IS italic */}
                <h3
                  className={`font-editors-note text-[#380F05] text-[36px] lg:text-[40px] mb-12 ${item.layout === 'right' ? 'text-right' : 'text-left'}`}
                  style={{ fontWeight: 100, lineHeight: '48px' }}
                >
                  {item.subtitle}
                </h3>

                {/* Big Title - CENTERED */}
                <h2
                  className="font-editors-note text-[#380F05] text-[60px] lg:text-[92px] mb-10 text-center"
                  style={{ fontWeight: 100, lineHeight: '92px' }}
                >
                  {item.title.split('\n').map((line, i) => (
                    <span key={i} className="block">{line}</span>
                  ))}
                </h2>

                {/* Description - CENTERED */}
                <p
                  className="font-newsreader text-[#380F05] text-[18px] lg:text-[20px] text-center"
                  style={{ fontWeight: 300, lineHeight: '28.8px' }}
                >
                  {item.description}
                </p>
              </div>

              {/* Comparison Slider - 40% (4 columns) */}
              <div className={`lg:col-span-4 ${item.layout === 'right' ? 'lg:order-1' : 'lg:order-2'}`}>
                <ComparisonSlider
                  beforeImg={item.beforeImg}
                  afterImg={item.afterImg}
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Instagram Section */}
      <InstagramSection />
    </div>
  );
};

export default BeforeAfter;
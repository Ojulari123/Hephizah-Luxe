import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import InstagramSection from '../components/InstagramSection';
import whiteArrow from '../assets/icons/whitestraightArrow.svg';
import straightArrow from '../assets/icons/straightArrow.svg';
// Hero images
import decorImage from '../assets/images/decor.jpg';
import exploreImage from '../assets/images/exploreImage.png';
import giftImage from '../assets/images/gift.png';
import instaImage4 from '../assets/images/instaImage4.png';
import outdoorsImage from '../assets/images/outdoors.png';
import risiImage from '../assets/images/risiImage.png';
import topleftImage from '../assets/images/topleft.png';
import whyWorkImage from '../assets/images/whyWorkImage.png';

const Portfolio = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('All Events');
  const [hoveredButton, setHoveredButton] = useState(null);

  // Array of images for hero
  const heroImages = [
    decorImage,
    exploreImage,
    giftImage,
    instaImage4,
    outdoorsImage,
    risiImage,
    topleftImage,
    whyWorkImage
  ];

  // Portfolio events data - Added id and eventType fields
  const allEvents = [
    {
      id: 'sarah-winter-wedding',
      eventType: 'single-day', // This will route to single-day event details
      category: 'Weddings',
      location: 'LAGOS, NIGERIA',
      year: '2023',
      title: "Sarah & Winter's Contemporary Outdoor Wedding",
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop'
    },
    {
      id: 'tomi-fiyin-wedding',
      eventType: 'multi-day', // This will route to multi-day event details
      category: 'Weddings',
      location: 'LAGOS, NIGERIA',
      year: '2021',
      title: "Tomi & Fiyin's Elegant Expresso-Tone Wedding",
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&auto=format&fit=crop'
    },
    {
      id: 'bluetech-dinner',
      eventType: 'single-day',
      category: 'Corporate',
      location: 'ABUJA, NIGERIA',
      year: '2023',
      title: "BlueTech Solutions' Annual Stakeholder Appreciation Dinner",
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop'
    },
    {
      id: 'risi-tunde-wedding',
      eventType: 'single-day',
      category: 'Weddings',
      location: 'LAGOS, NIGERIA',
      year: '2024',
      title: "Risi & Tunde's Cultural & Modern Fusion Wedding",
      image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&auto=format&fit=crop'
    },
    {
      id: 'stephanie-birthday',
      eventType: 'single-day',
      category: 'Birthdays',
      location: 'LAGOS, NIGERIA',
      year: '2023',
      title: "Stephanie's Modern 30th Birthday Dinner Soirée",
      image: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=800&auto=format&fit=crop'
    },
    {
      id: 'mariam-birthday',
      eventType: 'single-day',
      category: 'Birthdays',
      location: 'LAGOS, NIGERIA',
      year: '2021',
      title: "Mariam's Golden Birthday Affair",
      image: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=800&auto=format&fit=crop'
    },
    {
      id: 'lola-birthday',
      eventType: 'single-day',
      category: 'Birthdays',
      location: 'LAGOS, NIGERIA',
      year: '2022',
      title: "Lola's Chic 25th Birthday Dinner at The Wheatbaker",
      image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&auto=format&fit=crop'
    },
    {
      id: 'focus-quest-launch',
      eventType: 'single-day',
      category: 'Corporate',
      location: 'ABUJA, NIGERIA',
      year: '2022',
      title: "The Focus Quest Group's Innovation Launch Event",
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop'
    },
    {
      id: 'daniel-dinner',
      eventType: 'single-day',
      category: 'Social Events',
      location: 'LAGOS, NIGERIA',
      year: '2025',
      title: "Daniel's Intimate 25th Dinner in VI",
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop'
    },
    {
      id: 'michael-michelle-wedding',
      eventType: 'single-day',
      category: 'Weddings',
      location: 'LAGOS, NIGERIA',
      year: '2025',
      title: "Michael & Michelle's Elegant Tented Wedding on the Lagoon",
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&auto=format&fit=crop'
    }
  ];

  const categories = ['All Events', 'Weddings', 'Birthdays', 'Corporate', 'Social Events'];

  // Filter events based on active category
  const filteredEvents = activeCategory === 'All Events'
    ? allEvents
    : allEvents.filter(event => event.category === activeCategory);

  // Change hero image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Helper function to render event card with conditional Link wrapper
  const renderEventCard = (event, index, aspectRatio) => {
    const eventCard = (
      <div className="group cursor-pointer">
        <div className={`overflow-hidden mb-4 ${aspectRatio}`}>
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <p
          className="font-lato text-[#380F05] mb-2"
          style={{ fontWeight: 300, fontSize: '15px', lineHeight: '184%' }}
        >
          {event.location} — {event.year}
        </p>
        <h3
          className="font-editors-note text-[#380F05]"
          style={{ fontWeight: 300, fontSize: '24px', lineHeight: '32px' }}
        >
          {event.title}
        </h3>
      </div>
    );

    // Only wrap first two events with Link
    if (index < 2) {
      return (
        <Link 
          key={index} 
          to={`/portfolio/${event.eventType}/${event.id}`}
        >
          {eventCard}
        </Link>
      );
    }

    return <div key={index}>{eventCard}</div>;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full bg-[#2B0202] overflow-hidden">
        <div className="relative z-10 pt-20 lg:pt-16 pb-32 flex flex-col items-center">
          <h1
            className="font-editors-note text-[#FFFEFD] text-center relative z-20"
            style={{
              fontWeight: 100,
              fontSize: '150px',
              lineHeight: '100%',
              letterSpacing: '0.03em',
            }}
          >
            PORTFOLIO
          </h1>

          <div className="relative mt-[-70px] lg:mt-[-72px] w-[500px] h-[550px] overflow-hidden z-10">
            {heroImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Portfolio ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="bg-[#FFFEFD] py-16 lg:py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`font-lato text-[#380F05] transition-all ${
                  activeCategory === category
                    ? 'border-b-2 border-[#380F05]'
                    : 'hover:border-b-2 hover:border-[#380F05]/30'
                }`}
                style={{
                  fontWeight: 300,
                  fontSize: '20px',
                  lineHeight: '184%'
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="space-y-12">
            {/* Row 1 - 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredEvents.slice(0, 3).map((event, index) => 
                renderEventCard(event, index, 'aspect-[4/5]')
              )}
            </div>

            {/* Row 2 - 2 columns */}
            {filteredEvents.length > 3 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredEvents.slice(3, 5).map((event, index) => 
                  renderEventCard(event, index + 3, 'aspect-[5/4]')
                )}
              </div>
            )}

            {/* Row 3 - 3 columns */}
            {filteredEvents.length > 5 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {filteredEvents.slice(5, 8).map((event, index) => 
                  renderEventCard(event, index + 5, 'aspect-[4/5]')
                )}
              </div>
            )}

            {/* Row 4 - 2 columns */}
            {filteredEvents.length > 8 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredEvents.slice(8, 10).map((event, index) => 
                  renderEventCard(event, index + 8, 'aspect-[5/4]')
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CEO MESSAGE & INQUIRY SECTION */}
      <section className="relative bg-[#2B0202] py-24 lg:py-36 overflow-hidden">
        <div className="hidden lg:block absolute top-12 left-0 w-[120px] xl:w-[160px] h-[350px] xl:h-[450px]">
          <img
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format&fit=crop"
            alt="Inspiration"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="hidden lg:block absolute bottom-12 right-0 w-[120px] xl:w-[160px] h-[350px] xl:h-[450px]">
          <img
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&auto=format&fit=crop"
            alt="Detail"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-24 relative z-10 flex justify-start">
          <div className="max-w-4xl lg:ml-[9%] xl:ml-[9%]">
            <h2
              className="font-editors-note text-[#FFFEFD] mb-10"
              style={{
                fontWeight: 1,
                fontSize: '45px',
                lineHeight: '55px',
                maxWidth: '920px'
              }}
            >
              No two events are the same — each unfolds into something beautifully personal
            </h2>

            <p
              className="font-newsreader text-[#FFFEFD] mb-8"
              style={{
                fontWeight: 300,
                fontSize: '19px',
                lineHeight: '31px',
                maxWidth: '920px'
              }}
            >
              Our clients are gracious, discerning, and deeply appreciative of thoughtful design — creating the perfect canvas for us to produce our most inspired work. Their trust allows us to dream boldly and craft celebrations that feel both personal and unforgettable.
            </p>

            <p
              className="font-lato text-[#FFFEFD] tracking-[0.2em] mb-24 uppercase"
              style={{
                fontWeight: 300,
                fontSize: '20px',
                lineHeight: '35px'
              }}
            >
              — WINIFRED OJULARI, CEO HEPHZIBAH LUXE
            </p>

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 max-w-[920px]">
              <p
                className="font-newsreader italic text-[#FFFEFD]"
                style={{
                  fontWeight: 300,
                  fontSize: '20px',
                  lineHeight: '35px'
                }}
              >
                Ready to Begin? Let's create something amazing
              </p>

              <Link
                to="/inquiry"
                onMouseEnter={() => setHoveredButton('inquiry')}
                onMouseLeave={() => setHoveredButton(null)}
                className="group border border-[#FFFEFD] px-8 py-3 flex items-center gap-8 transition-all duration-500 hover:bg-[#FFFEFD] flex-shrink-0"
              >
                <span
                  className={`font-newsreader italic transition-colors duration-500 whitespace-nowrap ${
                    hoveredButton === 'inquiry' ? 'text-[#2B0202]' : 'text-[#FFFEFD]'
                  }`}
                  style={{
                    fontWeight: 300,
                    fontSize: '20px',
                    lineHeight: '35px'
                  }}
                >
                  Send us a message
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

export default Portfolio;
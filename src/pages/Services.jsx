import servicesHeroBg from '../assets/images/servicesHerobg.png';
import whyWorkImage from '../assets/images/whyWorkImage.png';
import checkIcon from '../assets/icons/checkIcon.svg';
import InstagramSection from '../components/InstagramSection';

const Services = () => {
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
      <section className="relative w-full h-[90vh]">
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

      {/* Instagram Section */}
      <InstagramSection />
    </div>
  );
};

export default Services;
import instaIcon from '../assets/icons/instaIcon.svg';
import instaImage1 from '../assets/images/instaImage1.png';
import instaImage2 from '../assets/images/instaImage2.png';
import instaImage3 from '../assets/images/instaImage3.png';
import instaImage4 from '../assets/images/instaImage4.png';

const InstagramSection = () => {
  const instagramUrl = 'https://www.instagram.com/hephzibahluxe';
  
  const images = [
    { src: instaImage1, alt: 'Wedding on stairs' },
    { src: instaImage2, alt: 'Corporate dinner setup' },
    { src: instaImage3, alt: 'Elegant portrait' },
    { src: instaImage4, alt: 'Gala dinner event' },
  ];

  return (
    <section className="bg-background px-6 lg:px-10 py-16 lg:py-20">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12">
        {/* Title */}
        <div className="mb-8 lg:mb-0">
          <h2 className="text-secondary">
            <span 
              className="font-editors-note text-[40px]"
              style={{ fontWeight: 100 }}
            >
              Follow{' '}
            </span>
            <span 
              className="font-editors-note text-[43px] italic"
              style={{ fontWeight: 100 }}
            >
              Hephzibah Luxe
            </span>
          </h2>
          <p 
            className="font-editors-note text-secondary text-[40px] pl-[2.2em]"
            style={{ fontWeight: 100 }}
          >
            On Instagram
          </p>
        </div>

        {/* Follow Button */}
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-4 border border-primary px-6 py-3 hover:bg-primary hover:text-white transition-colors duration-300 group"
        >
          <span className="font-lato font-medium text-sm text-primary group-hover:text-white tracking-wide">
            FOLLOW HEPHZIBAH LUXE
          </span>
          <img 
            src={instaIcon} 
            alt="Instagram" 
            className="w-6 h-6 group-hover:brightness-0 group-hover:invert transition-all duration-300" 
          />
        </a>
      </div>

      {/* Instagram Images Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <a
            key={index}
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden aspect-square group"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default InstagramSection;
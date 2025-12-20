import { useState } from 'react';
import InstagramSection from '../components/InstagramSection';

const MultiDayEventDetails = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample multi-day event data
  const event = {
    location: 'LAGOS, NIGERIA',
    year: '2024',
    title: "Risi & Tunde's Cultural & Modern Fusion Wedding",
    description: "Risi and Tunde dreamed of a wedding that honoured their cultural roots while embracing a modern, refined aesthetic. Their celebration became a gentle fusion of cherished traditions and sleek contemporary design — a day where heritage and minimal elegance moved in quiet harmony. Soft neutrals, intentional textures, and artful florals shaped an atmosphere that felt both warm and deeply meaningful. And when the couple stepped into their reception — a space reimagined as a modern ode to their cultural story — it felt like a perfect mirror of who they are: grounded in tradition, yet beautifully, effortlessly modern.",
    events: [
      {
        id: 1,
        eventNumber: 'EVENT NO. 1',
        eventTitle: "Before the Vows — Risi's Floral Bridal Shower With a Lakeside View",
        eventImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop',
        description: "A sun-drenched afternoon celebration overlooking the tranquil waters of Lagos. Risi's bridal shower was a delicate prelude to the days ahead — intimate, joyful, and wrapped in blooms. Soft pinks and whites adorned every corner, while close friends gathered to toast to love, laughter, and the journey she was about to begin.\n\nThe lakeside setting provided a serene backdrop for heartfelt conversations, personalized games, and thoughtful touches that reflected Risi's grace and warmth. It was a moment of pause before the whirlwind — a chance to simply be present with the women who've shaped her story.",
        allImages: [
          'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&auto=format&fit=crop'
        ],
        testimonial: {
          quote: "My bridal shower felt like a dream I didn't even know how to articulate. Hephzibah Luxe took the simplest vision and transformed it into something soft, feminine, and deeply personal. Every detail — from the florals to the ambiance — felt intentional. I spent the entire afternoon surrounded by beauty and genuine joy, completely at ease. It was the perfect beginning to my wedding journey.",
          author: "RISI, THE BRIDE TO-BE"
        }
      },
      {
        id: 2,
        eventNumber: 'EVENT NO. 2',
        eventTitle: 'The Traditional Wedding — A Tapestry of Culture',
        eventImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&auto=format&fit=crop',
        description: "Rich fabrics, ancestral blessings, and the vibrant energy of two families becoming one. The traditional wedding was a celebration steeped in heritage — where every ritual, every color, every gesture carried the weight of generations. Risi and Tunde honored their roots with intention, weaving cultural customs into a day that felt both deeply meaningful and visually stunning.\n\nFrom the ceremonial processions to the exchange of symbolic gifts, the event unfolded like a living tapestry — bold, beautiful, and unmistakably theirs. It was tradition reimagined with elegance, proving that culture and contemporary design can exist in perfect harmony.",
        allImages: [
          'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop'
        ],
        testimonial: {
          quote: "The traditional wedding was everything we hoped it would be — a beautiful blend of who we are and where we come from. Hephzibah Luxe didn't just plan an event; they honored our heritage with such care and intention. Every element, from the ceremonial setup to the smallest details, felt authentic and elevated. Our families were moved, and we were overwhelmed with gratitude.",
          author: "TUNDE & RISI"
        }
      },
      {
        id: 3,
        eventNumber: 'EVENT NO. 3',
        eventTitle: 'A Portrait of Elegance — The Wedding From Aisle to Midnight',
        eventImage: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&auto=format&fit=crop',
        description: "The final chapter of their celebration — a refined, elegant affair that carried them from intimate vows to a grand reception under the stars. Soft neutrals, dramatic lighting, and thoughtful design transformed the venue into a modern sanctuary. Every detail whispered sophistication, from the minimalist floral arrangements to the custom place settings that bore their story.\n\nAs the evening unfolded, the couple moved seamlessly from ceremony to celebration — dancing, dining, and embracing the joy of a love that had been years in the making. It was elegance in motion, a fitting crescendo to three unforgettable days.",
        allImages: [
          'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop'
        ],
        testimonial: {
          quote: "From the ceremony to the reception, everything flowed so seamlessly. We were able to be fully present — not worrying about logistics or timing, just soaking in every moment. The design was breathtaking, but it was the feeling that stayed with us. It felt like us. Elegant, intentional, and full of love.",
          author: "RISI & TUNDE"
        }
      }
    ]
  };

  // Open modal with selected image
  const openModal = (imageUrl, images) => {
    const imageIndex = images.indexOf(imageUrl);
    setCurrentImageIndex(imageIndex);
    setSelectedImage({ url: imageUrl, allImages: images });
  };

  // Close modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  // Navigate to previous image
  const previousImage = () => {
    const images = selectedImage.allImages;
    const newIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
    setSelectedImage({ url: images[newIndex], allImages: images });
  };

  // Navigate to next image
  const nextImage = () => {
    const images = selectedImage.allImages;
    const newIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
    setSelectedImage({ url: images[newIndex], allImages: images });
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (!selectedImage) return;
    if (e.key === 'ArrowLeft') previousImage();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'Escape') closeModal();
  };

  // If an individual event is selected, show single event view
  if (selectedEvent) {
    const eventData = event.events.find(e => e.id === selectedEvent);
    
    return (
      <div className="bg-[#FFFEFD] min-h-screen" onKeyDown={handleKeyDown} tabIndex={0}>
        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center"
            onClick={closeModal}
          >
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white text-4xl font-light hover:opacity-70 transition-opacity z-50"
            >
              ×
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                previousImage();
              }}
              className="absolute left-6 text-white text-5xl font-light hover:opacity-70 transition-opacity z-50"
            >
              ‹
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-6 text-white text-5xl font-light hover:opacity-70 transition-opacity z-50"
            >
              ›
            </button>

            <div 
              className="max-w-6xl max-h-[90vh] px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt="Enlarged view"
                className="max-w-full max-h-[90vh] object-contain"
              />
            </div>
          </div>
        )}

        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-12 pb-8">
          <button 
            onClick={() => setSelectedEvent(null)}
            className="font-lato text-[#380F05] hover:opacity-60 transition-opacity inline-flex items-center gap-2"
            style={{
              fontWeight: 300,
              fontSize: '14px'
            }}
          >
            <span>←</span> Back to All Events
          </button>
        </div>

        {/* Event Details Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-10">
          <div className="max-w-6xl">
            <p
              className="font-lato text-[#380F05] mb-4"
              style={{
                fontWeight: 300,
                fontSize: '14px'
              }}
            >
              {event.location} — {event.year}
            </p>

            <h1
              className="font-editors-note text-[#380F05] mb-8"
              style={{
                fontWeight: 1,
                fontSize: '45px',
                lineHeight: '52px',
                fontStyle: 'italic'
              }}
            >
              {eventData.eventTitle}
            </h1>

            <div className="space-y-6">
              {eventData.description.split('\n\n').map((paragraph, index) => (
                <p
                  key={index}
                  className="font-newsreader text-[#380F05]"
                  style={{
                    fontWeight: 300,
                    fontSize: '15px',
                    lineHeight: '25px'
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section - 1-3-1-2-1 Layout */}
        <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-20">
          <div className="mb-6">
            <div 
              className="w-full h-[500px] lg:h-[600px] overflow-hidden cursor-pointer"
              onClick={() => openModal(eventData.allImages[0], eventData.allImages)}
            >
              <img
                src={eventData.allImages[0]}
                alt="Event detail 1"
                className="w-full h-full object-cover hover:opacity-90 transition-opacity"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {eventData.allImages.slice(1, 4).map((image, index) => (
              <div 
                key={index}
                className="h-[350px] overflow-hidden cursor-pointer"
                onClick={() => openModal(image, eventData.allImages)}
              >
                <img
                  src={image}
                  alt={`Event detail ${index + 2}`}
                  className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                />
              </div>
            ))}
          </div>

          <div className="mb-6">
            <div 
              className="w-full h-[500px] lg:h-[600px] overflow-hidden cursor-pointer"
              onClick={() => openModal(eventData.allImages[4], eventData.allImages)}
            >
              <img
                src={eventData.allImages[4]}
                alt="Event detail 5"
                className="w-full h-full object-cover hover:opacity-90 transition-opacity"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {eventData.allImages.slice(5, 7).map((image, index) => (
              <div 
                key={index}
                className="h-[400px] overflow-hidden cursor-pointer"
                onClick={() => openModal(image, eventData.allImages)}
              >
                <img
                  src={image}
                  alt={`Event detail ${index + 6}`}
                  className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                />
              </div>
            ))}
          </div>

          {eventData.allImages[7] && (
            <div>
              <div 
                className="w-full h-[500px] lg:h-[600px] overflow-hidden cursor-pointer"
                onClick={() => openModal(eventData.allImages[7], eventData.allImages)}
              >
                <img
                  src={eventData.allImages[7]}
                  alt="Event detail 8"
                  className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                />
              </div>
            </div>
          )}
        </section>

        {/* Testimonial Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="max-w-6xl mx-auto text-center">
            <p
              className="font-editors-note text-[#380F05] mb-8"
              style={{
                fontWeight: 1,
                fontSize: '50px',
                lineHeight: '55px'
              }}
            >
              "{eventData.testimonial.quote}"
            </p>

            <p
              className="font-lato text-[#380F05] uppercase tracking-wider"
              style={{
                fontWeight: 300,
                fontSize: '14px',
                opacity: 0.88
              }}
            >
              — {eventData.testimonial.author}
            </p>
          </div>
        </section>

        {/* Additional Gallery Section - Mixed Layouts */}
        <section className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Row 1: 2 images - 60/40 split */}
          {eventData.allImages[8] && eventData.allImages[9] && (
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
              <div 
                className="md:col-span-3 h-[450px] overflow-hidden cursor-pointer"
                onClick={() => openModal(eventData.allImages[8], eventData.allImages)}
              >
                <img
                  src={eventData.allImages[8]}
                  alt="Event detail 9"
                  className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                />
              </div>
              <div 
                className="md:col-span-2 h-[450px] overflow-hidden cursor-pointer"
                onClick={() => openModal(eventData.allImages[9], eventData.allImages)}
              >
                <img
                  src={eventData.allImages[9]}
                  alt="Event detail 10"
                  className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                />
              </div>
            </div>
          )}

          {/* Row 2: Single large image */}
          {eventData.allImages[10] && (
            <div className="mb-6">
              <div 
                className="w-full h-[500px] lg:h-[600px] overflow-hidden cursor-pointer"
                onClick={() => openModal(eventData.allImages[10], eventData.allImages)}
              >
                <img
                  src={eventData.allImages[10]}
                  alt="Event detail 11"
                  className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                />
              </div>
            </div>
          )}

          {/* Row 3: 2 images - 40/60 split */}
          {eventData.allImages[11] && eventData.allImages[12] && (
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
              <div 
                className="md:col-span-2 h-[450px] overflow-hidden cursor-pointer"
                onClick={() => openModal(eventData.allImages[11], eventData.allImages)}
              >
                <img
                  src={eventData.allImages[11]}
                  alt="Event detail 12"
                  className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                />
              </div>
              <div 
                className="md:col-span-3 h-[450px] overflow-hidden cursor-pointer"
                onClick={() => openModal(eventData.allImages[12], eventData.allImages)}
              >
                <img
                  src={eventData.allImages[12]}
                  alt="Event detail 13"
                  className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                />
              </div>
            </div>
          )}
        </section>

        {/* Instagram Section */}
        <InstagramSection />
      </div>
    );
  }

  // Default view - show all events overview
  return (
    <div className="bg-[#FFFEFD] min-h-screen">
      {/* First Section - Location, Title, and Description */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-12 pb-10">
        <div className="max-w-6xl">
          {/* Location and Year */}
          <p
            className="font-lato text-[#380F05] mb-4"
            style={{
              fontWeight: 300,
              fontSize: '14px'
            }}
          >
            {event.location} — {event.year}
          </p>

          {/* Title */}
          <h1
            className="font-editors-note text-[#380F05] mb-8"
            style={{
              fontWeight: 1,
              fontSize: '45px',
              lineHeight: '52px',
              fontStyle: 'italic'
            }}
          >
            {event.title}
          </h1>

          {/* Description */}
          <p
            className="font-newsreader text-[#380F05]"
            style={{
              fontWeight: 300,
              fontSize: '15px',
              lineHeight: '25px'
            }}
          >
            {event.description}
          </p>
        </div>
      </section>

      {/* Events Overview Section - 3 Column Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {event.events.map((eventItem) => (
            <div 
              key={eventItem.id}
              className="cursor-pointer group"
              onClick={() => setSelectedEvent(eventItem.id)}
            >
              <div className="w-full h-[450px] mb-4 overflow-hidden">
                <img
                  src={eventItem.eventImage}
                  alt={eventItem.eventTitle}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p
                className="font-lato text-[#380F05] mb-2"
                style={{
                  fontWeight: 300,
                  fontSize: '15px',
                  lineHeight: '184%'
                }}
              >
                {eventItem.eventNumber}
              </p>
              <h3
                className="font-editors-note text-[#380F05]"
                style={{
                  fontWeight: 300,
                  fontSize: '24px',
                  lineHeight: '32px'
                }}
              >
                {eventItem.eventTitle}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Instagram Section */}
      <InstagramSection />
    </div>
  );
};

export default MultiDayEventDetails;
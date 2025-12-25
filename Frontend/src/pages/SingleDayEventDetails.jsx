// import { useState } from 'react';
// import InstagramSection from '../components/InstagramSection';


// const SingleDayEventDetails = () => {
//   const [hoveredButton, setHoveredButton] = useState(null);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Sample event data - this would come from props/routing in actual implementation
//   const event = {
//     location: 'ABUJA, NIGERIA',
//     year: '2023',
//     title: "Stephanie's Modern 30th Birthday Dinner Soirée",
//     description: "A celebration as elegant as the woman it honoured. For Stephanie's 30th, she envisioned something intimate yet beautifully modern — a night that felt intentional, refined, and deeply personal. We transformed a private dining space into a soft, contemporary setting using muted tones, warm candlelight, and subtle architectural florals that echoed her minimalist taste. Her closest friends gathered for a curated dinner experience, complete with bespoke menus, gentle ambient music, and a flow designed to encourage connection. Though small in scale, the evening carried a sense of significance — a moment of pause, joy, and reflection as she stepped into a new decade.\n\nIt was a privilege to craft a celebration that felt so authentically hers.",
//     allImages: [
//       'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=1200&auto=format&fit=crop',
//       'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format&fit=crop',
//       'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&auto=format&fit=crop',
//       'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&auto=format&fit=crop',
//       'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&auto=format&fit=crop',
//       'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&auto=format&fit=crop',
//       'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=800&auto=format&fit=crop',
//       'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&auto=format&fit=crop',
//       'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&auto=format&fit=crop',
//       'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop',
//       'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop',
//       'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&auto=format&fit=crop',
//       'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&auto=format&fit=crop',
//       'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&auto=format&fit=crop',
//       'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&auto=format&fit=crop'
//     ]
//   };

//   // Open modal with selected image
//   const openModal = (imageUrl) => {
//     const imageIndex = event.allImages.indexOf(imageUrl);
//     setCurrentImageIndex(imageIndex);
//     setSelectedImage(imageUrl);
//   };

//   // Close modal
//   const closeModal = () => {
//     setSelectedImage(null);
//   };

//   // Navigate to previous image
//   const previousImage = () => {
//     const newIndex = currentImageIndex === 0 ? event.allImages.length - 1 : currentImageIndex - 1;
//     setCurrentImageIndex(newIndex);
//     setSelectedImage(event.allImages[newIndex]);
//   };

//   // Navigate to next image
//   const nextImage = () => {
//     const newIndex = currentImageIndex === event.allImages.length - 1 ? 0 : currentImageIndex + 1;
//     setCurrentImageIndex(newIndex);
//     setSelectedImage(event.allImages[newIndex]);
//   };

//   // Handle keyboard navigation
//   const handleKeyDown = (e) => {
//     if (!selectedImage) return;
//     if (e.key === 'ArrowLeft') previousImage();
//     if (e.key === 'ArrowRight') nextImage();
//     if (e.key === 'Escape') closeModal();
//   };

//   return (
//     <div className="bg-[#FFFEFD] min-h-screen" onKeyDown={handleKeyDown} tabIndex={0}>
//       {/* Image Modal */}
//       {selectedImage && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center"
//           onClick={closeModal}
//         >
//           {/* Close Button */}
//           <button
//             onClick={closeModal}
//             className="absolute top-6 right-6 text-white text-4xl font-light hover:opacity-70 transition-opacity z-50"
//           >
//             ×
//           </button>

//           {/* Previous Button */}
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               previousImage();
//             }}
//             className="absolute left-6 text-white text-5xl font-light hover:opacity-70 transition-opacity z-50"
//           >
//             ‹
//           </button>

//           {/* Next Button */}
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               nextImage();
//             }}
//             className="absolute right-6 text-white text-5xl font-light hover:opacity-70 transition-opacity z-50"
//           >
//             ›
//           </button>

//           {/* Image */}
//           <div 
//             className="max-w-6xl max-h-[90vh] px-4"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <img
//               src={selectedImage}
//               alt="Enlarged view"
//               className="max-w-full max-h-[90vh] object-contain"
//             />
//           </div>
//         </div>
//       )}

//       {/* First Section - Location, Title, and Description */}
//       <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-14 pb-10">
//         <div className="max-w-5xl">
//           {/* Location and Year */}
//           <p
//             className="font-lato text-[#380F05] mb-4"
//             style={{
//               fontWeight: 300,
//               fontSize: '14px'
//             }}
//           >
//             {event.location} — {event.year}
//           </p>

//           {/* Title */}
//           <h1
//             className="font-editors-note text-[#380F05] mb-8"
//             style={{
//               fontWeight: 1,
//               fontSize: '45px',
//               lineHeight: '52px',
//               fontStyle: 'italic'
//             }}
//           >
//             {event.title}
//           </h1>

//           {/* Description */}
//           <div className="space-y-6">
//             {event.description.split('\n\n').map((paragraph, index) => (
//               <p
//                 key={index}
//                 className="font-newsreader text-[#380F05]"
//                 style={{
//                   fontWeight: 300,
//                   fontSize: '15px',
//                   lineHeight: '25px'
//                 }}
//               >
//                 {paragraph}
//               </p>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Gallery Section - 1-3-1-2-1 Layout */}
//       <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-20">
//         {/* Row 1: Single large image */}
//         <div className="mb-6">
//           <div 
//             className="w-full h-[500px] lg:h-[600px] overflow-hidden cursor-pointer"
//             onClick={() => openModal(event.allImages[0])}
//           >
//             <img
//               src={event.allImages[0]}
//               alt="Event detail 1"
//               className="w-full h-full object-cover hover:opacity-90 transition-opacity"
//             />
//           </div>
//         </div>

//         {/* Row 2: Three images */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//           <div 
//             className="h-[350px] overflow-hidden cursor-pointer"
//             onClick={() => openModal(event.allImages[1])}
//           >
//             <img
//               src={event.allImages[1]}
//               alt="Event detail 2"
//               className="w-full h-full object-cover hover:opacity-90 transition-opacity"
//             />
//           </div>
//           <div 
//             className="h-[350px] overflow-hidden cursor-pointer"
//             onClick={() => openModal(event.allImages[2])}
//           >
//             <img
//               src={event.allImages[2]}
//               alt="Event detail 3"
//               className="w-full h-full object-cover hover:opacity-90 transition-opacity"
//             />
//           </div>
//           <div 
//             className="h-[350px] overflow-hidden cursor-pointer"
//             onClick={() => openModal(event.allImages[3])}
//           >
//             <img
//               src={event.allImages[3]}
//               alt="Event detail 4"
//               className="w-full h-full object-cover hover:opacity-90 transition-opacity"
//             />
//           </div>
//         </div>

//         {/* Row 3: Single large image */}
//         <div className="mb-6">
//           <div 
//             className="w-full h-[500px] lg:h-[600px] overflow-hidden cursor-pointer"
//             onClick={() => openModal(event.allImages[4])}
//           >
//             <img
//               src={event.allImages[4]}
//               alt="Event detail 5"
//               className="w-full h-full object-cover hover:opacity-90 transition-opacity"
//             />
//           </div>
//         </div>

//         {/* Row 4: Two images */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//           <div 
//             className="h-[400px] overflow-hidden cursor-pointer"
//             onClick={() => openModal(event.allImages[5])}
//           >
//             <img
//               src={event.allImages[5]}
//               alt="Event detail 6"
//               className="w-full h-full object-cover hover:opacity-90 transition-opacity"
//             />
//           </div>
//           <div 
//             className="h-[400px] overflow-hidden cursor-pointer"
//             onClick={() => openModal(event.allImages[6])}
//           >
//             <img
//               src={event.allImages[6]}
//               alt="Event detail 7"
//               className="w-full h-full object-cover hover:opacity-90 transition-opacity"
//             />
//           </div>
//         </div>

//         {/* Row 5: Single large image */}
//         <div>
//           <div 
//             className="w-full h-[500px] lg:h-[600px] overflow-hidden cursor-pointer"
//             onClick={() => openModal(event.allImages[7])}
//           >
//             <img
//               src={event.allImages[7]}
//               alt="Event detail 8"
//               className="w-full h-full object-cover hover:opacity-90 transition-opacity"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Testimonial Section */}
//       <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
//         <div className="max-w-6xl mx-auto text-center">
//           {/* Testimonial Quote */}
//           <p
//             className="font-editors-note text-[#380F05] mb-8"
//             style={{
//               fontWeight: 1,
//               fontSize: '50px',
//               lineHeight: '55px'
//             }}
//           >
//             "From the moment we began planning, I felt completely supported. Hephzibah Luxe not only understood my style, they elevated it. The design was stunning, but the service was even more impressive — calm, organized, and so thoughtful. The evening flowed flawlessly, allowing me to simply enjoy my 30th surrounded by the people I love. It was everything I hoped for and so much more."
//           </p>

//           {/* Celebrant Name */}
//           <p
//             className="font-lato text-[#380F05] uppercase tracking-wider"
//             style={{
//               fontWeight: 300,
//               fontSize: '14px',
//               opacity: 0.88
//             }}
//           >
//             — STEPHANIE, CELEBRANT
//           </p>
//         </div>
//       </section>

//       {/* Second Gallery Section - 1-3-2-1 Layout */}
//       <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-20">
//         {/* Row 1: Single large image */}
//         <div className="mb-6">
//           <div 
//             className="w-full h-[500px] lg:h-[600px] overflow-hidden cursor-pointer"
//             onClick={() => openModal(event.allImages[8])}
//           >
//             <img
//               src={event.allImages[8]}
//               alt="Event detail 9"
//               className="w-full h-full object-cover hover:opacity-90 transition-opacity"
//             />
//           </div>
//         </div>

//         {/* Row 2: Three images */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//           <div 
//             className="h-[350px] overflow-hidden cursor-pointer"
//             onClick={() => openModal(event.allImages[9])}
//           >
//             <img
//               src={event.allImages[9]}
//               alt="Event detail 10"
//               className="w-full h-full object-cover hover:opacity-90 transition-opacity"
//             />
//           </div>
//           <div 
//             className="h-[350px] overflow-hidden cursor-pointer"
//             onClick={() => openModal(event.allImages[10])}
//           >
//             <img
//               src={event.allImages[10]}
//               alt="Event detail 11"
//               className="w-full h-full object-cover hover:opacity-90 transition-opacity"
//             />
//           </div>
//           <div 
//             className="h-[350px] overflow-hidden cursor-pointer"
//             onClick={() => openModal(event.allImages[11])}
//           >
//             <img
//               src={event.allImages[11]}
//               alt="Event detail 12"
//               className="w-full h-full object-cover hover:opacity-90 transition-opacity"
//             />
//           </div>
//         </div>

//         {/* Row 3: Two images */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//           <div 
//             className="h-[400px] overflow-hidden cursor-pointer"
//             onClick={() => openModal(event.allImages[12])}
//           >
//             <img
//               src={event.allImages[12]}
//               alt="Event detail 13"
//               className="w-full h-full object-cover hover:opacity-90 transition-opacity"
//             />
//           </div>
//           <div 
//             className="h-[400px] overflow-hidden cursor-pointer"
//             onClick={() => openModal(event.allImages[13])}
//           >
//             <img
//               src={event.allImages[13]}
//               alt="Event detail 14"
//               className="w-full h-full object-cover hover:opacity-90 transition-opacity"
//             />
//           </div>
//         </div>

//         {/* Row 4: Single large image */}
//         <div>
//           <div 
//             className="w-full h-[500px] lg:h-[600px] overflow-hidden cursor-pointer"
//             onClick={() => openModal(event.allImages[14])}
//           >
//             <img
//               src={event.allImages[14]}
//               alt="Event detail 15"
//               className="w-full h-full object-cover hover:opacity-90 transition-opacity"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Instagram Section */}
//       <InstagramSection />
//     </div>
//   );
// };

// export default SingleDayEventDetails;


import { useState } from 'react';
import InstagramSection from '../components/InstagramSection';

// Stephanie's Birthday images
import birthdayImage from '../assets/images/birthdayImage.png';
import rect712 from '../assets/images/Rectangle_712.png';
import rect713 from '../assets/images/Rectangle_713.png';
import rect714 from '../assets/images/Rectangle_714.png';
import rect715 from '../assets/images/Rectangle_715.png';
import rect716 from '../assets/images/Rectangle_716.png';
import rect717 from '../assets/images/Rectangle_717.png';
import rect718 from '../assets/images/Rectangle_718.png';
import rect719 from '../assets/images/Rectangle_719.png';
import rect720 from '../assets/images/Rectangle_720.png';
import rect721 from '../assets/images/Rectangle_721.png';
import rect722 from '../assets/images/Rectangle_722.png';
import rect723 from '../assets/images/Rectangle_723.png';
import rect725 from '../assets/images/Rectangle_725.png';
import rect726 from '../assets/images/Rectangle_726.png';


const SingleDayEventDetails = () => {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample event data - this would come from props/routing in actual implementation
  const event = {
    location: 'ABUJA, NIGERIA',
    year: '2023',
    title: "Stephanie's Modern 30th Birthday Dinner Soirée",
    description: "A celebration as elegant as the woman it honoured. For Stephanie's 30th, she envisioned something intimate yet beautifully modern — a night that felt intentional, refined, and deeply personal. We transformed a private dining space into a soft, contemporary setting using muted tones, warm candlelight, and subtle architectural florals that echoed her minimalist taste. Her closest friends gathered for a curated dinner experience, complete with bespoke menus, gentle ambient music, and a flow designed to encourage connection. Though small in scale, the evening carried a sense of significance — a moment of pause, joy, and reflection as she stepped into a new decade.\n\nIt was a privilege to craft a celebration that felt so authentically hers.",
    allImages: [
      birthdayImage,
      rect712,
      rect713,
      rect714,
      rect715,
      rect716,
      rect717,
      rect718,
      rect719,
      rect720,
      rect721,
      rect722,
      rect723,
      rect725,
      rect726
    ]
  };

  // Open modal with selected image
  const openModal = (imageUrl) => {
    const imageIndex = event.allImages.indexOf(imageUrl);
    setCurrentImageIndex(imageIndex);
    setSelectedImage(imageUrl);
  };

  // Close modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  // Navigate to previous image
  const previousImage = () => {
    const newIndex = currentImageIndex === 0 ? event.allImages.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
    setSelectedImage(event.allImages[newIndex]);
  };

  // Navigate to next image
  const nextImage = () => {
    const newIndex = currentImageIndex === event.allImages.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
    setSelectedImage(event.allImages[newIndex]);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (!selectedImage) return;
    if (e.key === 'ArrowLeft') previousImage();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'Escape') closeModal();
  };

  return (
    <div className="bg-[#FFFEFD] min-h-screen" onKeyDown={handleKeyDown} tabIndex={0}>
      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white text-4xl font-light hover:opacity-70 transition-opacity z-50"
          >
            ×
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              previousImage();
            }}
            className="absolute left-6 text-white text-5xl font-light hover:opacity-70 transition-opacity z-50"
          >
            ‹
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-6 text-white text-5xl font-light hover:opacity-70 transition-opacity z-50"
          >
            ›
          </button>

          {/* Image */}
          <div 
            className="max-w-6xl max-h-[90vh] px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}

      {/* First Section - Location, Title, and Description */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-14 pb-10">
        <div className="max-w-5xl">
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
          <div className="space-y-6">
            {event.description.split('\n\n').map((paragraph, index) => (
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
        {/* Row 1: Single large image */}
        <div className="mb-6">
          <div 
            className="w-full h-[500px] lg:h-[600px] overflow-hidden cursor-pointer"
            onClick={() => openModal(event.allImages[0])}
          >
            <img
              src={event.allImages[0]}
              alt="Event detail 1"
              className="w-full h-full object-cover hover:opacity-90 transition-opacity"
            />
          </div>
        </div>

        {/* Row 2: Three images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div 
            className="h-[350px] overflow-hidden cursor-pointer"
            onClick={() => openModal(event.allImages[1])}
          >
            <img
              src={event.allImages[1]}
              alt="Event detail 2"
              className="w-full h-full object-cover hover:opacity-90 transition-opacity"
            />
          </div>
          <div 
            className="h-[350px] overflow-hidden cursor-pointer"
            onClick={() => openModal(event.allImages[2])}
          >
            <img
              src={event.allImages[2]}
              alt="Event detail 3"
              className="w-full h-full object-cover hover:opacity-90 transition-opacity"
            />
          </div>
          <div 
            className="h-[350px] overflow-hidden cursor-pointer"
            onClick={() => openModal(event.allImages[3])}
          >
            <img
              src={event.allImages[3]}
              alt="Event detail 4"
              className="w-full h-full object-cover hover:opacity-90 transition-opacity"
            />
          </div>
        </div>

        {/* Row 3: Single large image */}
        <div className="mb-6">
          <div 
            className="w-full h-[500px] lg:h-[600px] overflow-hidden cursor-pointer"
            onClick={() => openModal(event.allImages[4])}
          >
            <img
              src={event.allImages[4]}
              alt="Event detail 5"
              className="w-full h-full object-cover hover:opacity-90 transition-opacity"
            />
          </div>
        </div>

        {/* Row 4: Two images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div 
            className="h-[400px] overflow-hidden cursor-pointer"
            onClick={() => openModal(event.allImages[5])}
          >
            <img
              src={event.allImages[5]}
              alt="Event detail 6"
              className="w-full h-full object-cover hover:opacity-90 transition-opacity"
            />
          </div>
          <div 
            className="h-[400px] overflow-hidden cursor-pointer"
            onClick={() => openModal(event.allImages[6])}
          >
            <img
              src={event.allImages[6]}
              alt="Event detail 7"
              className="w-full h-full object-cover hover:opacity-90 transition-opacity"
            />
          </div>
        </div>

        {/* Row 5: Single large image */}
        <div>
          <div 
            className="w-full h-[500px] lg:h-[600px] overflow-hidden cursor-pointer"
            onClick={() => openModal(event.allImages[7])}
          >
            <img
              src={event.allImages[7]}
              alt="Event detail 8"
              className="w-full h-full object-cover hover:opacity-90 transition-opacity"
            />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Testimonial Quote */}
          <p
            className="font-editors-note text-[#380F05] mb-8"
            style={{
              fontWeight: 1,
              fontSize: '50px',
              lineHeight: '55px'
            }}
          >
            "From the moment we began planning, I felt completely supported. Hephzibah Luxe not only understood my style, they elevated it. The design was stunning, but the service was even more impressive — calm, organized, and so thoughtful. The evening flowed flawlessly, allowing me to simply enjoy my 30th surrounded by the people I love. It was everything I hoped for and so much more."
          </p>

          {/* Celebrant Name */}
          <p
            className="font-lato text-[#380F05] uppercase tracking-wider"
            style={{
              fontWeight: 300,
              fontSize: '14px',
              opacity: 0.88
            }}
          >
            — STEPHANIE, CELEBRANT
          </p>
        </div>
      </section>

      {/* Second Gallery Section - 1-3-2-1 Layout */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-20">
        {/* Row 1: Single large image */}
        <div className="mb-6">
          <div 
            className="w-full h-[500px] lg:h-[600px] overflow-hidden cursor-pointer"
            onClick={() => openModal(event.allImages[8])}
          >
            <img
              src={event.allImages[8]}
              alt="Event detail 9"
              className="w-full h-full object-cover hover:opacity-90 transition-opacity"
            />
          </div>
        </div>

        {/* Row 2: Three images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div 
            className="h-[350px] overflow-hidden cursor-pointer"
            onClick={() => openModal(event.allImages[9])}
          >
            <img
              src={event.allImages[9]}
              alt="Event detail 10"
              className="w-full h-full object-cover hover:opacity-90 transition-opacity"
            />
          </div>
          <div 
            className="h-[350px] overflow-hidden cursor-pointer"
            onClick={() => openModal(event.allImages[10])}
          >
            <img
              src={event.allImages[10]}
              alt="Event detail 11"
              className="w-full h-full object-cover hover:opacity-90 transition-opacity"
            />
          </div>
          <div 
            className="h-[350px] overflow-hidden cursor-pointer"
            onClick={() => openModal(event.allImages[11])}
          >
            <img
              src={event.allImages[11]}
              alt="Event detail 12"
              className="w-full h-full object-cover hover:opacity-90 transition-opacity"
            />
          </div>
        </div>

        {/* Row 3: Two images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div 
            className="h-[400px] overflow-hidden cursor-pointer"
            onClick={() => openModal(event.allImages[12])}
          >
            <img
              src={event.allImages[12]}
              alt="Event detail 13"
              className="w-full h-full object-cover hover:opacity-90 transition-opacity"
            />
          </div>
          <div 
            className="h-[400px] overflow-hidden cursor-pointer"
            onClick={() => openModal(event.allImages[13])}
          >
            <img
              src={event.allImages[13]}
              alt="Event detail 14"
              className="w-full h-full object-cover hover:opacity-90 transition-opacity"
            />
          </div>
        </div>

        {/* Row 4: Single large image */}
        <div>
          <div 
            className="w-full h-[500px] lg:h-[600px] overflow-hidden cursor-pointer"
            onClick={() => openModal(event.allImages[14])}
          >
            <img
              src={event.allImages[14]}
              alt="Event detail 15"
              className="w-full h-full object-cover hover:opacity-90 transition-opacity"
            />
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <InstagramSection />
    </div>
  );
};

export default SingleDayEventDetails;
// import beforeImage from '../assets/images/beforeImage.png';
// import afterImage from '../assets/images/afterImage.jpg';
// import andIcon from '../assets/icons/andIcon.svg';
// import InstagramSection from '../components/InstagramSection';


// const BeforeAfter = () => {
//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="relative w-full h-screen overflow-hidden">
//         {/* Split Background Images */}
//         <div className="absolute inset-0 flex">
//           {/* Before (Left Side) */}
//           <div 
//             className="w-1/2 bg-cover bg-center"
//             style={{ backgroundImage: `url(${beforeImage})` }}
//           ></div>
          
//           {/* After (Right Side) */}
//           <div 
//             className="w-1/2 bg-cover bg-center"
//             style={{ backgroundImage: `url(${afterImage})` }}
//           ></div>
//         </div>

//         {/* Centered & Icon */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           <img 
//             src={andIcon} 
//             alt="&" 
//             className="w-32 h-32 lg:w-36 lg:h-36 object-contain"
//           />
//         </div>

//         {/* Text Overlay */}
//         <div className="absolute inset-0 flex items-center justify-between px-10 lg:px-20">
//           {/* BEFORE - Left Side */}
//           <h1 
//             className="font-editors-note italic"
//             style={{
//               fontWeight: 100,
//               fontSize: '140px',
//               color: '#380F05',
//               lineHeight: '1',
//             }}
//           >
//             BEFORE
//           </h1>

//           {/* AFTER - Right Side */}
//           <h1 
//             className="font-editors-note italic"
//             style={{
//               fontWeight: 100,
//               fontSize: '190px',
//               color: '#FFFEFD',
//               lineHeight: '1',
//             }}
//           >
//             After
//           </h1>
//         </div>
//       </section>

//       {/* Reimagining Spaces Section */}
//       <section className="bg-[#2B0202] py-20 lg:py-28 px-6 lg:px-10">
//         <div className="max-w-5xl mx-auto text-center">
//           {/* Header */}
//           <h2 
//             className="font-editors-note text-[#FFFEFD] text-[45px] lg:text-[65px] mb-10"
//             style={{ 
//               fontWeight: 100, 
//               lineHeight: '79px' 
//             }}
//           >
//             Reimagining Spaces With Purpose & Artistry
//           </h2>

//           {/* Description */}
//           <p 
//             className="font-newsreader text-[#FFFEFD] text-[18px] lg:text-[20px] max-w-4xl mx-auto"
//             style={{ 
//               fontWeight: 300, 
//               lineHeight: '28.8px' 
//             }}
//           >
//             We see possibility in every space — even the ones that appear ordinary at first glance. From plain halls reimagined into softly lit atmospheres, to open fields transformed into tented celebrations along the water, to simple dining rooms elevated with texture and light, we curate environments that feel intentional, personal, and beautifully immersive. While we love venues that are stunning on their own, our joy lies in crafting designs that reflect the heart of your celebration. Use the slider below to explore each transformation.
//           </p>
//         </div>
//       </section>

//       {/* Instagram Section */}
//       <InstagramSection />
//     </div>
//   );
// };

// export default BeforeAfter;

import beforeImage from '../assets/images/beforeImage.png';
import afterImage from '../assets/images/afterImage.jpg';
import andIcon from '../assets/icons/andIcon.svg';
import InstagramSection from '../components/InstagramSection';


const BeforeAfter = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
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

        {/* Centered & Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src={andIcon} 
            alt="&" 
            className="w-32 h-32 lg:w-36 lg:h-36 object-contain"
          />
        </div>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-between px-10 lg:px-20">
          {/* BEFORE - Left Side */}
          <h1 
            className="font-editors-note italic"
            style={{
              fontWeight: 100,
              fontSize: '140px',
              color: '#380F05',
              lineHeight: '1',
            }}
          >
            BEFORE
          </h1>

          {/* AFTER - Right Side */}
          <h1 
            className="font-editors-note italic"
            style={{
              fontWeight: 100,
              fontSize: '190px',
              color: '#FFFEFD',
              lineHeight: '1',
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
            <p>Reimagining Spaces With</p><p>Purpose & Artistry</p>
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

      {/* Instagram Section */}
      <InstagramSection />
    </div>
  );
};

export default BeforeAfter;
import { useState } from 'react';
import { Link } from 'react-router-dom';

const MultiDayEventDetails = () => {
  // Sample multi-day event data
  const event = {
    location: 'LAGOS, NIGERIA',
    year: '2024',
    title: "Risi & Tunde's Cultural & Modern Fusion Wedding",
    description: "Risi and Tunde dreamed of a wedding that honoured their cultural roots while embracing a modern, refined aesthetic. Their celebration became a gentle fusion of cherished traditions and sleek contemporary design — a day where heritage and minimal elegance moved in quiet harmony. Soft neutrals, intentional textures, and artful florals shaped an atmosphere that felt both warm and deeply meaningful. And when the couple stepped into their reception — a space reimagined as a modern ode to their cultural story — it felt like a perfect mirror of who they are: grounded in tradition, yet beautifully, effortlessly modern."
  };

  return (
    <div className="bg-[#FFFEFD] min-h-screen">
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
    </div>
  );
};

export default MultiDayEventDetails;
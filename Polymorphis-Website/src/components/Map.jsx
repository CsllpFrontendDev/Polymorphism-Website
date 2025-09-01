import React from "react";

const GoogleMap = () => {
  return (
    <section id="map" className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Map</h2>
        </div> */}

        <div className="rounded-lg overflow-hidden shadow-md">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15122.528067837407!2d73.7399508!3d18.635614!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbd153954adf%3A0x92d05edd91aec5bc!2sConfig%20Server%20LLP!5e0!3m2!1sen!2sin!4v1710583159490!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[450px] border-0"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default GoogleMap;

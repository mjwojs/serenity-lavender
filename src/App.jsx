import { useState } from "react";
import { motion } from "framer-motion";

import img1 from "./assets/IMG_1271.jpg";
import img2 from "./assets/IMG_1333.jpg";
import img3 from "./assets/IMG_5798.jpg";
import img4 from "./assets/IMG_6805.jpg";
import img5 from "./assets/IMG_6947.jpg";
import img6 from "./assets/IMG_6992.jpg";
import logo from "./assets/logo_clear.png";

const images = [img1, img2, img3, img4, img5, img6];

const storyText = `
After living in a big city for 28 years, I felt a growing desire for a quieter, more meaningful life. A trip with my daughter to Beaver Island became a turning point. There, we learned the story of Protar—a man who once sought peace and serenity in nature. His legacy touched me deeply.

With a passion for nature and a love for lavender, I began to study its cultivation. It hasn't always been easy—I’ve learned through books, mentors, and countless mistakes. But every misstep has brought me closer to my dream: creating a place of peace, purpose, and beauty.

Recently, I lost my dearest friend. Her passing was a reminder that life is fleeting. If we want to create something meaningful, we must begin today—because time, I’ve learned, is not infinite.

She taught me what truly matters in life. And now, as I walk among the lavender rows, I feel her presence. I believe she’s watching over me—and that one day, we’ll meet again in the most beautiful, serene lavender field.
`;

export default function App() {
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <div className="min-h-screen font-sans bg-gray-50 text-gray-900 overflow-x-hidden">
      {/* HERO HEADER */}
      <section className="relative h-screen flex flex-col justify-center items-center bg-gradient-to-b from-purple-100 to-white">
        <div className="absolute top-10 left-10">
          <motion.img
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            src={logo}
            alt="Logo"
            className="h-20 md:h-24"
          />
        </div>
        <motion.h1
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-5xl md:text-6xl font-serif font-bold text-center"
        >
          Serenity Lavender Farm
        </motion.h1>
      </section>

      {/* INTRO IMAGE */}
      <section
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${img3})` }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-2xl md:text-3xl font-light">
          <p>A place of peace, beauty, and dreams.</p>
        </div>
      </section>

      {/* GALLERY + STORY */}
      <section className="max-w-7xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* STORY */}
        <div className="bg-white p-6 shadow-xl rounded-xl border border-purple-200">
          <h2 className="text-2xl font-semibold mb-4">
            My Story – The Beginning of Serenity Lavender Farm
          </h2>
          <div className="text-gray-700 text-justify space-y-4 leading-relaxed">
            {storyText
              .split("\n\n")
              .map((para, i) => <p key={i}>{para}</p>)}
          </div>
        </div>

        {/* GALLERY */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Lavender Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Lavender ${i + 1}`}
                className="w-full h-40 object-cover rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setLightboxImage(src)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setLightboxImage(null)}
        >
          <img
            src={lightboxImage}
            alt="Full"
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
          />
        </div>
      )}

      {/* FOOTER */}
      <footer className="mt-12 p-4 text-center text-gray-600 border-t">
        © {new Date().getFullYear()} Serenity Lavender Farm
      </footer>
    </div>
  );
}
import { useState } from "react";
import { motion } from "framer-motion";

import img1 from "./assets/IMG_1271.jpg";
import img2 from "./assets/IMG_1333.jpg";
import img3 from "./assets/IMG_5798.jpg";
import img4 from "./assets/IMG_6805.jpg";
import img5 from "./assets/IMG_6947.jpg";
import img6 from "./assets/IMG_6992.jpg";
import logo from "./assets/logo_text_clear.png";

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
      {/* NAVBAR */}
      <header className="w-full sticky top-0 left-0 z-50 bg-white shadow-md backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-8 py-4">
          <img
            src={logo}
            alt="Logo"
            className="h-12 max-w-[150px] w-auto object-contain"
          />

          <nav className="flex space-x-8 text-gray-800 font-medium text-base">
            <a href="#about" className="hover:text-purple-600 transition underline-offset-4 hover:underline">
              About
            </a>
            <a href="#experience" className="hover:text-purple-600 transition underline-offset-4 hover:underline">
              Experience
            </a>
            <a href="#photos" className="hover:text-purple-600 transition underline-offset-4 hover:underline">
              Photos
            </a>
            <a href="#prices" className="hover:text-purple-600 transition underline-offset-4 hover:underline">
              Prices
            </a>
            <a href="#contact" className="hover:text-purple-600 transition underline-offset-4 hover:underline">
              Contact
            </a>
          </nav>

          <div className="ml-auto text-gray-600 font-semibold text-sm md:text-base select-none">
            📞 +48 123 456 789
          </div>
        </div>
      </header>



      {/* HERO SECTION */}
      <section
        className="h-screen w-full flex items-center justify-center relative bg-cover bg-center"
        style={{ backgroundImage: `url(${img3})` }}
      >
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 text-center px-4"
        >
          <h2 className="text-4xl md:text-5xl text-gray-800 font-light drop-shadow-md">
            A place of peace, beauty, and dreams.
          </h2>
        </motion.div>
      </section>

      {/* ABOUT & STORY SECTION */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-center">
        {/* IMAGE */}
        <div>
          <img
            src={img1}
            alt="Lavender Field"
            className="w-full rounded-xl shadow-xl"
          />
        </div>

        {/* TEXT */}
        <div className="bg-white p-6 shadow-xl rounded-xl border border-purple-200">
          <h2 className="text-2xl font-semibold mb-4">
            My Story – The Beginning of Serenity Lavender Farm
          </h2>
          <div className="text-gray-700 text-justify space-y-4 leading-relaxed">
            {storyText.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="photos" className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-8 text-center">Lavender Gallery</h2>
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
      <footer className="mt-12 p-6 text-center text-gray-600 border-t text-sm">
        © {new Date().getFullYear()} Serenity Lavender Farm — All rights reserved.
      </footer>
    </div>
  );
}

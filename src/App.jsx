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
  const [galleryIndex, setGalleryIndex] = useState(0);

  const nextImage = () => setGalleryIndex((i) => (i + 1) % images.length);
  const prevImage = () =>
    setGalleryIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 text-gray-900">
      {/* HEADER */}
      <header className="flex items-center justify-between p-4 border-b border-gray-300">
        <img src={logo} alt="Serenity Lavender Farm Logo" className="h-12 w-auto" />
        <h1 className="text-2xl font-serif font-bold">Serenity Lavender Farm</h1>
      </header>

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="relative h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${images[galleryIndex]})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center px-4 text-center">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-white text-5xl md:text-6xl font-serif drop-shadow-lg"
          >
            Serenity Lavender Farm
          </motion.h2>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="text-white mt-4 max-w-xl text-lg md:text-xl drop-shadow"
          >
            A place of peace, beauty, and dreams.
          </motion.p>

          {/* Controls to scroll images */}
          <div className="mt-8 flex gap-4">
            <button
              onClick={prevImage}
              className="bg-white bg-opacity-60 hover:bg-opacity-90 rounded-full px-4 py-2 font-semibold text-gray-900 transition"
            >
              Previous
            </button>
            <button
              onClick={nextImage}
              className="bg-white bg-opacity-60 hover:bg-opacity-90 rounded-full px-4 py-2 font-semibold text-gray-900 transition"
            >
              Next
            </button>
          </div>
        </div>
      </motion.section>

      {/* STORY */}
      <section className="max-w-4xl mx-auto p-8 prose prose-indigo">
        <h2>My Story – The Beginning of Serenity Lavender Farm</h2>
        {storyText.split("\n\n").map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </section>

      {/* GALLERY */}
      <section className="max-w-6xl mx-auto p-8">
        <h2 className="text-3xl font-serif mb-6 text-center">
          Lavender Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Lavender ${i + 1}`}
              className="rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform max-h-48 object-cover w-full"
              onClick={() => setGalleryIndex(i)}
            />
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="p-4 text-center text-gray-600 border-t border-gray-300">
        © {new Date().getFullYear()} Serenity Lavender Farm. All rights reserved.
      </footer>
    </div>
  );
}

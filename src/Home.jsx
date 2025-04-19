import React from "react";

export default function Home() {
  return (
    <>
      <head>
        <link rel="icon" type="image/jpeg" href="/logo1.jpeg" />
        <title>Guilford Armory</title>
      </head>
      <div className="min-h-screen bg-black text-white">
        {/* Header */}
        <header className="p-4 flex justify-between items-center bg-gradient-to-r from-camouflage to-black">
          <div className="flex items-center gap-4">
            <img src="/logo1.jpeg" alt="Guilford Armory Logo" className="h-12 rounded" />
            <h1 className="text-2xl font-bold">Guilford Armory</h1>
          </div>
          <nav className="space-x-6 hidden md:flex">
            <div className="relative group">
              <button className="hover:underline">Shop</button>
              <div className="absolute hidden group-hover:block bg-black text-white p-2 rounded shadow-xl">
                <a href="#" className="block px-4 py-1 hover:bg-gray-700">Firearms</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-700">Suppressors</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-700">Parts</a>
              </div>
            </div>
            <div className="relative group">
              <button className="hover:underline">Services</button>
              <div className="absolute hidden group-hover:block bg-black text-white p-2 rounded shadow-xl">
                <a href="#" className="block px-4 py-1 hover:bg-gray-700">Cerakote</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-700">Transfers</a>
              </div>
            </div>
            <a href="#" className="hover:underline">Surplus</a>
            <a href="#" className="hover:underline">Contact</a>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="relative h-[80vh] bg-cover bg-center flex items-center justify-center text-center" style={{ backgroundImage: "url('/camo-bg.jpg')" }}>
          <div className="bg-black bg-opacity-60 p-8 rounded-xl max-w-xl">
            <h2 className="text-4xl font-bold mb-4">Precision. Protection. Purpose.</h2>
            <p className="mb-6">Firearms • Suppressors • Cerakote • Military Surplus • Gun Parts</p>
            <button className="bg-white text-black px-6 py-2 rounded hover:bg-gray-300 font-bold">Shop Now</button>
          </div>
        </section>

        {/* Sections */}
        <section className="p-8 grid md:grid-cols-4 gap-6 bg-gray-900">
          {[
            { title: 'Cerakote', img: '/logo1.jpeg' },
            { title: 'Suppressors', img: '/logo1.jpeg' },
            { title: 'Surplus', img: '/camo-bg.jpg' },
            { title: 'Gun Parts', img: '/logo1.jpeg' }
          ].map(({ title, img }) => (
            <div key={title} className="bg-black rounded-xl overflow-hidden shadow-lg">
              <img src={img} alt={title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <button className="text-sm underline">Explore</button>
              </div>
            </div>
          ))}
        </section>

        {/* Footer */}
        <footer className="bg-black text-center p-4 border-t border-gray-800">
          <p>&copy; {new Date().getFullYear()} Guilford Armory. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

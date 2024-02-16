// This is a react component for the homepage of a website about health tourism in Iran
import React from 'react';
import { Link } from 'react-router-dom';

// This is a custom component for the header of the website
function Header() {
  return (
    <div className="flex flex-row items-left w-[100%] bg-[#93a394AA]">
      <div className="w-[20%]  font-bold text-xl">Iran Health</div>
      <div className="flex space-x-4">
        <Link to="/" className="text-white hover:text-gray-300">Home</Link>
      </div>
      <div className="flex space-x-4">
        <Link to="/about" className="text-white hover:text-gray-300">About</Link>
      </div>
      <div className="flex space-x-4">
        <Link to="/services" className="text-white hover:text-gray-300">Services</Link>
      </div>
      <div className="flex space-x-4">
        <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
      </div>
    </div>
  );
}

// This is a custom component for the hero section of the homepage
function Hero() {
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-64 flex items-center justify-center">
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold">Welcome to Iran</h1>
        <p className="text-2xl">The land of history, culture, and health</p>
        <button className="bg-white text-black px-4 py-2 rounded mt-4">Learn More</button>
      </div>
    </div>
  );
}

// This is a custom component for the features section of the homepage
function Features() {
  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-3xl font-bold text-center">Why choose Iran for your health tourism?</h2>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="bg-white shadow p-4 flex flex-col items-center">
          <img src="quality.png" alt="Quality" className="w-16 h-16"/>
          <h3 className="text-xl font-semibold mt-2">High Quality</h3>
          <p className="text-gray-600 mt-2">Iran has a well-developed health care system with modern facilities and equipment, and highly qualified and experienced medical staff.</p>
        </div>
        <div className="bg-white shadow p-4 flex flex-col items-center">
          <img src="affordable.png" alt="Affordable" className="w-16 h-16"/>
          <h3 className="text-xl font-semibold mt-2">Affordable Prices</h3>
          <p className="text-gray-600 mt-2">Iran offers a wide range of medical services and treatments at a fraction of the cost compared to other countries, without compromising on quality or safety.</p>
        </div>
        <div className="bg-white shadow p-4 flex flex-col items-center">
          <img src="culture.png" alt="Culture" className="w-16 h-16"/>
          <h3 className="text-xl font-semibold mt-2">Rich Culture</h3>
          <p className="text-gray-600 mt-2">Iran is a country with a long and diverse history, culture, and art. You can enjoy visiting its ancient monuments, museums, bazaars, and natural attractions.</p>
        </div>
      </div>
    </div>
  );
}

// This is a custom component for the testimonial section of the homepage
function Testimonials() {
  return (
    <div className="bg-gray-800 p-4">
      <h2 className="text-3xl font-bold text-white text-center">What our clients say</h2>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="bg-gray-700 shadow p-4 flex items-center">
          <img src="client1.jpg" alt="Client 1" className="w-16 h-16 rounded-full"/>
          <div className="ml-4 text-white">
            <p className="text-lg font-semibold">John Smith</p>
            <p className="text-sm">USA</p>
            <p className="text-gray-300 mt-2">"I had a great experience in Iran. I underwent a dental implant surgery and I was very satisfied with the result. The staff were friendly and professional, and the price was very reasonable."</p>
          </div>
        </div>
        <div className="bg-gray-700 shadow p-4 flex items-center">
          <img src="client2.jpg" alt="Client 2" className="w-16 h-16 rounded-full"/>
          <div className="ml-4 text-white">
            <p className="text-lg font-semibold">Mary Jones</p>
            <p className="text-sm">UK</p>
            <p className="text-gray-300 mt-2">"I visited Iran for a rhinoplasty surgery and I was amazed by the quality and service. The surgeon was very skilled and attentive, and the recovery was smooth and fast. I also enjoyed exploring the beautiful city of Tehran."</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// This is a custom component for the footer of the website
function Footer() {
  return (
    <div className="bg-gray-800 p-4 flex items-center justify-between">
      <div className="text-white text-sm">© 2024 Health Tourism in Iran. All rights reserved.</div>
      <div className="flex space-x-4">
        <a href="https://www.facebook.com/healthtourisminiran" className="text-white hover:text-gray-300"><i className="fab fa-facebook-f"></i></a>
        <a href="https://www.twitter.com/healthtourisminiran" className="text-white hover:text-gray-300"><i className="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com/healthtourisminiran" className="text-white hover:text-gray-300"><i className="fab fa-instagram"></i></a>
      </div>
    </div>
  );
}

// This is the main component for the homepage of the website
function Home() {
  return (
    <div className="container mx-auto">
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;

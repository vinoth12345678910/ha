import React from 'react';
import Navbar from './Navbar';

const Support = () => {
    return (
        <div className="relative bg-gradient-to-b from-[#142850] to-[#27496d] min-h-screen overflow-hidden">
            <Navbar />

            {/* Decorative Background Images */}
            <img
                src="https://cdn-icons-png.flaticon.com/512/875/875575.png"
                alt="Decorative Icon"
                className="absolute top-10 left-5 w-16 h-16 opacity-20 animate-bounce"
            />
            <img
                src="https://cdn-icons-png.flaticon.com/512/172/172841.png"
                alt="Decorative Icon"
                className="absolute bottom-20 right-10 w-20 h-20 opacity-20 animate-spin"
            />
            <img
                src="https://cdn-icons-png.flaticon.com/512/3063/3063822.png"
                alt="Decorative Icon"
                className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-24 h-24 opacity-20 animate-pulse"
            />

            {/* Main Content */}
            <div className="container mx-auto px-4">
                <div className="mt-20 text-center">
                    <h1 className="text-white text-5xl font-extrabold tracking-wide">
                        How Can We Help?
                    </h1>
                    <p className="mt-6 text-white text-lg">
                        We're here to assist you with any questions or concerns you may have.
                    </p>
                    <button className="mt-10 bg-white text-[#142850] font-bold py-3 px-6 rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300">
                        Contact Us
                    </button>
                </div>

                {/* Support Options Section */}
                <div className="mt-20 text-center text-white px-6 py-10 bg-gradient-to-r from-blue-500 to-teal-600 rounded-lg shadow-xl">
                    <h2 className="text-4xl font-extrabold mb-6">Support Options</h2>
                    <p className="mb-4 text-lg">Explore our range of support services to find the help you need.</p>
                    <ul className="list-disc list-inside text-lg">
                        <li>24/7 Customer Support</li>
                        <li>Comprehensive FAQs</li>
                        <li>Live Chat Assistance</li>
                        <li>Detailed Tutorials and Guides</li>
                    </ul>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="bg-[#4a1e91] text-white py-10 mt-20">
  <div className="container mx-auto text-center">
    <p className="text-lg">&copy; {new Date().getFullYear()} Habit Tracker. All rights reserved.</p>
    <div className="flex justify-center flex-wrap space-x-6 mt-6">
      <a
        href="https://www.youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl hover:text-gray-300 transition-all duration-300"
      >
        YouTube
      </a>
      <a
        href="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl hover:text-gray-300 transition-all duration-300"
      >
        Twitter
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl hover:text-gray-300 transition-all duration-300"
      >
        Instagram
      </a>
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl hover:text-gray-300 transition-all duration-300"
      >
        Facebook
      </a>
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl hover:text-gray-300 transition-all duration-300"
      >
        LinkedIn
      </a>
    </div>
  </div>
</footer>

        </div>
    );
};

export default Support;

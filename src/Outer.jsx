import React from 'react';
import Navbar from './Navbar';

const Outer = () => {
    return (
        <div className="relative bg-gradient-to-b from-[#6133b4] to-[#2d005d] min-h-screen flex flex-col">
            <Navbar />

            {/* Decorative Background Images */}
            <img
                src="https://cdn-icons-png.flaticon.com/512/3116/3116733.png"
                alt="Decorative Icon"
                className="absolute top-10 left-5 w-16 h-16 opacity-20 animate-bounce md:w-24 md:h-24 lg:w-16 lg:h-16"
            />
            <img
                src="https://cdn-icons-png.flaticon.com/512/3163/3163508.png"
                alt="Decorative Icon"
                className="absolute bottom-20 right-10 w-20 h-20 opacity-20 animate-spin md:w-28 md:h-28 lg:w-20 lg:h-20"
            />
            <img
                src="https://cdn-icons-png.flaticon.com/512/869/869636.png"
                alt="Decorative Icon"
                className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-24 h-24 opacity-20 animate-pulse md:w-32 md:h-32 lg:w-24 lg:h-24"
            />
            <img
                src="https://cdn-icons-png.flaticon.com/512/2583/2583403.png"
                alt="Decorative Icon"
                className="absolute bottom-5 left-10 w-14 h-14 opacity-20 animate-bounce md:w-20 md:h-20 lg:w-14 lg:h-14"
            />
            <img
                src="https://cdn-icons-png.flaticon.com/512/1256/1256654.png"
                alt="Decorative Icon"
                className="absolute top-1/4 right-1/4 w-28 h-28 opacity-15 animate-spin md:w-36 md:h-36 lg:w-28 lg:h-28"
            />
            <img
                src="https://cdn-icons-png.flaticon.com/512/3037/3037192.png"
                alt="Decorative Icon"
                className="absolute top-0 right-20 w-16 h-16 opacity-25 animate-pulse md:w-24 md:h-24 lg:w-16 lg:h-16"
            />
            <img
                src="https://cdn-icons-png.flaticon.com/512/1347/1347523.png"
                alt="Decorative Icon"
                className="absolute bottom-0 left-1/3 w-20 h-20 opacity-20 animate-bounce md:w-28 md:h-28 lg:w-20 lg:h-20"
            />
            <img
                src="https://cdn-icons-png.flaticon.com/512/3388/3388645.png"
                alt="Decorative Icon"
                className="absolute top-1/2 right-5 w-24 h-24 opacity-20 animate-spin md:w-32 md:h-32 lg:w-24 lg:h-24"
            />
            <img
                src="https://cdn-icons-png.flaticon.com/512/3455/3455283.png"
                alt="Decorative Icon"
                className="absolute top-10 right-40 w-16 h-16 opacity-15 animate-pulse md:w-24 md:h-24 lg:w-16 lg:h-16"
            />

            {/* Main Content */}
            <div className="container mx-auto px-4 flex-grow">
                <div className="mt-20 ml-10 text-center flex flex-col items-center justify-center space-y-10">
                    <img
                      src='https://static.vecteezy.com/system/resources/previews/000/149/164/original/multitasking-vector-illustration.png'
                        width={400}
                        height={400}
                        className="rounded-xl shadow-2xl transform transition-transform duration-300 hover:scale-105 md:w-72 md:h-72 lg:w-64 lg:h-64"
                    />
                    <h1 className="text-white text-5xl mt-10 font-extrabold tracking-wide md:text-4xl lg:text-5xl">
                        Track your habits and
                    </h1>
                    <h1 className="text-white text-5xl font-extrabold tracking-wide md:text-4xl lg:text-5xl">
                        join us to stay healthy and fit
                    </h1>
                    <button className="mt-10 bg-white text-[#6133b4] font-bold py-3 px-6 rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300 md:py-2 md:px-5 lg:py-3 lg:px-6">
                        Get Started
                    </button>
                </div>

                {/* Why Us Section */}
                <div className="mt-20 text-center text-white px-6 py-10 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg shadow-xl">
                    <h2 className="text-4xl font-extrabold mb-6 md:text-3xl lg:text-4xl">Why Us?</h2>
                    <p className="mb-4 text-lg md:text-base lg:text-lg">
                        We provide a seamless platform to track your daily habits, analyze your progress, and stay motivated.
                    </p>
                    <p className="mb-4 text-lg md:text-base lg:text-lg">
                        Join a supportive community of like-minded individuals striving for a healthier lifestyle.
                    </p>
                    <p className="text-lg md:text-base lg:text-lg">
                        With our engaging tools and personalized insights, achieving your goals has never been easier!
                    </p>
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

export default Outer;


import React, { useState, useEffect, useCallback } from "react";
import { Sling as Hamburger } from "hamburger-react";

const Loginform = () => {
  const [username, setUsername] = useState("");
  const [loggedin, setLoggedin] = useState(false);
  const [currentStep, setCurrentStep] = useState("login");
  const [selectedHabits, setSelectedHabits] = useState([]);
  const [currentPage, setCurrentPage] = useState("home");

  // Handle login
  function logging(e) {
    setUsername(e.target.value);
  }

  function handlesubmit() {
    if (username) {
      localStorage.setItem("username", username);
      setLoggedin(true);
      setCurrentStep("category");
    } else {
      alert("Please enter a valid username.");
      setLoggedin(false);
    }
  }

  function loggout() {
    setLoggedin(false);
    localStorage.removeItem("username");
    setUsername("");
    setCurrentStep("login");
    setCurrentPage("home");
  }

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
      setLoggedin(true);
      setCurrentStep("category");
    }
  }, []);

  return (
    <div>
      {loggedin ? (
        currentStep === "category" ? (
          <CategorySelection
            setCurrentStep={setCurrentStep}
            username={username}
            setSelectedHabits={setSelectedHabits}
            loggout={loggout}
            setCurrentPage={setCurrentPage}
          />
        ) : currentStep === "habit" ? (
          <HabitSelection
            setCurrentStep={setCurrentStep}
            selectedCategories={selectedHabits}
            setSelectedHabits={setSelectedHabits}
          />
        ) : (
          <Dashboard
            username={username}
            selectedHabits={selectedHabits}
            loggout={loggout}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        )
      ) : (
        <LoginForm username={username} logging={logging} handlesubmit={handlesubmit} />
      )}
    </div>
  );
};

const LoginForm = ({ username, logging, handlesubmit }) => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-700 via-indigo-500 to-purple-700 text-white">
    <div className="bg-white text-gray-800 p-10 rounded-lg shadow-lg max-w-md w-full">
      <h1 className="text-3xl font-bold mb-4">Login Form</h1>
      <input
        type="text"
        value={username}
        onChange={logging}
        required
        placeholder="Enter your name"
        className="w-full p-2 mb-4 border border-gray-300 rounded-md"
      />
      <button
        onClick={handlesubmit}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
      >
        Submit
      </button>
    </div>
  </div>
);

const CategorySelection = ({ setCurrentStep, username, setSelectedHabits, loggout, setCurrentPage }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setSelectedCategories((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const handleSubmit = () => {
    if (selectedCategories.length === 0) {
      alert("Please select at least one category.");
      return;
    }
    setSelectedHabits(selectedCategories);
    setCurrentStep("habit");
  };

  const habits = {
    work: ["Plan your day with a to-do list", "Take short breaks", "Focus on one task", "Reflect on achievements"],
    chores: ["Daily cleaning routine", "Organize weekly", "Do laundry on schedule", "Share responsibilities"],
    school: ["Revise notes", "Specific study times", "Use flashcards", "Meet deadlines"],
    fitness: ["Exercise 30 mins", "Drink water", "Stretch daily", "Track progress"],
    general: ["Read daily", "Practice gratitude", "Limit screen time", "Get 7-8 hours sleep"],
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center p-8">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">Choose Your Categories</h1>
        <form>
          {Object.keys(habits).map((category) => (
            <div key={category} className="mb-4 flex items-center">
              <input
                type="checkbox"
                id={category}
                name={category}
                value={category}
                onChange={handleCheckboxChange}
                className="mr-2 w-5 h-5 text-blue-500 focus:ring-blue-400"
              />
              <label htmlFor={category} className="text-lg font-medium text-gray-700">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </label>
            </div>
          ))}
          <button
            onClick={handleSubmit}
            className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

const HabitSelection = ({ setCurrentStep, selectedCategories, setSelectedHabits }) => {
  const [selectedHabits, setSelectedLocalHabits] = useState([]);

  const habits = {
    work: ["Plan your day with a to-do list", "Take short breaks", "Focus on one task", "Reflect on achievements"],
    chores: ["Daily cleaning routine", "Organize weekly", "Do laundry on schedule", "Share responsibilities"],
    school: ["Revise notes", "Specific study times", "Use flashcards", "Meet deadlines"],
    fitness: ["Exercise 30 mins", "Drink water", "Stretch daily", "Track progress"],
    general: ["Read daily", "Practice gratitude", "Limit screen time", "Get 7-8 hours sleep"],
  };

  const combinedHabits = selectedCategories.flatMap((category) => habits[category]);

  const handleHabitSelect = (habit) => {
    setSelectedLocalHabits((prev) =>
      prev.includes(habit) ? prev.filter((item) => item !== habit) : [...prev, habit]
    );
  };

  const handleSubmit = () => {
    setSelectedHabits(selectedHabits);
    setCurrentStep("dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center p-8">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">Select Your Habits</h1>
        <ul className="space-y-2">
          {combinedHabits.map((habit, index) => (
            <li
              key={index}
              className={`p-3 cursor-pointer ${selectedHabits.includes(habit) ? "bg-blue-500 text-white" : "bg-blue-100 text-blue-900"}`}
              onClick={() => handleHabitSelect(habit)}
            >
              {habit}
            </li>
          ))}
        </ul>
        <button
          onClick={handleSubmit}
          className="mt-6 w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
        >
          Submit
        </button>
      </div>
    </div>
  );
};
const Dashboard = ({
  username,
  selectedHabits,
  loggout,
  setCurrentPage,
  currentPage,
}) => {
  const [inputing, setInputing] = useState("");
  const [habits, setHabits] = useState(
    selectedHabits.map((habit) => ({ task: habit, iscomplete: false })) || []
  );

  useEffect(() => {
    localStorage.setItem("habitss", habits.length);
  }, [habits]);

  const addHabit = () => {
    if (inputing.trim()) {
      setHabits((prevHabits) => [
        ...prevHabits,
        { task: inputing.trim(), iscomplete: false },
      ]);
      setInputing("");
    } else {
      console.warn("No input provided for habit.");
    }
  };

  const deleteHabit = useCallback(
    (index) => {
      setHabits((prevHabits) => prevHabits.filter((_, i) => i !== index));
    },
    [habits]
  );

  const toggletask = useCallback(
    (index) => {
      setHabits((prevHabits) =>
        prevHabits.map((habit, i) =>
          i === index ? { ...habit, iscomplete: !habit.iscomplete } : habit
        )
      );
    },
    [setHabits]
  );

  return (
    <div className="flex flex-col sm:flex-row min-h-screen">
      {/* Main Content */}
      <div className="flex-1 p-4 bg-gradient-to-r from-purple-700 via-indigo-500 to-purple-700 text-white transition-all duration-300">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-lg sm:text-3xl font-bold text-center sm:text-left">
              Welcome, {username}! Let's Build Great Habits Today.
            </h1>
            {/* Profile */}
            <button
              onClick={() => setCurrentPage("profile")}
              className="text-sm sm:text-base text-white bg-blue-500 hover:bg-blue-600 py-1 px-3 rounded-md"
            >
              Profile
            </button>
            <button
              onClick={() => setCurrentPage("home")}
              className="text-sm sm:text-base text-white bg-blue-500 hover:bg-blue-600 py-1 px-3 rounded-md"
            >
              Dashboard
            </button>
          </div>

          {/* Logout Button */}
          <button
            onClick={loggout}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 sm:py-2 sm:px-4 rounded-md mt-4 sm:mt-0"
          >
            Logout
          </button>
        </div>

        {/* Profile or Habits */}
        {currentPage === "profile" ? (
          <Profile username={username} setCurrentPage={setCurrentPage} />
        ) : (
          <div className="mt-6">
            {/* Input */}
            <div className="flex flex-wrap gap-4">
              <input
                type="text"
                value={inputing}
                onChange={(e) => setInputing(e.target.value)}
                placeholder="Enter your own Habits"
                className="w-full sm:w-auto flex-1 p-3 text-gray-800 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md mb-4"
              />
              <button
                onClick={addHabit}
                className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
              >
                Submit
              </button>
            </div>

            {/* Habits List */}
            <h2 className="text-xl sm:text-2xl font-semibold text-white mt-4">
              Your Habits:
            </h2>
            <ul className="mt-4 space-y-3">
              {habits.length === 0 ? (
                <p className="text-white">No habits selected yet.</p>
              ) : (
                habits.map((habit, index) => (
                  <li
                    key={index}
                    className={`flex flex-col sm:flex-row justify-between items-center bg-blue-100 text-blue-900 p-3 rounded-lg ${
                      habit.iscomplete ? "line-through" : ""
                    }`}
                  >
                    <span className="text-center sm:text-left">{habit.task}</span>
                    <div className="flex gap-2 mt-2 sm:mt-0">
                      <button
                        onClick={() => deleteHabit(index)}
                        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded-md"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => toggletask(index)}
                        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-3 rounded-md"
                      >
                        {habit.iscomplete ? "Undo" : "Complete"}
                      </button>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
      );
    };

const Profile = ({ username }) => {
  const hab = parseInt(localStorage.getItem("habitss"), 10) || 0;
  return (
    <div className="bg-white text-black p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md mx-auto mt-8 sm:mt-0">
      <h2 className="text-2xl sm:text-3xl font-bold text-center">Profile</h2>

      <div className="flex justify-center mb-4 mt-6">
        <div
          className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-blue-500 
          animate-[spin_5s_linear_infinite]"
        >
          <img
            src="https://th.bing.com/th/id/OIP.JqejJ8zEszVxLlpwhvKybQHaHa?rs=1&pid=ImgDetMain"
            alt="Default Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <p className="mt-4 text-center text-lg sm:text-xl">
        Username: <span className="font-bold">{username}</span>
      </p>
      <p className="mt-4 text-center text-lg sm:text-xl">
        Number of Habits: <span className="font-bold">{hab}</span>
      </p>
    </div>
  );
};


export default Loginform;


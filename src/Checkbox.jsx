import React, { useState } from "react";

const Checkbox = () => {
  const [displayData, setDisplayData] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [selectedHabits, setSelectedHabits] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const habits = {
    work: ["Plan your day with a to-do list", "Take short breaks", "Focus on one task", "Reflect on achievements"],
    chores: ["Daily cleaning routine", "Organize weekly", "Do laundry on schedule", "Share responsibilities"],
    school: ["Revise notes", "Specific study times", "Use flashcards", "Meet deadlines"],
    fitness: ["Exercise 30 mins", "Drink water", "Stretch daily", "Track progress"],
    general: ["Read daily", "Practice gratitude", "Limit screen time", "Get 7-8 hours sleep"],
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setSelectedCategories((prev) => 
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const toggleHabitSelection = (habit) => {
    setSelectedHabits((prev) => 
      prev.includes(habit) ? prev.filter((item) => item !== habit) : [...prev, habit]
    );
  };

  const complete = (e) => {
    e.preventDefault();
    if (selectedCategories.length === 0) {
      alert("Please select at least one category.");
      return;
    }
    const selectedHabits = selectedCategories.flatMap((category) => habits[category]);
    setDisplayData(selectedHabits);
    setClicked(true);
  };

  const goBack = () => {
    setClicked(false);
    setDisplayData([]);
    setSelectedCategories([]);
    setSelectedHabits([]);
    setSubmitted(false);
  };

  const submitHabits = () => {
    if (selectedHabits.length === 0) {
      alert("Please select at least one habit.");
    } else {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center p-8">
      {clicked ? (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
          {submitted ? (
            <>
              <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Your Selected Habits</h2>
              <ul className="space-y-2">
                {selectedHabits.map((habit, index) => (
                  <li key={index} className="p-3 bg-green-100 text-green-900 rounded-lg shadow">
                    {habit}
                  </li>
                ))}
              </ul>
              <button
                onClick={goBack}
                className="mt-4 w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
              >
                Go Back
              </button>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Select Habits</h2>
              {displayData.length > 0 ? (
                <ul className="space-y-2">
                  {displayData.map((habit, index) => (
                    <li
                      key={index}
                      onClick={() => toggleHabitSelection(habit)}
                      className={`p-3 cursor-pointer ${selectedHabits.includes(habit) ? "bg-blue-500 text-white" : "bg-blue-100 text-blue-900"} rounded-lg shadow`}
                    >
                      {habit}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-center text-gray-600">No habits available for selection.</p>
              )}
              <button
                onClick={submitHabits}
                className="mt-6 w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
              >
                Submit
              </button>
            </>
          )}
        </div>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">Choose Your Categories</h1>
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
              onClick={complete}
              className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Checkbox;

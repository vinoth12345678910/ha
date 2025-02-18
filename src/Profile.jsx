import React from "react";

const Profile = () => {
  const username = localStorage.getItem("username");
  const habitCount = localStorage.getItem("habitss") || 0;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">Profile Page</h1>
        <p className="text-lg text-gray-700 mb-4">Welcome, {username}!</p>
        <p className="text-lg text-gray-700">
          Total Number of Habits: <span className="font-bold">{habitCount}</span>
        </p>
      </div>
    </div>
  );
};

export default Profile;

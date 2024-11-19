import React from "react";
import ConfessionForm from "../components/ConfessionForm";
import ConfessionFeed from "../components/ConfessionFeed";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* App Title */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">College Confessions</h1>

        {/* Confession Form */}
        <div className="mb-10">
          <ConfessionForm />
        </div>

        {/* Confession Feed */}
        <ConfessionFeed />
      </div>
    </div>
  );
};

export default HomePage;
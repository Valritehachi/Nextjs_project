import React, { useState } from 'react';

interface MealPlannerProps {
  title: string;
}

const MealPlanner: React.FC<MealPlannerProps> = ({ title }) => {
  const [meals, setMeals] = useState<string[]>([]);

  const clearMeals = () => {
    setMeals([]);
  };

  return (
    <div className="bg-white p-6 rounded-3xl shadow-md w-80 flex flex-col items-center min-h-full">
    
      <h2 className="text-xl font-semibold text-gray-700 mb-4">{title}</h2>
      <p className="text-gray-500 mb-4">Click '+' to add a meal</p>

      {/* Add Meal Button */}
      <button className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center text-2xl mb-4">
        +
      </button>

      {/* Meal List */}
      <div className="space-y-2 mb-4 flex-grow flex flex-col justify-start items-center">
        {meals.length > 0 ? (
          meals.map((meal, index) => (
            <button
              key={index}
              className="bg-gray-300 w-full py-2 px-4 rounded-md text-gray-700 text-left"
            >
              {meal}
            </button>
          ))
        ) : (
          <p className="text-gray-500">No meals added yet</p>
        )}
      </div>

      {/* Clear and Submit Buttons */}
      <div className="flex space-x-2">
        <button
          className="bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-md hover:bg-gray-300"
          onClick={clearMeals}
        >
          Clear
        </button>
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600">
          Submit
        </button>
      </div>
    </div>
  );
};

export default MealPlanner;
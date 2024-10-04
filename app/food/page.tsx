"use client";

import React from 'react';
import Sidebar from '../../components/Sidebar';
import MealPlanner from '../../components/MealPlanner';

const FoodPage = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow p-6 bg-gray-100 flex justify-center space-x-8 min-h-screen">
        
        <div className="flex justify-center space-x-8">
          {/* Meal Columns */}
          <MealPlanner title="BREAKFAST" meals={['Corn Flakes', 'Banana', 'Milk']} />
          <MealPlanner title="LUNCH" meals={[]} />
          <MealPlanner title="DINNER" meals={[]} />
        </div>
      </div>
    </div>
  );
};

export default FoodPage;
"use client";

import React, { useState } from 'react';

interface FormData {
  gender: string;
  age: string;
  weight: string;
  height: string;
  activity: string;
}

const BodyCompositionForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    gender: '',
    age: '',
    weight: '',
    height: '',
    activity: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleButtonClick = (name: keyof FormData, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  const clearForm = () => {
    setFormData({
      gender: '',
      age: '',
      weight: '',
      height: '',
      activity: ''
    });
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">Body Composition</h2>

      <div className="flex justify-between mb-6">
        <button
          className={`w-full mr-2 py-2 px-4 rounded-md font-semibold ${
            formData.gender === 'male' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleButtonClick('gender', 'male')}
        >
          Male
        </button>
        <button
          className={`w-full ml-2 py-2 px-4 rounded-md font-semibold ${
            formData.gender === 'female' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleButtonClick('gender', 'female')}
        >
          Female
        </button>
      </div>

      <div className="mb-6">
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
          placeholder="Age"
          className="mb-4 w-full p-2 border border-gray-300 rounded-md"
        />
        <input
          type="number"
          name="weight"
          value={formData.weight}
          onChange={handleInputChange}
          placeholder="Weight (kg)"
          className="mb-4 w-full p-2 border border-gray-300 rounded-md"
        />
        <input
          type="number"
          name="height"
          value={formData.height}
          onChange={handleInputChange}
          placeholder="Height (cm)"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-6">
        <p className="mb-2 text-center">How Active Are You?</p>
        <div className="flex justify-between">
          <button
            className={`w-1/4 py-2 px-4 rounded-md font-semibold ${
              formData.activity === 'low' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => handleButtonClick('activity', 'low')}
          >
            Low
          </button>
          <button
            className={`w-1/4 py-2 px-4 rounded-md font-semibold ${
              formData.activity === 'moderate' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => handleButtonClick('activity', 'moderate')}
          >
            Moderate
          </button>
          <button
            className={`w-1/4 py-2 px-4 rounded-md font-semibold ${
              formData.activity === 'high' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => handleButtonClick('activity', 'high')}
          >
            High
          </button>
          <button
            className={`w-1/4 py-2 px-4 rounded-md font-semibold ${
              formData.activity === 'very-active' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => handleButtonClick('activity', 'very-active')}
          >
            Very Active
          </button>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          className="w-full mr-2 bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
          onClick={handleSubmit}
        >
          Calculate
        </button>
        <button
          className="w-full ml-2 bg-gray-200 text-black font-semibold py-2 px-4 rounded-md hover:bg-gray-300 transition duration-300 ease-in-out"
          onClick={clearForm}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default BodyCompositionForm;



import React, { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "17f07392-228b-4fb1-a11f-9229380dce42");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md"
      >
        <h2 className="mb-10 text-6xl font-bold text-center  text-[#E95E19]">
          Contact Us
        </h2>
        
        {/* Name Field */}
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E95E19] focus:border-transparent"
            placeholder="Enter your name"
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E95E19] focus:border-transparent"
            placeholder="Enter your email"
          />
        </div>

        {/* Message Field */}
        <div className="mb-6">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E95E19] focus:border-transparent"
            placeholder="Enter your message"
            rows="4"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#E95E19] text-white px-6 py-2 rounded-lg hover:bg-[#cc4e10] transition"
          >
            Submit Form
          </button>
        </div>

        {/* Result Message */}
        <div className="mt-4 text-center">
          <span className="text-gray-700">{result}</span>
        </div>
      </form>
    </div>
  );
}

"use client"
import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

const Page = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [responseData, setResponseData] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    const { firstName, lastName, email, message } = formData;
    setIsButtonDisabled(!firstName || !lastName || !email || !message);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/nodemailer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (response.ok) {
        setResponseData("Thanks for your response. We will reach you shortly");
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        });
      } else {
        alert(result.error);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Sorry! Failed to send your message');
    }
  };

  return (
    <>
      <Navbar />
      <section className="bg-white py-4">
        <div className="container px-4 mx-auto">
          <div className="p-6 h-full overflow-hidden bg-white rounded-md">
            <div className="pb-6 border-b border-coolGray-100">
              <div className="flex flex-wrap items-center justify-between -m-2">
                <div className="w-full md:w-auto p-2">
                  <h2 className="text-coolGray-900 text-4xl font-semibold">Contact Us</h2>
                </div>
                <div className="w-full md:w-auto p-2">
                  <div className="flex flex-wrap justify-between -m-1.5"></div>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="py-6 border-b border-coolGray-100">
                <div className="w-full md:w-9/12">
                  <div className="flex flex-wrap -m-3">
                    <div className="w-full md:w-1/3 p-3">
                      <p className="text-sm text-coolGray-800 font-semibold">Name</p>
                    </div>
                    <div className="w-full md:w-1/3 p-3">
                      <input
                        className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                        type="text"
                        placeholder="John"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="w-full md:w-1/3 p-3">
                      <input
                        className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                        type="text"
                        placeholder="Doe"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-6 border-b border-coolGray-100">
                <div className="w-full md:w-9/12">
                  <div className="flex flex-wrap -m-3">
                    <div className="w-full md:w-1/3 p-3">
                      <p className="text-sm text-coolGray-800 font-semibold">Email address</p>
                    </div>
                    <div className="w-full md:flex-1 p-3">
                      <input
                        className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                        type="email"
                        placeholder="johndoe@flex.co"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <div className="w-full md:w-9/12">
                  <div className="flex flex-wrap -m-3">
                    <div className="w-full md:w-1/3 p-3">
                      <p className="text-sm text-coolGray-800 font-semibold">Message</p>
                    </div>
                    <div className="w-full md:flex-1 p-3">
                      <textarea
                        className="block w-full h-64 p-6 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input resize-none"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <button 
                className="relative group block w-full mb-6 py-3 px-5 text-center text-sm font-semibold text-orange-50 bg-orange-900 rounded-full overflow-hidden" 
                type="submit"
                disabled={isButtonDisabled}
              >
                <div className="absolute top-0 right-full w-full h-full bg-gray-900"></div>
                <span className="relative">Send</span>
              </button>
              <p className="text-lg text-center text-coolGray-800 font-semibold">{responseData}</p>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;

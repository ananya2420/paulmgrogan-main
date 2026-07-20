import React from 'react';

const AboutMe = () => {
  return (
    <section id="about" className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      
      <div className="space-y-6">
        <p>
          Capt. Paul is a maritime professional and entrepreneur with extensive experience in navigation and infrastructure. 
          He served as an officer on the MV Power of “Atlantic Oceanic,” providing marine support for offshore wind 
          turbine construction along the U.S. East Coast. Currently, he is engaged in construction projects with 
          Caldwell Marine International in New England on Lake Champlain.
        </p>

        <div>
          <h3 className="text-xl font-semibold mb-2">Business & Community Ventures</h3>
          <p className="mb-2">When not at sea, Paul resides in Inverness, Florida, managing several ventures:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Owner/President of Citrus County Classifieds LLC</li>
            <li>Founder of BlueBulbProject.org (Environmental initiative for clean water and blue skies)</li>
            <li>Lead Pastor of Inner Beauty Ministry</li>
            <li>Operations across research, marketing, and brick-and-mortar businesses</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Professional Projects & Civic Engagement</h3>
          <p>
            Paul is actively collaborating with Baker Marine Services and Caldwell Marine on a unique modular project 
            designed to provide utilities to millions of people in New York. A dedicated community leader, 
            Paul is also a member of Rotary and a passionate advocate for responsible development and local 
            autonomy in Citrus County. He is currently working on an upcoming book.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
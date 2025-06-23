import React from 'react';

const AboutPage = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">About Olympia Mall</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
          Olympia Mall is a premier shopping destination located in the heart of Chennai. 
          Our mission is to provide an unparalleled shopping experience, combining a wide range of 
          international and local brands with exceptional customer service.
        </p>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
          With over 200 premium brands, 50+ food options, and a variety of entertainment 
          facilities, we strive to create a vibrant community hub for shopping, dining, and leisure.
        </p>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
          Our commitment to sustainability is reflected in our eco-friendly initiatives and 
          green practices, ensuring a better future for our community and the environment.
        </p>
        <h3 className="text-2xl font-semibold mt-10 mb-4">Our Values</h3>
        <ul className="list-disc list-inside text-left mx-auto max-w-3xl text-gray-300">
          <li>Customer Satisfaction</li>
          <li>Integrity and Transparency</li>
          <li>Innovation and Excellence</li>
          <li>Community Engagement</li>
          <li>Sustainability</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutPage;
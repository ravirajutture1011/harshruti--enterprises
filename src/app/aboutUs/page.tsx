import Link from "next/link";
import React from "react";

const AboutUS = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 space-y-10 mb-2">
      {/* Who We Are */}
      <section className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 shadow-lg rounded-lg p-8 border border-gray-600">
        <h1 className="text-3xl font-bold mb-4">Who We Are?</h1>
        <p className="leading-relaxed mb-4">
          Hatshruthi Enterprises is an emerging company specializing in the
          design, manufacture, and supply of high-quality cutting tools. We
          offer a range of products including solid carbide drill bits, end
          mills, and reamers, with the flexibility to create custom solutions
          tailored to our clients’ needs.
        </p>
        <p className="leading-relaxed mb-4">
          Our tools are crafted using modern CNC grinding machines from Germany,
          the USA, and Switzerland, ensuring precision and reliability. They are
          ideal for industries such as automotive, mold making, plastics, and
          general machinery processing.
        </p>
        <p className="font-semibold italic">
          Precision tools for growing ambitions. As a startup, Hatshruthi
          Enterprises is committed to delivering innovative, high-performance
          tools that help our clients achieve outstanding results.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 shadow-md rounded-lg p-8  border border-gray-600">
        <h1 className="text-3xl font-bold mb-4">Our Mission & Vision</h1>
        <p className="leading-relaxed mb-2">
          <span className="font-semibold">Mission:</span> To provide
          cutting-edge, reliable, and customizable tooling solutions that enable
          our clients to create high-performance products.
        </p>
        <p className="leading-relaxed">
          <span className="font-semibold">Vision:</span> To become a trusted
          name in the global cutting tools industry, recognized for quality,
          precision, and innovation.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 shadow-md rounded-lg p-8  border border-gray-600">
        <h1 className="text-3xl font-bold mb-4">Why Choose Us</h1>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-semibold">Precision Engineering:</span> Tools
            crafted for accuracy and performance.
          </li>
          <li>
            <span className="font-semibold">Advanced Technology:</span> CNC
            machines from Germany, USA, and Switzerland.
          </li>
          <li>
            <span className="font-semibold">Custom Solutions:</span> Tailored
            tools to meet unique client requirements.
          </li>
          <li>
            <span className="font-semibold">Startup Agility:</span> Quick
            response, innovative thinking, and flexible solutions.
          </li>
          <li>
            <span className="font-semibold">Industry Expertise:</span> Solutions
            for automotive, mold making, plastics, and general machinery.
          </li>
        </ul>
      </section>

      {/* Our Team */}
      <section className="bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 shadow-md rounded-lg p-8  border border-gray-600">
        <h1 className="text-3xl font-bold mb-4">Our Team</h1>
        <p className="leading-relaxed">
          Led by passionate founders and a skilled technical team, Hatshruthi
          Enterprises combines industry knowledge with modern manufacturing
          practices to deliver the best results.
        </p>
      </section>

      {/* Industries We Serve */}
      <section className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 shadow-md rounded-lg p-8  border border-gray-600">
        <h1 className="text-3xl font-bold mb-4">Industries We Serve</h1>
        <ul className="list-disc list-inside space-y-2">
          <li>Automobile</li>
          <li>Engineering</li>
          <li>Machine Tools</li>
          <li>Aerospace</li>
          <li>Textile</li>
          <li>Energy</li>
        </ul>
      </section>

      <div className="bg-blue-600 hover:bg-blue-700 text-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="mb-6">
          Contact us today for custom cutting tools tailored to your needs.
        </p>
        <Link
          href="/contactUS"
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-gray-100"
        >
          Contact Us
        </Link>
      </div>

    </div>
  );
};

export default AboutUS;

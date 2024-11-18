import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

const TermsPolicy = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <NavLink to='/mnrealty'>
        <FaRegArrowAltCircleLeft className="size-8 fixed top-6 left-6"/>
      </NavLink>
      <h1 className="text-3xl font-bold text-gray-800 mt-7 mb-6">MNRealty Privacy Policy</h1>
      <p className="text-gray-600 mb-6">
        This Privacy Policy outlines how MNRealty collects, uses, discloses, and protects your personal information. We are committed to safeguarding your privacy and ensuring that your information is handled responsibly.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Personal Information: Name, email address, phone number, and mailing address.</li>
          <li>Property Information: Property details, including location, size, and features.</li>
          <li>Financial Information: Credit card information, bank account details, and income information (if applicable).</li>
          <li>Online Activity: Information about your interactions with our website, including pages visited, links clicked, and time spent on our site.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Your Information</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Providing Real Estate Services: To assist you in finding and purchasing or selling properties.</li>
          <li>Communication: To respond to your inquiries, send property listings, and provide updates.</li>
          <li>Marketing and Promotions: To send you relevant marketing materials and promotional offers.</li>
          <li>Website Improvement: To analyze website usage and improve user experience.</li>
          <li>Compliance with Legal Obligations: To comply with applicable laws and regulations.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information Sharing</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Third-party Service Providers: We may share your information with third-party service providers who assist us in operating our business, such as marketing, analytics, and payment processing.</li>
          <li>Business Partners: We may share your information with business partners who collaborate with us on real estate projects.</li>
          <li>Legal Authorities: We may disclose your information to law enforcement agencies or other authorities if required by law or to protect our rights.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Security</h2>
        <p className="text-gray-600">
          We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Rights</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Access: You can request access to your personal information.</li>
          <li>Correction: You can request correction of any inaccurate personal information.</li>
          <li>Erasure: You can request erasure of your personal information in certain circumstances.</li>
          <li>Restriction: You can request restriction of processing of your personal information.</li>
          <li>Data Portability: You can request data portability of your personal information.</li>
          <li>Objection: You can object to processing of your personal information.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-gray-600">
          If you have any questions or concerns about our Privacy Policy or the handling of your personal information, please contact us at:
          <br />
          <strong>[Contact Information]</strong>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Changes to This Privacy Policy</h2>
        <p className="text-gray-600">
          We reserve the right to modify this Privacy Policy at any time. We will notify you of any material changes by posting the updated Privacy Policy on our website.
        </p>
      </section>
    </div>
  );
};

export default TermsPolicy;

import React, { useState } from "react";

const Faq = () => {
  const [activeTab, setActiveTab] = useState("focus");
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const faqs = [
    {
      question: "Can I list my property for sale or rent on MNRealty?",
      answer:
        "Yes, if you are looking to sell or rent a property, you can contact us to feature your property on our platform. We provide professional marketing services to help you reach potential buyers or tenants.",
    },
    {
      question: "What types of properties are available?",
      answer:
        "MNRealty offers a wide range of properties, including 1, 2, and 3 BHK flats, premium gated organic farmlands, and plots in prime locations. We have something for every budget and lifestyle, whether you are looking for an urban flat, a luxurious apartment, or agricultural land.",
    },
    {
      question: "How can I schedule a site visit or viewing?",
      answer:
        "To schedule a property viewing, you can contact us directly through the contact details provided, or you can fill out an inquiry form on the property page to request more details or schedule a visit.",
    },
    {
      question: "Are there any payment plans available?",
      answer:
        "Yes, we offer easy payment plans for most of our properties, which are designed to make the purchasing process more manageable. Payment terms and options are explained clearly during your consultation with our team.",
    },
    {
      question: "What is the process for booking a flat or plot?",
      answer:
        "Once you have selected a property, you can contact us for a detailed consultation. We will guide you through the booking process, provide information about payment plans, and assist with legal and documentation procedures to ensure a smooth transaction.",
    },
    {
      question: "Are the properties listed on your website ready to move in?",
      answer:
        "Some properties are ready for possession immediately, while others are under construction or planned for future handover. For example, Woodland Apartments is expected for handover in January 2025, and Lasya Avenues Apartments will be available in December 2025. Please check the details of each listing for accurate timelines.",
    },
    {
      question: "How do I contact MNRealty for more information?",
      answer:
        "You can reach us by filling out the contact form on the website, calling our customer support number, or emailing us. Our team is ready to assist you with any questions or to schedule a consultation.",
    },
    {
      question: "How reliable are the properties listed on MNRealty?",
      answer:
        "We ensure that all our listed properties are thoroughly vetted, and we work with reputable developers and builders. Our focus on integrity and transparency means you can trust that the details and pricing of each listing are accurate and reliable.",
    },
    {
      question: "What types of properties are part of your 'Nature Bliss Project'?",
      answer:
        "The Nature Bliss Project offers premium organic farmland plots in Rajapet, Parupally Village, with sizes ranging from quarter acre to 1 acre. This is an excellent investment for those seeking a sustainable lifestyle or agricultural ventures.",
    },
    {
      question: "How can I get started with MNRealty?",
      answer:
        "To get started, simply contact us to schedule a consultation. We’ll help you identify properties that match your needs and walk you through the entire process, from viewing to finalising your purchase.",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row h-auto lg:h-[500px] bg-gray-50 p-4 lg:p-8 space-y-4 lg:space-y-0 lg:space-x-8">
      <div className="flex-1 overflow-y-auto">
        <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">MNRealty Website Overview</h2>
        <div className="mt-4 lg:mt-6 text-gray-700">
          <p>
            Welcome to MNRealty, your gateway to discovering exceptional real estate opportunities. We specialize in helping individuals and families find their dream investment properties with a focus on integrity, transparency, and customer satisfaction. Our mission is to make your real estate journey as seamless and rewarding as possible, offering a wide range of properties designed to fit your needs, budget, and lifestyle.
          </p>
          <p className="mt-4">
            At MNRealty, we believe in providing personalized service that makes your search for the perfect property unique and stress-free. Whether you're looking for a luxury apartment, budget-friendly flat, or premium farmland, we have something for everyone.
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">FAQs</h2>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 py-3 lg:py-4 cursor-pointer"
            onClick={() => setExpandedFAQ(index === expandedFAQ ? null : index)}
          >
            <div className="flex items-center text-gray-800">
              <span className="mr-2 text-yellow-500">
                {expandedFAQ === index ? "▼" : "▶"}
              </span>
              <h3 className="font-semibold">{faq.question}</h3>
            </div>
            {expandedFAQ === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;

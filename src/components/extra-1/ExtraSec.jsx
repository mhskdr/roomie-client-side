import React from 'react';
import { FaTags, FaTicketAlt, FaShieldAlt, FaHandsHelping } from "react-icons/fa";

const ExtraSec = () => {
  const features = [
    {
      icon: <FaTags className="text-3xl" />,
      title: "Best Deals",
      gradient: "from-cyan-400 to-blue-500",
      items: ["Verified listings", "Competitive pricing", "No hidden charges"],
    },
    {
      icon: <FaTicketAlt className="text-3xl" />,
      title: "Coupon",
      gradient: "from-pink-400 to-fuchsia-500",
      items: ["Seasonal discounts", "Referral rewards", "Exclusive offers"],
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Security",
      gradient: "from-green-400 to-emerald-500",
      items: ["Verified profiles", "Secure messaging", "24/7 support"],
    },
    {
      icon: <FaHandsHelping className="text-3xl" />,
      title: "Support",
      gradient: "from-yellow-400 to-orange-500",
      items: ["Live chat", "Quick helpdesk", "Community support"],
    },
  ];

  return (
    <section className="bg-base-200 py-16">
      <div className="max-w-6xl mx-auto text-center mb-4">
        <h2 className="text-3xl font-bold text-primary divider">Why Choose Us</h2>
        <p className="text-sm text-base-content mt-2">
          We bring trust, savings, and safety to your roommate journey.
        </p>
      </div>

      <div className="py-14 px-4 bg-base-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-base-100 rounded-xl shadow-lg p-6 transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl group"
            >
              <div
                className={`bg-gradient-to-r ${feature.gradient} text-white p-4 rounded-full w-fit mx-auto mb-4 transition duration-300 group-hover:scale-110 group-hover:shadow-lg`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">{feature.title}</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                {feature.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtraSec;
"use client";

import React from "react";

import { certificateItems } from "@/data";

const Certificates = () => {
  return (
    <section id="certifications" className="py-20">
      <h1 className="heading">
        My <span className="text-purple">Certifications</span>
      </h1>
      <div className="grid md:grid-cols-4 gap-6 mt-10">
        {certificateItems.map((cert) => (
          <div
            key={cert.id}
            className={`border animated-border p-6 rounded-md ${cert.className}`}
          >
            <img src={cert.thumbnail} alt={cert.title} className="mb-4 w-200 h-100 object-contain" />
            <h2 className="font-bold text-lg">{cert.title}</h2>
            <p className="text-sm text-gray-600">{cert.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;

// components/ServiceMap.jsx
import React from "react";

const countries = [
    { name: "Sweden", flag: "https://flagcdn.com/se.svg", code: "SE" },
    { name: "Germany", flag: "https://flagcdn.com/de.svg", code: "DE" },
    { name: "Belgium", flag: "https://flagcdn.com/be.svg", code: "BE" },
    { name: "France", flag: "https://flagcdn.com/fr.svg", code: "FR" },
    { name: "Switzerland", flag: "https://flagcdn.com/ch.svg", code: "CH" },
    { name: "Austria", flag: "https://flagcdn.com/at.svg", code: "AT" },
    { name: "Romania", flag: "https://flagcdn.com/ro.svg", code: "RO" },
    { name: "Estonia", flag: "https://flagcdn.com/ee.svg", code: "EE" },
    { name: "Czech Republic", flag: "https://flagcdn.com/cz.svg", code: "CZ" },
    { name: "Luxembourg", flag: "https://flagcdn.com/lu.svg", code: "LU" },
];

const ServiceMap = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12 font-custom1">
                    <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-3">
                        As experts in the field, <span className="font-medium text-blue-600">Metal Group</span> delivers
                    </h2>
                    <div className="w-20 h-0.5 bg-blue-400 mx-auto mb-4"></div>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        With years of experience and a strong presence across multiple regions, Metal Group offers high-quality services tailored to meet the unique needs of each project. Our expertise ensures exceptional results, wherever we operate.
                    </p>
                </div>





                {/* Elegant Country Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-12 font-custom1">
                    {countries.map((country, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                            <div className="w-16 h-12 mb-3 overflow-hidden shadow-sm border border-gray-100">
                                <img
                                    src={country.flag}
                                    alt=""
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                            <span className="text-sm font-medium text-gray-700">{country.code}</span>
                            <span className="text-sm text-gray-400">{country.name}</span>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="bg-gray-50 rounded-xl p-8 mb-12 font-custom1">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div className="p-4">
                            <div className="text-3xl font-light text-blue-600 mb-1">10+</div>
                            <div className="text-sm text-gray-500">Countries</div>
                        </div>
                        <div className="p-4">
                            <div className="text-3xl font-light text-blue-600 mb-1">24/7</div>
                            <div className="text-sm text-gray-500">Support</div>
                        </div>
                        <div className="p-4">
                            <div className="text-3xl font-light text-blue-600 mb-1">100%</div>
                            <div className="text-sm text-gray-500">Compliance</div>
                        </div>
                        <div className="p-4">
                            <div className="text-3xl font-light text-blue-600 mb-1">5★</div>
                            <div className="text-sm text-gray-500">Rated Service</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceMap;
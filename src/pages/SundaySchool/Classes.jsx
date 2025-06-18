import React from "react";
import { Link } from "react-router-dom";

const Classes = () => {
    const classes = [
        {
            name: "Primary",
            gradeLevel: "Ages 5-7",
            description:
                "Learning Bible stories, prayers, and beginning to understand Christian values.",
        },
        {
            name: "Elementary",
            gradeLevel: "Ages 8-10",
            description:
                "Deeper understanding of Bible stories, Christian teachings, and basic religious practices.",
        },
        {
            name: "Middle School",
            gradeLevel: "Ages 11-13",
            description:
                "Advanced Bible study, Christian ethics, and preparation for confirmation.",
        },
        {
            name: "High School",
            gradeLevel: "Ages 14-17",
            description:
                "In-depth Bible study, Christian leadership, and preparation for adult faith life.",
        },
    ];

    return (
        <div className="w-full min-h-screen  py-12 bg-blue-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                    Sunday School Classes
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {classes.map((classItem, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="p-6">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                                    {classItem.name}
                                </h2>
                                <p className="text-blue-600 font-medium mb-4">
                                    {classItem.gradeLevel}
                                </p>
                                <p className="text-gray-600 mb-6">
                                    {classItem.description}
                                </p>
                                <Link
                                    to="/contact"
                                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
                                >
                                    Register Now
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Classes;

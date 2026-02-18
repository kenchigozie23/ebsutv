"use client";
import Image from "next/image";
import React, { useState } from "react";

const Category = () => {
    const [categories, setCategories] = useState([
        { id: 1, title: "Technology", thumbnail: "/assets/images/blog/pexels-photo-1089440.webp", slug: "technology" },
        { id: 2, title: "Health", thumbnail: "/assets/images/blog/pexels-photo-302083.jpg", slug: "health" },
        { id: 3, title: "Lifestyle", thumbnail: "/assets/images/blog/pexels-photo-247597.jpg", slug: "lifestyle" },
        { id: 4, title: "Travel", thumbnail: "/assets/images/blog/pexels-photo-261101.jpg", slug: "travel" },
        { id: 5, title: "Nutrition", thumbnail: "/assets/images/blog/pexels-photo-1153370.webp", slug: "nutrition" },
        { id: 6, title: "Fitness", thumbnail: "/assets/images/blog/pexels-photo-1089164.webp", slug: "fitness" },
        { id: 7, title: "Business", thumbnail: "/assets/images/blog/pexels-photo-302083.jpg", slug: "business" },
        { id: 8, title: "Education", thumbnail: "/assets/images/blog/pexels-photo-261101.jpg", slug: "education" },
        { id: 9, title: "Entertainment", thumbnail: "/assets/images/blog/pexels-photo-247597.jpg", slug: "entertainment" },
    ]);

    return (
        <>
            <div>
                <h1 className="text-2xl font-bold">Trending Categories ✨</h1>
                <p className="italic font-normal text-xs mt-2 text-gray-500">Latest breaking news, pictures, videos and special reports</p>

                <div className="space-y-4 mt-10">
                    {categories?.slice(0, 7)?.map((category, index) => (
                        <div className="w-full h-[5rem] relative">
                            <Image width={100} height={100} src={category?.thumbnail} className="w-full h-[5rem] object-cover absolute rounded-lg" alt="Category title" />
                            <div className="w-full h-[5rem] bg-[#0b0011cc] absolute rounded-lg" />
                            <h1 className="text-x; font-semibold absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center">{category.title}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Category;

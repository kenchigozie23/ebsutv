"use client";

import React, { useState } from "react";
import { Header, Footer } from "../components";
import { defaultArticle } from "../components/images";
import Image from "next/image";
import Link from "next/link";

export default function page() {
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
        <div className="">
            <Header />
            <section className="lg:px-33 px-5 lg:my-30 my-10">
                <div className="mb-10 relative">
                    <h1 className="lg:text-7xl text-4xl font-bold">Categories</h1>
                    <p className="italic font-normal text-sm mt- text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, odio?</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 justify-between mt-10">
                    {categories?.map((category, index) => (
                        <Link href="#">
                            <div className="w-full h-[5rem] relative">
                                <Image width={100} height={100} src={category?.thumbnail} className="w-full h-[5rem] object-cover absolute rounded-lg" alt="Category title" />
                                <div className="w-full h-[5rem] bg-[#0b0011cc] absolute rounded-lg" />
                                <h1 className="text-x; font-semibold absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center">{category.title}</h1>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
}

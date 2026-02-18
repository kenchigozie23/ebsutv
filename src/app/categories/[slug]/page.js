import React from "react";
import { Header, Footer } from "@/app/components";
import { defaultArticle, defaultAvatar } from "@/app/components/images";
import Link from "next/link";
import Image from "next/image";
export default function page() {
    const articles = [
        {
            title: "How to Write Engaging Blog Content",
            content: "In this guide, we break down actionable strategies for writing blog posts that capture attention...",
            thumbnail: defaultArticle,
            slug: "how-to-write-engaging-blog-content",
            views: 120,
            read_time: 5,
            category: { title: "Writing Tips", thumbnail: "/images/writing.jpg", slug: "writing-tips" },
            author: { full_name: "Jennifer Adga", image: defaultAvatar },
        },
        {
            title: "10 Best Productivity Tools for Remote Work",
            content: "Working remotely requires the right tools. Here are 10 apps that can help boost your productivity...",
            thumbnail: defaultArticle,
            slug: "best-productivity-tools-remote-work",
            views: 245,
            read_time: 6,
            category: { title: "Tech", thumbnail: "/images/tech.jpg", slug: "tech" },
            author: { full_name: "David Lin", image: defaultAvatar },
        },
        {
            title: "Mastering Minimalist Living",
            content: "Minimalism is more than just a trend — it’s a way of life. Learn how to embrace it step-by-step.",
            thumbnail: defaultArticle,
            slug: "mastering-minimalist-living",
            views: 310,
            read_time: 4,
            category: { title: "Lifestyle", thumbnail: "/images/lifestyle.jpg", slug: "lifestyle" },
            author: { full_name: "Amara Blake", image: defaultAvatar },
        },
        {
            title: "Exploring the Future of AI in Everyday Life",
            content: "AI is already transforming the way we live. Here's what to expect in the next 5 years.",
            thumbnail: defaultArticle,
            slug: "future-of-ai-everyday-life",
            views: 410,
            read_time: 7,
            category: { title: "Technology", thumbnail: "/images/ai.jpg", slug: "technology" },
            author: { full_name: "Ethan Zhao", image: defaultAvatar },
        },
        {
            title: "Simple Recipes for Busy Weeknights",
            content: "Short on time? These quick and easy meals will save your dinner routine.",
            thumbnail: defaultArticle,
            slug: "simple-weeknight-recipes",
            views: 190,
            read_time: 3,
            category: { title: "Food", thumbnail: "/images/food.jpg", slug: "food" },
            author: { full_name: "Nora Michaels", image: defaultAvatar },
        },
        {
            title: "Beginner’s Guide to Investing in Crypto",
            content: "Curious about cryptocurrency but don’t know where to start? This guide covers the basics.",
            thumbnail: defaultArticle,
            slug: "beginners-guide-crypto-investing",
            views: 270,
            read_time: 6,
            category: { title: "Finance", thumbnail: "/images/finance.jpg", slug: "finance" },
            author: { full_name: "Luis Fernando", image: defaultAvatar },
        },
        {
            title: "The Psychology Behind Great Branding",
            content: "Brands that stick in your mind aren't lucky — they're strategic. Here's why it works.",
            thumbnail: defaultArticle,
            slug: "psychology-of-great-branding",
            views: 330,
            read_time: 5,
            category: { title: "Marketing", thumbnail: "/images/marketing.jpg", slug: "marketing" },
            author: { full_name: "Claire Evans", image: defaultAvatar },
        },
        {
            title: "Remote Freelancing: Myths vs Reality",
            content: "Freelancing from home sounds amazing, but it’s not always as easy as it seems. Here's the truth.",
            thumbnail: defaultArticle,
            slug: "remote-freelancing-myths-vs-reality",
            views: 150,
            read_time: 4,
            category: { title: "Career", thumbnail: "/images/career.jpg", slug: "career" },
            author: { full_name: "Marcus Reed", image: defaultAvatar },
        },
    ];

    return (
        <div>
            <Header />
            <section className="lg:px-33 px-5 lg:my-30 my-10">
                <div className="relative mb-20">
                    <h1 className="lg:text-7xl text-4xl font-bold">Tech (3) </h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-7">
                    {articles?.slice(0, 4)?.map((article, index) => (
                        <div className="border-2 border-[#2016736e] bg-[#0d0837] rounded-xl p-2 shadow-lg h-auto">
                            <Image width={100} height={100} src={article?.thumbnail} className="w-full h-[20rem] object-cover rounded-xl" alt="Example article title" />
                            {/* Post card body */}
                            <div className="space-y-3 pt-5">
                                <div className="inline-flex items-center gap-2 bg-indigo-500 p-1 w-auto text-xs me-2 rounded-full">
                                    <i className="fas fa-umbrella"></i>
                                    <p>{article?.category?.title}</p>
                                </div>
                                <h1 className="text-2xl font-bold drop-shadow-lg">{article?.title}</h1>
                                <div className="flex items-center gap-5 text-xs text-gray-300 font-light">
                                    <div className="flex gap-1 items-center">
                                        <i className="fas fa-eye"></i>
                                        <p className="font-bold mb-0">{article?.views} Views</p>
                                    </div>
                                    <div className="flex gap-1 items-center">
                                        <i className="fas fa-clock"></i>
                                        <p className="font-bold mb-0">{article?.read_time} Mins Read</p>
                                    </div>
                                </div>
                            </div>
                            {/* Post card footer */}
                            <div className="flex items-center justify-between gap-4 font-semibold bg-indigo-900 p-2 rounded-xl mt-6">
                                <div className="flex items-center gap-2">
                                    <Image width={100} height={100} src={article?.author?.image} className="w-8 h-8 object-cover rounded-full" alt="Example Author Image" />
                                    <div>
                                        <h1 className="text-sm text-white font-bold mb-0">{article?.author?.full_name}</h1>
                                        <p className="text-xs font-light text-gray-100 italic mt-0">{article?.author?.job_title || "Writer at Desphixs"}</p>
                                    </div>
                                </div>
                                <Link href="/" className="bg-indigo-400 text-[12px] font-bold px-4 py-2 rounded-xl border border-[#a4adff]">
                                    <i className="fas fa-arrow-right text-indigo-950"></i>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
}

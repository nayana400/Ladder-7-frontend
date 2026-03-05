import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import BlogScene from "./BlogScene";
import { technicalBlogs, eventBlogs } from "./BlogData";

const BlogPostDetail = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const foundBlog = technicalBlogs.find(b => b.id === parseInt(id)) ||
            eventBlogs.find(b => b.id === parseInt(id));
        setBlog(foundBlog);
        window.scrollTo(0, 0);
    }, [id]);

    if (!blog) {
        return (
            <div className="bg-black min-h-screen text-white relative overflow-hidden flex items-center justify-center">
                <div className="fixed inset-0 z-0">
                    <BlogScene />
                </div>
                <div className="relative z-10 text-center">
                    <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
                    <Link to="/blog" className="text-blue-400 hover:text-blue-300">Back to Blogs</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-black min-h-screen text-white relative overflow-hidden">
            <div className="fixed inset-0 z-0">
                <BlogScene />
            </div>

            <div className="relative z-10">
                <Navbar />

                <main className="max-w-4xl mx-auto px-6 pt-40 pb-20">
                    <Link to="/blog" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors group">
                        <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Blogs
                    </Link>

                    <article>
                        <header className="mb-12 text-center">
                            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4 border border-blue-500/20">
                                {blog.date}
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
                                {blog.title}
                            </h1>
                            <div className="flex items-center justify-center gap-2 text-gray-400">
                                <span>By {blog.author}</span>
                            </div>
                        </header>

                        <div className="mb-12 rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-video relative">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="prose prose-lg prose-invert max-w-none">
                            <p className="text-xl text-gray-300 leading-relaxed mb-8 font-light">
                                {blog.excerpt}
                            </p>

                            <div className="space-y-16">
                                {blog.sections && blog.sections.map((section, sectionIndex) => (
                                    <div key={sectionIndex} className="bg-gray-900/50 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/5 hover:border-blue-500/20 transition-all duration-500 shadow-2xl relative group/section">
                                        <div className="absolute -left-2 top-12 w-1 h-32 bg-blue-500 rounded-full opacity-0 group-hover/section:opacity-100 transition-opacity"></div>

                                        <h2 className="text-3xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                                            {section.heading}
                                        </h2>

                                        <p className="text-blue-400 text-lg mb-8 font-medium tracking-wide">
                                            {section.subheading}
                                        </p>

                                        <div className="space-y-6">
                                            {section.points && (
                                                <ul className="grid grid-cols-1 gap-4">
                                                    {section.points.map((point, pointIndex) => (
                                                        <li key={pointIndex} className="flex items-start gap-4 text-gray-400 text-lg group/point">
                                                            <div className="flex-shrink-0 w-2 h-2 mt-3 rounded-full bg-blue-500/50 group-hover/point:bg-blue-500 transition-colors shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                                                            <span className="group-hover:text-gray-200 transition-colors duration-300">
                                                                {point}
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}

                                            {section.content && (
                                                <p className="text-gray-300 text-lg leading-relaxed font-light mt-4">
                                                    {section.content}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </article>
                </main>

                <Footer />
            </div>
        </div>
    );
};

export default BlogPostDetail;

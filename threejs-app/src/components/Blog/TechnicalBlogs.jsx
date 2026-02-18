import { Link } from "react-router-dom";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import BlogScene from "./BlogScene";
import { BlogSection } from "./Blog";
import { technicalBlogs } from "./BlogData";

const TechnicalBlogs = () => {
    return (
        <div className="bg-black min-h-screen text-white relative overflow-hidden">
            <div className="fixed inset-0 z-0">
                <BlogScene />
            </div>
            <div className="relative z-10">
                <Navbar />
                <main className="max-w-7xl mx-auto px-6 pt-40 pb-20">
                    <header className="mb-24 text-center">
                        <h1 className="text-7xl font-black mb-6 text-white tracking-tighter underline underline-offset-[16px] decoration-blue-500/50">
                            Technical Insights
                        </h1>
                        <Link to="/blog" className="text-blue-400 hover:text-blue-300 font-semibold flex items-center justify-center gap-2 group transition-colors">
                            <span className="transition-transform group-hover:-translate-x-1">←</span>
                            Back to All Blogs
                        </Link>
                    </header>

                    <BlogSection
                        title="All Technical Insights"
                        blogs={technicalBlogs}
                        alignment="left"
                        gridCols="md:grid-cols-1 lg:grid-cols-1"
                        viewAllLink="/blog/technical"
                    />
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default TechnicalBlogs;

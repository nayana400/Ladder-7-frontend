import Navbar from "./Navbar";
import Footer from "./Footer";
import BlogScene from "./BlogScene";

const BlogSection = ({ title, blogs, alignment = "left" }) => {
    return (
        <section className={`mb-24 flex flex-col ${alignment === "right" ? "items-end" : "items-start"}`}>
            <div className={`flex justify-between items-end mb-10 w-full ${alignment === "right" ? "flex-row-reverse" : "flex-row"}`}>
                <h2 className="text-4xl font-bold text-white tracking-tight relative">
                    {title}
                    <span className={`absolute -bottom-2 ${alignment === "right" ? "right-0" : "left-0"} w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full`}></span>
                </h2>
                <a href="#" className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-2 group transition-colors">
                    View All
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full ${alignment === "right" ? "lg:ml-auto" : "lg:mr-auto"}`}>
                {blogs.map((blog) => (
                    <article
                        key={blog.id}
                        className="group relative bg-gray-900/40 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full shadow-2xl"
                    >
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Image Container */}
                        <div className="h-56 overflow-hidden relative">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent"></div>
                            <div className="absolute bottom-4 left-6 flex gap-2">
                                <span className="text-[10px] text-white font-bold uppercase tracking-widest bg-blue-600/80 backdrop-blur-md px-3 py-1 rounded-full">
                                    {blog.category}
                                </span>
                                <span className="text-[10px] text-white font-medium bg-white/10 backdrop-blur-md px-3 py-1 rounded-full">
                                    {blog.date}
                                </span>
                            </div>
                        </div>

                        {/* Content Container */}
                        <div className="p-8 flex flex-col flex-grow relative z-10">
                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                                {blog.title}
                            </h3>
                            <p className="text-gray-400 mb-6 line-clamp-3 text-sm leading-relaxed flex-grow">
                                {blog.excerpt}
                            </p>

                            <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-xs font-bold text-white shadow-lg">
                                        {blog.author.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs text-white font-semibold">{blog.author}</span>
                                        <span className="text-[10px] text-gray-500 font-medium">Author</span>
                                    </div>
                                </div>
                                <button className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-colors group/btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

const Blog = () => {
    const technicalBlogs = [
        {
            id: 1,
            title: "The Future of 3D Web Development",
            excerpt: "Exploring how Three.js and React Three Fiber are changing the way we build websites.",
            date: "Feb 15, 2024",
            category: "Tech",
            author: "Ladder7 Team",
            image: "/The-Role-of-AI-in-Personalizing-Web-User-Experiences.jpg"
        },
        {
            id: 2,
            title: "Design Systems for Modern Apps",
            excerpt: "How to build scalable and beautiful interfaces with Tailwind CSS and React.",
            date: "Feb 10, 2024",
            category: "Design",
            author: "Adarsh",
            image: "/Tips-for-Collaborating-with-AI-Tools-in-Web-Development-Teams copy.jpg"
        }
    ];

    const eventBlogs = [
        {
            id: 3,
            title: "Christmas Celebration 2024",
            excerpt: "A festive gathering at Ladder7 to celebrate the joy of Christmas with games, gifts, and great food.",
            date: "Dec 25, 2024",
            category: "Celebration",
            author: "Events Team",
            image: "/Christmas-celebration.jpg"
        },
        {
            id: 4,
            title: "Global Tech Summit 2024",
            excerpt: "Join us for the most awaited technology event of the year, featuring world-class speakers.",
            date: "Mar 1, 2024",
            category: "Event",
            author: "Events Team",
            image: "/Independence Day-celebration.png"
        },
        {
            id: 5,
            title: "React Workshop Kerala",
            excerpt: "A deep dive into building production-ready apps with React and Next.js.",
            date: "Mar 15, 2024",
            category: "Workshop",
            author: "Adarsh",
            image: "/Onam-celebration.jpeg"
        }
    ];

    return (
        <div className="bg-black min-h-screen text-white relative overflow-hidden">
            <div className="fixed inset-0 z-0">
                <BlogScene />
            </div>
            <div className="relative z-10">
                <Navbar />
                <main className="max-w-7xl mx-auto px-6 pt-40 pb-20">
                    <header className="mb-24 text-center">
                        <h1 className="text-7xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent uppercase tracking-tighter">
                            Our Blogs
                        </h1>
                        <p className="text-gray-400 text-xl max-w-2xl mx-auto font-medium">
                            Our latest insights, thoughts, and technical deep dives into the world of web and 3D development.
                        </p>
                    </header>

                    <div className="space-y-32">
                        <BlogSection
                            title="Technical Insights"
                            blogs={technicalBlogs}
                            alignment="left"
                        />

                        <BlogSection
                            title="Events"
                            blogs={eventBlogs}
                            alignment="right"
                        />
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default Blog;

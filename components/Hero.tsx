'use client'
import { useState } from "react";

const Hero = () => {
    const [link, setLink] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Shortening: ${link}`); // Replace this with actual API call
    };

    return (
        <div className="bg-white text-white dark:bg-black">
            <section className="bg-animated cyber-grid py-20 lg:py-40 flex flex-col items-center justify-center p-4">
                <div id="particles"></div>
                <div className="text-center">
                    <h1 className="text-6xl font-bold mb-4 text-neon dark:text-white neon-text dark:text-neon glitch-effect hover-3d" data-text="LINK-BITE">
                        LINK-BITE
                    </h1>
                    <p className="text-xl text-cyan-300 mb-8">
                        Supercharge your links – Fast, Smart & Reliable 🚀
                    </p>
                    <a href="#" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-8 rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:scale-110 inline-block">
                        <i className="fas fa-link mr-2"></i> Shorten & Track Your Links ⏩  
                    </a>

                    {/* URL Input Form */}
                    <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-4 items-center">
                        <input
                            type="url"
                            placeholder="Paste your long URL here..."
                            className="w-full sm:w-[400px] px-4 py-3 rounded-lg text-black dark:text-white border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                            required
                        />
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:scale-105"
                        >
                            Shorten URL ➡
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Hero;

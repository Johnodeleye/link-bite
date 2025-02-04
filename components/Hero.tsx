const Hero = () => {
    return (
        <div className="bg-white text-white dark:bg-black">
            <section className="bg-animated cyber-grid pt-44 pb-44 flex items-center justify-center p-4">
                <div id="particles"></div>
                <div className="text-center z-10">
                    <h1 className="text-6xl font-bold mb-4 text-neon neon-text dark:text-neon glitch-effect hover-3d" data-text="LINK-BITE">
                        LINK-BITE
                    </h1>
                    <p className="text-xl text-cyan-300 mb-8">
                        Supercharge your links – Fast, Smart & Reliable 🚀
                    </p>
                    <a href="#" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-8 rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:scale-110 inline-block">
                        <i className="fas fa-link mr-2"></i> Shorten & Track Your Links ⏩  
                    </a>
                </div>
            </section>
        </div>
    )
}

export default Hero;

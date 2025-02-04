import Image from "next/image";

const testimonials = [
    {
        name: "Tobi Ade",
        role: "Digital Marketer",
        image: "https://i.pravatar.cc/60?img=12",
        feedback: "LinkBite makes sharing campaign links super easy. Plus, the analytics help me track clicks in real-time!"
    },
    {
        name: "Adaobi Chuks",
        role: "Small Business Owner",
        image: "https://i.pravatar.cc/60?img=15",
        feedback: "Instead of sharing long, ugly links, I now use LinkBite for clean, professional URLs. Customers trust my links more!"
    },
    {
        name: "Emeka Johnson",
        role: "Social Media Manager",
        image: "https://i.pravatar.cc/60?img=18",
        feedback: "LinkBite helps me track engagement on all my social media posts. The click stats are a game-changer!"
    }
];

const Testimony = () => {
    return (
        <div className='bg-white text-white dark:bg-black' id="Testimony">
            <section className="bg-animated cyber-grid py-20 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12 neon-text glitch-effect text-neon dark:text-white" data-text="TESTIMONIALS">
                        TESTIMONIALS
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  ">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="testimonial-card bg-gradient-to-l from-cyan-500 to-blue-500 dark:from-black dark:to-black rounded-lg p-6 border border-gray-700">
                                <div className="flex items-center mb-4">
                                    <Image src={testimonial.image} alt={testimonial.name} className="rounded-full mr-4" width={40} height={40} />
                                    <div>
                                        <h4 className="font-bold text-neon dark:text-white">{testimonial.name}</h4>
                                        <p className="dark:text-cyan-400 text-white/80">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-100 dark:text-gray-300">"{testimonial.feedback}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimony;

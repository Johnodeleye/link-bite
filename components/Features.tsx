import { BarChart, Bolt, Edit, QrCode, ShieldCheck, ThumbsUp } from "lucide-react";

const Features = () => {
    return (
        <div className="bg-white text-white dark:bg-black" id="Features">
            <section className="bg-animated cyber-grid py-10 lg:py-20 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12 neon-text glitch-effect text-neon dark:text-white" data-text="LINK-BITE FEATURES">
                        LINK-BITE FEATURES
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Features List */}
                        {[
                            { 
                                icon: <Bolt />, 
                                title: "Lightning-Fast Shortening", 
                                desc: "Convert long URLs into short, shareable links in milliseconds." 
                            },
                            { 
                                icon: <BarChart />, 
                                title: "Real-Time Analytics", 
                                desc: "Track clicks, locations, and engagement for each shortened link." 
                            },
                            { 
                                icon: <ShieldCheck />, 
                                title: "Secure & Spam-Free", 
                                desc: "Advanced security ensures your links are protected from malicious use." 
                            },
                            { 
                                icon: <Edit />, 
                                title: "Custom Short Links", 
                                desc: "Make your links memorable by customizing the URL slug." 
                            },
                            { 
                                icon: <QrCode />, 
                                title: "Instant QR Code", 
                                desc: "Generate QR codes for your shortened links with one click." 
                            },
                            { 
                                icon: <ThumbsUp />, 
                                title: "100% Free & User-Friendly", 
                                desc: "sign-ups required—just shorten, share, and track your links." 
                            }
                        ].map((feature, index) => (
                            <div key={index} className="feature-card rounded-lg p-6 floating bg-gradient-to-l from-cyan-500 to-blue-500 dark:from-black dark:to-black">
                                <div className="text-5xl mb-4 dark:text-cyan-400 text-neon feature-icon">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                                <p className="dark:text-gray-300 text-gray-50">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Features;

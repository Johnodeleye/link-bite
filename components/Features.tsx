import { BarChart, Bolt, Edit, QrCode, ShieldCheck, ThumbsUp } from "lucide-react";

const Features = () => {
    return (
        <div className="bg-white text-white dark:bg-black">
            <section className="bg-animated cyber-grid py-10 lg:py-32 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12 neon-text glitch-effect text-neon dark:text-white" data-text="LINK-BITE FEATURES">
                        LINK-BITE FEATURES
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Feature 1 - Fast & Reliable */}
                        <div className="feature-card rounded-lg p-6 floating">
                            <div className="text-5xl mb-4 text-cyan-400 feature-icon">
                            <Bolt className="w-10 h-10 text-cyan-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Lightning-Fast Shortening</h3>
                            <p className="text-gray-300">Convert long URLs into short, shareable links in milliseconds.</p>
                        </div>

                        {/* Feature 2 - Analytics */}
                        <div className="feature-card rounded-lg p-6 floating delay-100">
                            <div className="text-5xl mb-4 text-pink-500 feature-icon">
                            <BarChart className="w-10 h-10 text-cyan-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Real-Time Analytics</h3>
                            <p className="text-gray-300">Track clicks, locations, and engagement for each shortened link.</p>
                        </div>

                        {/* Feature 3 - Security & Privacy */}
                        <div className="feature-card rounded-lg p-6 floating delay-200">
                            <div className="text-5xl mb-4 text-purple-500 feature-icon">
                            <ShieldCheck className="w-10 h-10 text-cyan-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Secure & Spam-Free</h3>
                            <p className="text-gray-300">Advanced security ensures your links are protected from malicious use.</p>
                        </div>

                        {/* Feature 4 - Custom Links */}
                        <div className="feature-card rounded-lg p-6 floating delay-300">
                            <div className="text-5xl mb-4 text-green-400 feature-icon">
                            <Edit className="w-10 h-10 text-cyan-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Custom Short Links</h3>
                            <p className="text-gray-300">Make your links memorable by customizing the URL slug.</p>
                        </div>

                        {/* Feature 5 - QR Code Generation */}
                        <div className="feature-card rounded-lg p-6 floating delay-400">
                            <div className="text-5xl mb-4 text-yellow-400 feature-icon">
                            <QrCode className="w-10 h-10 text-cyan-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Instant QR Code</h3>
                            <p className="text-gray-300">Generate QR codes for your shortened links with one click.</p>
                        </div>

                        {/* Feature 6 - Free & Easy to Use */}
                        <div className="feature-card rounded-lg p-6 floating delay-500">
                            <div className="text-5xl mb-4 text-blue-400 feature-icon">
                            <ThumbsUp className="w-10 h-10 text-cyan-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">100% Free & User-Friendly</h3>
                            <p className="text-gray-300">sign-ups required—just shorten, share, and track your links.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Features;

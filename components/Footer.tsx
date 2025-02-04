import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
    return (
        <div className="bg-white dark:bg-black text-gray-800 dark:text-white">
            <footer className="bg-animated cyber-grid relative overflow-hidden">
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        
                        {/* Logo & Description */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <Image src='/logo.png' alt='LinkBite Logo' width={150} height={150} className="w-32 h-auto"/>
                            <p className="text-cyan-600 dark:text-cyan-400 mt-3">Shorten, share, and track your links with ease.</p>
                        </div>

                        {/* Quick Links */}
                        <div className="text-center">
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-cyan-600 dark:text-cyan-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">Home</a></li>
                                <li><a href="#" className="text-cyan-600 dark:text-cyan-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">Features</a></li>
                                <li><a href="#" className="text-cyan-600 dark:text-cyan-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">Pricing</a></li>
                                <li><a href="#" className="text-cyan-600 dark:text-cyan-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">Contact</a></li>
                            </ul>
                        </div>

                        {/* Social Media */}
                        <div className="flex flex-col items-center md:items-end text-center md:text-right">
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Stay Connected</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="text-cyan-600 dark:text-cyan-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                                    <Facebook size={24} />
                                </a>
                                <a href="#" className="text-cyan-600 dark:text-cyan-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                                    <Twitter size={24} />
                                </a>
                                <a href="#" className="text-cyan-600 dark:text-cyan-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                                    <Instagram size={24} />
                                </a>
                                <a href="#" className="text-cyan-600 dark:text-cyan-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                                    <Linkedin size={24} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-8 pt-8 border-t border-cyan-800">
                        <p className="text-center text-cyan-600 dark:text-cyan-400">&copy; 2025 LinkBite. Built by John Ayomide with kraf technologies All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;

const Footer = () => {
    return (
        <footer className="bg-animated cyber-grid relative overflow-hidden">
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-white neon-text mb-4">CYBERLINK ACADEMY</h3>
                    <p className="text-cyan-300">Empowering minds in the digital age</p>
                </div>
                <div className="text-center">
                    <h4 className="text-xl font-bold text-white mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-cyan-300 hover:text-white transition-colors duration-300">Home</a></li>
                        <li><a href="#" className="text-cyan-300 hover:text-white transition-colors duration-300">Courses</a></li>
                        <li><a href="#" className="text-cyan-300 hover:text-white transition-colors duration-300">About Us</a></li>
                        <li><a href="#" className="text-cyan-300 hover:text-white transition-colors duration-300">Contact</a></li>
                    </ul>
                </div>
                <div className="text-center md:text-right">
                    <h4 className="text-xl font-bold text-white mb-4">Stay Connected</h4>
                    <div className="flex justify-center md:justify-end space-x-4">
                        <a href="#" className="text-cyan-300 hover:text-white transition-colors duration-300"><i className="fab fa-facebook-f text-2xl"></i></a>
                        <a href="#" className="text-cyan-300 hover:text-white transition-colors duration-300"><i className="fab fa-twitter text-2xl"></i></a>
                        <a href="#" className="text-cyan-300 hover:text-white transition-colors duration-300"><i className="fab fa-instagram text-2xl"></i></a>
                        <a href="#" className="text-cyan-300 hover:text-white transition-colors duration-300"><i className="fab fa-linkedin-in text-2xl"></i></a>
                    </div>
                </div>
            </div>
            <div className="mt-8 pt-8 border-t border-cyan-800">
                <p className="text-center text-cyan-300">&copy; 2024 CyberLink Academy. All rights reserved.</p>
            </div>
        </div>
        <div className="absolute inset-0 pointer-events-none neon-border"></div>
    </footer>
    )
}

export default Footer
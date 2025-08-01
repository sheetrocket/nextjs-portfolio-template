export default function Footer() {
    return (
        <footer className="bg-light py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row justify-between items-center mb-16">
                    <div className="mb-8 lg:mb-0">
                        <svg width="187" height="40" viewBox="0 0 187 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.88 16.39L21.38 21.39H3.99L32.97 32.96H2.76L21.37 21.39H52.42L19.27 8.87H58.63L13.99 14.52H74.19L14.21 19.24H90.64L13.99 13.99H106.48L4.75 19.11H113.74L14.21 18.86H129L11.17 13.96H141.96L12.67 13.58H157.53L19.8 13.58H177.74L5.88 5.88H183.62" stroke="#000000" strokeWidth="1" />
                            <path d="M3.99 3.48L32.97 32.96" stroke="#006B6A" strokeWidth="1" />
                        </svg>
                    </div>
                    <div className="flex flex-wrap justify-center space-x-8 mb-8 lg:mb-0">
                        <a href="#home" className="text-dark hover:text-primary transition-colors">Home</a>
                        <a href="#portfolio" className="text-dark hover:text-primary transition-colors">Portfolio</a>
                        <a href="#about" className="text-dark hover:text-primary transition-colors">About me</a>
                        <a href="#contact" className="text-dark hover:text-primary transition-colors">Contact</a>
                        <a href="#testimonials" className="text-dark hover:text-primary transition-colors">Testimonials</a>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="w-8 h-8 bg-dark rounded flex items-center justify-center hover:bg-primary transition-colors">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 5.5V3.5C9 2.67 9.67 2 10.5 2H12.5C13.33 2 14 2.67 14 3.5V5.5C14 6.33 13.33 7 12.5 7H10.5C9.67 7 9 6.33 9 5.5Z" fill="white" />
                                <path d="M2 5.5V3.5C2 2.67 2.67 2 3.5 2H5.5C6.33 2 7 2.67 7 3.5V5.5C7 6.33 6.33 7 5.5 7H3.5C2.67 7 2 6.33 2 5.5Z" fill="white" />
                                <path d="M9 12.5V10.5C9 9.67 9.67 9 10.5 9H12.5C13.33 9 14 9.67 14 10.5V12.5C14 13.33 13.33 14 12.5 14H10.5C9.67 14 9 13.33 9 12.5Z" fill="white" />
                                <path d="M2 12.5V10.5C2 9.67 2.67 9 3.5 9H5.5C6.33 9 7 9.67 7 10.5V12.5C7 13.33 6.33 14 5.5 14H3.5C2.67 14 2 13.33 2 12.5Z" fill="white" />
                            </svg>
                        </a>
                        <a href="#" className="w-8 h-8 bg-dark rounded flex items-center justify-center hover:bg-primary transition-colors">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 2C4.13 2 1 5.13 1 9C1 12.87 4.13 16 8 16C11.87 16 15 12.87 15 9C15 5.13 11.87 2 8 2ZM6.5 11.5L4 9L5.41 7.59L6.5 8.68L10.59 4.59L12 6L6.5 11.5Z" fill="white" />
                            </svg>
                        </a>
                        <a href="#" className="w-8 h-8 bg-dark rounded flex items-center justify-center hover:bg-primary transition-colors">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.5 2.5L2.5 15.5M2.5 2.5L15.5 15.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <a href="#" className="w-8 h-8 bg-dark rounded flex items-center justify-center hover:bg-primary transition-colors">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 2C4.13 2 1 5.13 1 9C1 12.87 4.13 16 8 16C11.87 16 15 12.87 15 9C15 5.13 11.87 2 8 2ZM6.5 11.5L4 9L5.41 7.59L6.5 8.68L10.59 4.59L12 6L6.5 11.5Z" fill="white" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="border-t border-dark/20 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-dark/60">Made with 💖 by Allen Jones</p>
                        <div className="flex space-x-8">
                            <a href="#" className="text-dark/60 hover:text-primary transition-colors">Privacy Policy</a>
                            <a href="#" className="text-dark/60 hover:text-primary transition-colors">Terms of Service</a>
                            <a href="#" className="text-dark/60 hover:text-primary transition-colors">Cookies Settings</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
} 
import { Link } from 'wouter';
import { Car, Twitter, Instagram, Facebook, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/50 pt-16 pb-8 mt-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 group inline-flex">
              <Car className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
              <span className="text-xl font-bold tracking-[0.2em] uppercase text-white">
                Apex Motors
              </span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-6 leading-relaxed">
              Curating the world's most exclusive collection of performance and luxury vehicles for those who demand uncompromising excellence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glassmorphism flex items-center justify-center text-gray-400 hover:text-white hover:border-primary transition-all duration-300 hover:-translate-y-1">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glassmorphism flex items-center justify-center text-gray-400 hover:text-white hover:border-primary transition-all duration-300 hover:-translate-y-1">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glassmorphism flex items-center justify-center text-gray-400 hover:text-white hover:border-primary transition-all duration-300 hover:-translate-y-1">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glassmorphism flex items-center justify-center text-gray-400 hover:text-white hover:border-primary transition-all duration-300 hover:-translate-y-1">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/cars" className="text-gray-400 hover:text-primary transition-colors duration-300">Our Collection</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary transition-colors duration-300">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary transition-colors duration-300">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-6">Showroom</h3>
            <ul className="space-y-4 text-gray-400">
              <li>123 Apex Drive</li>
              <li>Beverly Hills, CA 90210</li>
              <li>+1 (310) 555-0199</li>
              <li>concierge@apexmotors.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Apex Motors. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Taberl's</h3>
            <p className="text-primary-foreground/80">
              Bringing joy to your kitchen with delicious recipes and cooking inspiration.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary-foreground/80 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary-foreground/80 transition-colors">Recipes</a></li>
              <li><a href="#" className="hover:text-primary-foreground/80 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary-foreground/80 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary-foreground/80 transition-colors">Breakfast</a></li>
              <li><a href="#" className="hover:text-primary-foreground/80 transition-colors">Lunch</a></li>
              <li><a href="#" className="hover:text-primary-foreground/80 transition-colors">Dinner</a></li>
              <li><a href="#" className="hover:text-primary-foreground/80 transition-colors">Desserts</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-foreground/80 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-primary-foreground/80 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-primary-foreground/80 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-primary-foreground/80 transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Taberl's. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
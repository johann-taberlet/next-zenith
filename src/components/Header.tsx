import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-header/80 backdrop-blur-md border-b border-primary/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-2xl font-bold text-primary">Taberl's</div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-secondary hover:text-primary transition-colors">
            Home
          </a>
          <a href="#" className="text-secondary hover:text-primary transition-colors">
            Recipes
          </a>
          <a href="#" className="text-secondary hover:text-primary transition-colors">
            About
          </a>
          <Button className="bg-primary hover:bg-primary/90 text-white">
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  );
};
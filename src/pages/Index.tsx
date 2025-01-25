import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeatureSection } from "@/components/FeatureSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      <FeatureSection
        title="Cook with Love"
        description="Discover recipes that bring families together. Our curated collection of dishes helps create memorable moments around the dinner table."
        imageSrc="https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        imageAlt="Family cooking together"
        buttonText="Explore Recipes"
      />
      
      <FeatureSection
        title="Share the Joy"
        description="Join our community of food lovers. Share your recipes, tips, and culinary adventures with fellow cooking enthusiasts."
        imageSrc="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        imageAlt="Community sharing recipes"
        buttonText="Join Community"
        reverse
      />
      
      <Footer />
    </div>
  );
};

export default Index;
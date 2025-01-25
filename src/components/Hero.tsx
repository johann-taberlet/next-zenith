import { SearchBar } from "./SearchBar";

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 bg-background">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6 animate-fade-up [animation-delay:200ms]">
          Discover Amazing Recipes
        </h1>
        <p className="text-lg md:text-xl text-secondary/80 max-w-2xl mx-auto mb-12 animate-fade-up [animation-delay:400ms]">
          Explore a world of delicious recipes, cooking tips, and culinary inspiration for every occasion.
        </p>
        <div className="animate-fade-up [animation-delay:600ms]">
          <SearchBar />
        </div>
      </div>
    </section>
  );
};
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <Input
        type="text"
        placeholder="Search recipes..."
        className="pl-4 pr-12 py-6 text-lg rounded-full border-2 border-primary/20 focus:border-primary/40 transition-colors bg-white/80 backdrop-blur-sm"
      />
      <Button
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full w-10 h-10 bg-primary hover:bg-primary/90 transition-colors"
      >
        <Search className="h-5 w-5" />
      </Button>
    </div>
  );
};
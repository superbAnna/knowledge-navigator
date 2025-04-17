import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SearchBar } from "@/components/SearchBar";
import { KnowledgeGrid } from "@/components/KnowledgeGrid";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <SearchBar />
      <main className="flex-1">
        <KnowledgeGrid />
      </main>
      <Footer />
    </div>
  );
}

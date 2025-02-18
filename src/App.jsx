import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Header from "./components/Header/Header";
import SearchModal from "./components/Header/SearchModal";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import tools from "./data/toolsData";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
    if (query) {
      const results = tools.flatMap((category) => category.tools).filter((tool) => tool.name.toLowerCase().includes(query.toLowerCase()));
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const openSearchModal = () => {
    setIsSearchModalOpen(true);
  };

  const closeSearchModal = () => {
    setIsSearchModalOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === "k") {
        event.preventDefault();
        openSearchModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const getRandomTools = () => {
    return tools
      .flatMap((category) => category.tools)
      .sort(() => 0.5 - Math.random())
      .slice(0, 10);
  };

  return (
    <div className="bg-light dark:bg-dark dark:text-text-dark text-text-base">
      <Header onSearch={handleSearch} searchResults={searchResults} openSearchModal={openSearchModal} />
      <main className="mx-auto flex min-h-screen w-11/12 flex-col items-center py-4">
        <SearchModal isOpen={isSearchModalOpen} onClose={closeSearchModal} onSearch={handleSearch} searchResults={searchResults} randomTools={getRandomTools()} />
        <Outlet context={{ searchQuery }} />
        <Analytics />
        <SpeedInsights />
        <Footer />
      </main>
    </div>
  );
}

export default App;

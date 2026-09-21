import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologySection from "./components/TechnologySection";

function App() {
  const [selectedStack, setSelectedStack] = useState([]);

  const handleAddToStack = (technology) => {
    setSelectedStack((previousStack) => {
      const alreadyAdded = previousStack.some(
        (item) => item.id === technology.id
      );

      if (alreadyAdded) {
        return previousStack;
      }

      return [...previousStack, technology];
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Hero />

        <TechnologySection
          selectedStack={selectedStack}
          onAddToStack={handleAddToStack}
        />
      </main>
    </div>
  );
}

export default App;
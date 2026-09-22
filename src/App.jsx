import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologySection from "./components/TechnologySection";
import StackSidebar from "./components/StackSidebar";

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

  const handleRemoveFromStack = (technologyId) => {
    setSelectedStack((previousStack) =>
      previousStack.filter((item) => item.id !== technologyId)
    );
  };

  const handleRemoveAll = () => {
    setSelectedStack([]);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Hero />

        <div className="bg-slate-50">
          <div className="page-container">
            <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
              <TechnologySection
                selectedStack={selectedStack}
                onAddToStack={handleAddToStack}
              />

              <StackSidebar
                selectedStack={selectedStack}
                onRemove={handleRemoveFromStack}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
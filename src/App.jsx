import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologySection from "./components/TechnologySection";
import StackSidebar from "./components/StackSidebar";
import Footer from "./components/Footer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [selectedStack, setSelectedStack] = useState([]);

  const handleAddToStack = (technology) => {
    setSelectedStack((previousStack) => {
      const alreadyAdded = previousStack.some(
        (item) => item.id === technology.id
      );

      if (alreadyAdded) {
        toast.info(`${technology.name} is already in your stack.`);
        return previousStack;
      }

      toast.success(`${technology.name} added to your stack.`);

      return [...previousStack, technology];
    });
  };

  const handleRemoveFromStack = (technologyId) => {
    setSelectedStack((previousStack) => {
      const technology = previousStack.find(
        (item) => item.id === technologyId
      );

      if (technology) {
        toast.info(`${technology.name} removed from your stack.`);
      }

      return previousStack.filter((item) => item.id !== technologyId);
    });
  };

  const handleRemoveAll = () => {
    if (selectedStack.length === 0) {
      return;
    }

    setSelectedStack([]);
    toast.info("All technologies removed from your stack.");
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
      <Footer />    
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
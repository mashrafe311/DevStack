import { useState } from "react";
import TechnologyGrid from "./TechnologyGrid";

function TechnologySection({
  selectedStack = [],
  onAddToStack,
}) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Frontend",
    "Backend",
    "Database",
    "Language",
    "Styling",
    "DevOps",
    "Tools",
  ];

  return (
    <section id="technologies" className="bg-slate-50 section-padding">
      <div className="page-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] gradient-text">
            Explore Technologies
          </p>

          <h2 className="font-jakarta text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Choose the tools
            <span className="gradient-text"> you love.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Discover popular technologies and build a development stack that
            fits your project and workflow.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "gradient-bg text-white shadow-sm"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-950"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mt-12">
          <TechnologyGrid
            activeCategory={activeCategory}
            selectedStack={selectedStack}
            onAddToStack={onAddToStack}
          />
        </div>
      </div>
    </section>
  );
}

export default TechnologySection;
import { useEffect, useState } from "react";
import TechnologyCard from "./TechnologyCard";

function TechnologyGrid({
  activeCategory,
  selectedStack = [],
  onAddToStack,
}) {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [addingId, setAddingId] = useState(null);

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("/data/technologies.json");

        if (!response.ok) {
          throw new Error("Failed to load technologies.");
        }

        const data = await response.json();
        setTechnologies(data);
      } catch (err) {
        setError("Unable to load technologies. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  const handleAdd = async (technology) => {
    setAddingId(technology.id);

    await new Promise((resolve) => setTimeout(resolve, 500));

    onAddToStack(technology);

    setAddingId(null);
  };

  const filteredTechnologies =
    activeCategory === "All"
      ? technologies
      : technologies.filter(
          (technology) => technology.category === activeCategory
        );

  if (loading) {
    return (
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="h-[330px] animate-pulse rounded-2xl border border-slate-200 bg-white"
          />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
        <p className="text-sm font-medium text-red-600">{error}</p>
      </div>
    );
  }

  if (filteredTechnologies.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center">
        <p className="font-semibold text-slate-900">
          No technologies found.
        </p>

        <p className="mt-2 text-sm text-slate-500">
          Try selecting another category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {filteredTechnologies.map((technology) => {
        const isSelected = selectedStack.some(
          (item) => item.id === technology.id
        );

        return (
          <TechnologyCard
            key={technology.id}
            technology={technology}
            onAddToStack={handleAdd}
            isSelected={isSelected}
            isAdding={addingId === technology.id}
          />
        );
      })}
    </div>
  );
}

export default TechnologyGrid;
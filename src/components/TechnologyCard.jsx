function TechnologyCard({ technology, onAddToStack, isSelected }) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 p-2.5">
          <img
            src={technology.icon}
            alt={`${technology.name} logo`}
            className="h-full w-full object-contain"
          />
        </div>

        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600">
          {technology.badge}
        </span>
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-jakarta text-lg font-bold text-slate-950">
            {technology.name}
          </h3>

          <span className="shrink-0 text-sm font-semibold text-slate-700">
            ★ {technology.rating}
          </span>
        </div>

        <p className="mt-2 text-sm font-medium text-slate-400">
          {technology.category}
        </p>

        <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-600">
          {technology.description}
        </p>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
        <span className="text-xs font-medium text-slate-500">
          Difficulty:
          <span className="ml-1 font-semibold text-slate-700">
            {technology.difficulty}
          </span>
        </span>

        <button
          type="button"
          onClick={() => onAddToStack(technology)}
          className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 ${
            isSelected
              ? "bg-slate-900 text-white hover:bg-slate-800"
              : "gradient-bg text-white shadow-sm hover:-translate-y-0.5 hover:shadow-md"
          }`}
        >
          {isSelected ? "Added" : "Add to Stack"}
        </button>
      </div>
    </article>
  );
}

export default TechnologyCard;
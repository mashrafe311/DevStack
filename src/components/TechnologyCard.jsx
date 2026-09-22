function TechnologyCard({
  technology,
  onAddToStack,
  isSelected,
  isAdding,
}) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 p-2.5 transition-transform duration-200 group-hover:scale-105">
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

      <div className="mt-5 flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-jakarta text-lg font-bold text-slate-950">
            {technology.name}
          </h3>

          <span className="flex shrink-0 items-center gap-1 text-sm font-semibold text-slate-700">
            <span aria-hidden="true" className="text-amber-400">
              ★
            </span>
            {technology.rating}
          </span>
        </div>

        <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
          {technology.category}
        </p>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          {technology.description}
        </p>
      </div>

      <div className="mt-6 border-t border-slate-100 pt-4">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs text-slate-500">
            Difficulty:
            <span className="ml-1 font-semibold text-slate-700">
              {technology.difficulty}
            </span>
          </span>

          <button
            type="button"
            onClick={() => onAddToStack(technology)}
            disabled={isSelected || isAdding}
            className={`min-w-[92px] rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 ${
              isSelected
                ? "cursor-default bg-slate-900 text-white"
                : isAdding
                  ? "cursor-wait bg-slate-300 text-white"
                  : "gradient-bg text-white shadow-sm hover:-translate-y-0.5 hover:shadow-md"
            }`}
          >
            {isAdding ? "Adding..." : isSelected ? "Added" : "Add to Stack"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default TechnologyCard;
function StackItem({ technology, onRemove }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white p-2">
        <img
          src={technology.icon}
          alt={`${technology.name} logo`}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-semibold text-slate-900">
          {technology.name}
        </h3>

        <p className="mt-0.5 text-xs text-slate-500">
          {technology.category}
        </p>
      </div>

      <button
        type="button"
        onClick={() => onRemove(technology.id)}
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-red-50 hover:text-red-500"
        aria-label={`Remove ${technology.name} from stack`}
      >
        <span aria-hidden="true" className="text-lg leading-none">
          ×
        </span>
      </button>
    </div>
  );
}

export default StackItem;
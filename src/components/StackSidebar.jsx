import StackItem from "./StackItem";

function StackSidebar({
  selectedStack = [],
  onRemove,
  onRemoveAll,
}) {
  return (
    <aside className="card p-5 lg:sticky lg:top-28">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="gradient-text text-xs font-semibold uppercase tracking-[0.16em]">
            Your Selection
          </p>

          <h2 className="mt-1 font-jakarta text-xl font-bold text-slate-950">
            Your Stack
          </h2>
        </div>

        <span className="gradient-bg flex h-8 min-w-8 items-center justify-center rounded-full px-2 text-xs font-bold text-white">
          {selectedStack.length}
        </span>
      </div>

      {selectedStack.length === 0 ? (
        <div className="mt-6 rounded-xl border border-dashed border-slate-200 bg-slate-50 p-6 text-center">
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-white text-lg shadow-sm">
            +
          </div>

          <h3 className="mt-3 text-sm font-semibold text-slate-900">
            Your stack is empty
          </h3>

          <p className="mt-1 text-xs leading-5 text-slate-500">
            Add technologies from the list to start building your stack.
          </p>
        </div>
      ) : (
        <>
          <div className="mt-5 space-y-3">
            {selectedStack.map((technology) => (
              <StackItem
                key={technology.id}
                technology={technology}
                onRemove={onRemove}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={onRemoveAll}
            className="mt-5 w-full rounded-xl border border-red-200 bg-white px-4 py-2.5 text-sm font-semibold text-red-500 transition-colors hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}

export default StackSidebar;
interface SearchBarProps {
    value: string,
    onChange: any,
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-sm align-middle">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Buscar veículos no MOVVA..."
        className="w-full rounded-lg border border-slate-700 bg-slate-900/50 py-2 pl-4 pr-10 text-sm text-white placeholder-slate-400 backdrop-blur-sm transition-all focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
      />
      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </span>
    </div>
  );
}
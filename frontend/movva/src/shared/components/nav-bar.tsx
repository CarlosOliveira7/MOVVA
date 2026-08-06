import SearchBar from "./search-bar";
import {Menu} from "lucide-react";
interface NavBarProps {
    searchTerm: string,
    setSearchTerm: (value: string) => void,
}
export default function Navbar({ searchTerm, setSearchTerm }: NavBarProps) {
  const categories = ["Econômicos", "SUVs", "Executivos", "Elétricos"];

  return (
    <nav className="bg-blue-950 px-4 py-3 text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        
        {/* Menu e Marca */}
        <div className="flex items-center gap-3">
          <Menu className="h-6 w-6 text-white" />
          <span className="text-xl font-black tracking-wider text-blue-400">MOVVA</span>
        </div>

        {/* Barra de Busca */}
        <SearchBar value={searchTerm} onChange={(e: any) => setSearchTerm(e.target.value)} />

        {/* Categorias / Filtros */}
        <ul className="hidden items-center gap-6 text-xs font-bold uppercase tracking-wider md:flex">
          {categories.map((category) => (
            <li key={category}>
              <a href={`#${category.toLowerCase()}`} className="transition-colors hover:text-blue-400">
                {category}
              </a>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
}
import {type Car} from "../types/car"

interface CarCardProps {
    car: Car
}

export default function CarCard({ car }: CarCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900 text-white shadow-lg transition-transform hover:-translate-y-1">
      <div className="h-48 w-full bg-slate-800">
        <img 
          src={car.image} 
          alt={`${car.make} ${car.model}`} 
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400">{car.category}</span>
          <h3 className="mt-1 text-lg font-bold">{car.make} {car.model}</h3>
          <p className="text-sm text-slate-400">Ano: {car.year}</p>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div>
            <span className="text-2xl font-black text-white">R$ {car.pricePerDay}</span>
            <span className="text-xs text-slate-400"> / dia</span>
          </div>
          <button 
            type="button"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-500 active:bg-blue-700"
          >
            Alugar
          </button>
        </div>
      </div>
    </article>
  );
}
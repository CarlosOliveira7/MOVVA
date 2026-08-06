import { useState, useEffect } from "react";
import Navbar from "../../../shared/components/nav-bar";
import CarCard from "../components/car-card";
import { useCars } from "../hooks/useCar";
export default function Shop() {
  const [searchTerm, setSearchTerm] = useState("");

  const {data: cars = [], isLoading, isError, error} = useCars();


  const filteredCars = cars.filter(
    (car) =>
      car.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <main className="mx-auto max-w-7xl px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight">Veículos Disponíveis</h1>
          <p className="mt-1 text-slate-400">Escolha o modelo ideal para a sua viagem com o MOVVA.</p>
        </header>

        {isLoading ? (
          <div className="flex h-64 items-center justify-center">
            <p className="animate-pulse text-lg text-blue-400">Carregando catálogo...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
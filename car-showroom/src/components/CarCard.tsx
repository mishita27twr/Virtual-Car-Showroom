import { Link } from 'wouter';
import { ArrowRight, Fuel } from 'lucide-react';
import type { Car } from '@/data/cars';

interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
  return (
    <div className="group glassmorphism rounded-xl overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(220,38,38,0.15)] hover:border-primary/50 relative">
      <div className="aspect-[4/3] overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
        <img
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 z-20">
          <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 text-white">
            <Fuel className="w-3 h-3 text-primary" />
            {car.fuelType}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow relative z-20 -mt-12">
        <span className="text-gray-400 text-sm font-medium tracking-widest uppercase mb-1 drop-shadow-md">
          {car.brand}
        </span>
        <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">{car.model}</h3>
        
        <div className="flex items-end gap-2 mb-6">
          <span className="text-primary font-bold text-2xl">${car.price.toLocaleString()}</span>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-8 text-sm text-gray-300">
          <div>
            <span className="block text-gray-500 text-xs uppercase tracking-wider mb-1">Power</span>
            <span className="font-semibold">{car.horsepower} hp</span>
          </div>
          <div>
            <span className="block text-gray-500 text-xs uppercase tracking-wider mb-1">0-60 mph</span>
            <span className="font-semibold">{car.acceleration}</span>
          </div>
          <div>
            <span className="block text-gray-500 text-xs uppercase tracking-wider mb-1">Top Speed</span>
            <span className="font-semibold">{car.topSpeed}</span>
          </div>
          <div>
            <span className="block text-gray-500 text-xs uppercase tracking-wider mb-1">Category</span>
            <span className="font-semibold">{car.category}</span>
          </div>
        </div>
        
        <div className="mt-auto">
          <Link
            href={`/cars/${car.id}`}
            className="w-full py-3 flex items-center justify-center gap-2 border border-primary/50 text-white font-medium uppercase tracking-wider transition-all duration-300 hover:bg-primary hover:border-primary group/btn rounded"
          >
            View Details
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}

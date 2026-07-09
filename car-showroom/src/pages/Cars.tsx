import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { CarCard } from '@/components/CarCard';
import { cars } from '@/data/cars';

const categories = ['All', 'Sports', 'SUV', 'Sedan', 'Electric'];

export function Cars() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      const matchesSearch = 
        car.brand.toLowerCase().includes(searchTerm.toLowerCase()) || 
        car.model.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'All' || car.category === activeCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Collection</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Explore our meticulously curated selection of the world's most desirable vehicles.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12 items-center justify-between glassmorphism p-4 md:p-6 rounded-xl">
          <div className="relative w-full lg:w-96">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search by brand or model..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-black/50 border border-white/10 rounded focus:outline-none focus:border-primary text-white placeholder-gray-500 transition-colors"
            />
          </div>
          
          <div className="flex items-center gap-3 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 hide-scrollbar">
            <SlidersHorizontal className="w-5 h-5 text-gray-500 hidden md:block mr-2" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded whitespace-nowrap font-medium text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-white shadow-[0_0_15px_rgba(220,38,38,0.4)]'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-transparent'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 glassmorphism rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-2">No cars found</h3>
            <p className="text-gray-400">Try adjusting your search or filters.</p>
            <button 
              onClick={() => { setSearchTerm(''); setActiveCategory('All'); }}
              className="mt-6 text-primary hover:text-white transition-colors border-b border-primary pb-1 uppercase tracking-wider text-sm"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

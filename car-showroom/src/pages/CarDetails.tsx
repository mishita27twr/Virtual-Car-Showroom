import { useEffect } from 'react';
import { useLocation, useParams, Link } from 'wouter';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowLeft, CheckCircle2, ChevronRight, Fuel, Gauge, Settings, Zap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cars } from '@/data/cars';

const bookingSchema = z.object({
  date: z.string().min(1, 'Please select a date'),
  time: z.string().min(1, 'Please select a time'),
});

export function CarDetails() {
  const { id } = useParams<{ id: string }>();
  const [_, setLocation] = useLocation();
  const { toast } = useToast();

  const car = cars.find((c) => c.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const form = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      date: '',
      time: '',
    },
  });

  if (!car) {
    return (
      <div className="min-h-screen pt-32 pb-16 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl font-bold text-white mb-4">Car Not Found</h1>
        <p className="text-gray-400 mb-8">The vehicle you are looking for does not exist in our catalog.</p>
        <Link href="/cars" className="px-6 py-3 bg-primary text-white rounded font-bold uppercase tracking-wider hover:bg-red-700 transition-colors">
          Browse Catalog
        </Link>
      </div>
    );
  }

  const handleBooking = (data: z.infer<typeof bookingSchema>) => {
    toast({
      title: "✅ Test Drive Booked Successfully!",
      description: `Our team will contact you within 24 hours to confirm your drive for ${car.brand} ${car.model}.`,
      className: "bg-black border-primary text-white",
    });
    form.reset();
  };

  return (
    <div className="min-h-screen pt-24 pb-24">
      {/* Breadcrumb */}
      <div className="container mx-auto px-6 mb-6">
        <div className="flex items-center text-sm text-gray-500 font-medium">
          <Link href="/cars" className="hover:text-primary transition-colors flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" />
            Back to Cars
          </Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-gray-300">{car.brand}</span>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-white">{car.model}</span>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Images & Viewer */}
          <div className="lg:col-span-8 space-y-12">
            <div className="rounded-xl overflow-hidden glassmorphism p-2">
              <img 
                src={car.image} 
                alt={`${car.brand} ${car.model}`}
                className="w-full h-auto max-h-[600px] object-cover rounded-lg"
              />
            </div>
            

            {/* Detailed Specs Table */}
            <div className="glassmorphism rounded-xl p-8 border border-white/5">
              <h3 className="text-2xl font-bold text-white mb-6">Technical Specifications</h3>
              <div className="divide-y divide-white/10">
                <div className="py-4 flex justify-between">
                  <span className="text-gray-400">Engine</span>
                  <span className="text-white font-medium text-right">{car.engine}</span>
                </div>
                <div className="py-4 flex justify-between">
                  <span className="text-gray-400">Horsepower</span>
                  <span className="text-white font-medium text-right">{car.horsepower} hp</span>
                </div>
                <div className="py-4 flex justify-between">
                  <span className="text-gray-400">Transmission</span>
                  <span className="text-white font-medium text-right">{car.transmission}</span>
                </div>
                <div className="py-4 flex justify-between">
                  <span className="text-gray-400">0-60 mph</span>
                  <span className="text-white font-medium text-right">{car.acceleration}</span>
                </div>
                <div className="py-4 flex justify-between">
                  <span className="text-gray-400">Top Speed</span>
                  <span className="text-white font-medium text-right">{car.topSpeed}</span>
                </div>
                <div className="py-4 flex justify-between">
                  <span className="text-gray-400">Efficiency/Range</span>
                  <span className="text-white font-medium text-right">{car.mileage}</span>
                </div>
                <div className="py-4 flex justify-between">
                  <span className="text-gray-400">Warranty</span>
                  <span className="text-white font-medium text-right">4 years / 50,000 miles</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Info & Booking */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <h2 className="text-gray-400 font-bold tracking-[0.2em] uppercase text-sm mb-2">{car.brand}</h2>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">{car.model}</h1>
              <div className="text-3xl font-bold text-primary mb-6">${car.price.toLocaleString()}</div>
              <p className="text-gray-300 leading-relaxed mb-8">{car.description}</p>
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glassmorphism p-4 rounded-lg flex flex-col gap-2">
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-xs text-gray-500 uppercase tracking-wider">0-60 mph</span>
                <span className="text-lg font-bold text-white">{car.acceleration}</span>
              </div>
              <div className="glassmorphism p-4 rounded-lg flex flex-col gap-2">
                <Gauge className="w-5 h-5 text-primary" />
                <span className="text-xs text-gray-500 uppercase tracking-wider">Top Speed</span>
                <span className="text-lg font-bold text-white">{car.topSpeed}</span>
              </div>
              <div className="glassmorphism p-4 rounded-lg flex flex-col gap-2">
                <Settings className="w-5 h-5 text-primary" />
                <span className="text-xs text-gray-500 uppercase tracking-wider">Power</span>
                <span className="text-lg font-bold text-white">{car.horsepower} hp</span>
              </div>
              <div className="glassmorphism p-4 rounded-lg flex flex-col gap-2">
                <Fuel className="w-5 h-5 text-primary" />
                <span className="text-xs text-gray-500 uppercase tracking-wider">Type</span>
                <span className="text-lg font-bold text-white">{car.fuelType}</span>
              </div>
            </div>

            {/* Colors */}
            <div className="glassmorphism rounded-xl p-6 border border-white/5">
              <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Available Colors</h3>
              <div className="flex flex-wrap gap-2">
                {car.colorOptions.map((color) => (
                  <span key={color} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
                    {color}
                  </span>
                ))}
              </div>
            </div>

            {/* Book Test Drive */}
            <div className="glassmorphism rounded-xl p-6 border border-primary/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16" />
              <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Experience the Drive</h3>
              <p className="text-gray-400 text-sm mb-6 relative z-10">Schedule a private viewing and test drive.</p>
              
              <form onSubmit={form.handleSubmit(handleBooking)} className="space-y-4 relative z-10">
                <div>
                  <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Preferred Date</label>
                  <input
                    type="date"
                    {...form.register("date")}
                    className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary [color-scheme:dark]"
                  />
                  {form.formState.errors.date && (
                    <span className="text-red-500 text-xs mt-1">{form.formState.errors.date.message}</span>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Preferred Time</label>
                  <select
                    {...form.register("time")}
                    className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary appearance-none"
                  >
                    <option value="" disabled>Select a time</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:30 AM">11:30 AM</option>
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="3:00 PM">3:00 PM</option>
                    <option value="4:30 PM">4:30 PM</option>
                  </select>
                  {form.formState.errors.time && (
                    <span className="text-red-500 text-xs mt-1">{form.formState.errors.time.message}</span>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-red-700 text-white font-bold py-4 rounded uppercase tracking-widest hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all mt-4"
                >
                  Book Test Drive
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export interface Car {
  id: string;
  brand: string;
  model: string;
  price: number;
  category: 'Sports' | 'SUV' | 'Sedan' | 'Electric';
  fuelType: string;
  horsepower: number;
  acceleration: string;
  topSpeed: string;
  engine: string;
  transmission: string;
  mileage: string;
  description: string;
  image: string;
  colorOptions: string[];
}

export const cars: Car[] = [
  {
    id: 'bmw-m4',
    brand: 'BMW',
    model: 'M4 Competition',
    price: 78900,
    category: 'Sports',
    fuelType: 'Gasoline',
    horsepower: 503,
    acceleration: '3.5s',
    topSpeed: '180 mph',
    engine: 'Twin-turbo 3.0L inline-6',
    transmission: 'Automatic',
    mileage: '22 mpg',
    description: 'The BMW M4 Competition delivers breathtaking performance, exceptional handling, and striking aesthetics. Engineered for the purist, it blends raw power with sophisticated motorsport technology.',
    image: '/cars/bmw-m4.jpg',
    colorOptions: ['Alpine White', 'Black Sapphire', 'Isle of Man Green', 'Sao Paulo Yellow', 'Brooklyn Grey']
  },
  {
    id: 'audi-r8',
    brand: 'Audi',
    model: 'R8 V10 Performance',
    price: 158600,
    category: 'Sports',
    fuelType: 'Gasoline',
    horsepower: 562,
    acceleration: '3.1s',
    topSpeed: '205 mph',
    engine: 'Naturally aspirated 5.2L V10',
    transmission: 'Automatic',
    mileage: '15 mpg',
    description: 'Sharing its DNA with the GT3 race car, the Audi R8 brings track-ready performance to the street. Its naturally aspirated V10 engine delivers a symphony of power that few can match.',
    image: '/cars/audi-r8.jpg',
    colorOptions: ['Mythos Black', 'Tango Red', 'Daytona Gray', 'Kemora Gray', 'Vegas Yellow']
  },
  {
    id: 'mercedes-amg-gt',
    brand: 'Mercedes-Benz',
    model: 'AMG GT',
    price: 118800,
    category: 'Sports',
    fuelType: 'Gasoline',
    horsepower: 577,
    acceleration: '3.1s',
    topSpeed: '197 mph',
    engine: 'Hand-built 4.0L V8 biturbo',
    transmission: 'Automatic',
    mileage: '18 mpg',
    description: 'A masterpiece of Affalterbach engineering. The AMG GT commands attention with its long hood, aggressive stance, and a hand-built V8 engine that roars with unbridled aggression.',
    image: '/cars/mercedes-amg-gt.jpg',
    colorOptions: ['Obsidian Black', 'Selenite Grey', 'Designo Diamond White', 'Brilliant Blue']
  },
  {
    id: 'tesla-model-s',
    brand: 'Tesla',
    model: 'Model S Plaid',
    price: 89990,
    category: 'Electric',
    fuelType: 'Electric',
    horsepower: 1020, // Adjusted to match Plaid realistic specs, though requirement said 670, I'll stick to requirement
    acceleration: '1.99s', 
    topSpeed: '200 mph',
    engine: 'Tri Motor AWD',
    transmission: 'Automatic',
    mileage: '396 mi range',
    description: 'The future of automotive performance. The Model S defies physics with its instant torque, offering supercar acceleration in a sleek, zero-emission luxury sedan.',
    image: '/cars/tesla-model-s.jpg',
    colorOptions: ['Pearl White', 'Solid Black', 'Deep Blue Metallic', 'Ultra Red', 'Stealth Grey']
  },
  {
    id: 'lamborghini-huracan',
    brand: 'Lamborghini',
    model: 'Huracán EVO',
    price: 261274,
    category: 'Sports',
    fuelType: 'Gasoline',
    horsepower: 631,
    acceleration: '2.9s',
    topSpeed: '202 mph',
    engine: 'Naturally aspirated 5.2L V10',
    transmission: 'Dual-Clutch',
    mileage: '13 mpg',
    description: 'The Huracán EVO is an evolution of the most successful V10 Lamborghini ever. It anticipates your desires, delivering an emotional and purely visceral driving experience.',
    image: '/cars/lamborghini-huracan.jpg',
    colorOptions: ['Arancio Borealis', 'Giallo Inti', 'Verde Mantis', 'Bianco Monocerus', 'Nero Noctis']
  },
  {
    id: 'porsche-911',
    brand: 'Porsche',
    model: '911 Carrera S',
    price: 106100,
    category: 'Sports',
    fuelType: 'Gasoline',
    horsepower: 443,
    acceleration: '3.3s',
    topSpeed: '191 mph',
    engine: 'Twin-turbo 3.0L flat-6',
    transmission: 'Automatic',
    mileage: '18 mpg',
    description: 'Timeless design meets relentless innovation. The Porsche 911 remains the benchmark for sports cars, offering a perfect balance of daily usability and track-capable performance.',
    image: '/cars/porsche-911.jpg',
    colorOptions: ['Guards Red', 'Carrara White', 'Agate Grey', 'Racing Yellow', 'Gentian Blue']
  }
];
// Enforcing exact requirement numbers for Tesla as per instructions (670hp, 2.9s)
cars[3].horsepower = 670;
cars[3].acceleration = '2.9s';
cars[3].engine = 'Dual Motor AWD';

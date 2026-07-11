import { useState } from 'react'
import Dashboard from './pages/Dashboard'


const initialProducts = [
  {
    id: 1,
    name: "Laptop",
    brand: "Lenovo",
    model: "V15 G4 AMN",
    category: "Laptop",
    price: 2500,
    stock: 9,
    description: "15.6-inch business laptop with Ryzen processor.",
    createdAt: "2026-07-01T09:00:00.000Z",
  },
  {
    id: 2,
    name: "Laptop",
    brand: "ASUS",
    model: "TUF Gaming A15",
    category: "Laptop",
    price: 4200,
    stock: 5,
    description: "Gaming laptop with RTX graphics.",
    createdAt: "2026-07-02T11:30:00.000Z",
  },
  {
    id: 3,
    name: "Monitor",
    brand: "LG",
    model: "UltraGear 27GN800",
    category: "Monitor",
    price: 950,
    stock: 12,
    description: "27-inch QHD 144Hz gaming monitor.",
    createdAt: "2026-07-03T10:15:00.000Z",
  },
  {
    id: 4,
    name: "Monitor",
    brand: "Samsung",
    model: "Odyssey G5",
    category: "Monitor",
    price: 1100,
    stock: 8,
    description: "32-inch curved gaming monitor.",
    createdAt: "2026-07-04T14:45:00.000Z",
  },
  {
    id: 5,
    name: "Phone",
    brand: "Apple",
    model: "iPhone 16",
    category: "Phone",
    price: 3900,
    stock: 7,
    description: "Apple iPhone 16 with A18 chip.",
    createdAt: "2026-07-05T12:00:00.000Z",
  },
  {
    id: 6,
    name: "Phone",
    brand: "Apple",
    model: "iPhone 16 Pro",
    category: "Phone",
    price: 5200,
    stock: 4,
    description: "Apple iPhone 16 Pro with ProMotion display.",
    createdAt: "2026-07-06T15:20:00.000Z",
  },
  {
    id: 7,
    name: "Accessory",
    brand: "Logitech",
    model: "MX Master 3S",
    category: "Accessory",
    price: 420,
    stock: 18,
    description: "Wireless productivity mouse.",
    createdAt: "2026-07-07T08:45:00.000Z",
  },
  {
    id: 8,
    name: "Accessory",
    brand: "Sony",
    model: "WH-1000XM5",
    category: "Accessory",
    price: 780,
    stock: 10,
    description: "Noise-cancelling wireless headphones.",
    createdAt: "2026-07-08T17:10:00.000Z",
  },
];

function App() {
    const [ products , setProducts ] = useState(initialProducts);
    const handleDelete = (id) =>{
      setProducts(
        products.filter((product) => product.id !== id)
      );
    };
  return (
    <>

    <Dashboard
      products={products}
      setProducts={setProducts}
    />


    </>
  );
}

export default App;

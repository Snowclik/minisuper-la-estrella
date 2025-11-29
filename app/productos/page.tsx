'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Star, ShoppingCart, User, Search } from 'lucide-react';

interface Product {
    name: string;
    price: number;
    category: string;
    image: string;
    quantity: number;
}

const products = [
    {
        name: 'Leche Entera 1L',
        price: 2.50,
        category: 'Lácteos',
        image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400'
    },
    {
        name: 'Pan Integral',
        price: 1.20,
        category: 'Panadería',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400'
    },
    {
        name: 'Manzanas Rojas',
        price: 3.50,
        category: 'Frutas',
        image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400'
    },
    {
        name: 'Arroz Blanco 1kg',
        price: 1.80,
        category: 'Granos',
        image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400'
    },
    {
        name: 'Aceite de Oliva',
        price: 5.99,
        category: 'Aceites',
        image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400'
    },
    {
        name: 'Huevos x12',
        price: 2.80,
        category: 'Lácteos',
        image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400'
    },
    {
        name: 'Tomates Frescos',
        price: 2.20,
        category: 'Verduras',
        image: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400'
    },
    {
        name: 'Pasta Italiana',
        price: 1.50,
        category: 'Granos',
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400'
    }
];

export default function ProductosPage() {
    const [cart, setCart] = useState<Product[]>([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            const parsedCart = JSON.parse(savedCart);
            setCart(parsedCart);
            setCartCount(parsedCart.reduce((sum: number, item: Product) => sum + item.quantity, 0));
        }
    }, []);

    const addToCart = (product: typeof products[0]) => {
        const existingCart = [...cart];
        const existingItem = existingCart.find(item => item.name === product.name);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            existingCart.push({ ...product, quantity: 1 });
        }

        setCart(existingCart);
        localStorage.setItem('cart', JSON.stringify(existingCart));
        setCartCount(existingCart.reduce((sum, item) => sum + item.quantity, 0));
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                            <h1 className="text-2xl font-bold text-gray-800">MiniSuper La Estrella</h1>
                        </div>

                        <div className="flex items-center gap-4">
                            <Link href="/carrito" className="relative p-2 hover:bg-gray-100 rounded-lg transition">
                                <ShoppingCart className="w-6 h-6 text-gray-700" />
                                {cartCount > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                        {cartCount}
                                    </span>
                                )}
                            </Link>
                            <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                                <User className="w-6 h-6 text-gray-700" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                {/* Search Bar */}
                <div className="mb-8">
                    <div className="relative max-w-2xl mx-auto">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Buscar productos..."
                            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                    </div>
                </div>

                {/* Category Filter */}
                <div className="mb-8">
                    <select className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary">
                        <option>Todas las categorías</option>
                        <option>Lácteos</option>
                        <option>Panadería</option>
                        <option>Frutas</option>
                        <option>Verduras</option>
                        <option>Granos</option>
                        <option>Aceites</option>
                    </select>
                </div>

                {/* Products Grid */}
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Productos Disponibles</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {products.map((product, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
                            >
                                <div className="relative h-48 bg-gray-200">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-4">
                                    <span className="text-xs font-semibold text-primary bg-green-50 px-2 py-1 rounded">
                                        {product.category}
                                    </span>
                                    <h3 className="text-lg font-bold text-gray-800 mt-2">{product.name}</h3>
                                    <div className="flex items-center justify-between mt-4">
                                        <span className="text-2xl font-bold text-primary">${product.price.toFixed(2)}</span>
                                        <button
                                            onClick={() => addToCart(product)}
                                            className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-lg font-semibold transition-all hover:scale-105"
                                        >
                                            Agregar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white mt-16 py-8">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                        <span className="text-xl font-bold">MiniSuper La Estrella</span>
                    </div>
                    <p className="text-gray-400">Tu supermercado de confianza</p>
                    <p className="text-gray-500 text-sm mt-4">© 2025 - Prototipo para proyecto universitario</p>
                </div>
            </footer>
        </div>
    );
}

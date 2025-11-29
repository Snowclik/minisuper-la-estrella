'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Star, User, ChevronLeft, Minus, Plus, Trash2 } from 'lucide-react';

interface Product {
    name: string;
    price: number;
    category: string;
    image: string;
    quantity: number;
}

export default function CarritoPage() {
    const [cart, setCart] = useState<Product[]>([]);
    const [subtotal, setSubtotal] = useState(0);
    const [tax, setTax] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        loadCart();
    }, []);

    const loadCart = () => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            const parsedCart = JSON.parse(savedCart);
            setCart(parsedCart);
            calculateTotals(parsedCart);
        }
    };

    const calculateTotals = (cartItems: Product[]) => {
        const sub = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const taxAmount = sub * 0.12;
        setSubtotal(sub);
        setTax(taxAmount);
        setTotal(sub + taxAmount);
    };

    const updateQuantity = (index: number, newQuantity: number) => {
        if (newQuantity < 1) return;
        const updatedCart = [...cart];
        updatedCart[index].quantity = newQuantity;
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        calculateTotals(updatedCart);
    };

    const removeItem = (index: number) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        calculateTotals(updatedCart);
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
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                            <User className="w-6 h-6 text-gray-700" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                <Link href="/productos" className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-semibold mb-6">
                    <ChevronLeft className="w-5 h-5" />
                    Volver a productos
                </Link>

                <h2 className="text-3xl font-bold text-gray-800 mb-8">Mi Carrito</h2>

                {cart.length === 0 ? (
                    <div className="bg-white rounded-xl shadow-md p-12 text-center">
                        <p className="text-xl text-gray-600 mb-4">Tu carrito está vacío</p>
                        <Link href="/productos" className="inline-block bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-semibold transition">
                            Ir a comprar
                        </Link>
                    </div>
                ) : (
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-4">
                            {cart.map((item, index) => (
                                <div key={index} className="bg-white rounded-xl shadow-md p-6 flex gap-4">
                                    <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                                        <p className="text-sm text-gray-500">{item.category}</p>
                                        <p className="text-xl font-bold text-primary mt-2">${item.price.toFixed(2)}</p>
                                    </div>
                                    <div className="flex flex-col items-end justify-between">
                                        <button
                                            onClick={() => removeItem(index)}
                                            className="text-red-500 hover:text-red-700 transition"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => updateQuantity(index, item.quantity - 1)}
                                                className="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
                                            >
                                                <Minus className="w-4 h-4" />
                                            </button>
                                            <span className="w-12 text-center font-semibold">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(index, item.quantity + 1)}
                                                className="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
                                            >
                                                <Plus className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Resumen del Pedido</h3>
                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between text-gray-600">
                                        <span>Subtotal:</span>
                                        <span className="font-semibold">${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>IVA (12%):</span>
                                        <span className="font-semibold">${tax.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Envío:</span>
                                        <span className="font-semibold text-green-600">GRATIS</span>
                                    </div>
                                    <div className="border-t pt-3">
                                        <div className="flex justify-between text-xl font-bold text-gray-800">
                                            <span>Total:</span>
                                            <span className="text-primary">${total.toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>
                                <Link
                                    href="/pago"
                                    className="block w-full bg-primary hover:bg-primary-hover text-white text-center py-3 rounded-lg font-semibold transition"
                                >
                                    Proceder al Pago
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}

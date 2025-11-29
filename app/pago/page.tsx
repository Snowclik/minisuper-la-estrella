'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Star, User, ChevronLeft, CreditCard, Banknote, Building2 } from 'lucide-react';

interface Product {
    name: string;
    price: number;
    category: string;
    image: string;
    quantity: number;
}

export default function PagoPage() {
    const router = useRouter();
    const [cart, setCart] = useState<Product[]>([]);
    const [subtotal, setSubtotal] = useState(0);
    const [tax, setTax] = useState(0);
    const [total, setTotal] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState('cash');
    const [formData, setFormData] = useState({
        fullname: '',
        address: '',
        phone: '',
        email: '',
        notes: ''
    });

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            const parsedCart = JSON.parse(savedCart);
            setCart(parsedCart);
            const sub = parsedCart.reduce((sum: number, item: Product) => sum + (item.price * item.quantity), 0);
            const taxAmount = sub * 0.12;
            setSubtotal(sub);
            setTax(taxAmount);
            setTotal(sub + taxAmount);
        }
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const orderNumber = 'LA-EST-' + Math.floor(10000 + Math.random() * 90000);
        const orderDate = new Date().toLocaleDateString('es-EC');

        const orderData = {
            customer: formData,
            paymentMethod,
            cart,
            totals: { subtotal, tax, total },
            orderNumber,
            date: orderDate
        };

        localStorage.setItem('currentOrder', JSON.stringify(orderData));
        localStorage.removeItem('cart');
        router.push('/confirmacion');
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
                <Link href="/carrito" className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-semibold mb-6">
                    <ChevronLeft className="w-5 h-5" />
                    Volver al carrito
                </Link>

                <h2 className="text-3xl font-bold text-gray-800 mb-8">Método de Pago</h2>

                <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-8">
                    {/* Form */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Delivery Info */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Información de Entrega</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Nombre completo *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.fullname}
                                        onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="Ej: Juan Pérez"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Dirección de entrega *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.address}
                                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="Ej: Av. Principal 123, Quito"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Teléfono *
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="0987654321"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Email (opcional)
                                    </label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="correo@ejemplo.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Notas adicionales (opcional)
                                    </label>
                                    <textarea
                                        value={formData.notes}
                                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                        rows={3}
                                        placeholder="Ej: Dejar en portería, etc."
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Payment Method */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Selecciona el método de pago</h3>
                            <div className="space-y-3">
                                <label className={`flex items-center gap-4 p-4 rounded-lg border-2 cursor-pointer transition ${paymentMethod === 'cash' ? 'border-primary bg-green-50' : 'border-gray-200 hover:border-gray-300'}`}>
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="cash"
                                        checked={paymentMethod === 'cash'}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                        className="w-5 h-5"
                                    />
                                    <Banknote className="w-6 h-6 text-primary" />
                                    <div className="flex-1">
                                        <p className="font-semibold text-gray-800">Efectivo</p>
                                        <p className="text-sm text-gray-500">Pago contra entrega</p>
                                    </div>
                                </label>
                                <label className={`flex items-center gap-4 p-4 rounded-lg border-2 cursor-pointer transition ${paymentMethod === 'card' ? 'border-primary bg-green-50' : 'border-gray-200 hover:border-gray-300'}`}>
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="card"
                                        checked={paymentMethod === 'card'}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                        className="w-5 h-5"
                                    />
                                    <CreditCard className="w-6 h-6 text-primary" />
                                    <div className="flex-1">
                                        <p className="font-semibold text-gray-800">Tarjeta de Crédito/Débito</p>
                                        <p className="text-sm text-gray-500">Visa, Mastercard, etc.</p>
                                    </div>
                                </label>
                                <label className={`flex items-center gap-4 p-4 rounded-lg border-2 cursor-pointer transition ${paymentMethod === 'transfer' ? 'border-primary bg-green-50' : 'border-gray-200 hover:border-gray-300'}`}>
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="transfer"
                                        checked={paymentMethod === 'transfer'}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                        className="w-5 h-5"
                                    />
                                    <Building2 className="w-6 h-6 text-primary" />
                                    <div className="flex-1">
                                        <p className="font-semibold text-gray-800">Transferencia Bancaria</p>
                                        <p className="text-sm text-gray-500">Banco Pichincha, Guayaquil, etc.</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Resumen del Pedido</h3>
                            <div className="space-y-3 mb-4 max-h-60 overflow-y-auto">
                                {cart.map((item, index) => (
                                    <div key={index} className="flex justify-between text-sm">
                                        <span className="text-gray-600">{item.name} x{item.quantity}</span>
                                        <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="border-t pt-4 space-y-2 mb-6">
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
                                <div className="border-t pt-2">
                                    <div className="flex justify-between text-xl font-bold text-gray-800">
                                        <span>Total:</span>
                                        <span className="text-primary">${total.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-primary-hover text-white py-3 rounded-lg font-semibold transition"
                            >
                                Confirmar Compra
                            </button>
                        </div>
                    </div>
                </form>
            </main>
        </div>
    );
}

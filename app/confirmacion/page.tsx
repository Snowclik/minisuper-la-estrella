'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Star, User, CheckCircle, Home, Printer, Phone } from 'lucide-react';

interface OrderData {
    customer: {
        fullname: string;
        address: string;
        phone: string;
        email?: string;
        notes?: string;
    };
    paymentMethod: string;
    cart: Array<{
        name: string;
        price: number;
        image: string;
        quantity: number;
    }>;
    totals: {
        subtotal: number;
        tax: number;
        total: number;
    };
    orderNumber: string;
    date: string;
}

export default function ConfirmacionPage() {
    const router = useRouter();
    const [orderData, setOrderData] = useState<OrderData | null>(null);

    useEffect(() => {
        const savedOrder = localStorage.getItem('currentOrder');
        if (!savedOrder) {
            router.push('/productos');
        } else {
            setOrderData(JSON.parse(savedOrder));
        }
    }, [router]);

    if (!orderData) return null;

    const paymentMethods: Record<string, string> = {
        'cash': 'Efectivo (Pago contra entrega)',
        'card': 'Tarjeta de Crédito/Débito',
        'transfer': 'Transferencia Bancaria'
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
            <main className="container mx-auto px-4 py-12">
                <div className="max-w-3xl mx-auto">
                    {/* Success Icon */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6 animate-bounce">
                            <CheckCircle className="w-16 h-16 text-green-600" />
                        </div>
                        <h2 className="text-4xl font-bold text-gray-800 mb-3">¡Compra Exitosa!</h2>
                        <p className="text-xl text-gray-600">Tu pedido ha sido confirmado</p>
                    </div>

                    {/* Order Details */}
                    <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
                        {/* Order Number */}
                        <div className="text-center pb-6 mb-6 border-b border-gray-200">
                            <p className="text-sm text-gray-500 mb-1">Número de pedido</p>
                            <p className="text-2xl font-bold text-gray-800">#{orderData.orderNumber}</p>
                            <p className="text-sm text-gray-500 mt-2">{orderData.date}</p>
                        </div>

                        {/* Customer Info */}
                        <div className="mb-6">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">Información del Cliente</h3>
                            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                                <p className="text-gray-700"><span className="font-semibold">Nombre:</span> {orderData.customer.fullname}</p>
                                <p className="text-gray-700"><span className="font-semibold">Teléfono:</span> {orderData.customer.phone}</p>
                                {orderData.customer.email && (
                                    <p className="text-gray-700"><span className="font-semibold">Email:</span> {orderData.customer.email}</p>
                                )}
                            </div>
                        </div>

                        {/* Delivery Info */}
                        <div className="mb-6">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">Información de Entrega</h3>
                            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                                <p className="text-gray-700"><span className="font-semibold">Dirección:</span> {orderData.customer.address}</p>
                                <p className="text-gray-700"><span className="font-semibold">Tiempo estimado:</span> <span className="text-green-600 font-semibold">30-45 minutos</span></p>
                                {orderData.customer.notes && (
                                    <p className="text-gray-700"><span className="font-semibold">Notas:</span> {orderData.customer.notes}</p>
                                )}
                            </div>
                        </div>

                        {/* Order Items */}
                        <div className="mb-6">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">Detalles del Pedido</h3>
                            <div className="bg-gray-50 rounded-lg p-4">
                                <div className="space-y-3 mb-4">
                                    {orderData.cart.map((item, index) => (
                                        <div key={index} className="flex justify-between items-center">
                                            <div className="flex items-center gap-3">
                                                <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-lg" />
                                                <div>
                                                    <p className="font-semibold text-gray-800">{item.name}</p>
                                                    <p className="text-sm text-gray-500">Cantidad: {item.quantity}</p>
                                                </div>
                                            </div>
                                            <p className="font-semibold text-gray-800">${(item.price * item.quantity).toFixed(2)}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="border-t border-gray-300 pt-4 space-y-2">
                                    <div className="flex justify-between text-gray-600">
                                        <span>Subtotal:</span>
                                        <span className="font-semibold">${orderData.totals.subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>IVA (12%):</span>
                                        <span className="font-semibold">${orderData.totals.tax.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Envío:</span>
                                        <span className="font-semibold text-green-600">GRATIS</span>
                                    </div>
                                    <div className="border-t border-gray-300 pt-2 mt-2">
                                        <div className="flex justify-between text-xl font-bold text-gray-800">
                                            <span>Total pagado:</span>
                                            <span className="text-green-600">${orderData.totals.total.toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Payment Method */}
                        <div className="mb-6">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">Método de Pago</h3>
                            <div className="bg-gray-50 rounded-lg p-4">
                                <p className="text-gray-700">
                                    <span className="font-semibold">Forma de pago:</span> {paymentMethods[orderData.paymentMethod]}
                                </p>
                            </div>
                        </div>

                        {/* Tracking Info */}
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                            <div className="flex items-start gap-3">
                                <div>
                                    <p className="font-semibold text-green-800 mb-1">¿Qué sigue?</p>
                                    <p className="text-sm text-green-700">Estamos preparando tu pedido. Recibirás una llamada cuando el repartidor esté en camino.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                        <Link
                            href="/productos"
                            className="flex-1 bg-primary hover:bg-primary-hover text-white py-4 rounded-lg font-semibold text-center transition flex items-center justify-center gap-2"
                        >
                            <Home className="w-5 h-5" />
                            Volver al Inicio
                        </Link>
                        <button
                            onClick={() => window.print()}
                            className="flex-1 border-2 border-gray-300 text-gray-700 py-4 rounded-lg font-semibold hover:bg-gray-50 transition flex items-center justify-center gap-2"
                        >
                            <Printer className="w-5 h-5" />
                            Imprimir Recibo
                        </button>
                    </div>

                    {/* Help */}
                    <div className="text-center">
                        <p className="text-gray-600 mb-2">¿Necesitas ayuda con tu pedido?</p>
                        <a href="tel:0999999999" className="text-green-600 font-semibold hover:underline inline-flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            Llámanos: 099-999-9999
                        </a>
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

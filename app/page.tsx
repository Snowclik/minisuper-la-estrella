'use client';

import Link from 'next/link';
import { Star, MapPin, Clock, Phone, Mail, ShoppingBag, Truck, CreditCard, Shield } from 'lucide-react';

export default function HomePage() {
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
                        <Link
                            href="/productos"
                            className="bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-lg font-semibold transition flex items-center gap-2"
                        >
                            <ShoppingBag className="w-5 h-5" />
                            Ir a la Tienda
                        </Link>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary to-primary-hover text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <Star className="w-16 h-16 text-yellow-400 fill-yellow-400 animate-pulse" />
                        </div>
                        <h2 className="text-5xl font-bold mb-6">Bienvenido a MiniSuper La Estrella</h2>
                        <p className="text-xl mb-8 text-green-50">
                            Tu supermercado de confianza en Canto del Llano, Santiago. Productos frescos y de calidad para toda tu familia.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/productos"
                                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg hover:shadow-xl"
                            >
                                Comprar Ahora
                            </Link>
                            <a
                                href="#ubicacion"
                                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-bold text-lg transition"
                            >
                                Ver Ubicación
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">¿Por qué elegirnos?</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-6 rounded-xl hover:shadow-lg transition">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                                <ShoppingBag className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-800 mb-2">Productos Frescos</h4>
                            <p className="text-gray-600">Selección diaria de productos de la más alta calidad</p>
                        </div>
                        <div className="text-center p-6 rounded-xl hover:shadow-lg transition">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                                <Truck className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-800 mb-2">Entrega Rápida</h4>
                            <p className="text-gray-600">Recibe tus productos en 30-45 minutos</p>
                        </div>
                        <div className="text-center p-6 rounded-xl hover:shadow-lg transition">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                                <CreditCard className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-800 mb-2">Pago Flexible</h4>
                            <p className="text-gray-600">Efectivo, tarjeta o transferencia bancaria</p>
                        </div>
                        <div className="text-center p-6 rounded-xl hover:shadow-lg transition">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                                <Shield className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-800 mb-2">Compra Segura</h4>
                            <p className="text-gray-600">Garantía de calidad en todos nuestros productos</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Sobre Nosotros</h3>
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <p className="text-lg text-gray-700 mb-4">
                                <strong>MiniSuper La Estrella</strong> es tu supermercado de confianza en la comunidad de Canto del Llano, Santiago.
                                Nos dedicamos a ofrecer productos frescos y de calidad a precios justos para todas las familias de la zona.
                            </p>
                            <p className="text-lg text-gray-700 mb-4">
                                Con años de experiencia sirviendo a nuestra comunidad, nos enorgullece ser parte de tu día a día,
                                ofreciendo desde productos básicos hasta artículos especializados para satisfacer todas tus necesidades.
                            </p>
                            <p className="text-lg text-gray-700">
                                Ahora, con nuestra tienda en línea, puedes hacer tus compras desde la comodidad de tu hogar
                                y recibir tus productos directamente en tu puerta.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location Section */}
            <section id="ubicacion" className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Nuestra Ubicación</h3>
                    <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {/* Map */}
                        <div className="rounded-xl overflow-hidden shadow-lg h-96">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7947654321!2d-79.9876543!3d-0.2345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMTQnMDQuNCJTIDc5wrA1OSczMS41Ilc!5e0!3m2!1ses!2sec!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Ubicación MiniSuper La Estrella"
                            />
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-6">
                            <div className="bg-gray-50 rounded-xl p-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-lg">
                                        <MapPin className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800 mb-2">Dirección</h4>
                                        <p className="text-gray-600">Canto del Llano, Santiago</p>
                                        <p className="text-gray-600">República Dominicana</p>
                                        <a
                                            href="https://maps.app.goo.gl/6ha8hyrro18mNZBPA"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary hover:text-primary-hover font-semibold mt-2 inline-block"
                                        >
                                            Ver en Google Maps →
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-lg">
                                        <Clock className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800 mb-2">Horario de Atención</h4>
                                        <p className="text-gray-600">Lunes a Sábado: 7:00 AM - 8:00 PM</p>
                                        <p className="text-gray-600">Domingo: 8:00 AM - 6:00 PM</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-lg">
                                        <Phone className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800 mb-2">Contacto</h4>
                                        <p className="text-gray-600">Teléfono: (809) 999-9999</p>
                                        <p className="text-gray-600">WhatsApp: (809) 999-9999</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-lg">
                                        <Mail className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800 mb-2">Email</h4>
                                        <p className="text-gray-600">info@minisuperlaestrella.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-br from-primary to-primary-hover text-white">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-4xl font-bold mb-4">¿Listo para hacer tu compra?</h3>
                    <p className="text-xl mb-8 text-green-50">Explora nuestro catálogo y recibe tus productos en minutos</p>
                    <Link
                        href="/productos"
                        className="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg hover:shadow-xl"
                    >
                        Ir a la Tienda Online
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                                <span className="text-xl font-bold">MiniSuper La Estrella</span>
                            </div>
                            <p className="text-gray-400">Tu supermercado de confianza en Canto del Llano</p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Enlaces Rápidos</h4>
                            <ul className="space-y-2">
                                <li><Link href="/productos" className="text-gray-400 hover:text-white transition">Productos</Link></li>
                                <li><a href="#ubicacion" className="text-gray-400 hover:text-white transition">Ubicación</a></li>
                                <li><a href="tel:8099999999" className="text-gray-400 hover:text-white transition">Contacto</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Síguenos</h4>
                            <p className="text-gray-400">Mantente al día con nuestras ofertas y novedades</p>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 pt-8 text-center">
                        <p className="text-gray-400">Tu supermercado de confianza</p>
                        <p className="text-gray-500 text-sm mt-4">© 2025 MiniSuper La Estrella - Prototipo para proyecto universitario</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

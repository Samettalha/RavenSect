import React from 'react';
import { motion } from 'framer-motion';

const CarShowcase = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', backgroundColor: '#f4f4f4', margin: 0, padding: 0 }}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#1e1e1e', zIndex: -1 }}
            />
            <header style={{ backgroundColor: '#333', color: '#fff', padding: '10px 0', textAlign: 'center' }}>
                <motion.h1
                    initial={{ x: -200 }}
                    animate={{ x: 0 }}
                    transition={{ type: 'spring', stiffness: 100 }}
                >
                    Yeni Süper Araba
                </motion.h1>
            </header>
            <div style={{ maxWidth: '1200px', margin: 'auto', padding: '20px' }}>
                <section style={{ margin: '20px 0' }}>
                    <motion.h2
                        initial={{ x: 200 }}
                        animate={{ x: 0 }}
                        transition={{ type: 'spring', stiffness: 100 }}
                        style={{ color: '#333' }}
                    >
                        Tanıtım
                    </motion.h2>
                    <motion.p
                        initial={{ x: -200 }}
                        animate={{ x: 0 }}
                        transition={{ type: 'spring', stiffness: 100 }}
                    >
                        Yeni Süper Araba, performans ve konforun mükemmel uyumunu sunar. Modern tasarımı ve üstün teknolojik özellikleri ile yolculuklarınızı keyifli hale getirir.
                    </motion.p>
                </section>
                <section style={{ margin: '20px 0' }}>
                    <motion.h2
                        initial={{ x: 200 }}
                        animate={{ x: 0 }}
                        transition={{ type: 'spring', stiffness: 100 }}
                        style={{ color: '#333' }}
                    >
                        Teknik Özellikler
                    </motion.h2>
                    <motion.div
                        initial={{ x: -200 }}
                        animate={{ x: 0 }}
                        transition={{ type: 'spring', stiffness: 100 }}
                        style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px' }}
                    >
                        <ul>
                            <li>Motor: 2.0L Turbo</li>
                            <li>Güç: 250 hp</li>
                            <li>0-100 km/h: 6 saniye</li>
                            <li>Yakıt Tüketimi: 7.5L/100km</li>
                            <li>Şanzıman: 8 ileri otomatik</li>
                        </ul>
                    </motion.div>
                </section>
                <section style={{ margin: '20px 0' }}>
                    <motion.h2
                        initial={{ x: 200 }}
                        animate={{ x: 0 }}
                        transition={{ type: 'spring', stiffness: 100 }}
                        style={{ color: '#333' }}
                    >
                        Galeri
                    </motion.h2>
                    <motion.div
                        initial={{ x: -200 }}
                        animate={{ x: 0 }}
                        transition={{ type: 'spring', stiffness: 100 }}
                    >
                        <img src="/araba1.jpg" alt="Araba Resmi 1" style={{ width: '100%', height: 'auto' }} />
                        <img src="/araba2.jpg" alt="Araba Resmi 2" style={{ width: '100%', height: 'auto' }} />
                    </motion.div>
                </section>
                <section style={{ margin: '20px 0' }}>
                    <motion.h2
                        initial={{ x: 200 }}
                        animate={{ x: 0 }}
                        transition={{ type: 'spring', stiffness: 100 }}
                        style={{ color: '#333' }}
                    >
                        Fiyat
                    </motion.h2>
                    <motion.p
                        initial={{ x: -200 }}
                        animate={{ x: 0 }}
                        transition={{ type: 'spring', stiffness: 100 }}
                    >
                        Başlangıç Fiyatı: 200.000 TL
                    </motion.p>
                </section>
                <section style={{ margin: '20px 0' }}>
                    <motion.h2
                        initial={{ x: 200 }}
                        animate={{ x: 0 }}
                        transition={{ type: 'spring', stiffness: 100 }}
                        style={{ color: '#333' }}
                    >
                        İletişim
                    </motion.h2>
                    <motion.div
                        initial={{ x: -200 }}
                        animate={{ x: 0 }}
                        transition={{ type: 'spring', stiffness: 100 }}
                        style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px' }}
                    >
                        <p>Detaylı bilgi için bizimle iletişime geçin:</p>
                        <p>Telefon: 0123 456 78 90</p>
                        <p>Email: info@süperaraba.com</p>
                    </motion.div>
                </section>
            </div>
        </div>
    );
};

export default CarShowcase;

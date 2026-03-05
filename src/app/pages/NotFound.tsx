import React from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';

export function NotFound() {
    return (
        <div className="min-h-[70vh] flex items-center justify-center px-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, type: 'spring', stiffness: 200, damping: 24 }}
                className="text-center"
            >
                <p className="text-[120px] md:text-[160px] font-bold leading-none text-[#C1272D]/10 select-none">
                    404
                </p>
                <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] -mt-6 mb-4">
                    Page Not Found
                </h1>
                <p className="text-[#7E8083] text-lg mb-10 max-w-sm mx-auto">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 bg-[#C1272D] text-white font-bold py-4 px-10 rounded-full uppercase tracking-widest text-sm hover:shadow-lg transition-all"
                >
                    Back to Home
                </Link>
            </motion.div>
        </div>
    );
}

'use client';

import { motion } from "framer-motion";


export const Headline = (props: { headline: string }) => {
    return (
        <div>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-gray-800 dark:text-white"
            >
                {props.headline}
            </motion.h2>
        </div>
    )
}
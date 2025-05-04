import { motion } from 'framer-motion';

const Greetings = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-blush relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/src/assets/floral-pattern.png')] opacity-10"></div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10 px-4"
      >
        <h1 className="text-4xl md:text-6xl font-playfair text-gold mb-4">
          You're Invited
        </h1>
        <p className="text-2xl md:text-3xl font-playfair text-gray-700 mb-8">
          to the wedding of
        </p>
        <div className="space-y-2">
          <h2 className="text-3xl md:text-5xl font-playfair text-gray-800">
            Sarah & Michael
          </h2>
          <p className="text-xl font-montserrat text-gray-600">
            June 15, 2024
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Greetings; 
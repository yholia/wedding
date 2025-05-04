import { motion } from 'framer-motion';

const ColorScheme = () => {
  const colors = [
    { name: 'Blush', hex: '#F8E1E1', class: 'bg-blush' },
    { name: 'Ivory', hex: '#F9F5F0', class: 'bg-ivory' },
    { name: 'Sage', hex: '#B8C4BB', class: 'bg-sage' },
    { name: 'Gold', hex: '#D4AF37', class: 'bg-gold' },
  ];

  return (
    <section className="py-20 px-4 bg-sage">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-title text-center text-ivory"
        >
          Our Color Palette
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
        >
          {colors.map((color, index) => (
            <motion.div
              key={color.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`h-32 rounded-lg ${color.class} shadow-lg mb-4`}></div>
              <h3 className="font-playfair text-xl text-ivory">{color.name}</h3>
              <p className="font-montserrat text-ivory/80">{color.hex}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ColorScheme; 
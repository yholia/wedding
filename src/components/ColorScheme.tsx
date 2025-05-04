import { motion } from 'framer-motion';

const colors = [
  { hex: '#7B8C7A' }, // Sage green
  { hex: '#B6AA9A' }, // Taupe
  { hex: '#D8C3B0' }, // Blush
  { hex: '#EFE3D0' }, // Ivory
];

const ColorScheme = () => {
  return (
    <section className="py-20 px-4 bg-ivory">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-title text-center">DRESS-CODE</motion.h2>
        <motion.p 
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8 }}
        className="font-montserrat text-base md:text-lg text-gray-700 mb-8 uppercase tracking-wide">
          БУДЕМО ВДЯЧНІ, ЯКЩО ВИ ПІДТРИМАЄТЕ<br />КОЛЬОРОВУ ГАМУ НАШОГО СВЯТА
        </motion.p>
        <motion.div className="flex justify-center gap-6 mt-2" style={{display: 'inline-grid'}}>
          {colors.map((color, idx) => (
            <motion.span
              key={color.hex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-[#b0a99f] shadow-md"
              style={{
                backgroundColor: color.hex,
                height: '50px',
                width: '50px',
                borderRadius: '50%',
                border: '2px solid #b0a99f',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                display: 'inline-block'
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ColorScheme; 
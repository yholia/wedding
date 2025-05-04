import { motion } from 'framer-motion';

const colors = [
  { hex: '#7B8C7A' }, // Sage green
  { hex: '#B6AA9A' }, // Taupe
  { hex: '#D8C3B0' }, // Blush
  { hex: '#EFE3D0' }, // Ivory
];

const ColorScheme = () => {
  return (
    <section className="py-16 px-4 bg-[#F7F0ED] flex items-center justify-center">
      <div className="max-w-md w-full text-center">
        <h2 className="text-xl md:text-2xl font-playfair mb-6 tracking-widest text-gray-800">DRESS-CODE</h2>
        <p className="font-montserrat text-base md:text-lg text-gray-700 mb-8 uppercase tracking-wide">
          БУДЕМО ВДЯЧНІ, ЯКЩО ВИ ПІДТРИМАЄТЕ<br />КОЛЬОРОВУ ГАМУ НАШОГО СВЯТА
        </p>
        <div className="flex justify-center gap-6 mt-2" style={{ display: 'inline-grid' }}>
          {colors.map((color, idx) => (
            <span
              key={color.hex}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-[#b0a99f] shadow-md"
              style={{ backgroundColor: color.hex,
                height: '50px',
                width: '50px',
                borderRadius: '50%',
                border: '2px solid #b0a99f',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                display: 'inline-block'
                
               }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ColorScheme; 
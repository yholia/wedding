import { motion } from 'framer-motion';

const Greetings = () => {
  return (
    <section
      className="relative flex flex-col justify-between items-center min-h-screen max-w-xs mx-auto rounded-3xl overflow-hidden shadow-lg bg-black/10"
      style={{
        backgroundImage: "url('/wedding/couple.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        aspectRatio: '373/792',
      }}
    >

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full absolute bottom-0 left-0 pb-10 px-6 z-10"
      >
        <h1 className="text-white text-5xl md:text-6xl font-playfair font-light leading-none" style={{letterSpacing: '-0.02em'}}>
          Євген<br />& Анастасія
        </h1>
      </motion.div>
    </section>
  );
};

export default Greetings; 
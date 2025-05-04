import { motion } from 'framer-motion';

const EventDetails = () => {
  return (
    <section className="py-20 px-4 bg-ivory">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-title text-center"
        >
          Деталі події
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-playfair text-gold mb-2">Місце</h3>
              <a
                href="https://www.google.com/maps?q=Замок+Лева,+Львів"
                target="_blank"
                rel="noopener noreferrer"
                className="section-content underline text-sage hover:text-gold transition-colors"
              >
               Замок Лева<br />
               вул. Галицької Армії 7-9<br />
               Львів, Львівська область
              </a>
              <div className="mt-4 rounded-lg overflow-hidden shadow-lg border border-sage">
                <iframe
                  title="Замок Лева"
                  src="https://www.google.com/maps?q=Замок+Лева,+Львів&output=embed"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-playfair text-gold mb-2">Дата</h3>
              <p className="section-content">
                Saturday, June 15, 2024
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-playfair text-gold mb-2">Schedule</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-montserrat font-semibold text-gray-800">Ceremony</p>
                  <p className="section-content">4:00 PM</p>
                </div>
                <div>
                  <p className="font-montserrat font-semibold text-gray-800">Cocktail Hour</p>
                  <p className="section-content">5:00 PM - 6:00 PM</p>
                </div>
                <div>
                  <p className="font-montserrat font-semibold text-gray-800">Reception</p>
                  <p className="section-content">6:00 PM - 11:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails; 
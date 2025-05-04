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
          Event Details
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-playfair text-gold mb-2">Venue</h3>
              <p className="section-content">
                The Grand Ballroom<br />
                123 Wedding Lane<br />
                New York, NY 10001
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-playfair text-gold mb-2">Date</h3>
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
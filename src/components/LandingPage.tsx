import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Clock, Users, Star } from 'lucide-react';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/signup');
  };

  const handleLogIn = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-red-600">TimeBank</h1>
          <div>
            <button onClick={handleLogIn} className="mr-4 hover:text-red-600 transition duration-300">Log In</button>
            <button onClick={handleSignUp} className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition duration-300">Sign Up</button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold mb-6">Exchange Skills, Build Community</h2>
          <p className="text-xl mb-8 text-gray-300">Join TimeBank and start trading your time and skills with others in your community.</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button onClick={handleSignUp} className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300">Get Started</button>
          </motion.div>
        </motion.div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12">
          <FeatureCard
            icon={<Clock size={48} className="text-red-600" />}
            title="Time is Currency"
            description="Exchange your skills for others' time, creating a fair and balanced economy."
          />
          <FeatureCard
            icon={<Users size={48} className="text-red-600" />}
            title="Build Connections"
            description="Meet like-minded individuals and strengthen your community bonds."
          />
          <FeatureCard
            icon={<Star size={48} className="text-red-600" />}
            title="Develop Skills"
            description="Learn new skills from experts in your community and share your own expertise."
          />
        </div>
      </main>

      <footer className="container mx-auto px-4 py-8 mt-16 text-center text-gray-400">
        <p>&copy; 2024 TimeBank. All rights reserved.</p>
      </footer>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-gray-800 p-6 rounded-lg"
    >
      <div className="text-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

export default LandingPage;
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAppDispatch} from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { fetchSkills } from '../redux/slices/skillsSlice';
import { Search, Filter, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const SearchExplore: React.FC = () => {
  const dispatch = useAppDispatch();
  const { list: skills, loading, error } = useAppSelector((state) => state.skills);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchSkills());
  }, [dispatch]);

  const filteredSkills = skills.filter(skill =>
    skill.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    skill.provider.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <h1 className="text-3xl font-bold mb-8 text-white">Search & Explore Skills</h1>

      <div className="flex mb-6">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search skills..."
            className="w-full p-3 pr-10 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute right-3 top-3 text-gray-400" />
        </div>
        <button
          className="ml-4 bg-red-600 text-white p-3 rounded-lg flex items-center hover:bg-red-700 transition duration-300"
          onClick={() => setFilterOpen(!filterOpen)}
        >
          <Filter className="mr-2" />
          Filters
        </button>
      </div>

      {filterOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-gray-800 p-4 rounded-lg shadow-md mb-6"
        >
          {/* Add filter options here */}
          <p className="text-gray-300">Filter options (to be implemented)</p>
        </motion.div>
      )}

      {loading ? (
        <p className="text-white">Loading skills...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <Link key={skill.id} to={`/skill/${skill.id}`}>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-2 text-white">{skill.title}</h3>
                <p className="text-gray-400 mb-2">Offered by: {skill.provider}</p>
                <div className="flex items-center">
                  <Star className="text-yellow-500 mr-1" />
                  <span className="text-gray-300">{skill.rating.toFixed(1)}</span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchExplore;

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

interface TrendingTopic {
  id: number;
  name: string;
  count: string;
}

interface TrendingSectionProps {
  trendingTopics: TrendingTopic[];
}

const TrendingSection = ({ trendingTopics }: TrendingSectionProps) => {
  return (
    <div className="grid gap-3">
      {trendingTopics.map((topic, index) => (
        <motion.div
          key={topic.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className="flex items-center justify-between p-4 bg-white rounded-lg border-2 border-black"
        >
          <div>
            <div className="flex items-center gap-2">
              <span className="font-['Bangers'] text-xl text-[#FF3860]">#{index + 1}</span>
              <h3 className="font-['Comic_Neue'] font-bold">{topic.name}</h3>
            </div>
            <p className="text-sm text-gray-500 font-['Comic_Neue']">{topic.count}</p>
          </div>
          <TrendingUp size={24} className="text-[#FFD700]" />
        </motion.div>
      ))}
    </div>
  );
};

export default TrendingSection;

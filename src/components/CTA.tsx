import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Zap, Star, ArrowRight } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const CTA = () => {
  const { darkMode } = useTheme();

  return (
    <section
      id="join-now"
      className={`py-24 relative overflow-hidden ${
        darkMode
          ? "bg-gradient-to-br from-[#2A4365] to-[#1A365D]"
          : "bg-gradient-to-br from-[#4FC4FF] to-[#C7EEFF]"
      }`}
    >
      <div className="container relative z-10">
        <motion.div
          className={`p-10 rounded-xl max-w-5xl mx-auto ${
            darkMode ? "bg-gray-800" : "bg-white"
          } border-[4px] border-black shadow-[8px_8px_0px_#000]`}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-black mb-4 ${
                darkMode ? "text-white" : "text-[#1A1A1A]"
              }`}
            >
              Ready to Join the
              <span className="text-[#FF4F79] ml-3">MANGA</span>
              <br />
              Revolution?
            </h2>
          </div>

          {/* Features Grid - clean and minimal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Premium Manga */}
            <div className="bg-[#F8F8F8] rounded-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#FFE66D] rounded-full flex items-center justify-center">
                <Star className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Manga</h3>
              <p className="text-gray-600">
                Access exclusive manga content not available anywhere else!
              </p>
            </div>

            {/* Artist Community */}
            <div className="bg-[#F8F8F8] rounded-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#FF4F79] rounded-full flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Artist Community</h3>
              <p className="text-gray-600">
                Connect with fellow artists and showcase your manga creations!
              </p>
            </div>

            {/* Live Events */}
            <div className="bg-[#F8F8F8] rounded-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#4FC4FF] rounded-full flex items-center justify-center">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Live Events</h3>
              <p className="text-gray-600">
                Participate in manga discussions, contests, and special events!
              </p>
            </div>
          </div>

          {/* Call to Action buttons - better spacing and cleaner design */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-xl mx-auto">
            <Button
              size="lg"
              className="bg-black hover:bg-black text-white text-lg h-14 w-full font-bold rounded-lg border-2 border-black"
              asChild
            >
              <Link to="/feed">Start Free Today</Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-white hover:bg-white text-black text-lg h-14 w-full font-bold rounded-lg border-2 border-black"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              View Premium Plans
            </Button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Try for free - no credit card required
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;

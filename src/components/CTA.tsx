import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Zap, Star, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section
      id="join-now"
      className="py-24 relative overflow-hidden bg-gradient-to-br from-[#4FC4FF] to-[#C7EEFF]"
    >
      {/* Manga style decorative elements */}
      <motion.div
        className="absolute top-10 right-10 starburst bg-[#FF4F79] text-white border-black z-10 font-manga-accent"
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: 15 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        限定！
      </motion.div>

      <div className="absolute inset-0 dot-pattern opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 speed-lines transform rotate-45 opacity-20"></div>

      {/* Decorative anime elements */}
      <motion.div
        className="absolute bottom-10 left-10 w-32 h-32"
        animate={{
          rotate: [0, 10, -10, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img
          src="https://api.dicebear.com/7.x/icons/svg?icon=ninjaHead"
          className="w-full h-full"
          alt="ninja"
        />
      </motion.div>

      <div className="container relative z-10">
        <motion.div
          className="manga-panel p-10 md:p-14 rounded-lg text-center relative max-w-4xl mx-auto bg-white"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute -top-5 -left-5 manga-panel-small p-3 bg-[#FFE66D] rotate-[-8deg] border-black font-manga-accent text-lg">
            JOIN NOW!
          </div>

          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="heading-lg mb-6 text-[#1A1A1A] font-manga-title tracking-wide">
              Ready to Join the{" "}
              <motion.span
                className="sound-effect inline-block text-[#FF4F79]"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [-2, 2, -2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                MANGA
              </motion.span>{" "}
              Revolution?
            </h2>
          </motion.div>

          <motion.div
            className="mb-10 max-w-2xl mx-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="manga-panel-small p-4 bg-[#F8F8F8]">
                <div className="w-14 h-14 mx-auto mb-3 bg-[#FFE66D] rounded-full flex items-center justify-center border-2 border-black">
                  <Star className="h-8 w-8" />
                </div>
                <h3 className="font-manga-accent tracking-wide text-lg mb-2">
                  Premium Manga
                </h3>
                <p className="text-sm font-manga-body">
                  Access exclusive manga content not available anywhere else!
                </p>
              </div>

              <div className="manga-panel-small p-4 bg-[#F8F8F8]">
                <div className="w-14 h-14 mx-auto mb-3 bg-[#FF4F79] rounded-full flex items-center justify-center border-2 border-black">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-manga-accent tracking-wide text-lg mb-2">
                  Artist Community
                </h3>
                <p className="text-sm font-manga-body">
                  Connect with fellow artists and showcase your manga creations!
                </p>
              </div>

              <div className="manga-panel-small p-4 bg-[#F8F8F8]">
                <div className="w-14 h-14 mx-auto mb-3 bg-[#4FC4FF] rounded-full flex items-center justify-center border-2 border-black">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-manga-accent tracking-wide text-lg mb-2">
                  Live Events
                </h3>
                <p className="text-sm font-manga-body">
                  Participate in manga discussions, contests, and special
                  events!
                </p>
              </div>
            </div>
          </motion.div>

          <div className="relative">
            <motion.div
              className="absolute -top-8 -right-10 rotate-[-15deg]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.3 }}
            >
              <div className="speech-bubble p-3">
                <p className="text-sm font-bold font-manga-accent">
                  Join 50,000+ fans!
                </p>
              </div>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="manga-button bg-[#FF4F79] hover:bg-[#FF4F79] text-white border-black text-lg h-14 font-manga-accent"
                  asChild
                >
                  <Link to="/feed">
                    <Sparkles className="w-5 h-5 mr-2 text-white" />
                    Start Free Today
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="manga-button bg-[#FFE66D] hover:bg-[#FFE66D] text-black border-black text-lg h-14 font-manga-accent"
                >
                  <ArrowRight className="w-5 h-5 mr-2 text-black" />
                  View Premium Plans
                </Button>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="mt-8 flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <p className="body-sm italic font-manga-body">
              Try for free - no credit card required
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;

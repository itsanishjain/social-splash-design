
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Star, Sparkles, Zap, Heart, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center relative overflow-hidden bg-gradient-to-b from-[#FFD6E0] to-[#C7EEFF]">
      {/* Manga Background Elements */}
      <div className="absolute inset-0 dot-pattern opacity-40"></div>
      <div className="absolute top-0 right-0 w-full h-64 speed-lines transform -rotate-45 opacity-20"></div>

      {/* Decorative anime elements */}
      <motion.div
        className="absolute -top-10 -left-10 w-40 h-40"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        {/* Replace this with a direct image URL for a sakura flower */}
        <img
          src="https://i.imgur.com/8zC1PSY.png"
          className="w-full h-full"
          alt="Sakura flower decoration"
        />
      </motion.div>

      <motion.div
        className="absolute bottom-10 right-10 w-32 h-32"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Replace this with a direct image URL for sushi */}
        <img
          src="https://i.imgur.com/JKtV4YD.png" 
          className="w-full h-full"
          alt="Sushi decoration"
        />
      </motion.div>

      <div className="container py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column: Content */}
        <div className="space-y-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: [-10, 0, -10] }}
              transition={{
                scale: { duration: 0.5 },
                rotate: { repeat: Infinity, duration: 2, ease: "easeInOut" },
              }}
              className="starburst inline-block py-2 px-4 mb-6 text-black bg-[#FFE66D]"
            >
              スーパー!
            </motion.div>

            <h1 className="heading-xl mb-6 text-[#1A1A1A] font-bold font-manga-title tracking-wide">
              <span className="text-[#FF4F79]">Manga</span>Splash
              <motion.span
                className="sound-effect ml-2 text-[#FF4F79]"
                animate={{ rotate: [0, -3, 3, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
              >
                バン!
              </motion.span>
            </h1>

            <div className="manga-panel p-6 bg-white border-[4px] border-black">
              <p className="body-lg text-[#333] font-manga-body">
                Connect with fellow manga fans! Share art, discuss storylines,
                and make friends who love the same series!
              </p>
              <div className="mt-4 flex items-center gap-2">
                <Heart className="text-[#FF4F79] fill-[#FF4F79]" />
                <span className="font-manga-accent tracking-wide text-lg">
                  漫画の魂 - The Spirit of Manga!
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Button
              className="manga-button bg-[#FF4F79] hover:bg-[#FF4F79] text-white border-black text-lg h-14 font-manga-accent"
              asChild
            >
              <Link to="/feed">
                <Sparkles className="w-5 h-5 mr-2 text-black hover:text-white" />
                Join Now!
              </Link>
            </Button>
            <Button
              variant="outline"
              className="manga-button bg-[#FFE66D] hover:bg-[#FFE66D] text-black border-black text-lg h-14 font-manga-accent"
            >
              <Zap className="w-5 h-5 mr-2 text-black" />
              Watch Demo
            </Button>
          </motion.div>

          <motion.div
            className="flex items-center gap-2 text-[#333]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <motion.div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-black overflow-hidden"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.15 * i, duration: 0.3 }}
                >
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=anime${i}`}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
            <p className="text-sm font-semibold">
              Join <span className="font-bold text-[#FF4F79]">50,000+</span>{" "}
              anime & manga fans!
            </p>
          </motion.div>
        </div>

        {/* Right Column: App Preview in Manga Style */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="absolute top-0 right-0 w-full h-full manga-pattern opacity-5 z-0"></div>

          {/* Main manga panel */}
          <motion.div
            className="manga-panel p-6 bg-white max-w-lg mx-auto relative z-10 rotate-2"
            whileHover={{ rotate: 0, transition: { duration: 0.3 } }}
          >
            <div className="absolute -top-6 -right-6 bg-[#FFE66D] p-2 rounded-full border-4 border-black rotate-12">
              <Star size={20} className="text-black" />
            </div>

            {/* Post header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-3 border-black">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=MangaQueen"
                  alt="avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-lg font-manga-accent">
                  SakuraChan
                </p>
                <div className="flex items-center">
                  <span className="text-xs text-[#555] bg-[#F0F0F0] px-2 py-1 rounded-full">
                    Tokyo, Japan
                  </span>
                  <span className="text-xs text-[#555] ml-2">2min ago</span>
                </div>
              </div>
            </div>

            {/* Post content */}
            <div className="speech-bubble mb-4">
              <p className="text-md mb-2 font-medium">
                Just finished the latest chapter of Demon Slayer! Tanjiro's
                character development is amazing! What do you all think?
                刀鍛冶の里編 🔥⚔️
              </p>
            </div>

            {/* Post image */}
            <div className="manga-panel-small overflow-hidden mb-4 h-48 flex items-center justify-center bg-[#F0F8FF] relative">
              <img
                src="https://api.dicebear.com/7.x/identicon/svg?seed=demonslayer&backgroundColor=c7ceea"
                alt="manga art"
                className="w-full h-full object-contain opacity-40"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-['Bangers'] text-4xl text-[#FF4F79] tracking-wider">
                  MANGA ART
                </span>
              </div>
            </div>

            {/* Post reactions */}
            <div className="flex items-center justify-between text-sm">
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="p-1 bg-[#FF4F79] rounded-full border-2 border-black">
                  <motion.div
                    whileTap={{
                      scale: [1, 1.5, 1],
                      rotate: [0, 15, -15, 0],
                      transition: { duration: 0.5 },
                    }}
                  >
                    <Heart size={16} className="text-white" />
                  </motion.div>
                </div>
                <span className="font-bold">852</span>
              </motion.div>

              <motion.div
                className="flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="p-1 bg-[#4FC4FF] rounded-full border-2 border-black">
                  <motion.div whileHover={{ rotate: 15 }}>
                    <MessageCircle size={16} className="text-white" />
                  </motion.div>
                </div>
                <span className="font-bold">124 comments</span>
              </motion.div>

              <motion.div
                className="flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="p-1 bg-[#FFE66D] rounded-full border-2 border-black">
                  <motion.div whileHover={{ rotate: 15 }}>
                    <Star size={16} className="text-black" />
                  </motion.div>
                </div>
                <span className="font-bold">Save</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Sound effect */}
          <motion.div
            className="absolute -bottom-8 -right-8 z-20"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <div className="sound-effect whitespace-nowrap text-2xl font-manga-title">
              スゴイ!
            </div>
          </motion.div>

          {/* Small decorative panels */}
          <motion.div
            className="manga-panel-small p-3 w-28 absolute -bottom-4 -left-4 bg-[#FFE66D] rotate-[-5deg] z-30"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            whileHover={{ rotate: 0 }}
          >
            <p className="text-sm text-center font-manga-accent">
              NEW POSTS DAILY!
            </p>
          </motion.div>

          <motion.div
            className="manga-panel-small p-3 w-24 absolute top-[-20px] left-[30%] bg-[#4FC4FF] rotate-[8deg] z-30"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.4 }}
            whileHover={{ rotate: 0 }}
          >
            <p className="text-xs text-center font-manga-accent">TRENDING!</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

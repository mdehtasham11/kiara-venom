import React from "react";
import { Zap, Clock, MessageCircle } from "lucide-react";

const ProductInfo = () => {
  return (
    <div className="max-w-2xl px-2">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-black">
          Get their Attention, Make them Attract
        </h1>

        <p className="text-md text-center mb-4 text-gray-800 leading-relaxed">
          A pheromone-infused perfume crafted exclusively for{" "}
          <strong>women who know their worth.</strong>
        </p>

        <p className="text-md text-center mb-4 text-gray-600 leading-relaxed">
          This enchanting fragrance blends science with elegance, designed to
          boost your confidence and make heads turn wherever you go.
        </p>

        <p className="text-md text-center mb-10 text-gray-600 leading-relaxed">
          With each spray, you'll radiate irresistible charm, commanding
          attention and admiration effortlessly.
        </p>
      </div>

      <div className="mb-8">
        <div className="flex gap-2 items-center mb-2">
          <div className="flex-shrink-0">
            <img
              src="/crisis-alert.webp"
              alt="Increased Aura"
              className="w-6 h-6"
            />
          </div>
          <h3 className="text-lg font-bold text-black">Increased Aura</h3>
        </div>

        <p className="text-md text-gray-700 leading-relaxed">
          Phero Particles when mixed with Female sweat create a perfume
          sensitive to male smell sense that the male perfume sense
          biologically.
        </p>
      </div>
      <div className="mb-8">
        <div className="flex gap-2 items-center mb-2">
          <div className="flex-shrink-0">
            <Zap className="w-6 h-6 text-black-500" />
          </div>
          <h3 className="text-lg font-bold text-black">Fires Spark</h3>
        </div>

        <p className="text-md text-gray-700 leading-relaxed">
          Rekindle the excitement in your relationship with a scent that
          enhances intimacy.
          <br />
          Perfect for date nights or special occasions, adding a touch of
          irresistible allure to your presence.
        </p>
      </div>
      <div className="mt-8 w-90 mb-8 h-120 rounded-xl">
        <img
          src="/images/VENOM_LOVE_MAGNET.jpg"
          alt="Venom Love Magnet"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="mb-8">
        <div className="flex gap-2 items-center mb-2">
          <div className="flex-shrink-0">
            <MessageCircle className="w-6 h-6 text-black-500" />
          </div>
          <h3 className="text-lg font-bold text-black">Conversation Starter</h3>
        </div>

        <p className="text-md text-gray-700 leading-relaxed">
          Turn every head and collect compliments like never before. Glances
          turn into double takes, and your scent becomes the reason they can’t
          stop thinking about you. It’s more than attention — it’s connection.
        </p>
      </div>
      <div className="mb-8">
        <div className="flex gap-2 items-center mb-2">
          <div className="flex-shrink-0">
            <Clock className="w-6 h-6 text-black-500" />
          </div>
          <h3 className="text-lg font-bold text-black">
            Lasts longer than him
          </h3>
        </div>

        <p className="text-md text-gray-700 leading-relaxed">
          A venomous-attraction fragrance that lasts all day, keeping you fresh
          and magnetic. Stay potent from morning glances to midnight whispers,
          keeping you irresistibly fresh, magnetic, and impossible to forget.
        </p>
      </div>

      <div className="mb-8">
        
      </div>
    </div>
  );
};

export default ProductInfo;

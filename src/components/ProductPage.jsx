import React, { useState } from "react";
import ProductGallery from "./ProductGallery";
import ProductHeader from "./ProductHeader";
import ProductForm from "./ProductForm";
import ProductInfo from "./ProductInfo";
import CustomerReviews from "./CustomerReviews";
import GuaranteeSection from "./GuaranteeSection";

const ProductPage = ({ addToCart }) => {
  const product = {
    id: 1,
    name: "Kiara's Venom - Pheromone Perfume by Kiara | Aura Enhancer",
    subtitle: "",
    price: 999,
    comparePrice: 1999,
    description: `Product Description for Her Venom™: Unleash the power of attraction with Her Venom™, a seductive pheromone-infused perfume crafted exclusively for women who know their worth. This enchanting fragrance blends science with elegance, designed to boost your confidence and make heads turn wherever you go. With each spray, you'll feel more magnetic, more captivating, and undeniably irresistible.

Her Venom™ is not just a perfume—it's your secret weapon. Infused with advanced pheromone technology, this fragrance works with your body's natural chemistry to enhance your aura and amplify your presence. Whether you're stepping into a boardroom, a date night, or simply owning your day, Her Venom™ ensures you leave a lasting impression.

Key Features:
✨ Pheromone-Infused Formula: Scientifically designed to enhance attraction and boost confidence.
🌸 Luxurious Scent Profile: A harmonious blend of floral, fruity, and musky notes that's both elegant and seductive.
💧 Long-Lasting: Keeps you smelling divine all day (and night) long.
🌿 Skin-Friendly: Dermatologically tested and safe for all skin types.
👑 Premium Packaging: Elegantly designed to reflect the sophistication within.`,

    variants: [
      { name: "Pack of 1", price: 999 },
      { name: "Pack of 2", price: 1799 },
      { name: "Pack of 3", price: 2499 },
    ],

    images: [
      "/images/Get_Real_Compliments_2_3ceb0712-825e-4581-a076-775de77675af.jpg",
      "/images/Main_36fb22d0-20a1-434f-a624-fd83770bbc1d.jpg",
      "/images/image3.webp",
      "/images/VENOM_LOVE_MAGNET.jpg",
      "/images/Untitleddesign_1.jpg",
    ],

    features: [
      {
        title: "Premium Quality",
        description: "Made with the finest ingredients",
      },
      {
        title: "Long Lasting",
        description: "Stays fresh all day",
      },
      {
        title: "Dermatologically Tested",
        description: "Safe for all skin types",
      },
    ],

    reviews: {
      average: 4.8,
      count: 3000,
      distribution: {
        5: 2100,
        4: 700,
        3: 150,
        2: 30,
        1: 20,
      },
    },
  };

  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="py-10 md:py-16 lg:py-20 pb-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-15 items-start">
          <ProductGallery
            images={product.images}
            productName={product.name}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />

          <div className="flex flex-col gap-0">
            <ProductHeader product={product} />
            <ProductForm product={product} addToCart={addToCart} />

            <CustomerReviews />
            <GuaranteeSection />
          </div>
        </div>

        <ProductInfo product={product} />
      </div>
    </div>
  );
};

export default ProductPage;

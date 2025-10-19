import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const CustomerReviews = () => {
  const [activeReview, setActiveReview] = useState(0);

  const most_recent = [
    {
      name: "Priyanka",
      text: "I have had compliments on my perfume. Every time I hug someone they tell me I smell amazing! They all want to get their own now.",
      image: "/images/ai_girls_3.png",
      rating: 5,
    },
    {
      name: "Ananya",
      text: "I am a very introvert person but this perfume has made so many conversation starter from other end. Makes me feel more confident while socializing for sure.",
      image: "/images/ai_girl_2.jpg",
      rating: 5,
    },
    {
      name: "Riya",
      text: "Kaafi acha product hai yeh, really loved the quality from Kiara. Been a repeat buyer 4 times now.",
      image: "/images/ai_girl.jpg",
      rating: 5,
    },
  ];
  const Highest_Rating = [
    {
      name: "Sanya Kapoor",
      title: "Soft, elegant, and noticed",
      review:
        "This perfume doesn't scream for attention, but somehow it makes me more memorable. I've had friends comment on how good I smell and even strangers compliment me. I love it!",
      rating: 5,
    },
    {
      name: "Anjali Mehta",
      title: "Feels so natural and confident",
      review:
        "The scent is soft, not overpowering, but somehow people just notice me more. I feel more confident and noticed without trying too hard. Definitely my new go-to perfume.",
      rating: 5,
    },
    {
      name: "Meera Reddy",
      title: "A little magic in a bottle",
      review:
        "Kiara's Venom™ feels like it adds a little magic to my presence. I feel confident, people respond differently around me, and it smells amazing. Can't recommend it enough.",
      rating: 5,
    },
    {
      name: "Shruti Deshmukh",
      title: "Feels exclusive and premium",
      review:
        "The moment I opened the bottle, it felt premium. But it's not just the packaging — the scent and aura effect are amazing. People notice me without me doing anything special. Love this perfume!",
      rating: 5,
    },
    {
      name: "Divya Kulkarni",
      title: "My new favorite perfume",
      review:
        "I've never felt a perfume work like this. Kiara's Venom™ makes me feel elegant, confident, and noticed in a very subtle way. I've already bought a second bottle!",
      rating: 5,
    },
    {
      name: "Ishita Rao",
      title: "Subtle but effective",
      review:
        "Kiara's Venom™ doesn't overpower you, which I love. But somehow, it makes people take notice. Compliments have increased and I feel more confident. Totally recommend trying it.",
      rating: 5,
    },
    {
      name: "Rekha Choudhary",
      title: "Love the way it makes me feel",
      review:
        "Wearing Kiara's Venom™ makes me feel elegant and self-assured. It's amazing how a small bottle can make such a big difference.",
      rating: 5,
    },
    {
      name: "Pooja Agarwal",
      title: "Feels like it was made for me",
      review:
        "This perfume feels like it was custom-made for me. I get compliments daily and it lifts my mood instantly. Can't go a day without it now.",
      rating: 5,
    },
    {
      name: "Madhuri Joshi",
      title: "My confidence has skyrocketed",
      review:
        "I never thought a perfume could actually change how I feel. Kiara's Venom™ has boosted my confidence and I feel more attractive and noticed than ever.",
      rating: 5,
    },
    {
      name: "Sheetal Patil",
      title: "Soft scent, big impact",
      review:
        "The scent is soft and not overpowering, but it leaves a strong impression. I love how people respond around me now.",
      rating: 5,
    },
  ];

  const Lowest_Rating = [
    {
      name: "Radhika Iyer",
      title: "Worth every rupee",
      review:
        "I was skeptical at first, but after a week of wearing Kiara’s Venom™, I noticed a difference in how people reacted. It’s subtle, classy, and makes me feel attractive in a really natural way. Totally worth buying.",
      rating: 4,
    },
    {
      name: "Nisha Verma",
      title: "I feel confident wearing this",
      review:
        "This perfume makes me feel like a new version of myself — more confident, more presentable, and noticed in a natural way. Friends have asked me what I’m wearing. Really happy with it.",
      rating: 4,
    },
    {
      name: "Kavya Nair",
      title: "Not like any perfume I’ve tried",
      review:
        "I’ve worn perfumes for years, but none gave me the kind of attention I get with Kiara’s Venom™. It’s subtle but effective — like it works on an invisible level. Very impressed.",
      rating: 4,
    },
    {
      name: "Geeta Rao",
      title: "Impressed beyond words",
      review:
        "I wasn’t sure at first, but now I’m completely impressed. The perfume smells amazing and I feel noticed without even trying.",
      rating: 4,
    },
    {
      name: "Rashmi Agarwal",
      title: "Friends keep asking me my secret",
      review:
        "Friends keep asking me what I’m using because they notice the difference immediately. Love it!",
      rating: 4,
    },
  ];

  return (
    <div className="my-8 w-full">
      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeReview * 100}%)` }}
        >
          {most_recent.map((review, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <div className="flex flex-row items-start gap-4 w-full">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2 flex-1 w-0">
                  <p className="text-[15px] leading-[1.6] text-gray-900">
                    {review.text}
                  </p>
                  <div className="flex flex-row items-center gap-2">
                    <span className="text-sm font-semibold text-gray-600 italic">
                      {review.name}
                    </span>
                    <div className="flex gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={12}
                          className="text-[#800000] fill-[#800000]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-4">
        {/* Left Arrow */}
        <button
          onClick={() =>
            setActiveReview(
              activeReview > 0 ? activeReview - 1 : most_recent.length - 1
            )
          }
          className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-200"
          aria-label="Previous review"
        >
          <ChevronLeft className="w-4 h-4 text-gray-600" />
        </button>

        {/* Navigation Dots */}
        <div className="flex gap-2">
          {most_recent.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full border-none cursor-pointer p-0 transition-all duration-300 ${
                activeReview === index
                  ? "bg-black w-6"
                  : "bg-gray-300 w-2 hover:bg-gray-400"
              }`}
              onClick={() => setActiveReview(index)}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() =>
            setActiveReview(
              activeReview < most_recent.length - 1 ? activeReview + 1 : 0
            )
          }
          className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-200"
          aria-label="Next review"
        >
          <ChevronRight className="w-4 h-4 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default CustomerReviews;

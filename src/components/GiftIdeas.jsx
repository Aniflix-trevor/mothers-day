import React from "react";

const gifts = [
  "💐 A bouquet of her favorite flowers",
  "📖 A handmade card",
  "🍽️ Breakfast in bed",
  "🧖‍♀️ Spa day at home",
  "👩‍👧‍👦 Quality time together",
];

const GiftIdeas = () => (
  <section className="gift-ideas">
    <h2>Gift Ideas</h2>
    <ul>
      {gifts.map((gift, index) => (
        <li key={index}>{gift}</li>
      ))}
    </ul>
  </section>
);

export default GiftIdeas;

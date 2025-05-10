import { useState } from 'react';
import Card from './components/Card';
import Hero from './components/Hero';
import './App.css';

function App() {
  return (
    <>
      <Hero />
      <div className="card-container">
        <Card 
          title="Happy Mother's Day!" 
          image="path/to/mothers-day-image.jpg" 
          description="Celebrate the love and care of mothers everywhere."
        />
        <Card 
          title="Gift Ideas" 
          image="path/to/gift-ideas-image.jpg" 
          description="Explore thoughtful gifts to show your appreciation."
        />
        <Card 
          title="Mother's Day Quotes" 
          image="path/to/quotes-image.jpg" 
          description="Find inspiration with beautiful quotes for mothers."
        />
      </div>
    </>
  );
}

export default App;
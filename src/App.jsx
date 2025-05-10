// import React from "react";
// import "./index.css";
// import Header from "./components/Header";
// import GiftIdeas from "./components/GiftIdeas";
// import TributeForm from "./components/TributeForm";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <GiftIdeas />
//       <TributeForm />
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import "./App.css";

const messages = [
  "You're my hero, Mom! 💖",
  "Thanks for always being there. 🌸",
  "Love you more than words can say! 💕",
  "You're simply the best! 🏆",
];

function App() {
  const [message, setMessage] = useState("");

  const showMessage = () => {
    const random = messages[Math.floor(Math.random() * messages.length)];
    setMessage(random);
  };

  return (
    <div className="container">
      <h1>Happy Mother’s Day! 💐</h1>
      <div className="video-container">
        <video width="700" height="416" controls>
          <source src="./public/music/mom-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <p className="message">
        Mom, thank you for your love, your hugs, your wisdom, and every
        sacrifice you’ve made. You are my heart, my strength, and my
        inspiration. This is for you. 💗
      </p>
      <p className="message">Click this button to see a special message:</p>
      <button onClick={showMessage}>Thank You, Mom!</button>
      {message && <p className="appreciation">{message}</p>}
      {/* <audio controls className="audio">
        <source src="/voice-message.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio> */}
      <footer>
        With love from: <strong>Cheru, Ashleigh, Amani, Kathambi, Amalia 💞</strong>
      </footer>
    </div>
  );
}

export default App;


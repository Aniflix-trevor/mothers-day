import React, { useState } from "react";

const TributeForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [tributes, setTributes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !message) return;
    setTributes([...tributes, { name, message }]);
    setName("");
    setMessage("");
  };

  return (
    <section className="tribute-form">
      <h2>Leave a Tribute</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div className="tributes">
        {tributes.map((t, i) => (
          <blockquote key={i}>
            “{t.message}” — <strong>{t.name}</strong>
          </blockquote>
        ))}
      </div>
    </section>
  );
};

export default TributeForm;

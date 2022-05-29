import "../styles/Ai.css";
import React, { useEffect, useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import Hand from "../assets/images/hand.png";

const Ai = () => {
  const [status, setStatus] = useState("Ask me");
  const [prompt, setPrompt] = useState("");
  const [newPrompt, setNewPrompt] = useState("");

  const [result, setResult] = useState("");
  const [isResultActive, setIsResultActive] = useState(false);

  useEffect(() => {
    if (result) {
      setNewPrompt(prompt);
    }
  }, [result]);

  const onSubmit = (e) => {
    e.preventDefault();

    const configuration = new Configuration({
      apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });
    setStatus("Thinking...");
    const openai = new OpenAIApi(configuration);

    openai
      .createCompletion("text-curie-001", {
        prompt: prompt,
        temperature: 0.7,
        max_tokens: 200,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      })
      .then((response) => {
        setIsResultActive(true);
        setPrompt(prompt);
        setResult(response.data.choices[0].text.trim());
        setStatus("ASK ME AGAIN)");
        setPrompt("");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <section className="section ai" id="ai">
      <div className="container">
        <h1 className="section-title">Crystal Ball</h1>
        <p className="ai__question">A.I. technology or Witchcraft?</p>
        <form className="ai__form" onSubmit={onSubmit}>
          <div className="ai__examples">
            <h2 className="ai__examples-title">
              Here are some suggestions for what to ask for:
            </h2>
            <ul>
              <li className="ai__examples-item">
                Suggest a drama movie based on a true story with a good score on
                the rotten tomatoes website.
              </li>
              <li className="ai__examples-item">
                I need a gift suggestion for my wife. She is 35 years old and
                loves to work out and challenge herself.{" "}
              </li>
              <li className="ai__examples-item">
                Give me 3 suggestions of animation movies.
              </li>
              <li className="ai__examples-item">
                Correct this to standard English: She no went to the market.
              </li>
              <li className="ai__examples-item">
                Write a recipe based on these ingredients: meat, cheddar cheese,
                onions, sour cream, and rice.
              </li>
            </ul>
          </div>
          <div>
            <img
              src={Hand}
              style={{ transform: "scaleX(-1)" }}
              alt="hand over crystal ball"
            />
            <img src={Hand} alt="hand over crystal ball" />
          </div>
          <textarea
            className="ai__textarea"
            type="text"
            name="prompt"
            placeholder="Ask me anything, but at your own risk."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            required
          />
          <button
            className="btn btn--third-color ai__button"
            type="submit"
            style={{
              backgroundColor:
                status === "Thinking..."
                  ? "var(--dark-color)"
                  : "var(--third-color)",
            }}
          >
            {status}
          </button>
        </form>

        <ul
          className="result"
          style={{ display: isResultActive ? "flex" : "none" }}
        >
          <li className="result__item">
            <div className="result__wrapper">
              <h4 className="result__title">Your question:</h4>
              <p className="result__text">{newPrompt}</p>
            </div>
            <div className="result__wrapper">
              <h4 className="result__title">My wisdow:</h4>
              <p className="result__text">{result}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Ai;

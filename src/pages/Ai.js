import React, { useEffect, useRef, useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import "../styles/Ai.css";

const Ai = () => {
  const [status, setStatus] = useState("Get your suggestion");
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const textAreaRef = useRef(null);

  useEffect(() => {
    textAreaRef.current.focus();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const configuration = new Configuration({
      apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });
    setStatus("THINKING...");
    const openai = new OpenAIApi(configuration);

    openai
      .createCompletion("text-curie-001", {
        prompt: prompt,
        temperature: 1,
        max_tokens: 200,
        top_p: 1,
        frequency_penalty: 0.5,
        presence_penalty: 0.5,
      })
      .then((response) => {
        setPrompt(prompt);
        setResult(response.data.choices[0].text.trim());
        setStatus("Try more suggestions :)");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <section className="section ai" id="ai">
      <div className="container">
        <h1 className="section-title">TV Suggestion Helper</h1>
        <p className="ai__question">
          Can't you figure out what to watch on TV? Ask me.
        </p>
        <form onSubmit={onSubmit}>
          <div className="ai__examples">
            <h2 className="ai__examples-title">Check out some examples:</h2>
            <ul>
              <li className="ai__examples-item">
                Suggest a drama movie based on a true story with a good score on
                the rotten tomatoes website.
              </li>
              <li className="ai__examples-item">
                What Brazilian comedy shows can I watch on Netflix today?
              </li>
              <li className="ai__examples-item">
                Give me 3 suggestions of animation movies.
              </li>
              <li className="ai__examples-item">
                What's the best thriller series available on Prime in Canada?
              </li>
            </ul>
          </div>
          <textarea
            ref={textAreaRef}
            type="text"
            name="prompt"
            placeholder="Give me a good suggestion of..."
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

        <ul className="result">
          <li className="result__item">
            <div className="result__wrapper">
              <h4 className="result__title">Your question:</h4>
              <p className="result__text">{prompt}</p>
            </div>
            <div className="result__wrapper">
              <h4 className="result__title">My Suggestion:</h4>
              <p className="result__text">{result}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Ai;

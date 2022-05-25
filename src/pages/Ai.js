import "../styles/Api.css";
import React, { useEffect, useRef, useState } from "react";
import { Configuration, OpenAIApi } from "openai";
// import { v4 as uuidv4 } from "uuid";

const Ai = () => {
  const [status, setStatus] = useState("Get your suggestion");
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  // const [id, setId] = useState("");
  // const [content, setContent] = useState([]);
  // const [engine, setEngine] = useState("text-curie-001");
  // const [isActive, setIsActive] = useState(false);
  const textAreaRef = useRef(null);

  useEffect(() => {
    textAreaRef.current.focus();
  }, []);

  // useEffect(() => {
  //   if (result) {
  //     const newResult = {
  //       id: id,
  //       prompt: prompt,
  //       result: result,
  //     };

  //     const updatedContent = [...content, newResult];
  //     setContent(updatedContent);
  //     setPrompt("");
  //   }
  // }, [result]);

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
        // setId(uuidv4());
        setPrompt(prompt);
        setResult(response.data.choices[0].text.trim());
        setStatus("Wow! I want more suggestions :)");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <>
      <div className="container-api"></div>
      <section className="section-api">
        <div className="container">
          <p className="question">Can't you figure out what to watch on TV?</p>
          <h1 className="title">TV Suggestion Helper</h1>

          <form onSubmit={onSubmit}>
            <div className="examples">
              <h2 className="examples__title">Check out some examples:</h2>
              <ul>
                <li className="examples__item">
                  Suggest a drama movie based on a true story with a good score
                  on the rotten tomatoes website.
                </li>
                <li className="examples__item">
                  What Brazilian comedy shows can I watch on Netflix today?
                </li>
                <li className="examples__item">
                  Give me 3 suggestions of animation movies.
                </li>
                <li className="examples__item">
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

            <div className="select-and-button">
              {/* <button
                  className="engine-icon"
                  onClick={() => setIsActive(!isActive)}
                >
                  <img src={QuestionMark} alt="question mark icon" />
                </button>
                <label htmlFor="engine">A.I. engine:</label>
                <select
                  name="engine"
                  className="select"
                  value={engine}
                  onChange={(e) => setEngine(e.target.value)}
                >
                  <option value="text-davinci-002">Davinci</option>
                  <option value="text-curie-001" defaultChecked>
                    Curie
                  </option>
                  <option value="text-babbage-001">Babbage</option>
                  <option value="text-ada-001">Ada</option>
                </select> */}

              <button
                className="btn btn--color"
                type="submit"
                style={{
                  backgroundColor:
                    status === "Thinking..."
                      ? "var(--color-dark)"
                      : "var(--color-third)",
                }}
              >
                {status}
              </button>

              {/* <ul
                  className="modal"
                  style={{ display: isActive ? "flex" : "none" }}
                >
                  <li className="modal__title">
                    Choose an engine based on its characteristics:
                  </li>
                  <li className="modal__engine">
                    <h3 className="modal__engine-title">Davinci</h3>
                    <p className="modal__engine-description">
                      {" "}
                      Most capable engine. Can do any task the other models can
                      do, often with less context.
                    </p>
                  </li>
                  <li className="modal__engine">
                    <h3 className="modal__engine-title">Curie</h3>
                    <p className="modal__engine-description">
                      Very capable, but faster!
                    </p>
                  </li>
                  <li className="modal__engine">
                    <h3 className="modal__engine-title">Babbage</h3>
                    <p className="modal__engine-description">
                      Capable of straightforward tasks and very fast.
                    </p>
                  </li>
                  <li className="modal__engine">
                    <h3 className="modal__engine-title">Ada</h3>
                    <p className="modal__engine-description">
                      Capable of very simple tasks, usually the fastest model in
                      the GPT-3 series.
                    </p>
                  </li>
                </ul> */}
            </div>
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

          {/* <ul className="result">
            {content.map(({ id, prompt, result }) => (
              <li className="result__item" key={id}>
                <div className="result__wrapper">
                  <h4 className="result__title">Your question:</h4>
                  <p className="result__text">{prompt}</p>
                </div>
                <div className="result__wrapper">
                  <h4 className="result__title">My Suggestion:</h4>
                  <p className="result__text">{result}</p>
                </div>
              </li>
            ))}
          </ul> */}
        </div>
      </section>
    </>
  );
};

export default Ai;

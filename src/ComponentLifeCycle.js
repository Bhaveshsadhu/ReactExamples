import { useState } from "react";

export const ComponentLifeCycle = () => {
  const [counter, setCounter] = useState(10);
  return (
    <>
      <div
        style={{
          textAlign: "center",
          marginTop: "30px",
          maxWidth: "800px",
          margin: "auto",
        }}
      >
        <h1>Component Lifecycle Example</h1>
        <a href="/ComponentLifeCycle">Component Life Cycle</a>

        {/* Counter with buttons */}
        <h2>Counter: {counter}</h2>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => setCounter(counter - 1)}>-</button>

        {/* Explanation Section */}

        <div
          style={{
            textAlign: "left",
            marginTop: "40px",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            background: "#f9f9f9",
          }}
        >
          <pre
            style={{
              background: "#222",
              color: "#fff",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            {`const [counter, setCounter] = useState(10);
            <h1>Component Lifecycle Example</h1>

        {/* Counter with buttons */}
        <h2>Counter: {counter}</h2>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => setCounter(counter - 1)}>-</button>`}
          </pre>
          <h2>Component Lifecycle:</h2>
          <p>1. It will render the component.</p>
          <p>
            2. When it sees any change (like updating props or state), it will
            re-render JSX again.
          </p>
          <p>
            👉 Example: Clicking the button will trigger a re-render every time.
          </p>

          <h3>⚠️ Important Note:</h3>
          <p>
            Do not call a function **directly** inside JSX (e.g., `onClick=
            decrement()`) because it will cause an **infinite loop**.
          </p>
          <p>
            The reason is that React re-renders JSX every time the component
            updates, causing the function to be executed repeatedly.
          </p>

          <h3>❌ Incorrect Code (Causes Infinite Loop):</h3>
          <pre
            style={{
              background: "#222",
              color: "#fff",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            {`<button onClick={decrement()}>-</button>`}
          </pre>

          <h3>✅ Correct Code:</h3>
          <pre
            style={{
              background: "#222",
              color: "#fff",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            {`<button onClick={decrement}>-</button>`}
          </pre>

          <h3>🎯 Shorter Way to Write the Same Code:</h3>
          <pre
            style={{
              background: "#222",
              color: "#fff",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            {`<button onClick={() => setCounter(counter + 1)}>+</button>`}
            {`\n<button onClick={() => setCounter(counter - 1)}>-</button>`}
          </pre>
        </div>
      </div>
    </>
  );
};

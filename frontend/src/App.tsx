import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  const checkBackend = async () => {
    try {
      const response = await fetch("http://localhost:8081/");
      const data = await response.text();

      setMessage(data);
    } catch {
      setMessage("Could not connect to the backend.");
    }
  };

  return (
    <div>
      <h1>Society Management System</h1>

      <button onClick={checkBackend}>
        Check Backend
      </button>

      <p>{message}</p>
    </div>
  );
}

export default App;
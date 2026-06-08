import { useState } from "react";
import axios from "axios";

function UrlForm() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");

  const submit = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/shorten",
        {
          originalUrl: url,
        }
      );

      setResult(res.data.shortCode);
    } catch (err) {
      console.error(err);
      alert("Backend Error");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL"
      />

      <button onClick={submit}>Shorten</button>

      <p>{result}</p>
    </div>
  );
}

export default UrlForm;
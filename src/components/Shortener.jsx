import axios from "axios";
import React from "react";
import { useState } from "react";

function Shortener() {
  const [gurl, setGurl] = useState("hi there");
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
    fetchUrl();
    console.log("fetching url");
  };

  const fetchUrl = async () => {
    try {
      console.log("trying");
      let temp = "https://api.shrtco.de/v2/shorten?url=" + input;
      let res = await axios(temp);
      setGurl(res.data.result.full_short_link);
    } catch (err) {
    } finally {
    }
  };

  return (
    <div>
      <h1>Hi everyone</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="url"
          value={input}
          onChange={(input) => setInput(input.target.value)}
        />
        <button type="submit" name="submit" className="bg-slate-500">
          Shorten it!
        </button>
      </form>
      <h2>{gurl}</h2>
    </div>
  );
}

export default Shortener;

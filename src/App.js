import "./App.css";
import Search from "./components/Search";
import Line from "./components/Line";
import Footer from "./components/Footer";

import { useState } from "react";

import emojis from "../src/assets/json/emojis.json";

function App() {
  const [search, setSearch] = useState("");

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearch(value);
  };

  return (
    <div className="App">
      <Search search={search} handleSearchChange={handleSearchChange} />
      {emojis.map((item, index) => {
        return (
          <Line
            key={index}
            symbol={item.symbol}
            title={item.title}
            keywords={item.keywords}
            search={search}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;

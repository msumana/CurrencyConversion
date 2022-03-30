import React, { useState } from "react";
import { convertAmount } from "./CurrencyConvertion";
import useFetch from "./useFetch";

/* currency conversion presentation */
const CurrencyConvert = (props) => {
  const base_url = "https://open.er-api.com/v6/latest/";
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("INR");
  const [to, setTo] = useState("USD");

  /* Calling custom fetch */
  const [post] = useFetch(base_url+`${from}`);
  /* var rate = post.data.rates[to]; */
  const [result, setResult] = useState(0)

  /* calculate conversion rate */
  function currencyConversion() {
    var rate = post.data.rates[to];
    const newResult = convertAmount(rate,amount)
    setResult(newResult)
  }

  return (
    <div>
      <div>
        <label>
          Amount:{" "}
          <input type="text" onChange={(e) => setAmount(e.target.value)} required />{" "}
        </label>
      </div>

      <div>
        <label>
          From:{" "}
          <input
            type="text"
            placeholder={from}
            onChange={(e) => setFrom(e.target.value)
            }
            required
          />{" "}
        </label>
      </div>

      <div>
        <label>
          To:{" "}
          <input
            type="text"
            placeholder={to}
            onChange={(e) => setTo(e.target.value)}
            required
          />{" "}
        </label>
      </div>
      <div>
        <button onClick={currencyConversion}>Convert</button>
      </div>

      <div>
        <h1>
          Conversion rate:{" "}
          {amount + " " + from + " = " + result.toFixed(3) + " " + to}{" "}
        </h1>
      </div>
    </div>
  );
};

export default CurrencyConvert;

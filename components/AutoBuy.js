import React from "react";
import { useState } from "react";
import NextCors from 'nextjs-cors';

export default function AutoBuy() {
  const [bearToken, setBearToken] = useState("");

  async function addItemToCart() {
    const data = {
      paymentPlan: "NORMAL",
      productId: "1711",
      quantity: 2,
      stockId: "6949",
      subscriptionCycle: 1,
    };
    const url = "https://12amber01.c2cbuy.com/api/cart/items";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: bearToken,
      },
      body: JSON.stringify(data),
    });
  }

  async function getPrime() {
    const url =
      "api/getPrime"
    const response = await fetch(url, {
      method: "POST",
    })
  }

  async function start() {
    await addItemToCart()
    await getPrime()
  }

  return (
    <div className="flex flex-col">
      <div>
        <label htmlFor="bear_token">Bear token</label>
        <input
          type="text"
          id="bear_token"
          className="border-2 px-2 mx-2 rounded-lg focus:outline-none py-1"
          onChange={(e) => {
            setBearToken(e.target.value);
          }}
        />
      </div>
      <button onClick={getPrime} className="mt-4 border-2 px-2 hover:bg-slate-200 rounded-lg">Start</button>
    </div>
  );
}

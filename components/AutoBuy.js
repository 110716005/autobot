import React from "react";
import { useState } from "react";
import NextCors from 'nextjs-cors';

export default function AutoBuy() {
  const [bearToken, setBearToken] = useState("");

  async function addItemToCart() {
    const data = {
      paymentPlan: "NORMAL",
      productId: "1711",
      quantity: 1,
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
    }).then(res => res.json()).then(async data => {
        const url = 'https://12amber01.c2cbuy.com/api/checkout'
        const prime = data['prime']
        const payload = {
            "recipient": {
                "name": "陳詩儀",
                "phoneCountry": "+886",
                "phone": "0929391201",
                "city": "台北市",
                "district": "士林區",
                "postalCode": "111",
                "address": "忠誠路二24號2樓",
                "shippingStoreId": "",
                "shippingStoreName": "",
                "shippingStoreAddress": ""
            },
            "shipping": {
                "shippingMethodId": 1,
                "ifOpenCashOnDelivery": false
            },
            "payment": {
                "paymentMethodId": 7,
                "prime": prime
            },
            "couponId": "",
            "remark": "",
            "invoice": {
                "uniformNumber": "",
                "companyTitle": ""
            },
            "ifSaveCheckoutInfo": false,
            "useCheckoutInfoId": null,
            "isForeign": false,
            "checkoutFrontendRedirectPath": "/checkout-complete",
            "isForOpenedStore": false,
            "items": [
                {
                    "paymentPlan": "NORMAL",
                    "quantity": 2,
                    "stockId": 6949,
                    "subscriptionCycle": 1
                }
            ],
            "cartItemIds": [
                "2312242"
            ]
        }
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'authorization': bearToken,
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
                'referer': 'https://12amber01.c2cbuy.com/checkout',
                'content-type': 'application/json',
            },
            body: JSON.stringify(payload),
        }).then(resp => resp.json()).then(data => {
            const redirectUrl = data['data']['paymentUrl']
            window.open(redirectUrl);
        })
    });
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
      <button onClick={start} className="mt-4 border-2 px-2 hover:bg-slate-200 rounded-lg">Start</button>
    </div>
  );
}

import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
}

async function getPrime() {
    const data = {
        app_id: "19357",
        app_key: "app_wYXHfg6byzN4Y7jpjmvvx8SOhmcRsNU6tg5cRRcDg4gWc6sNUrYWdh0mlsdO",
        app_name: "12amber01.c2cbuy.com",
        platform_type: 1,
        tappay_sdk_version: "v5.14.0",
    };
    const url =
        "https://js.tappaysdk.com/payment/line-pay/production/get-prime"
    const response = await fetch(url, {
        method: "POST",
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
            "Content-Length": "207",
            'Connection': "keep-alive",
            "Access-Control-Allow-Origin": 'https://js.tappaysdk.com',
            "x-api-key": "app_wYXHfg6byzN4Y7jpjmvvx8SOhmcRsNU6tg5cRRcDg4gWc6sNUrYWdh0mlsdO",
            'Access-Control-Allow-Methods': 'POST'
            //'Referer': 'https://js.tappaysdk.com/sdk/tpdirect/api/html/v5.14.0?%7B%22appKey%22%3A%22app_wYXHfg6byzN4Y7jpjmvvx8SOhmcRsNU6tg5cRRcDg4gWc6sNUrYWdh0mlsdO%22%2C%22appID%22%3A%2219357%22%2C%22serverType%22%3A%22production%22%2C%22hostname%22%3A%2212amber01.c2cbuy.com%22%2C%22origin%22%3A%22https%3A%2F%2F12amber01.c2cbuy.com%22%2C%22referrer%22%3A%22%22%2C%22href%22%3A%22https%3A%2F%2F12amber01.c2cbuy.com%2Fcheckout%22%2C%22port%22%3A%22%22%2C%22protocol%22%3A%22https%3A%22%2C%22sdk_version%22%3A%22v5.14.0%22%2C%22mode%22%3A%22production%22%7D'
        },
        body: JSON.stringify(data),
    })
    return response.json()
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if(req.method === 'POST') {
        getPrime().then(data => {
            res.status(200).json(data)
        });
    }
    res.status(500)
}

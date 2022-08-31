export const ticker = {
    "ticker": "AAPL",
    "exchange": "NASDAQ",
    "price": 279.29,
    "change": 64.52,
    "change_percent": 0.84,
    "dividend": 0.56,
    "yield": 1.34,
    "last_trade_time": "2021-04-30T11:53:21.000Z"
}

export const tickersHistoryDown = [
    [ticker],
    [
        {
            "ticker": "AAPL",
            "exchange": "NASDAQ",
            "price": 290.29,
            "change": 50.52,
            "change_percent": 0.24,
            "dividend": 0.36,
            "yield": 1.24,
            "last_trade_time": "2021-04-30T11:53:26.000Z"
        }
    ]
]

export const tickersHistoryUp = [
    [ticker],
    [
        {
            "ticker": "AAPL",
            "exchange": "NASDAQ",
            "price": 210.29,
            "change": 50.52,
            "change_percent": 0.24,
            "dividend": 0.36,
            "yield": 1.24,
            "last_trade_time": "2021-04-30T11:53:26.000Z"
        }
    ]
]

export const tickers = {
    tickers: [ticker],
    error: ""
}

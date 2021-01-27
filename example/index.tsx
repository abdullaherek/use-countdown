import "react-app-polyfill/ie11"

import * as React from "react"
import * as ReactDOM from "react-dom"

import useCountdown from "../."

const App = () => {
    const countdown = useCountdown({seconds: 10})
    console.log(countdown)

    const minutes = countdown.minutes.toString().padStart(2, "0")
    const seconds = countdown.seconds.toString().padStart(2, "0")

    const time = `${minutes}:${seconds}`

    return (
        <>
            <h1>⏳ useCountdown hook</h1>
            <h2>{time}</h2>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))

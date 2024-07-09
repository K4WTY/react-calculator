import { Buttons } from "./components/Buttons"
import { Result } from "./components/Result"
import { useState } from "react"
import "./assets/css/app.css"

export function App() {
    const [result, setResult] = useState("0")

    const calculate = (elementId) => {
        const value = document.getElementById(elementId).value
        
        if (result == 0 && value != "DEL" && value != "RESET" && value != "=") {
            setResult(value)
            return
        }
    
        if (value == "DEL") {
            if (result.length == 1) {
                setResult("0")
                return
            }

            const newResult = result.substring(0, result.length - 1)
            setResult(newResult)
            return
        }

        if (value == "RESET") {
            setResult("0")
            return
        }

        if (value == "=") {
            try {
                setResult(eval(result))
            } catch(error) {
                alert(error)
                setResult("0")
            }
            return
        }

        setResult(result + value)

    }

    const buttonsValue = ["7", "8", "9", "DEL", "4", "5", "6", "+", "1", "2", "3", "-", ".", "0", "/", "*", "RESET", "="]

    return (
        <div className="container">
            <div className="calculator">
                <div className="top">
                    <Result value={ result } />
                </div>
                <div className="down">
                    {buttonsValue.map((value) => {
                        return (
                            <Buttons key={ value } value={ value } calculate={ calculate } />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
import { useState } from "react"

const TesteState = () => {

    const [increment, setIncrement] = useState(0);

    const IncrementButton = () => {
        setIncrement(increment + 1);
    }

    return (
        <>
            <h1>Valor: { increment }</h1>
            <button onClick={IncrementButton}>Somar ao valor</button>
        </>
    )
}

export default TesteState

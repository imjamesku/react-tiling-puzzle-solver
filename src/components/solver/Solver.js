import React, { useState } from 'react'
import { solve, test } from '../../solver/solver'
import ImportFromFileBodyComponent from '../fileReader/ImportFromFileBodyComponent'
import './Solver.css'

export const Solver = () => {
    const [input, setInput] = useState('')
    return (
        <div>
            <h1>Tiling Puzzle Solver</h1>
            <button onClick={() => test(setInput)}>map1</button>
            <ImportFromFileBodyComponent setInput={setInput} />
            <button onClick={() => solve(input)}>Solve</button>
            <h2>Input</h2>
            <div className="display-linebreak">
                {input}
            </div>
        </div>
    )
}

export default Solver
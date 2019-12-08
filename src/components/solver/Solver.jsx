import React, { useState, useEffect } from 'react'
import { solve, getBoard } from '../../solver/solver'
import ImportFromFileBodyComponent from '../fileReader/ImportFromFileBodyComponent'
import Square from './square/Square'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Spinner from '../layout/Spinner/Spinner'
import './Solver.css'

export const Solver = () => {
    const [input, setInput] = useState('')
    const [solutions, setSolutions] = useState([])
    const [grid, setGrid] = useState([[]])
    const [solving, setSolving] = useState(false)
    const boards = [
        'checkerboard',
        'IQ_creator',
        'lucky13',
        // 'new',
        'pentominoes3x20',
        'pentominoes4x15',
        'pentominoes5x12',
        'pentominoes6x10',
        // 'pentominoes8x8_middle_missing',
        // 'test1',
        // 'test2',
        // 'thirteen_holes',
        'trivial',
        'trivial2']

    const getSolutions = () => {
        if (input !== '') {
            setSolving(true)
        }
        else {
            window.alert("Please select a board")
        }
    }

    useEffect(() => {
        if (solving) {
            const s = solve(input)
            setSolutions(s)
            setGrid(s[0])
            setSolving(false)
        }
    }, [solving])

    const loadDefaultBoards = async name => {
        console.log(name)
        const board = await getBoard(name)
        console.log(board)
        setInput(board)
        setGrid([[]])
    }
    return (
        <Container maxWidth="md" style={{ paddingBottom: '10px' }}>

            <h1>Tiling Puzzle Solver</h1>
            <p>Select a default board or an input file. Larger boards may take longer to solve.</p>
            <h2>default maps</h2>
            {boards.map(name => <Box m={0.2} clone>
                <Button variant="outlined" color="primary" onClick={() => loadDefaultBoards(name)} >{name}</Button>
            </Box>)}

            <h2>Load Board</h2>
            <ImportFromFileBodyComponent setInput={setInput} />

            <Button style={{ marginTop: '8px' }} variant="contained" color="primary" m={100} onClick={getSolutions}>Solve</Button>

            <h2>Input</h2>
            <div className="display-linebreak">
                {input}
            </div>
            <h2>Solution</h2>
            {solving === true ? <Spinner></Spinner> : null}
            <div style={{ width: String(25 * grid[0].length) + 'px' }}>
                {grid.map((row, rowIdx) => {
                    return row.map((square, squareIdx) => {
                        return (
                            <Square color={square} />
                        )
                    })

                })}
            </div>

        </Container>
    )
}

export default Solver
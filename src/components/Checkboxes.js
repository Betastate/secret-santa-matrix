import React, { useState, useEffect } from "react";


export default function Checkboxes({ people }) {
    const [matrix, setMatrix] = useState();

    const init = () => {
        const fullMatrix = Array.from({ length: people.length }, () =>
            Array.from({ length: people.length }, () => false)
        );

        for (let y = 0; y < fullMatrix.length; y++) {
            for (let x = 0; x < fullMatrix.length; x++) {
                fullMatrix[y][x] = false;
            }
        }

        for (let i = 0; i < fullMatrix.length; i++) {
            fullMatrix[i][i] = null;
        }

        setMatrix(fullMatrix)
    }

    const check = (y, x, value) => {
        setMatrix(prev =>
            prev.map((row, rowIndex) =>
                rowIndex === y
                    ? row.map((cell, colIndex) =>
                        colIndex === x ? value : cell
                    )
                    : row
            )
        );
    };

    const fullCheck = (y, x) => {
        if (matrix[y][x] === false) {
            for (let top = y + 1; top < people.length; top++) {
                console.log(top)
                check(top, x, null);
                // if (matrix[top, x] === false) {
                // }
            }
            for (let cursorX = 0; cursorX < people.length; cursorX++) {
                check(y, cursorX, null);
            }
            check(y, x, true)
        }
    }


    useEffect(() => {
        init()
    }, [])


    return <>
        <button onClick={init}>reset</button>
        <div style={{ display: "flex", justifyContent: "center" }}>
            <table>
                <thead>
                    <tr>
                        <th key={0}>*</th>
                        {people.map(person => <th key={person}>{person}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {matrix && matrix.map((row, colIndex) => <tr className="row" key={`row-${people[colIndex]}`}>
                        <td>{people[colIndex]}</td>
                        {row.map((cell, rowIndex) => <td key={`row-${people[rowIndex]}`}><input type="checkbox" onClick={() => { fullCheck(colIndex, rowIndex, true) }} disabled={cell === null} checked={cell ? true : false} /></td>)}
                    </tr>)}
                </tbody>
            </table>
        </div>
    </>;
}
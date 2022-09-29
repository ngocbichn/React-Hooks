import React, { useState } from 'react'

const UseState = () => {
    const [state, setState] = useState({ name: 'Bich' })
    // console.log(state)
    const [number, setNumber] = useState(1)

    return (
        <div>
            UseState name:{state.name}
            <div>
                <button
                    className='btn btn-success'
                    onClick={() => {
                        setState({
                            name: 'Nick',
                        })
                    }}
                >Change name</button>
            </div>
            <div>
                <p className='fs-1'>number:{number}</p>
                <div>
                    <button
                        className='btn btn-danger'
                        onClick={() => {
                            setNumber(number - 1)
                        }}
                    >Decrease</button>
                    <button
                        className='btn btn-warning'
                        onClick={() => {
                            setNumber(number + 1)
                        }}
                    >Increase</button>
                </div>
            </div>
        </div>
    )
}

export default UseState
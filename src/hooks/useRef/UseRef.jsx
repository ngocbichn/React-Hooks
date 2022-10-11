import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
    const [state, setState] = useState(0)
    //useRef does not make component rerender
    const inputRef = useRef(null)
    const valueRef = useRef(0)
    const obj = {
        current: 1,
    }
    console.log('valueRef', valueRef.current)
    console.log('obj', obj.current)

    useEffect(() => {
        valueRef.current = state
    }, [state])

    return (
        <div>
            <p>UseRef</p>
            <p>state: {state}</p>
            <div>
                {/* get value from input without dom */}
                <input className='form-control' type='text' ref={inputRef} />
                <button
                    className='btn btn-success'
                    onClick={() => {
                        // alert(inputRef.current.value) 
                        setState((state) => state + 1)
                        obj.current = obj.current + 1
                        // valueRef.current = valueRef.current + 1
                    }}
                >Get input value</button>
            </div>
        </div>
    )
}

export default UseRef
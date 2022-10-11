import React, { useContext } from 'react'
import Child1 from './Child1'
import { Context, useContextDemo } from './UseContext'

const ChildContext = () => {
    const state = useContext(Context)
    const state1 = useContextDemo()
    // console.log(state)
    // console.log('state1', state1)

    return (
        <div>
            <p>ChildContext</p>
            <Child1 />
        </div>
    )
}

export default ChildContext
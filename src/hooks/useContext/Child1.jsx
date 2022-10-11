import React, { useContext } from 'react'
import { Context } from './UseContext'

const Child1 = () => {

    const state = useContext(Context)
    return (
        <div>
            Child1
            <p>Name: {state.name}</p>
            <button className='btn btn-success' onClick={() => state.handleState('Nick')}>Change Name</button>
        </div>
    )
}

export default Child1
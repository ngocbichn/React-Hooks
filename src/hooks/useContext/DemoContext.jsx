import React from 'react'
import ChildContext from './ChildContext'
import UseContext from './UseContext'

const DemoContext = () => {
    return (
        <UseContext>
            <p>DemoContext</p>
            <ChildContext />
        </UseContext>
    )
}

export default DemoContext
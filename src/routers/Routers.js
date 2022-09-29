import React from 'react'
import { useRoutes } from 'react-router-dom'
import UseEffect from '../hooks/useEffect/UseEffect'
import UseState from '../hooks/useState/UseState'

const Routers = () => {
    const routing = useRoutes([
        {
            path: '/useState',
            element: <UseState />
        },
        {
            path: '/useEffect',
            element: <UseEffect />
        }
    ])
    return routing
}

export default Routers
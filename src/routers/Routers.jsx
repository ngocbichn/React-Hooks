import React from 'react'
import { useRoutes } from 'react-router-dom'
import Memo from '../hooks/memo/Memo'
import UseCallback from '../hooks/useCallback/UseCallback'
import DemoContext from '../hooks/useContext/DemoContext'
import UseContext from '../hooks/useContext/UseContext'
import UseEffect from '../hooks/useEffect/UseEffect'
import UseMemo from '../hooks/useMemo/UseMemo'
import UseRef from '../hooks/useRef/UseRef'
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
        },
        {
            path: '/useMemo',
            element: <UseMemo />
        },
        {
            path: '/memo',
            element: <Memo />
        },
        {
            path: '/useCallback',
            element: <UseCallback />
        },
        {
            path: '/useContext',
            element: <DemoContext />
        },
        {
            path: 'useRef',
            element: <UseRef />
        }
    ])
    return routing
}

export default Routers
import React, { useCallback, useState } from 'react'
import ChildCallback from './ChildCallback'

const UseCallback = () => {
    const [like, setLike] = useState(1)
    const [number, setNumber] = useState(1)

    //cach 1:
    // const handleChangeNumber = useCallback(() => {
    //     setNumber(number + 1)
    // }, [number])

    //cach 2: để childCallback không bị rerender lại
    //phải sử dụng memo ở component nhận prop
    const handleChangeNumber = useCallback(() => {
        setNumber((preState) => {
            return preState + 1
        })
    }, [])

    return (
        <div>
            <p>Use Callback</p>
            <p>Number: {number}</p>
            <ChildCallback onChangeNumber={handleChangeNumber} />
            <div>
                <button
                    className='btn btn-success'
                    onClick={() => { setLike(like + 1) }}
                >Increase Like</button>

            </div>

        </div>
    )
}

export default UseCallback
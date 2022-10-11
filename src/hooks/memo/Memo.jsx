import React, { useState } from 'react'
import Child from './Child'


const Memo = () => {
    const [like, setLike] = useState(1)
    const [number, setNumber] = useState(1)



    return (
        <div>
            <p>Memo</p>
            <Child like={like} />

            <div>
                <button
                    className='btn btn-success'
                    onClick={() => { setLike(like + 1) }}
                >Increase Like</button>
                <button
                    className='btn btn-info ms-3'
                    onClick={() => { setNumber(number + 1) }}
                >Increase Number</button>
            </div>

        </div>
    )
}

export default Memo
import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [like, setLike] = useState(1)
    const [number, setNumber] = useState(1)

    //bắt buộc phải có mảng 
    //hoạt động tương tự useEffect, khi dependencies thay đổi thì code sẽ được chạy lại
    const countLike = useMemo(() => {
        console.log('useMemo')
        return like + 100
    }, [like])

    // const countLike = like + 100;
    console.log(countLike)

    return (
        <div>
            <p>useMemo</p>
            {/* <div>
                <p>Like: {like}</p>
                <p>Number: {number}</p>
            </div> */}
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

export default UseMemo
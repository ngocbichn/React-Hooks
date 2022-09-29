import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [number, setNumber] = useState(1)
    const [like, setLike] = useState(1)


    //có thể nhận 2 tham số.
    //luôn luôn chạy ít nhất một lần sau khi component được render
    /**
     * tham số 1: callback
     * tham số 2: có thể có hoặc không, có là array[]
     */

    //TH1: [chỉ có 1 callback] thay thế cho component didMount và didUpdate => được chạy lại mỗi khi component rerender [rất ít sử dụng]
    useEffect(() => {
        console.log('useEffect-TH1')
    })

    //TH2: [có 1 callback, 1 array rỗng] thay thế cho component didMount => chạy duy nhất 1 lần sau khi component render
    useEffect(() => {
        console.log('useEffect-TH2')
    }, [])

    //TH3: [có 1 callback, 1 array có giá trị] thay thế cho component didUpdate => chạy lại nếu như giá trị trong array bị thay đổi (dependencies)
    useEffect(() => {
        console.log('useEffect-TH3')
    }, [number, like])

    //TH4: [có 1 callback trong đó có return, có 1 mảng rỗng] thay thế cho willUnmount => chạy trước khi component bị hủy khỏi giao diện
    useEffect(() => {
        return () => {
            console.log('useEffect-TH4')
        }
    }, [])



    console.log('Render')
    return (
        <div>
            UseEffect
            <div>
                <p>Number: {number}</p>
                <button
                    className='btn btn-success'
                    onClick={() => {
                        setNumber(number + 1)
                    }}
                >Increase</button>
            </div>
            <div>
                <p>Like: {like}</p>
                <button
                    className='btn btn-success'
                    onClick={() => {
                        setLike(like + 1)
                    }}
                >Increase</button>
            </div>
            <div className='mt-3'>
                <h2>BT USE EFFECT</h2>
                <div className='alert alert-info'>
                    <p>chọn thành phố nào thì tự động chuyển qua quận huyện tương ứng với thành phố đó</p>
                </div>
                <div className='row'>
                    <div className='col-6 form-group'>
                        <select className='form-control'>
                            <option>Hà Nội</option>
                            <option>TP Hồ Chí Minh</option>
                        </select>
                    </div>
                    <div className='col-6 form-group'>
                        <select className='form-control'>
                            <option>Quận Hai Bà Trưng</option>
                            <option>Quận Đống Đa</option>
                            <option>Quận Hoàn Kiếm</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UseEffect
import React from 'react'
import './style.scss'

const Header = () => {
    return (
        //đặt tên class trùng tên component để scss không áp dụng lên toàn bộ component khác
        <div className='Header'>
            <button>Header</button>
        </div>
    )
}

export default Header
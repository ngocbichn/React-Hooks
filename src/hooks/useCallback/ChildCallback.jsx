import React, { memo } from 'react'

const ChildCallback = (props) => {
    const { onChangeNumber } = props

    console.log('ChildCallback render')
    return (
        <div>
            ChildCallback
            <button
                className='btn btn-info ms-3'
                onClick={onChangeNumber}
            >Increase Number</button>
        </div>
    )
}

export default memo(ChildCallback)
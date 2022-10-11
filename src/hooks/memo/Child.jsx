import React, { memo } from 'react'

const Child = (props) => {
    const { like } = props
    console.log('RerenderChild')

    return (
        <div>Child</div>
    )
}

export default memo(Child)
import React from 'react'
import { View } from 'react-native'

const Spacer = ({ size, height, width, horizontal = false }) => {
    const defaultSize = 20

    const finalHeight = height ?? (horizontal ? 0 : (size ?? defaultSize))
    const finalWidth = width ?? (horizontal ? (size ?? defaultSize) : 0)

    return (
        <View
            style={{
                width: finalWidth,
                height: finalHeight,
            }}
        />
    )
}

export default Spacer

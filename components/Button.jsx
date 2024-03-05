import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({ pressHandler, Icon, stylesText, titel, stylesButton }) => {

    const RenderCotentIconOrText = () => {
        if (!Icon) {
            return <Text style={stylesText}>{titel && titel}</Text>
        } else {
            return Icon;
        }

    }
    return (
        <TouchableOpacity style={stylesButton} onPress={pressHandler &&pressHandler} >
            <RenderCotentIconOrText />
        </TouchableOpacity>
    )
}

export default Button
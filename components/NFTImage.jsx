import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from './Button'
import { COLORS, DATA, FONTS, SIZES } from '../constants'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


const NFTImage = ({ image, imageStyles, love, arrow, pressHandler }) => {
    return (
        <View>
            <Image source={image} style={imageStyles} resizeMode='cover' />
            {love &&
                (<Button
                    stylesButton={styles.buttonHeart}
                    Icon={<AntDesign name="heart" size={20} color={COLORS.second} />}
                />)}
            {arrow &&
                (<Button
                    stylesButton={styles.buttonArrow}
                    Icon={<Feather name="arrow-left" size={20} color={COLORS.second} />}
                    pressHandler={pressHandler && pressHandler}
                />)}
        </View>
    )
}

export default NFTImage

const styles = StyleSheet.create({
    continer: {
        width: "100",
        position: "relative"
    },
    buttonHeart: {
        position: "absolute",
        top: StatusBar.currentHeight + 10,
        right: 10,
        backgroundColor: COLORS.white,
        padding: 10,
        borderRadius: 40,
    },
    buttonArrow: {
        position: "absolute",
        top: StatusBar.currentHeight + 10,
        left: 10,
        backgroundColor: COLORS.white,
        padding: 10,
        borderRadius: 40,
    },
});
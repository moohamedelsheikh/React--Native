import { StyleSheet, Text, View, SafeAreaView, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { COLORS, DATA, FONTS, SIZES } from '../constants'
import NFTImage from '../components/NFTImage'
import NFTAvatars from '../components/NFTAvatars'
import NFTTilte from '../components/NFTTilte'
import NFTInfo from '../components/NFTInfo'
import NFTMoreinfo from '../components/NFTMoreinfo'
import { FontAwesome } from '@expo/vector-icons';
import Button from '../components/Button'


const NFTDetails = ({ route, navigation }) => {
    const { NFTData } = route.params;
    const moveAnimation = useRef(new Animated.Value(0)).current;
    const fadeAnimation = useRef(new Animated.Value(0)).current;
    const duration = 1000
    const delay = duration + 200
    const pressHandler = () => {
        navigation.goBack()
    }
    const moveAnimationHanler = () => {
        Animated.spring(moveAnimation, {
            toValue: 1,
            friction: 6,
            tension: 80,
            useNativeDriver: true,
        }).start();
    }
    const fadeAnimationHanler = () => {
        Animated.spring(fadeAnimation, {
            toValue: 1,
            duration: 1000,
            delay: 300,
            useNativeDriver: true,
        }).start();
    }
    useEffect(() => {
        moveAnimationHanler()
        fadeAnimationHanler()
    }, [moveAnimationHanler, fadeAnimationHanler])
    return (
        <SafeAreaView style={styles.container}>
            <Animated.View style={{
                flex: 1, transform: [{
                    translateY: moveAnimation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [200, 0],
                    })
                }]
            }}>
                <NFTImage
                    image={NFTData.image}
                    imageStyles={styles.imageStyles}
                    love
                    arrow
                    pressHandler={pressHandler}
                />
                <View style={{ paddingHorizontal: SIZES.xLarge }}>
                    <View style={{ marginTop: -SIZES.xLarge }}>
                        <NFTAvatars avatars={NFTData.avatars} />

                    </View>
                    <View style={{ marginVertical: SIZES.medium }}>
                        <NFTTilte
                            _name={NFTData.name}
                            creator={NFTData.creator}
                            date={NFTData.date}
                        />
                    </View>
                    <View style={{ marginVertical: SIZES.medium }}>
                        <NFTInfo
                            price={NFTData.price}
                            views={NFTData.views}
                            comments={NFTData.comments}
                        />
                    </View>
                    <View style={{ marginVertical: SIZES.medium }}>

                        <NFTMoreinfo
                            address={NFTData.address}
                            tokenId={NFTData.tokenId}
                            tokenSt={NFTData.tokenSt}
                            blockchain={NFTData.blockchain}
                        />
                    </View>
                </View>
                <Animated.View style={[styles.buttonContainer, { opacity: fadeAnimation }]}>
                    <View style={styles.wrapper}>
                        <View>
                            <Text style={styles.text}>Top Bid</Text>
                            <View style={{ flexDirection: "row", alignItems: "center", gap: 2, padding: SIZES.small - 4 }}>
                                <FontAwesome name="dollar" size={24} color="white" />
                                <Text style={styles.text}>{NFTData.topBid}</Text>
                            </View>
                        </View>
                        <Button
                            titel="place a bid"
                            stylesButton={styles.button}
                            stylesText={styles.textButton}
                        />
                    </View>
                </Animated.View>
            </Animated.View>
        </SafeAreaView>
    )
}

export default NFTDetails

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: COLORS.bg },

    imageStyles: {
        width: "100%",
        height: 400,
        borderRadius: 20,
    },
    text: {
        fontSize: SIZES.medium,
        fontFamily: FONTS.semiBold,
        color: COLORS.white,
    },
    buttonContainer: {
        width: "100%",
        position: "absolute",
        bottom: SIZES.small,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
    },
    wrapper: {
        backgroundColor: COLORS.cardBg,
        width: 300,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        borderRadius: 20,
    },
    button: {
        backgroundColor: COLORS.second,
        padding: 16,
        width: 150,
        borderRadius: 20,
    },
    textButton: {
        color: COLORS.white,
        textAlign: "center",
        fontFamily: FONTS.semiBold,
        fontSize: 16,
    },
});
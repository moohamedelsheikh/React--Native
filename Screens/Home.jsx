import { View, Text, FlatList, SafeAreaView, StyleSheet, TouchableWithoutFeedback, Keyboard, Animated } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { COLORS, DATA, FONTS, SIZES } from '../constants'
import NFTCard from '../components/NFTCard'
import HomeHeader from '../components/HomeHeader'
import { FlachList } from "@shopify/flash-list"

const Home = () => {
  const [nftsData, setNftsData] = useState(DATA)
  const moveSearchAnimation = useRef(new Animated.Value(0)).current;

  const searchHandler = (value) => {
    if (value) {
      const filtredData = DATA.filter((nft) =>
        nft.name.toLowerCase().includes(value.toLowerCase()))
      setNftsData(filtredData)
    } else {
      setNftsData(DATA)
    }

  }

  const NotFoundNFT = () => {
    return (
      <View style={styles.notFoundContanier}>
        <Text style={styles.notFoundText}>Ooops...</Text>
        <Text style={styles.notFoundText}>not found the NFT</Text>

      </View>
    )
  }
  const searchAnimationHandler = () => {
    Animated.spring(moveSearchAnimation, {
      toValue: 1,
      friction: 4,
      useNativeDriver: true,
    }).start();
  };
  useEffect(() => {
    searchAnimationHandler();
  }, [searchAnimationHandler]);
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
        <View style={{ flex: 1 }} >
          <Animated.View
            style={{
              top: -100,
              transform: [
                {
                  translateY: moveSearchAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 100],
                  }),
                },
              ],
            }}
          >
            <HomeHeader searchHandler={searchHandler} />
          </Animated.View>
          {!nftsData.length ? (
            < NotFoundNFT />
          ) : (
            <FlachList
              data={nftsData}
              renderItem={({ item }) => <NFTCard NFTData={item} />}
              keyExtractor={(item) => item.id}
              estimatedItemSize={200}
            />
          )}

        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    paddingTop: 20
  },
  notFoundContanier: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: SIZES.xLarge
  },
  notFoundText: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: SIZES.xLarge
  }
})
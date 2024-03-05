import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, DATA, FONTS, SIZES } from '../constants'


const NFTMoreinfo = ({ address, tokenId, tokenSt, blockchain }) => {
  return (
    <View>
      <View style={styles.details}>
        <Text style={styles.title}>Contact Address</Text>
        <Text style={styles.value}>{address}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>tokeId</Text>
        <Text style={styles.value}>{tokenId}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>toke Standerd</Text>
        <Text style={styles.value}>{tokenSt}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>blockchain</Text>
        <Text style={styles.value}>{blockchain}</Text>
      </View>
    </View>
  )
}

export default NFTMoreinfo

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.cardBg,
    marginVertical: SIZES.small - 4
  },
  title: {
    color: COLORS.white

  },
  value: {
    color: COLORS.gray,
    marginBottom: SIZES.small - 2

  }
})
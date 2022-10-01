import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../style'

/* route ile birlikte backend tarafında oluşan yakalama işlemini yaptım
 */

export default function content({route}) {
  return (
    <View style={styles.contentView}>
      <Text>{route.params.blogpost.name}</Text>
      <Text>{route.params.blogpost.content}</Text>
    </View>
  )
}
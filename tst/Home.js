import { View, Text, Button } from 'react-native'
import React,{useState} from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { styles } from '../style'

/* Navigation bileşenini burada belirtiyoruz.Bu bakımda
yakalama işlemi yapıyoruz. 
*/

export default function Home({navigation}) {
  /* Sadece post gibi değişkenleri değil fonksiyon ataması da
  yapabiliyoruz.BU durumda farklı uyarılar verebilmekte React-Native */
  const [post,setpost] = useState({
    name:"",
    content:""
  })
  return (
    <View style={styles.homedesign}>
      <TextInput 
      placeholder='Adınız' 
      style={styles.txtinpt}
      underlineColorAndroid="black"
      onChangeText={value=>setpost({...post,name:value})}
      />
      <TextInput 
      placeholder='Yazınız' 
      style={styles.txtinpt}
      underlineColorAndroid="black"
      /* Burada birden fazla giriş durumunu baz aldım .Yani birden
      fazla satır olabilir diyorum*/
      multiline={true}
      /* Burada yazılabilecek alanın durumunu bildiriyoruz 
      */
      numberOfLines={5}
      onChangeText={value=>setpost({...post,content:value})}
      />

      <Button
        title='Gönder'
        onPress={()=>navigation.navigate('content',{
          blogpost:post
        })}
      />
    </View>
  )
}
import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  /* FlexDirection belirmedim bu durumda otomatitk olarak y- 
  eksenince ayarlama yapar
  */
  homedesign:{
    height:"100%",
    justifyContent:"center",
    alignItems:"center",
    flex:1,
    backgroundColor:"#BD8E8E"
  },
  txtinpt:{
    width:"50%",
    textAlign:"center",
    fontSize:18
  },
  contentView:{
    flex:1,
    backgroundColor:"#F68989",
    justifyContent:"center",
    alignItems:"center"
  }
  }
);
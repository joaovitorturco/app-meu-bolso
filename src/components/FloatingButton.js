FloatingButton
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
export default function FloatingButton({onPress}){
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>+</Text>
    </TouchableOpacity>
  );
}
 
const styles=StyleSheet.create({
  button:{position:'absolute',right:24,bottom:24,width:60,height:60,
    borderRadius:30,backgroundColor:'#00b894',
    justifyContent:'center',alignItems:'center',elevation:8},
    text:{color:'#fff',fontSize:32}});
 
 
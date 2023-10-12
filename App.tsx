/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Button,
} from 'react-native';

const App = () => {

  const [name,SetName] = useState('');
  const [starDiagram, SetStarDiagram] = useState('');
  const CalulationStars = () =>{
  const lengthname = name.length;
  const EvenNum = lengthname % 2 === 0;

  let starDiagram = '';
  for (let i = 1;  i <= lengthname; i++) {
    if(EvenNum) {
      starDiagram += '*' .repeat(i) + '\n';
    } else {
      starDiagram += '*' .repeat(i)  + '\n';
    }
   }
    SetStarDiagram(starDiagram)
  };

return(

  <SafeAreaView>
   <View  style={styles.HeaderContainer}>
    <Text  style={styles.HeaderText}>
      Turning Names into stars
    </Text>
    </View>
   <View  style={styles.inputContainer}>
   <TextInput
   style={styles.input}
   placeholder='Enter a Name'
   onChangeText={(text) => SetName(text)}
   value={name}
/>
   </View>
   <View style={styles.Button}>
   <Button title="Generate" onPress={CalulationStars} />
   </View>
   <View style={styles.DiagramContainer}>
      <Text style={styles.Diagram}>Star Diagram:</Text>
      <Text style={styles.Diagram}>{starDiagram}</Text>
    </View>
   
  </SafeAreaView>

 )
}

const styles = StyleSheet.create({

 HeaderContainer:{
  backgroundColor: 'darkslategrey',
  alignItems: 'center',
  borderWidth: 5,
  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20
 },

 HeaderText:{
  fontSize: 72,
  fontWeight: 'bold',
  color: 'white',
},

inputContainer:{
alignItems: 'center',
marginTop:20,
},

input: {
  height: 60,
  width: 300,
  borderWidth: 2,
  padding: 10,
  fontSize:28,
  backgroundColor: 'white',
},

Button:{
  alignItems:'center',
  marginTop:15,
 },

 DiagramContainer:{
  alignItems:'center'
 },

 Diagram:{
  fontSize:37,
  fontWeight: 'bold',
  color: 'black'
 }



})

//https://stackoverflow.com/questions/5016313/how-to-determine-if-a-number-is-odd-in-javascript//
//https://stackoverflow.com/questions/34648738/loop-in-react-native//
//https://stackoverflow.com/questions/19198048/how-to-repeat-string-n-times-in-java//
//https://stackoverflow.com/questions/32469570/how-can-i-insert-a-line-break-into-a-text-component-in-react-native//
export default App;

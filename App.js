import { StatusBar } from 'expo-status-bar';
import React , {useState,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {checkConnected} from './functions';
import NoConnectionScreen from "./screens/NoConnectionScreen";

export default function App() {
  const [connectStatus,setConnectStatus] = useState(false)

  checkConnected().then(res=>{
    setConnectStatus(res)
  })

  const alertSomething = () =>{
    alert('alert something')
  }
  return (
    connectStatus?
    (<View style={styles.container}>
      <Text>Open up App.js to start working on your: {connectStatus} app!</Text>
      <StatusBar style="auto" />
    </View>):(
      <NoConnectionScreen onCheck={checkConnected}/>
    )
  );
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

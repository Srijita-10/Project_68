import React,{Component} from 'react';
import { View,Text,TouchableOpacity, StyleSheet } from 'react-native';

export default class InstagramScreen extends React.Component{
    render(){
        return(
            <View
            style={styles.container}>
                <Text style={styles.textIn}>Instagram</Text>
                </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex: 1,
        backGroundColor: '#00AA66',
        marginTop: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textIn:{
        fontSize: 25,
        color: 'gold',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
import React,{Component} from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import MessengersBox from '../components/MessengersBox/';
import dataMessages from '../data';

export default class MainScreen extends Component{
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);
    }


    render(){
        return(
            <View style = {styles.containerMainScreen} >
                <View style = {styles.topMainScreen}>

                </View>
                <View style = {styles.findInputMainScreen}>

                </View>
                <View  style = {styles.messageMainScreen}>
                    <FlatList
                        data = {dataMessages}
                        renderItem = {({item,index}) =>{
                            return(
                                <MessengersBox
                                    item = {item}
                                    index = {index} >
                                </MessengersBox>
                            );
                            }} 
                        keyExtractor = {(item,index)=>{
                            return item.id.toString()
                        }} >

                    </FlatList>
                    
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    containerMainScreen:{
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 24
    },
    topMainScreen: {
        flex: 0.2,
        backgroundColor: '#fff'
    },
    findInputMainScreen:{
        flex : 0.1,
        backgroundColor: '#312F3A'
    },
    messageMainScreen:{ 
        flex: 0.7,
        backgroundColor: '#fff'
    }
});
import React,{Component} from 'react';
import { View, Text, StyleSheet,Image,TouchableOpacity, Alert} from 'react-native';
import Swipeout from 'react-native-swipeout';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class MessengersBox extends Component{
    constructor(props){
        super(props);
        this.state = {
            activeRowKey : false,
            
        };
    }
    
    render(){
       
        
        const {item,index,handleDeleteItemsFlatList,onPress,onDeleteee} = this.props
        //#region Swipe
        const swipeSetting = {
            rowId : index,
            secId :1,
            autoClose : true,
            style :{
                backgroundColor: '#fff',
                flexDirection: 'row'
                
            },
            onClose: (secId,rowId,dirrection) => {
                if(this.state.activeRowKey != true){
                    this.setState({activeRowKey : false});
                }
            },
            onOpen: (secId,rowId,dirrection) => {
                this.setState({activeRowKey : true});
            },
            buttonWidth: 30,
            right:[
                {
                    backgroundColor : '#fff',
                    onPress : () => {
                        Alert.alert(
                            'Alert',
                            'Are you sure you want to delete ?',
                            [
                                {text: 'No', onPress: ()=> console.log('Cancel Press'),style : 'cancel'},
                                {text: 'Yes', onPress: ()=>{
                                    // handleDeleteItemsFlatList(index)
                                    //use redux here
                                    this.props.onDeleteee(index);
                                    
                                }}
                            ]
                        );
                    },
                    component : (
                        <View style = {{flex: 1 ,flexDirection: 'row', alignItems: 'center',justifyContent: 'center'}}>
                            <Icon 
                                    name = 'trash-o' 
                                    size = {24} 
                                    color = 'red'/>
                        </View>
                    ) 
                    
                }
            ]

        };
        //#endregion

        return(
            <Swipeout {...swipeSetting} >
                <TouchableOpacity
                    onPress = {onPress}>
                    <View style = {styles.containerMessagesBox}>
                    
                        <Image
                            style = {styles.imgMessagesBox}
                            source = {{uri: item.imgMessage}}/>
                        <View 
                            style = {styles.titleMessagesBox}>
                            <Text 
                                style = {{fontSize: 22}}>
                                {item.titleMessage}
                            </Text>
                            <View style = {styles.lastestMessageInMessageBox}>
                                <Text 
                                    style = {{marginRight:5}}>
                                    {item.lastestMessage}
                                </Text>
                                <Text>{item.lastTimeMessage}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </Swipeout>
            
            
        );}
    }
        
const styles = StyleSheet.create({
    containerMessagesBox:{
        flexDirection: "row",
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginHorizontal: 20,
        marginVertical: 5,
        borderRadius: 10
        
    },
    titleMessagesBox:{
        flexDirection: "column",
        marginHorizontal: 15
    },
    imgMessagesBox:{
        height: 50,
        width: 50,
        borderRadius: 50
    },
    lastestMessageInMessageBox:{
        flexDirection: "row",
        justifyContent: "space-between"
    }
});
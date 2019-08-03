import React,{Component} from 'react';
import { View, Text, StyleSheet,Image,TouchableOpacity} from 'react-native';

export default class MessengersBox extends Component{
    constructor(props){
        super(props);
    }
    render(){
        //const {titleMessage, lastestMessage, timeLastestMessage, imgMessage} = props;
        const {item,index} = this.props
        console.log(item.imgMessage)
        return(
            <TouchableOpacity>
                <View style = {styles.containerMessagesBox}>
                
                    <Image
                        style = {styles.imgMessagesBox}
                        source = {item.imgMessage}/>
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
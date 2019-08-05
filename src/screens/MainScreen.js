import React,{Component} from 'react';
import { View, Text, StyleSheet, Image, FlatList,SafeAreaView} from 'react-native';
import { SearchBar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign'
import MessengersBox from '../components/MessengersBox/';
//import dataMessages from '../data';

export default class MainScreen extends Component{
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);
        this.state = {
            deleteRowKeyFlatList: null,
            dataMessages : null,
        }
    }

    handleDeleteItemsFlatList = (index) => {
        dataMessages.splice(index,1);
        this.setState({
            deleteRowKeyFlatList : index
        });
    };
    // componentDidMount() {
    //     return fetch("https://my.api.mockaroo.com/messengerbox.json?key=28e2d490")
    //         .then ((response) => response.json() )
    //         .then ((responseJson) => {
    //             this.setState({dataMessages: responseJson,})})
    //         .catch((error) => {
    //             console.log(error)}
    //             );
    // }

    async componentDidMount(){
        try {
            const response = await fetch('https://my.api.mockaroo.com/messengerbox.json?key=28e2d490');
            const responseJson = await response.json();
            this.setState({dataMessages : responseJson});
        } catch (error) {
            console.log(error)
        }
    }

    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style = {styles.containerMainScreen} >
                <View style = {styles.topMainScreen}>
                    <Image
                        source = {require('../../img/1.jpg')}
                        style = {styles.imgAccount}
                        />
                    <Text style = {{fontSize : 24}}>
                        Messenger
                    </Text>
                    <Icon
                        onPress = {()=>{
                            console.log(this.props);
                             this.props.onDeleteee(0);
                        }}
                        name = 'setting'
                        color = '#000'
                        size = {26} />

                </View>
                <View style = {styles.searchBarMainScreen}>
                    <SearchBar
                        placeholder = 'Tìm kiếm'
                        inputStyle = {{color: '#fff'}}
                        containerStyle = {{backgroundColor:'#fff'}} />
                </View>
                <View  style = {styles.messageMainScreen}>
                    <FlatList
                        data = {this.state.dataMessages}
                        renderItem = {({item,index}) =>{
                            return(
                                <MessengersBox
                                    {...this.props}
                                    item = {item}
                                    index = {index}
                                    handleDeleteItemsFlatList = {this.handleDeleteItemsFlatList}
                                    // onPress = {()=>{navigate('ChatScreen')}} >
                                    //onDeleteee = {this.props.onDeleteee}>
                                    >
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
        //marginTop: 24
    },
    topMainScreen: {
        flex: 0.1,
        backgroundColor: '#fff',
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: "center"
    },
    searchBarMainScreen:{
        flex : 0.1,
        backgroundColor: '#fff'
    },
    messageMainScreen:{ 
        flex: 0.8,
        backgroundColor: '#fff'
    },imgAccount:{
        height: 50,
        width: 50,
        borderRadius: 50
    },
});
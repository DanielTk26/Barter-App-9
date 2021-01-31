import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, TouchableHighlight} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer'
import firebase from 'firebase';


export default class CustomSideBarMenu extends Component{
 render(){
     return(
         <View style ={{flex:1}}>
             <View style={styles.drawerItemsContainer}>
             <DrawerItems {...this.props}/>
          </View>
          <View style={stylkes.logOutContainer}>
              <TouchableOpacity style={styles.logOutButton}
              onPress = {() => {
                this.props.navigation.navigate('Welcome Screen')
                firebase.auth().signOut()
                }}>
                    <Text>Log Out</Text>
              </TouchableOpacity>    
          </View>
          </View>       
       
     )
 }
}

var styles = StyleSheet.create({
    container: {
     flex: 1
    },
    drawerItemsContainer:{
       flex:0.8
    },
    logOutContainer:{
        flex:0.2,
        justifyContent:'flex-end',
        paddingBottom:30
    },
    logOutButton:{
        height:30,
        width:'100%',
        justifyContent:'center',
        padding:10
    },
    logOutText:{
        fontSize: 30,
        fontWeight: 'bold'
    }
})




































// https://www.youtube.com/watch?v=3Xarw8m2z10
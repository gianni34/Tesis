import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({

    mainMenuTab: {
      backgroundColor: "rgb(22, 43, 59)",
    },
  
    baseText: {
      fontFamily: 'sans-serif',
    },
  
    tabView: {
      paddingTop: 20,
      backgroundColor: 'rgb(22, 43, 59)',
    },
  
    windowLogoContainer: {
      flex: 2,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgb(22, 43, 59)',
    },
  
    windowInputContainer: {
      flex: 2,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    windowButtonContainer: {
      flex: 1,
      flexDirection: 'column',
    },
    
    logo: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    
    errorContainer: {
      backgroundColor: 'rgba(249, 114, 114, 0.75)',
      marginLeft: 20,
      marginRight: 20,
      borderRadius:10,
    },
  
    errorText: {
      color: 'rgb(252, 249, 249)',
      margin: 10,
    },
  
    inputContainerLogin: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: .5,
      borderBottomColor: 'rgb(252, 249, 249)',
      height: 40,
      margin: 20,
    },

    adminSwitchContainer:{
      flexDirection: 'row',
      justifyContent: 'center',
      height: 40,
      margin: 20,
    },
    
    inputIconLogin: {
      padding: 10,
      margin: 5,
      marginLeft: 20,
      height: 10,
      width: 10,
      resizeMode : 'stretch',
      alignItems: 'center',
    },
   
    inputLogin:{
      flex:1, 
      paddingLeft: 20, 
      color: 'rgb(252, 249, 249)',
      fontSize: 17,
    },
  
    linkLogin: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      alignItems: 'center',
      height: 30,
    },
    
    textLinkLogin: {
      flex:1,
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      color: 'rgb(252, 249, 249)',
      fontSize: 16,
    },
  
    textSubmitLogin: {
      alignItems: 'center',
      color: 'rgb(22, 43, 59)',
      borderColor: 'white',
      borderRadius: 5,
      alignItems: 'center',
      backgroundColor: 'transparent',
      fontSize: 16,
    },
  
    buttonContainer: {
      justifyContent: 'center',
      margin: 20,
      height: 50,
      alignItems: 'center',
      backgroundColor: 'cyan',
      borderRadius: 5,
    },

    buttonContainerSave: {
      justifyContent: 'center',
      margin: 10,
      height: 50,
      alignItems: 'center',
      backgroundColor: 'cyan',
      borderRadius: 5,
    },
  
    /*mainMenuTab: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      //backgroundColor: 'rgb(22, 43, 59)',
    },*/
  
    mainMenuContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'rgb(22, 43, 59)',
    },
  
    zoneContainer: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      marginTop: 10, 
      height: 170,
      backgroundColor: 'rgb(33, 33, 33)',
      opacity: .8,
    },
  
    scrollView : {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch',
      backgroundColor: 'transparent',
    },
  
    zoneLabelContainer: {
      height: 35,
      backgroundColor: 'rgb(33, 33, 33)',
      opacity: .6,
    },
  
    whiteText: {
      marginLeft: 20,
      marginTop: 5,
      fontSize: 18,
      color: 'white',
      fontWeight: 'bold',
    },
  
    zoneName: {
      marginLeft: 20,
      marginTop: 5,
      fontSize: 18,
      color: 'white',
      fontWeight: 'bold',
      position: "absolute"
    },
  
    iconContainer: {
      marginTop: 10,
      height: 25,
      width: 25,
    }
  
  
  });
import { Modal, View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants";
import { useEffect } from "react";
import { showAlert } from "../Redux/Slices/customAlertSlice";
import { useDispatch, useSelector } from "react-redux";

const CustomAlert = ({text})=> {
    const {alertShown} = useSelector((Store)=> Store.alert)
    const dispatch = useDispatch()

    useEffect(()=> {
        setTimeout(()=> {
            dispatch(showAlert())
        }, 2000)
    }, [])
    
    
    
    return (
        <>{alertShown && 
            <Modal> 
            <View style = {styles.container}>
                <Text>{text} </Text>
            </View>
            </Modal>
        } </>
     
       
    )
}

const styles = StyleSheet.create({
    container: {
            height: 100, 
            width: '100%',
            backgroundColor: COLORS.blue,
            position: 'absolute',
            top: 10,
            left: 0,
    }
})
export default CustomAlert
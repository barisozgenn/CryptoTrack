import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { SetEmail, SetUsername } from "../redux/action";

export default HomeScreen = () => {
    const navigation = useNavigation()
    //const [txtUsername, setUsernameText] = useState("")

    const dispatch = useDispatch()
    const {ResponseRedux}= useSelector(state=>state)

    return (
        <View style={{ flex: 1, backgroundColor: 'cyan', alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home</Text>
            <Text>username : {ResponseRedux.username}</Text>
            <Text>email : {ResponseRedux.email}</Text>

            <TextInput
                style={{ width: '90%', height: 50, backgroundColor: '#292929', padding: 10, margin: 10, color: '#fff', borderWidth: 1, borderColor: 'gray', borderRadius: 4 }}
                placeholder='username'
                placeholderTextColor="gray"
                value={ResponseRedux.username}
                onChangeText={(username)=> dispatch(SetUsername(username))}
            />
            <Button title='Go to Detail' onPress={() => navigation.navigate("Detail", {username:ResponseRedux.username})} />
        </View>
        
    )
}
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

export default WalletScreen = () => {
    const navigation = useNavigation()
    const route = useRoute()

    const dispatch = useDispatch()
    const { ResponseRedux } = useSelector(state => state)

    return (
        <View style={{ flex: 1, backgroundColor: 'orange', alignItems: 'center', justifyContent: 'center' }}>
            <Text>Wallet</Text>
            <Text>Dear {route.params.username}</Text>
            <Text>username : {ResponseRedux.username}</Text>
            <Text>email : {ResponseRedux.email}</Text>
            <Button title='Back to Home' onPress={() => navigation.navigate("Home")} />
            <Button title='Back' onPress={navigation.goBack} />

        </View>
    )
}
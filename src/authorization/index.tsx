import React, {useState} from 'react';
import {styles} from "./styles";
import { Text,  View,  TextInput, TouchableOpacity, SafeAreaView, Image} from 'react-native';

export const Authorization = () => {
    const [form, setForm] = useState({
        login: " ",
        password: " ",
    });

    const OnChangeLogin = (text: string) => {
        setForm ((prev) => ({...prev, login: text,}));
    }

    const OnChangePassword = (text:string) => {
        setForm ((prev) => ({...prev, password: text,}));
    }

    return (
        <SafeAreaView>
        <View style= {styles.container}>
            <View style= {styles.card}>     
            <Text style ={styles.title}>UDK gazbeton</Text>
            <Text style ={styles.label}>Введіть логін</Text>
           
        

    <Text style ={styles.label}>Введіть пароль</Text>
    <View style= {styles.Image}><Image source= {require("../img/eye.png")} accessibilityLabel="eye"/></View>
    </View>
    </View>
        </SafeAreaView>
    );
}
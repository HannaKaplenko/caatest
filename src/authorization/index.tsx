import React, {useState} from 'react';
import {styles} from "./styles";
import { Text,  View,  TextInput, TouchableOpacity, SafeAreaView, Image, Button} from 'react-native';

export const Authorization = () => {
    const [form, setForm] = useState({
        login: "Gazbeton",
        password: "Boulding",
    });

    const OnChangeLogin = (text: string) => {
        setForm ((prev) => ({...prev, login: text,}));
    }

    const OnChangePassword = (text:string) => {
        setForm ((prev) => ({...prev, password: text,}));
    }
    const [showPassword, setShowPassword] = useState(false);


    return (
        <SafeAreaView>
        <View style= {styles.container}>
            <View style= {styles.card}>     
            <Text style ={styles.title}>UDK gazbeton</Text>
            <Text style ={styles.label}>Введіть логін</Text>
            <TextInput
            value= {form.login}
            onChangeText={OnChangeLogin}
            placeholder='Введіть логін'
            style={styles.input}/>
        
        

    <Text style ={styles.label}>Введіть пароль</Text>
    <View style = {styles.inputWrapper}>
    <TextInput
            value= {form.password}
            onChangeText={OnChangePassword}
            placeholder='Введіть пароль'
            secureTextEntry={!showPassword}

            style={styles.input}   
          />
          <TouchableOpacity style={styles.eyeButton} onPressIn={() => setShowPassword (!showPassword)}>
            <Image source= {require("../img/eye.png")} style= {styles.Image} accessibilityLabel="eye"/> 
            </TouchableOpacity>
          
           
            </View>
            <Text style= {styles.message}>Якщо ви забули пароль зверніться до адміністратора</Text>
            
            <TouchableOpacity style= {styles.button}>
                <Text style={styles.buttonText}>Увійти</Text></TouchableOpacity>
                
    </View>
    </View>
        </SafeAreaView>
    );
}
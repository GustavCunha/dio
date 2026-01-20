import * as Clipboard from 'expo-clipboard';
import { useState } from 'react';
import { Image, Pressable, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import { generatePass } from '../services/passService';

export function Home() {
    const [pass, setPass] = useState('')

    function handleGeneratePass() {
        let generateToken = generatePass()
        setPass(generateToken)
    }

    function copyToClipboard() {
        Clipboard.setStringAsync(pass)
        setPass('')
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} />

            <View style={styles.logoContainer}>
                <Text style={styles.title}>
                    BatPass Generator
                </Text>
                <Image 
                    source={require('../images/Batman.png')}
                    style={{height: 200}}
                    resizeMode='contain'
                />
            </View>
            
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input} 
                    placeholder='****'
                    multiline={false}
                    value={pass}
                    editable={false}
                />

                <Pressable style={styles.button} onPress={handleGeneratePass}>
                    <Text style={styles.label}>GENERATE</Text>
                </Pressable>

                <Pressable style={styles.button} onPress={copyToClipboard}>
                    <Text style={styles.label}>⚡COPY</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#333'
    },
    logoContainer: {
        borderColor: '#fff', 
        borderWidth: 2, 
        padding: 20, 
        alignItems: 'center', 
        marginBottom: 60,
        backgroundColor: '#4D4D4F'
    },
    title: {
        fontSize: 30, 
        fontWeight: 'bold', 
        color: '#E5BF3C'
    },
    inputContainer: {
        width: '80%',
        alignItems: 'center',
    },
    input: {
        width: '100%',
        backgroundColor: '#E5BF3C',
        color: '#000',
        fontSize: 18,
        height: 50,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        textAlign: 'center'
    },
    label: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#E5BF3C',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#000',
        marginVertical: 5,
        width: '100%'
    }
});
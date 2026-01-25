import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ProfilePhoto from '../components/ProfilePhoto';
import { SocialButton } from '../components/SocialButton';

export default function Main() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <ProfilePhoto />
                <Text style={styles.name}>
                    Gustavo Cunha
                </Text>
                <Text style={styles.title}>
                    Sotfware Developer III
                </Text>
            </View>

            <View style={styles.buttonGroup}>
                <SocialButton 
                    icon="linkedin" 
                    label="LinkedIn" 
                    url="https://linkedin.com/in/seuusuario" 
                />
                <SocialButton 
                    icon="github" 
                    label="GitHub" 
                    url="https://github.com/seuusuario" 
                />
                <SocialButton 
                    icon="gmail" 
                    label="E-mail" 
                    url="mailto:seuemail@exemplo.com" 
                />

                <View style={styles.footer}>
                    <Text style={styles.textHelp}>Posso lhe ajudar em algo?</Text>
                    <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate('Skills')}>
                        <Text style={styles.secondaryButtonText}>Minhas Habilidades</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#127369',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 80
    },
    content: {
        alignItems: 'center',
        marginBottom: 10,
        paddingHorizontal: 20,
    },
    name: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 5,
    },
    title: {
        fontSize: 18,
        color: '#fffaf0',
        marginBottom: 20,
    },
    buttonGroup: {
        height: '70%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#BFBFBF',
        padding: 10,
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
    },
    secondaryButton: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 25,
        marginTop: 20,
    },
    secondaryButtonText: {
        color: '#4C5958',
        fontSize: 16,
        textAlign: 'center',
    },
    footer: {
        alignItems: 'center',
        padding: 20,
        borderRadius: 10,
        marginTop: 50,
    },
    textHelp: {
        fontSize: 16,
        color: '#4C5958',
        fontWeight: 'bold'
    }
});
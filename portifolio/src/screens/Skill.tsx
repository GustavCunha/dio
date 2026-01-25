import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import ProfilePhoto from '../components/ProfilePhoto';
import SkillItem from '../components/SkillItem';

export default function Skill() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Pressable style={styles.backButton} onPress={navigation.goBack}>
                <MaterialCommunityIcons name="arrow-left" size={28} color="#FFF" />
            </Pressable>
            
            <ProfilePhoto />
            <Text style={styles.title}>Minhas Habilidades</Text>
            <Text style={styles.subtitle}>Tecnologias que domino e utilizo no dia a dia</Text>

            <View style={styles.card}>
                <SkillItem name="React Native" level={5} />
                <SkillItem name="Java" level={5} />
                <SkillItem name="JavaScript" level={4} />
                <SkillItem name="IA" level={3} />
                <SkillItem name="Node.js" level={4} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#127369',
        alignItems: 'center',
        padding: 10,
        paddingTop: 80
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginVertical: 10,
        color: '#FFF',
    },
    subtitle: {
        fontSize: 16,
        color: '#E0E0E0',
        marginBottom: 20,
        textAlign: 'center',
    },
    card: {
        backgroundColor: '#FFF',
        borderRadius: 20,
        padding: 25,
        width: '90%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 5,
    },
    backButton: {
        position: 'absolute',
        top: 40,
        left: 20,
    }
});
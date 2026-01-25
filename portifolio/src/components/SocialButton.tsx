import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Linking, StyleSheet, Text, TouchableOpacity } from 'react-native';

type Props = {
    icon: string;
    label: string;
    url?: string;
}

export function SocialButton({ icon, label, url }: Props) {
    function handlePress(){
        if (url) {
            Linking.openURL(url);
        }
    };

    return (
        <TouchableOpacity style={styles.button} onPress={handlePress}>
            <MaterialCommunityIcons name={icon} size={24} color="#fff" />
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 25,
        marginVertical: 8,
        backgroundColor: '#127369',
        width: 100,
        height: 100,
        borderColor: '#fff',
        borderWidth: 1,
    },
    text: {
        color: '#fff',
        fontSize: 16,
        marginTop: 5
    },
});
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type ButtonProps = {
    title: string
}

export function Button({ title }: ButtonProps) {
    return (
        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
            <Text style={styles.buttonText}>{title}</Text>            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#4D4D4D',
        padding: 10,
        borderRadius: 10,
        borderColor: '#E5BF3C',
        borderWidth: 2,
        width: '100%',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    }
})
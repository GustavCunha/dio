import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "../components/Button";

export function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image 
                    source={require('../images/Batman.png')} 
                    style={{ width: 250, height: 250 }}
                    resizeMode="contain"
                />
                <Text style={styles.title}>BatSinal</Text>
            </View>

            <View style={{flex: 1}}>
                <Button title="Ative o 🦇"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 1,
        paddingTop: 50,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
    }
})
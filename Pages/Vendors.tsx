import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from "twrnc";

function Vendors() {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
    });

    return (
        <View style={styles.container} >
            <Text style={tw`text-red-500`}> Let's build Troith Vendor ❤️</Text>
            < StatusBar style="auto" />
        </View>
    );
}

export default Vendors;
import * as React from 'react';
import { Button, View, Text, StyleSheet, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import { Icon } from 'react-native-vector-icons/Icon';

const { width } = Dimensions.get('window');

export default LoginScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={{ flex: 0.15, alignItems: 'center', justifyContent: 'center', marginTop: 15 }}>
                <Text style={styles.headerText}>Iqlix Login</Text>
            </View>
            {/* <Button title="Go to Home" onPress={() => navigation.navigate('OnboardingScreen')} /> */}
            <View>
                <TouchableOpacity style={styles.facbookSignInButton}>
                    <Text style={styles.facbookSignInText}>Sign in with Facebook</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.twitterSignInButton}>
                    <Text style={styles.twitterSignInText}>Sign in with Twitter</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.googleSignInButton}>
                    <Text style={styles.googleSignInText}>Sign in with Google</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 20,
        fontWeight: '900'
    },
    facbookSignInButton: {
        width: width * 0.9,
        textAlign: 'center',
        justifyContent: 'center',
        marginBottom:15,
        alignItems:'center',
        borderRadius: 100,
        backgroundColor: '#007dd1',
        height: 50
    },
    facbookSignInText: {
        fontWeight: '900',
        color: '#fff',
        fontSize: 12,
    },
    twitterSignInButton: {
        width: width * 0.9,
        textAlign: 'center',
        justifyContent: 'center',
        marginBottom:15,
        alignItems:'center',
        borderRadius: 100,
        backgroundColor: '#64b4ff',
        height: 50
    },
    twitterSignInText: {
        fontWeight: '900',
        color: '#fff',
        fontSize: 12,
    },
    googleSignInButton: {
        width: width * 0.9,
        textAlign: 'center',
        justifyContent: 'center',
        marginBottom:15,
        alignItems:'center',
        borderRadius: 100,
        backgroundColor: '#fff',
        height: 50,
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowOpacity: 0.8,
        elevation: 6,
        shadowRadius: 15 ,
        shadowOffset : { width: 1, height: 13},
    },
    googleSignInText: {
        fontWeight: '900',
        color: '#2c2c2c',
        fontSize: 12,
    },
})



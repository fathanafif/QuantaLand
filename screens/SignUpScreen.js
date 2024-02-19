import React, { useEffect, useState } from 'react';
import { TextInput, Image, View, Text, StyleSheet, Dimensions } from 'react-native';
import CheckBox from 'expo-checkbox';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Icon from "react-native-feather";
import {
    useFonts,
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
} from '@expo-google-fonts/poppins';

const { width } = Dimensions.get('window');

const SignUpScreen = ({ navigation }) => {


    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isRememberMe, setIsRememberMe] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const [fontsLoaded] = useFonts({
        Poppins_100Thin,
        Poppins_100Thin_Italic,
        Poppins_200ExtraLight,
        Poppins_200ExtraLight_Italic,
        Poppins_300Light,
        Poppins_300Light_Italic,
        Poppins_400Regular,
        Poppins_400Regular_Italic,
        Poppins_500Medium,
        Poppins_500Medium_Italic,
        Poppins_600SemiBold,
        Poppins_600SemiBold_Italic,
        Poppins_700Bold,
        Poppins_700Bold_Italic,
        Poppins_800ExtraBold,
        Poppins_800ExtraBold_Italic,
        Poppins_900Black,
        Poppins_900Black_Italic,
    });

    const ChangeIconEye = () => {
        if (!showPassword) {
            return (
                <Icon.EyeOff onPress={toggleShowPassword} stroke="#a5a5a5" strokeWidth="2.5" width={20} height={20} style={{ marginVertical: 15, marginStart: 15 }} />
            )
        } else {
            return (
                <Icon.Eye onPress={toggleShowPassword} stroke="#a5a5a5" strokeWidth="2.5" width={20} height={20} style={{ marginVertical: 15, marginStart: 15 }} />
            )
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.header}>
                <TouchableOpacity title="Go to Home" onPress={() => navigation.navigate('LoginScreen')}>
                    <Icon.ArrowLeft stroke="#505050" strokeWidth="2.5" width={24} height={24} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Sign Up Account</Text>
            </View>

            <View style={styles.banner}>
                <Image source={require("../assets/images/faviconMedium.png")} style={{ width: 40, height: 40 }} />
            </View>

            <View style={styles.formSection}>

                <Text style={styles.label}>Full Name</Text>
                <View style={{
                    height: 50,
                    borderRadius: 8,
                    marginBottom: 20,
                    flexDirection: 'row',
                    paddingHorizontal: 15,
                    width: width * 0.9,
                    backgroundColor: '#e8e8e8'
                }}>

                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Type your name"
                            placeholderTextColor="#a5a5a5"
                        />
                    </View>

                </View>

                <Text style={styles.label}>Phone Number</Text>
                <View style={{
                    height: 50,
                    borderRadius: 8,
                    marginBottom: 20,
                    flexDirection: 'row',
                    paddingHorizontal: 15,
                    width: width * 0.9,
                    backgroundColor: '#e8e8e8'
                }}>

                    <View style={styles.inputView}>
                        <TextInput
                            keyboardType="phone-pad"
                            style={styles.inputText}
                            placeholder="Type your phone number"
                            placeholderTextColor="#a5a5a5"
                        />
                    </View>

                </View>

                <Text style={styles.label}>Email</Text>
                <View style={{
                    height: 50,
                    borderRadius: 8,
                    marginBottom: 20,
                    flexDirection: 'row',
                    paddingHorizontal: 15,
                    width: width * 0.9,
                    backgroundColor: '#e8e8e8'
                }}>

                <View style={styles.inputView}>
                    <TextInput
                        keyboardType="phone-pad"
                        style={styles.inputText}
                        placeholder="Type your email address"
                        placeholderTextColor="#a5a5a5"
                    />
                </View>

                </View>

                <Text style={styles.label}>Password</Text>
                <View style={{
                    height: 50,
                    borderRadius: 8,
                    marginBottom: 20,
                    flexDirection: 'row',
                    paddingStart: 15,
                    width: width * 0.9,
                    backgroundColor: '#e8e8e8'
                }}>

                    <View style={styles.inputView}>
                        <TextInput
                            keyboardType="phone-pad"
                            style={styles.inputText}
                            placeholder="Type your password"
                            placeholderTextColor="#a5a5a5"
                        />
                    </View>

                    <ChangeIconEye/>

                </View>

                <View>
                    <TouchableOpacity style={styles.signUpButton}>
                        <Text style={styles.signUpButtonText}>Sign Up</Text>
                    </TouchableOpacity>
                    <Text style={styles.alreadyHaveAccount}>Already have a Dokterku account?
                        <Text onPress={() => navigation.replace('LoginScreen')} style={{ color: "#b20090", fontWeight: '800' }}> Enter here</Text>
                    </Text>
                    <Text style={styles.iAgreeText}>by registering, I agree to the
                        <Text style={{ color: "#a5a5a5", fontWeight: '800', textDecorationLine: 'underline' }}> Privacy Policy</Text>
                    </Text>
                </View>


            </View>
        </View>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'top',
        alignItems: 'center',
    },
    header: {
        paddingHorizontal: 20,
        width: width * 1,
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        flex: 1,
        textAlign: 'center',
        marginHorizontal: 'auto',
        paddingEnd: 20,
        fontSize: 24,
        fontFamily: 'Poppins_700Bold',
    },
    banner: {
        backgroundColor: '#fff',
        padding: 20,
        marginVertical: 30,
        borderRadius: 30,
        alignItems: 'center',
        alignSelf: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowOpacity: 0.8,
        elevation: 6,
        shadowRadius: 15,
        shadowOffset: { width: 1, height: 13 },
    },
    formSection: {
        flex: 1,
        alignContent: 'flex-start',
        textAlign: 'left',
    },
    label: {
        fontSize: 16,
        fontFamily: 'Poppins_700Bold',
        textAlign: 'left',
    },
    inputView: {
        width: "72%",
        height: 50,
        marginStart: 20,
    },
    inputText: {
        fontSize: 16,
        height: 50,
        color: "#6c6c6c",
    },
    signUpButton: {
        width: width * 0.9,
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 20,
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: '#b20090',
        height: 50,
    },
    signUpButtonText: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#fff',
        fontSize: 18,
    },
    alreadyHaveAccount: {
        alignContent: 'center',
        textAlign: 'center',
        paddingTop: 30,
        width: width * 0.9,
        fontFamily: 'Poppins_400Regular',
        color: '#6c6c6c',
        fontSize: 14,
    },
    iAgreeText: {
        alignContent: 'center',
        textAlign: 'center',
        paddingTop: 4,
        width: width * 0.9,
        fontFamily: 'Poppins_500Medium',
        color: '#d7d7d7',
        fontSize: 12,
    }
})
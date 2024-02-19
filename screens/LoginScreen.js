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

export default LoginScreen = ({ navigation }) => {

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

    let defaultTemp = { editingIndex: -1, text: '' }
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isRememberMe, setIsRememberMe] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const ChangeIconEye = () => {
        if (!showPassword) {
            return (
                <Icon.EyeOff onPress={toggleShowPassword} stroke="#a5a5a5" strokeWidth="2.5" width={20} height={20} style={{ marginVertical: 15, marginStart: 4 }} />
            )
        } else {
            return (
                <Icon.Eye onPress={toggleShowPassword} stroke="#a5a5a5" strokeWidth="2.5" width={20} height={20} style={{ marginVertical: 15, marginStart: 4 }} />
            )
        }
    }



    const Separator = () => {
        return (
            <View style={{
                flex: 1,
                height: 1,
                marginVertical: 20,
                width: width * 0.9,
                backgroundColor: '#d8d8d8'
            }}>

            </View>
        )
    }

    const EmailInput = () => {
        return (
            <View style={{
                height: 50,
                borderRadius: 8,
                marginVertical: 20,
                flexDirection: 'row',
                paddingHorizontal: 15,
                width: width * 0.9,
                backgroundColor: '#e8e8e8'
            }}>

                <Icon.Mail stroke="#a5a5a5" strokeWidth="2.5" width={20} height={20} style={{ marginVertical: 15, marginStart: 4 }} />

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Email"
                        placeholderTextColor="#a5a5a5"
                    />
                </View>

            </View>
        )
    }

    const PasswordInput = () => {
        return (
            <View style={{
                height: 50,
                borderRadius: 8,
                marginBottom: 20,
                flexDirection: 'row',
                paddingHorizontal: 15,
                width: width * 0.9,
                backgroundColor: '#e8e8e8'
            }}>

                <Icon.Lock stroke="#a5a5a5" strokeWidth="2.5" width={20} height={20} style={{ marginVertical: 15, marginStart: 4 }} />

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        secureTextEntry={!showPassword}
                        value={password}
                        onFocus={setPassword}
                        placeholder="Password"
                        placeholderTextColor="#a5a5a5"
                    />
                </View>

                <ChangeIconEye />

            </View>
        )
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.header}>
                <TouchableOpacity title="Go to Home" onPress={() => navigation.navigate('OnboardingScreen')}>
                    <Icon.ArrowLeft stroke="#505050" strokeWidth="2.5" width={24} height={24} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Iqlix Login</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.facbookSignInButton}>
                    <Image source={require("../assets/images/facebookIcon.png")} style={{ width: 20, height: 20, marginEnd: 12 }} />
                    <Text style={styles.facbookSignInText}>Sign in with Facebook</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.twitterSignInButton}>
                    <Image source={require("../assets/images/twitterIcon.png")} style={{ width: 24, height: 24, marginEnd: 12 }} />
                    <Text style={styles.twitterSignInText}>Sign in with Twitter</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.googleSignInButton}>
                    <Image source={require("../assets/images/googleIcon.png")} style={{ width: 20, height: 20, marginEnd: 12 }} />
                    <Text style={styles.googleSignInText}>Sign in with Google</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Separator />
                    <View>
                        <Text style={{
                            width: 40,
                            fontSize: 16,
                            fontFamily: 'Poppins_500Medium',
                            color: '#969696',
                            textAlign: 'center'
                        }}>
                            or
                        </Text>
                    </View>
                    <Separator />
                </View>

                {/* login form */}
                <View>
                    <EmailInput />
                    <PasswordInput />

                    <View style={{ flexDirection: 'row' }}>
                        <CheckBox
                            disabled={false}
                            value={isRememberMe}
                            onValueChange={(newValue) => setIsRememberMe(newValue)}
                        />
                        <Text style={{
                            justifyContent: 'center',
                            alignContent: 'center',
                            fontWeight: '800',
                            color: '#969696',
                            alignSelf: 'center',
                            marginStart: 20,
                            marginBottom: 3,
                            fontSize: 12
                        }}>
                            Remember Password
                        </Text>
                    </View>
                </View>

                <View>
                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>
                    <Text style={styles.dontHaveAccount}>Dont't have an account?
                        <Text onPress={() => navigation.replace('SignUpScreen')} style={{ color: "#b20090", fontWeight: '800' }}> Sign up Now</Text>
                    </Text>
                    <Text style={styles.forgerPasswordText}>Forget Password?</Text>
                </View>

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
    header: {
        paddingHorizontal: 20,
        width: width * 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 20,
    },
    headerText: {
        flex: 1,
        textAlign: 'center',
        marginHorizontal: 'auto',
        paddingEnd: 20,
        fontSize: 24,
        fontFamily: 'Poppins_700Bold',
    },
    facbookSignInButton: {
        flexDirection: 'row',
        width: width * 0.9,
        textAlign: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        alignItems: 'center',
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
        flexDirection: 'row',
        width: width * 0.9,
        textAlign: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: '#1da1f2',
        height: 50
    },
    twitterSignInText: {
        fontWeight: '900',
        color: '#fff',
        fontSize: 12,
    },
    googleSignInButton: {
        flexDirection: 'row',
        width: width * 0.9,
        textAlign: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: '#fff',
        height: 50,
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowOpacity: 0.8,
        elevation: 6,
        shadowRadius: 15,
        shadowOffset: { width: 1, height: 13 },
    },
    googleSignInText: {
        fontWeight: '900',
        color: '#2c2c2c',
        fontSize: 12,
    },
    inputView: {
        width: "72%",
        height: 50,
        marginStart: 30,
    },
    inputText: {
        fontSize: 16,
        height: 50,
        paddingTop: 4,
        color: "#6c6c6c",
    },
    loginButton: {
        width: width * 0.9,
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 20,
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: '#b20090',
        height: 50,
    },
    loginButtonText: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#fff',
        fontSize: 18,
    },
    dontHaveAccount: {
        alignContent: 'center',
        textAlign: 'center',
        paddingTop: 20,
        width: width * 0.9,
        fontFamily: 'Poppins_400Regular',
        color: '#6c6c6c',
        fontSize: 14,
    },
    forgerPasswordText: {
        alignContent: 'center',
        textAlign: 'center',
        paddingTop: 40,
        width: width * 0.9,
        fontFamily: 'Poppins_500Medium',
        color: '#b20090',
        fontSize: 14,
    }
})



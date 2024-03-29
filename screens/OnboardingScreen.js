import React from 'react';
import AppLoading from 'expo-app-loading';
import {
    SafeAreaView,
    Image,
    StyleSheet,
    FlatList,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
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


const { width, height } = Dimensions.get('window');

const COLORS = { primary: '#b20090', white: '#fff' };

const slides = [
    {
        id: '1',
        image: require('../assets/images/carousel1.png'),
        title: 'Iqlix Ready to Fulfill Your Excitement',
        subtitle: 'Iqlix has lots of quality movie, discover and explore experiences you have never had in this application'
    },
    {
        id: '2',
        image: require('../assets/images/carousel2.png'),
        title: 'Easy Booking, and No Need to Queue',
        subtitle: 'The advantage of Iqlix to order tickets easily excitement in wathing your excitement in watching your favorite movie'
    },
    {
        id: '3',
        image: require('../assets/images/carousel3.png'),
        title: 'Get Start Immediately to Take the Next Step',
        subtitle: 'We Offer several film recommendations for you to have an extraordinary experience'
    },
];

const Slide = ({ item }) => {

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

    return (
        <View style={[styles.container, { width }]}>
            <View style={styles.imageContainer}>
                <Image
                    source={item?.image}
                    style={{ height: '75%', width, resizeMode: 'contain' }}
                />
            </View>
            <Image source={require('../assets/images/bottomOval.png')} style={[styles.halfOval, { width }]} />
            <View>
                <Text style={styles.title}>{item?.title}</Text>
                <Text style={styles.subtitle}>{item?.subtitle}</Text>
            </View>
        </View>
    );
};

const OnboardingScreen = ({ navigation }) => {

    const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
    const ref = React.useRef();
    const updateCurrentSlideIndex = e => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    };

    const goToNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex != slides.length) {
            const offset = nextSlideIndex * width;
            ref?.current.scrollToOffset({ offset });
            setCurrentSlideIndex(currentSlideIndex + 1);
        }
    };

    const skip = () => {
        const lastSlideIndex = slides.length - 1;
        const offset = lastSlideIndex * width;
        ref?.current.scrollToOffset({ offset });
        setCurrentSlideIndex(lastSlideIndex);
    };

    const Footer = () => {
        return (
            <View
                style={{
                    height: height * 0.20,
                    marginBottom: 24,
                    justifyContent: 'space-between',
                    paddingHorizontal: 20,
                }}>
                {/* Indicator container */}
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop: 20,
                    }}>
                    {/* Render indicator */}
                    {slides.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.indicator,
                                currentSlideIndex == index && {
                                    backgroundColor: COLORS.primary,
                                    width: 24,
                                    height: 8,
                                    borderRadius: 12
                                },
                            ]}
                        />
                    ))}
                </View>

                {/* Render buttons */}
                <View style={{ marginBottom: 10 }}>
                    {currentSlideIndex == slides.length - 1 ? (
                        <View style={{ height: 50 }}>
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={() => navigation.replace('LoginScreen')}>
                                <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: 15,
                                    color: '#fff'
                                }}>
                                    GET STARTED
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={[
                                    styles.btn,
                                    {
                                        backgroundColor: '#ffdbf8',
                                    },
                                ]}
                                onPress={skip}>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        fontSize: 15,
                                        color: COLORS.primary,
                                    }}>
                                    SKIP
                                </Text>
                            </TouchableOpacity>
                            <View style={{ width: 15 }} />
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={goToNextSlide}
                                style={styles.btn}>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        fontSize: 15,
                                        color: COLORS.white
                                    }}>
                                    NEXT
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={{ flex: 3 }}>

            <StatusBar backgroundColor={COLORS.primary} />
            <FlatList
                ref={ref}
                onMomentumScrollEnd={updateCurrentSlideIndex}
                contentContainerStyle={{ height: height * 0.75 }}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={slides}
                pagingEnabled
                renderItem={({ item }) => <Slide item={item} />}
            />
            <Footer />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
    },
    imageContainer: {
        backgroundColor: '#b20090',
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        height: height * 0.45,
    },
    halfOval: {
        height: 48,
        marginBottom: 32,
    },
    subtitle: {
        fontSize: 16,
        // fontFamily: 'Poppins_400Regular',
        lineHeight: 28,
        marginBottom: 10,
        color: '#a8a8a8',
        textAlign: 'center',
        marginHorizontal: 45,
        marginTop: 12,
    },
    title: {
        fontSize: 28,
        // fontFamily: 'Poppins_600SemiBold',
        marginBottom: 10,
        lineHeight: 36,
        color: '#252525',
        textAlign: 'center',
        paddingHorizontal: 26,
        marginHorizontal: 24,
    },
    image: {
        height: '50%',
        width: '50%',
    },
    indicator: {
        height: 8,
        width: 10,
        backgroundColor: '#d9d9d9',
        marginHorizontal: 3,
        borderRadius: 12,
    },
    btn: {
        color: '#fff',
        flex: 1,
        height: 50,
        borderRadius: 24,
        backgroundColor: '#b20090',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default OnboardingScreen;
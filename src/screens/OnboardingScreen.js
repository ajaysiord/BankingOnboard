import React from 'react'
import { SafeAreaView, Image, StyleSheet, FlatList, View, Text, StatusBar, TouchableOpacity, Dimensions, } from 'react-native';

const { width, height } = Dimensions.get('window');

const COLORS = { primary: '#282534', white: '#fff' };

const slides = [
    {
        id: '1',
        image: require('../images/image1.png'),
        title: 'Best Digital Solution',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        id: '2',
        image: require('../images/image2.png'),
        title: 'Achieve Your Goals',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        id: '3',
        image: require('../images/image3.png'),
        title: 'Increase Your Value',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
];

const Slide = ({ item }) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Image
                source={item?.image}
                style={{ height: '75%', width, resizeMode: 'contain' }}
            />
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
            <View style={styles.footer}>
                {/* Indicator container */}
                <View
                    style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20, }}>
                    {/* Render indicator */}
                    {slides.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.indicator,
                                currentSlideIndex == index && {
                                    backgroundColor: COLORS.white,
                                    width: 25,
                                },
                            ]}
                        />
                    ))}
                </View>

                {/* Render buttons */}
                <View style={{ marginBottom: 20 }}>
                    {currentSlideIndex == slides.length - 1 ? (
                        <View style={{ height: 50 }}>
                            <TouchableOpacity
                                style={{ height: 50,
                                    width:300,
                                    bottom: 30,
                                    borderRadius: 10,
                                    backgroundColor: 'white',
                                    justifyContent: 'center',
                                    alignItems: 'center'}}
                                onPress={() => navigation.replace('HomeScreen')}>
                                <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#1e90ff' }}>
                                    GET STARTED
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={{
                                    height: 30, width: 70, backgroundColor: 'white', justifyContent: 'center',
                                    alignItems: 'center', borderRadius: 15, bottom: 550, left: 250,
                                }}
                                onPress={skip}>
                                <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#1e90ff', }}>SKIP </Text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={goToNextSlide}
                                style={styles.btn}>
                                <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#1e90ff', }}>NEXT</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
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
    subtitle: {
        color: COLORS.white,
        fontSize: 13,
        marginTop: 10,
        maxWidth: '70%',
        textAlign: 'center',
        lineHeight: 23,
    },
    title: {
        color: COLORS.white,
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
    },
    indicator: {
        height: 5,
        width: 50,
        top: 40,
        backgroundColor: 'orange',
        marginHorizontal: 3,
        borderRadius: 2,
    },
    footer: {
        flex: 1,
        backgroundColor: '#1e90ff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 90,
        paddingHorizontal: 30
    },
    btn: {
        height: 50,
        width:150,
        bottom: 30,
        borderRadius: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default OnboardingScreen;

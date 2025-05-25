import { ScrollView, View, Image, Text, useColorScheme } from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';
import logo from '../assets/logo.png';

export default function WelcomeScreen() {

    const colorScheme = useColorScheme();
    const isLight = colorScheme === 'light';


    return (
        <ScrollView
            contentContainerStyle={[
                GlobalStyles.welcomeContainer,
                { backgroundColor: isLight ? '#FFFFFF' : '#333333' },
            ]}
        >

                <View style={GlobalStyles.welcomeHeader}>
                    <Image style={GlobalStyles.logo}
                        source={logo}
                        resizeMode='contain'
                        accessible={true}
                        accessibilityLabel={'Little Lemon Logo'}
                    />
                    <Text style={[GlobalStyles.welcomeTitle,
                    {color: isLight ? '#000000' : '#FFFFFF'}, ]}>
                        Welcome to Little Lemon
                    </Text>
                </View>

                <Text style={[GlobalStyles.welcomeSubtitle, {color: isLight ? '#333' : '#EDEFEE'}, ]}>
                    Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
                </Text>
        </ScrollView>
    );
};
import { useState } from "react";
import GlobalStyles from '../styles/GlobalStyles';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleLogin = () => {
        if (!email || !password) {
            alert('Please enter both email and password.');
            return;
        }

        setSubmitted(true);
        setEmail('');
        setPassword('');
        setTimeout(() => {
            setSubmitted(false);
        }, 3000);
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#FFF' }}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >

                <ScrollView 
                contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
                keyboardShouldPersistTaps="handled"
                >

                    <View style={GlobalStyles.loginContainer}>
                        <Text style={GlobalStyles.loginHeaderText}>Welcome to Little Lemon</Text>
                        <Text style={GlobalStyles.regularText}>Login to continue</Text>

                        {submitted ? (
                            <Text style={GlobalStyles.loginSuccessMessage}>
                                You are logged in!
                            </Text>
                        ) : (

                            <>
                                <Text style={GlobalStyles.label}>Email</Text>
                                <TextInput
                                    style={[GlobalStyles.inputBase, GlobalStyles.input]}
                                    value={email}
                                    onChangeText={setEmail}
                                    placeholder='Enter your email'
                                    keyboardType='email-address'
                                    autoCapitalize='none'
                                    placeholderTextColor='#666'
                                    clearButtonMode='while-editing'
                                />

                                <Text style={GlobalStyles.label}>Password</Text>
                                <TextInput
                                    style={[GlobalStyles.inputBase, GlobalStyles.input]}
                                    value={password}
                                    onChangeText={setPassword}
                                    placeholder='Enter your password'
                                    secureTextEntry={true}
                                    placeholderTextColor='#666'
                                />

                                <Pressable
                                    onPress={handleLogin}
                                    style={({ pressed }) => [
                                        GlobalStyles.loginButton,
                                        pressed && GlobalStyles.loginButtonPressed,
                                    ]}
                                >
                                    <Text style={GlobalStyles.loginButtonText}>Login</Text>
                                </Pressable>
                            </>
                        )}
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
};




import { useState } from "react";
import GlobalStyles from "../styles/GlobalStyles";


export default function FeedbackScreen() {

    const [firstName, onChangeFirstName] = useState('');
    const [lastName, onChangeLastName] = useState('');
    const [phoneNumber, onChangePhoneNumber] = useState('');
    const [message, onChangeMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        if (!firstName || !lastName || !phoneNumber || !message) {
            alert('Please fill in all fields.');
            return;
        }

        console.log('Feedback submitted!');
        console.log({ firstName, lastName, phoneNumber, message });

        setSubmitted(true);
        onChangeFirstName('');
        onChangeLastName('');
        onChangePhoneNumber('');
        onChangeMessage('');

        setTimeout(() => {
            setSubmitted(false);
        }, 3000);
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#FFF' }}>
            <KeyboardAvoidingView
                style={{ flex: 1}}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >

                <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center'}}
                keyboardShouldPersistTaps="handled"
                >


                    <View style={GlobalStyles.introContainer}>
                        <Text style={GlobalStyles.sectionHeading}>
                            Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear your experience with us!
                        </Text>
                    </View>

                    <View style={GlobalStyles.formContainer}>
                        <Text style={GlobalStyles.sectionSubheading}>
                            How was your visit to Little Lemon?
                        </Text>

                        {submitted && (
                            <Text style={GlobalStyles.loginSuccessMessage}>
                                Thank you for your feedback!
                            </Text>
                        )}

                        <Text style={GlobalStyles.label}>First Name</Text>
                        <TextInput
                            style={[GlobalStyles.inputBase, GlobalStyles.input]}
                            value={firstName}
                            onChangeText={onChangeFirstName}
                            placeholder="Enter your first name"
                            placeholderTextColor='#888'
                        />

                        <Text style={GlobalStyles.label}>Last Name</Text>
                        <TextInput
                            style={[GlobalStyles.inputBase, GlobalStyles.input]}
                            value={lastName}
                            onChangeText={onChangeLastName}
                            placeholder="Enter your last name"
                            placeholderTextColor='#888'
                        />

                        <Text style={GlobalStyles.label}>Phone Number</Text>
                        <TextInput
                            style={[GlobalStyles.inputBase, GlobalStyles.input]}
                            value={phoneNumber}
                            onChangeText={onChangePhoneNumber}
                            placeholder="Enter your phone number"
                            keyboardType="phone-pad"
                            placeholderTextColor='#888'
                        />

                        <Text style={GlobalStyles.label}>Your Message</Text>
                        <TextInput
                            style={[GlobalStyles.inputBase, GlobalStyles.messageInput]}
                            value={message}
                            onChangeText={onChangeMessage}
                            placeholder="Leave your feedback here"
                            multiline={true}
                            maxLength={250}
                            placeholderTextColor='#888'
                        />

                        <Pressable
                            onPress={handleSubmit}
                            style={({ pressed }) => [
                                GlobalStyles.submitButton,
                                pressed && GlobalStyles.submitButtonPressed,
                            ]}
                        >
                            <Text style={GlobalStyles.submitButtonText}>Submit</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
};


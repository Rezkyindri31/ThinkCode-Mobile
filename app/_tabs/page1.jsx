import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';

const Page1 = () => {
    // State to hold the value of the input
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    // Function to handle form submission
    const handleSubmit = () => {
        if (name && description) {
            Alert.alert('Form Submitted', `Name: ${name}\nDescription: ${description}`);
        } else {
            Alert.alert('Error', 'Please fill out both fields.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Page 1: Simple Form</Text>

            <TextInput
                style={styles.input}
                placeholder="Enter your name"
                value={name}
                onChangeText={setName}
            />

            <TextInput
                style={styles.input}
                placeholder="Enter a description"
                value={description}
                onChangeText={setDescription}
                multiline
            />

            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    submitButton: {
        backgroundColor: '#4CAF50',
        padding: 15,
        alignItems: 'center',
        borderRadius: 8,
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Page1;

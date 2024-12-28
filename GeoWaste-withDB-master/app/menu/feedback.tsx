import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function FeedbackPage() {
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (!feedback.trim() || !email.trim()) {
      Alert.alert('Error', 'Please fill in all fields before submitting.');
      return;
    }
    Alert.alert('Thank you!', 'Your feedback has been submitted successfully.');
    setFeedback('');
    setEmail('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feedback</Text>
      <Text style={styles.subtitle}>We value your feedback! Let us know how we can improve.</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={[styles.input, styles.textarea]}
        placeholder="Enter your feedback"
        value={feedback}
        onChangeText={setFeedback}
        multiline={true}
        numberOfLines={5}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit Feedback</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  textarea: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

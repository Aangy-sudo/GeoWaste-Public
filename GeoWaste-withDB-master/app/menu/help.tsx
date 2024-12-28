import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function HelpPage() {
  const faqs = [
    {
      question: 'How do I petition a collection?',
      answer: 'Go to the "Petition Collection" section and tap on the button to submit a petition for waste collection.',
    },
    {
      question: 'How can I check the collection schedule?',
      answer: 'Navigate to the "Collection Schedule" page to view your weekly collection schedule.',
    },
    {
      question: 'How do I search for recycling stations?',
      answer: 'Go to the "Recycling Stations" page and use the search bar to find stations near you. You can filter results using the dropdown menu.',
    },
    {
      question: 'Can I update my address?',
      answer: 'Yes, go to the "User Profile" page and update your address information.',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Help & Resources</Text>
      {faqs.map((faq, index) => (
        <View key={index} style={styles.faq}>
          <Text style={styles.question}>{faq.question}</Text>
          <Text style={styles.answer}>{faq.answer}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 20,
    textAlign: 'center',
  },
  faq: {
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  answer: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
  },
});

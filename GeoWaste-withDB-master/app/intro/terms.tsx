import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export default function TermsScreen() {
  const [isChecked, setIsChecked] = useState(false);

  const handleAgree = () => {
    console.log('Agreed to Terms & Conditions');
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>General Terms & Conditions & Privacy Policy</Text>
        <Text style={styles.text}>
          At GeoWaste, we value your privacy and are committed to protecting your personal data. 
          We process your information in accordance with the Data Privacy Act of 2012 (Republic Act No. 10173) 
          and other applicable regulations in the Philippines. The purposes for which users' personal data are 
          processed are clearly defined and fully compliant with the law. We implement all necessary technical, 
          legal, and organizational measures to safeguard your data from destruction, loss, unauthorized access, 
          or modification.
        </Text>
        <Text style={styles.text}>
          Our application offers real-time garbage truck tracking and a recycling guide. We ensure that any data 
          collected, such as location information for tracking and notifications, is handled responsibly and securely.
        </Text>
        <Text style={styles.text}>
          Before collecting any personal data, we obtain explicit consent from users, which is stored and noted 
          within the app for future reference and compliance purposes. By continuing to use our services, users 
          acknowledge that they have been informed of our data practices and have provided their consent.
        </Text>
        <Text style={styles.text}>
          This privacy statement applies to users who access the GeoWaste application or any associated services.
        </Text>
      </ScrollView>

      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isChecked}
          onValueChange={setIsChecked}
          tintColors={{ true: '#4CAF50', false: '#ccc' }}
        />
        <Text style={styles.checkboxText}>
          I agree to the Terms & Conditions & Privacy Policy.
        </Text>
      </View>

      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: isChecked ? '#4CAF50' : '#ccc' },
        ]}
        onPress={handleAgree}
        disabled={!isChecked}
      >
        <Text style={styles.buttonText}>Get started!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  scrollView: {
    flex: 1,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 15,
    color: '#555',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 10,
  },
  button: {
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

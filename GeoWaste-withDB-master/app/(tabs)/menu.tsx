import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function MenuPage() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}

      {/* User Profile Section
      <View style={styles.profileContainer}>
        <Image
          source={require('../../assets/images/user-profile.png')} // Replace with actual profile image
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>John Doe</Text>
        <TouchableOpacity style={styles.editProfileButton} onPress={() => router.push('/profile')}>
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </TouchableOpacity>
      </View> */}

      {/* Help & Resources */}
      <TouchableOpacity style={styles.menuItem} onPress={() => router.push('../menu/help')}>
        <Image
          source={require('../../assets/images/help.png')}
          style={styles.icon}
        />
        <Text style={styles.menuText}>Help & Resources</Text>
      </TouchableOpacity>

      {/* Feedback */}
      <TouchableOpacity style={styles.menuItem} onPress={() => router.push('../menu/feedback')}>
        <Image
          source={require('../../assets/images/feedback.png')}
          style={styles.icon}
        />
        <Text style={styles.menuText}>Feedback</Text>
      </TouchableOpacity>

      {/* Terms and Conditions
      <TouchableOpacity style={styles.menuItem} onPress={() => router.push('../intro/terms')}>
        <Text style={styles.menuText}>Terms & Conditions</Text>
        <Image
          source={require('../../assets/images/terms.png')}
          style={styles.icon}
        />
      </TouchableOpacity> */}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  profileContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  editProfileButton: {
    marginTop: 10,
    backgroundColor: '#4CAF50',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  editProfileText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 20,
  },
  menuText: {
    fontSize: 18,
    color: '#333',
  },
});

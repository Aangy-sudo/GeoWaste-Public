import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router"; // Import the router for navigation

export default function HomeScreen() {
  const [petitionCount, setPetitionCount] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const router = useRouter(); // Initialize the router for navigation

  // Handle Petition Collection Button Click
  const handlePetitionClick = () => {
    router.push("/intro");

    if (!isButtonDisabled) {
      setPetitionCount(petitionCount + 1);
      setIsButtonDisabled(true);
    }
  };

  return (
    <View style={styles.container}>
      {/* Petition Section */}
      <View style={styles.petitionSection}>
        <Text style={styles.heading}>Petitions in your barangay</Text>
        <View style={styles.circle}>
          <Text style={styles.petitionNumber}>{petitionCount}</Text>
        </View>
        <TouchableOpacity
          style={[
            styles.button,
            isButtonDisabled && styles.buttonDisabled,
          ]}
          onPress={handlePetitionClick} // Navigate on press
          disabled={isButtonDisabled}
        >
          <Text style={styles.buttonText}>Petition Collection</Text>
        </TouchableOpacity>
        <Text style={styles.subtext}>⚠ My waste has not been collected</Text>
      </View>

      {/* Recycling Zone Section */}
      <View style={styles.recyclingSection}>
        <Text style={styles.location}>Natalio B. Bacalso Ave</Text>
        <Text style={styles.subtext}>Basak Pardo, Cebu City</Text>
        <View style={styles.collectionHours}>
          <Text style={styles.collectionHoursText}>
            Collection Hours 10:00 PM - 12:00 AM
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  petitionSection: {
    alignItems: "center",
    marginTop: 150,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: "#FFA726",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#FFA726",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  petitionNumber: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 30,
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
  },
  buttonText: {
    color: "#fff",
    fontSize: 19,
    fontWeight: "bold",
  },
  subtext: {
    fontSize: 12,
    color: "#777",
    marginTop: 5,
  },
  recyclingSection: {
    alignItems: "center",
    marginBottom: 30,
  },
  location: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  collectionHours: {
    backgroundColor: "#F1F1F1",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
  },
  collectionHoursText: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
});

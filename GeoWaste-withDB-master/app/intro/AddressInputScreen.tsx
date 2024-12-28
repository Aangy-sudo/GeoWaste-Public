import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import app from "../../constants/firebaseConfig";
import { useRouter } from "expo-router";

export default function AddressRegistrationScreen() {
  const router = useRouter();

  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [barangay, setBarangay] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async () => {
    if (!province || !city || !barangay || !postalCode) {
      setMessage("All fields are required.");
      return;
    }

    const db = getFirestore(app);

    try {
      // Fetch and increment the current userID
      const counterRef = doc(db, "counters", "addresses");
      const counterSnap = await getDoc(counterRef);

      let newUserId = "001"; // Default if no counter exists
      if (counterSnap.exists()) {
        const currentId = counterSnap.data().currentId;
        newUserId = String(currentId + 1).padStart(3, "0"); // Increment and pad with leading zeros
        await updateDoc(counterRef, { currentId: currentId + 1 }); // Update counter in Firestore
      } else {
        // Initialize the counter document if it doesn't exist
        await setDoc(counterRef, { currentId: 1 });
      }

      // Save the new address with the auto-incrementing userID
      await setDoc(doc(collection(db, "addresses"), newUserId), {
        userId: newUserId,
        province,
        city,
        barangay,
        postalCode,
        createdAt: new Date().toISOString(),
      });

      setMessage(`Address registered successfully with ID: ${newUserId}`);

      // Navigate to the Home/Petition Page
      router.push("/(tabs)/map");
    } catch (error) {
      if (error instanceof Error) {
        setMessage(`Error registering address: ${error.message}`);
      } else {
        setMessage("An unknown error occurred");
      }
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.heading}>Register Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Province"
          value={province}
          onChangeText={setProvince}
        />
        <TextInput
          style={styles.input}
          placeholder="City/Municipality"
          value={city}
          onChangeText={setCity}
        />
        <TextInput
          style={styles.input}
          placeholder="Barangay"
          value={barangay}
          onChangeText={setBarangay}
        />
        <TextInput
          style={styles.input}
          placeholder="Postal Code"
          value={postalCode}
          onChangeText={setPostalCode}
          keyboardType="numeric"
        />
        {message ? <Text style={styles.message}>{message}</Text> : null}
        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.registerButtonText}>Register Address</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#fff" },
  heading: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  message: {
    marginTop: 16,
    color: "green",
    textAlign: "center",
  },
  registerButton: {
    backgroundColor: "#4CAF50",
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  registerButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});

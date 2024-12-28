import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import MapView from 'react-native-maps';
import { useRouter } from 'expo-router';

export default function MapScreen() {
  const router = useRouter();
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedWasteType, setSelectedWasteType] = useState('Select Waste Type');
  const wasteTypes = ['Organic Waste', 'Glass', 'Residual Waste', 'Packing and Cartons', 'Batteries', 'Paper'];

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const selectWasteType = (type: string) => {
    setSelectedWasteType(type);
    setDropdownVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Header with Collection Points text */}
      {/* <View style={styles.header}>
        <Text style={styles.headerText}>Collection Points</Text>
        <TouchableOpacity style={styles.searchButton}>
        </TouchableOpacity>
      </View> */}

      {/* Dropdown Button */}
      <View style={styles.dropdownContainer}>
        <TouchableOpacity style={styles.dropdownButton} onPress={toggleDropdown}>
          <Text style={styles.dropdownText}>{selectedWasteType}</Text>
        </TouchableOpacity>
        {isDropdownVisible && (
          <View style={styles.dropdown}>
            {wasteTypes.map((type, index) => (
              <TouchableOpacity
                key={index}
                style={styles.dropdownItem}
                onPress={() => selectWasteType(type)}
              >
                <Text style={styles.dropdownItemText}>{type}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>

      {/* Google Map */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 10.290334219820963,
          longitude: 123.87066141843678,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        rotateEnabled={true}
        pitchEnabled={true}
        zoomEnabled={true}
        scrollEnabled={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#fff',
    position: 'relative',
    zIndex: 1, // Ensure header is on top of map
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchButton: {
    position: 'absolute',
    right: 20,
    bottom: -20, // Ensures it's at the bottom of the header
    width: 35,
    height: 35,
    backgroundColor: '#fff',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchIcon: {
    width: 15,
    height: 15,
  },
  map: {
    flex: 1,
  },
  bottomNavigation: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
  },
  navIcon: {
    width: 30,
    height: 30,
    tintColor: '#000',
  },
  /* Styles for Dropdown */
  dropdownContainer: {
    position: 'absolute',
    top: 10,
    left: '60%',
    transform: [{ translateX: -150 }], // Center the dropdown on the screen
    zIndex: 2, // Ensure the dropdown is above the map
    width: 200,
  },
  dropdownButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: 'center',
  },
  dropdownText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dropdown: {
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginTop: 5,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  dropdownItemText: {
    fontSize: 14,
  },
});

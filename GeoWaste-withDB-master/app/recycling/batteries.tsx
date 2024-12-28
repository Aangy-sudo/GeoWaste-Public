import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function BatteriesScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
      </TouchableOpacity>
      <Image
        source={require('../../assets/images/batteries-guide.png')}
        style={styles.detailsImage}
      />
      <Text style={styles.title}>Battery Waste</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  detailsImage: {
    width: '100%',
    height: '110%',
    resizeMode: 'contain',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1,
  },
  backButtonImage: {
    width: 30,
    height: 30,
  },
});

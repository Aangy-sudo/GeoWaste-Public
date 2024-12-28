import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function RecycleScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sorting your waste is a gift to the planet. Let’s make recycling a habit!</Text>

      {/* Top Row */}
      <View style={styles.topRow}>
        <TouchableOpacity onPress={() => router.push('../recycling/organic')}>
          <Image
            source={require('../../assets/images/organic-waste.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('../recycling/residual')}>
          <Image
            source={require('../../assets/images/residual-waste.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
      </View>

      {/* Middle Row */}
      <View style={styles.middleRow}>
        <TouchableOpacity onPress={() => router.push('../recycling/batteries')}>
          <Image
            source={require('../../assets/images/batteries.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('../recycling/glass')}>
          <Image
            source={require('../../assets/images/glass.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
      </View>

      {/* Bottom Row */}
      <View style={styles.bottomRow}>
        <TouchableOpacity onPress={() => router.push('../recycling/paper')}>
          <Image
            source={require('../../assets/images/paperncard.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('../recycling/packaging')}>
          <Image
            source={require('../../assets/images/packncart.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
      </View>
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
    fontSize: 20,
    padding: 50,
    marginTop: -70,
    textAlign: 'center',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
    gap: 10,
  },
  middleRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
    gap: 10,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
    gap: 10,
  },
  buttonImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});

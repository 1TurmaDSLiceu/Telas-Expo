import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { Accelerometer } from 'expo-sensors';

// npx expo install expo-sensors

export default function Acelerometro() {
  const [{ x, y, z }, setData] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    const subscription = Accelerometer.addListener(setData);
    return () => subscription.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Acelerômetro</Text>
      <View style={styles.valuesContainer}>
        <Text style={styles.value}>x: {x.toFixed(2)}</Text>
        <Text style={styles.value}>y: {y.toFixed(2)}</Text>
        <Text style={styles.value}>z: {z.toFixed(2)}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => Accelerometer.setUpdateInterval(2000)}>
          <Text style={styles.buttonText}>Lento</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => Accelerometer.setUpdateInterval(50)}>
          <Text style={styles.buttonText}>Rápido</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#B7F5B6',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#0D66D0',
    textAlign: 'center',
  },
  valuesContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  value: {
    fontSize: 22,
    marginVertical: 5,
    color: '#5b45b2',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    backgroundColor: '#5b45b2',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 22,
    textAlign: 'center',
  },
});

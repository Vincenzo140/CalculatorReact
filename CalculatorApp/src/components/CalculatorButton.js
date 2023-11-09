import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CalculatorButton = ({ value, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress(value)}>
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '25%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#006400', // Verde Palmeiras
    borderWidth: 1,
    borderColor: 'white',
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
  },
});

export default CalculatorButton;

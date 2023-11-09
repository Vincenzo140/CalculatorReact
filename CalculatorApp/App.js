import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  const [input, setInput] = useState('');

  const handlePress = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.input}>{input}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('1')}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('2')}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('3')}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.operationButton} onPress={() => handlePress('/')}>
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('4')}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('5')}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('6')}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.operationButton} onPress={() => handlePress('*')}>
            <Text style={styles.buttonText}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('7')}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('8')}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('9')}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.operationButton} onPress={() => handlePress('-')}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('0')}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.operationButton} onPress={() => handlePress('+')}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.operationButton} onPress={() => handleCalculate()}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.operationButton} onPress={() => handleClear()}>
            <Text style={styles.buttonText}>C</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  inputContainer: {
    backgroundColor: 'white',
    width: '100%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  input: {
    fontSize: 36,
  },
  buttonsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
  },
  button: {
    width: '20%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#006400',
    borderWidth: 1,
    borderColor: 'white',
    margin: 2,
  },
  operationButton: {
    width: '20%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#004080',
    borderWidth: 1,
    borderColor: 'white',
    margin: 2,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
  },
});

export default App;

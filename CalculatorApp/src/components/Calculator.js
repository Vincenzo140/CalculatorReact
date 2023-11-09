import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CalculatorButton from './CalculatorButton';

const Calculator = () => {
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
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Text style={styles.input}>{input}</Text>
        </ScrollView>
      </View>
      <View style={styles.buttonsContainer}>
        <CalculatorButton value="1" onPress={handlePress} />
        {/* Adicione botões para 0-9 e operações */}
        {/* Exemplo: */}
        {/* <CalculatorButton value="2" onPress={handlePress} /> */}
        <CalculatorButton value="=" onPress={handleCalculate} />
        <CalculatorButton value="C" onPress={handleClear} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Branco de fundo
  },
  inputContainer: {
    backgroundColor: '#006400', // Verde Palmeiras
    width: '100%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontSize: 24,
    color: 'white',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center', // Centralizar os botões
    marginTop: 10, // Espaçamento acima dos botões
  },
});

export default Calculator;

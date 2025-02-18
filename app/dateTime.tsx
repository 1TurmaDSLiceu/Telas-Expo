import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DateTime = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const showDatePicker = () => {
    setShow(true);
  };

  const onChange = (event: any, selectedDate: any) => {
    setShow(false);
    setDate(selectedDate || date);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.message}>Coloque abaixo a data do seu aniversário!</Text>
      <TouchableOpacity style={styles.button} onPress={showDatePicker}>
        <Text style={styles.buttonText}>Selecione a Data</Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
      <Text style={styles.dateText}>{date.toLocaleDateString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#B7F5B6',
  },
  message: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#0D66D0',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#5b45b2',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 22,
    textAlign: 'center',
  },
  dateText: {
    fontSize: 22, // Tamanho maior da fonte
    fontWeight: 'bold',
    color: '#0D66D0', // Cor escura para melhor legibilidade
    marginTop: 10,
  },
});

export default DateTime;

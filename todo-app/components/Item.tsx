import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface Props {
  todo: {
    id: string;
    text: string;
  };
  removeTodo: (id: string) => void;
}

export const Item = ({ todo, removeTodo }: Props) => {
  return (
    <TouchableOpacity onPress={() => removeTodo(todo.id)}>
      <View style={styles.container}>
        <MaterialIcons name="delete" size={18} color="#444" />
        <Text style={styles.text}>{todo.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    margin: 20,
    borderColor: 'coral',
    borderWidth: 1,
  },
  text: {
    marginLeft: 10,
  },
});

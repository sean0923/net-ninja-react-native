import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

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
        <Text>{todo.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 20,
    borderColor: 'coral',
    borderWidth: 1,
  },
});

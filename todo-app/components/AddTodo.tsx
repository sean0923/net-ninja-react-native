import React from 'react';
import { StyleSheet, View, TextInput, Button, Alert } from 'react-native';

interface Props {
  addTodo: (text: string) => void;
}

export const AddTodo: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = React.useState('');

  const handleChangeText = (val: string) => {
    setText(val);
  };

  const handleSubmit = () => {
    if (text.length < 3) {
      setTimeout(() => {
        Alert.alert('Oops', 'has to be more than 2 characters', [
          { text: 'OK', onPress: () => console.log('yeah') },
        ]);
      }, 50);
    } else {
      addTodo(text);
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="text"
        value={text}
        onChangeText={handleChangeText}
      />
      <Button title="Add TODO" color="coral" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 20 },
  textInput: { padding: 20, borderColor: 'gray', borderWidth: 1, margin: 20 },
});

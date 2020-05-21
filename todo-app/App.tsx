import React from 'react';
import { StyleSheet, View, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Header } from './components/Header';
import { Item } from './components/Item';
import { AddTodo } from './components/AddTodo';

const initialTodos = [
  { text: 'todo 1', id: '1' },
  { text: 'todo 2', id: '2' },
  { text: 'todo 3', id: '3' },
];
export default function App() {
  const [todos, setTodos] = React.useState(initialTodos);

  const handleEntireScreenPress = () => {
    console.log('aaa');
    console.log('bbb');
    Keyboard.dismiss();
  };

  const addTodo = (text: string) => {
    setTodos([{ text, id: Math.random().toString() }].concat(todos));
  };

  const removeTodo = (id: string) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  return (
    <TouchableWithoutFeedback onPress={handleEntireScreenPress}>
      <View style={styles.container}>
        <Header />
        <View style={styles.body}>
          <AddTodo addTodo={addTodo} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              keyExtractor={({ id }) => id}
              renderItem={({ item }) => <Item todo={item} removeTodo={removeTodo} />}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  body: {
    flex: 1,
    padding: 20,
  },
  list: {
    flex: 1,
  },
});

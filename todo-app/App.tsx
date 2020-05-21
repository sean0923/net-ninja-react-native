import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
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
    <View style={styles.container}>
      <Header />
      <AddTodo addTodo={addTodo} />
      <FlatList
        data={todos}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <Item todo={item} removeTodo={removeTodo} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

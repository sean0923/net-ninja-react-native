import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ListView,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

export const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.text}>Todo List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'coral',
    padding: 20,
    paddingTop: 60
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

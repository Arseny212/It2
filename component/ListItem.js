import  React  from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function ListItem({ el, deleteHandler }) {
  return (
   <TouchableOpacity onPress={() => deleteHandler(el.key)}>
    <Text style={styles.Text}>{el.Text}</Text>
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    Text: {
        padding: 20,
        textAlign: 'center',
        borderRadius: 5,
        backgroundColor: '#1E90FF',
        borderWidth: 1,
        marginTop: 20,
        width: '60%',
        marginLeft: '20%',

    }
});
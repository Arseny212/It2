import  React, {useState}  from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import Header from './component/Header';
import ListItem from './component/ListItem';
import Form from './component/Form';


export default function App() {
  const [listOfItems, setlistOfItems] = useState([
    {Text: 'Купить молоко', key: '1'},
    {Text: 'Помыть машину', key: '2'},
    {Text: 'Выучить React', key: '3'},
    {Text: 'Поговорить с Олей', key: '4'},
  ])

  const addHandler = (text) => {
    setlistOfItems((list) => {
      return [
        { Text: text, key: Math.random().toString(36).substring(7) },
        ...list 
      ]
    })
  }
  
  const deleteHandler = (key) => {
    setlistOfItems((list) => {
    return list.filter(listOfItems => listOfItems.key != key)
  });
}

  return (
    <View>
      <Header />
      <Form addHandler={addHandler}/>
      <View>
        <FlatList data={listOfItems} renderItem={({ item }) => (
          <ListItem el={item} deleteHandler={deleteHandler} /> 
        )}/>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({

});
 
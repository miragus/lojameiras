import { SafeAreaView, StyleSheet, StatusBar, Image, Text, View, FlatList } from 'react-native';
import {list} from './data';
import { ProductItem } from './components/product-item';
import { Product } from './types/Product';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>
      <Image 
        source={require('./assets/parmera.png')}
        resizeMode='cover'
        style={styles.hero}
      />
      <View style={styles.area}>
        <View style={styles.header}>
        <Text style={styles.h1}>℗rodutos no ℗recinho 👌</Text>
        </View>
        <FlatList
          data={list}
          renderItem={({item}: {item:Product})=> (<ProductItem product={item}/>)}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  hero:{
    width: '100%',
    height: 120,

  },
  area:{
    flex: 1,
    //padding: 10

    
    
  },
  h1:{
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold'
  },
  header:{
    backgroundColor: '#024F28',
    width: '100%',
    alignItems: 'center',
    justifyContent:'center',
    marginBottom: 25,
    height:60,
    
    

  }
});


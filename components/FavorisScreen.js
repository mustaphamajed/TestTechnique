
import React, { Component }  from 'react';
import { StyleSheet, Text, View , Dimensions, Image, TouchableHighlight, Alert} from 'react-native';

import Carousel from 'react-native-snap-carousel'; // Version can be specified in package.json


const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = 250;
const ITEM_HEIGHT = 350;

const DATA = [];
for (let i = 0; i < 10; i++) {
  DATA.push(i)
}
export default class FavorisScreen extends Component {
  state = {
    index: 0
  }

  constructor(props) {
    super(props);
    this._renderItem = this._renderItem.bind(this)
  }

  _renderItem({ item }) {
    return (
      <View style={styles.itemContainer}>
      <View style={{flex: 1, flexDirection: 'row', marginTop:20, }}>
        <Image style={styles.img}></Image>
        <Text style={styles.itemLabel}>Nom et Prenom</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'column', marginTop:20, marginRight:130 }}>
          <Text >formation:</Text>
        <Text >Description:</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'column', marginTop:20,marginRight:130 }}>
          <Text >formation:</Text>
        <Text >Description:</Text>
        </View>
        <View>
        <TouchableHighlight
             style={styles.submit}
             underlayColor='#fff'>
             <Text style={styles.submitText1} >Prendre un cours avec Teach'r</Text>
        </TouchableHighlight>
         <TouchableHighlight
            style={styles.submit1}
             underlayColor='#fff'>
         <Text style={styles.submitText}>Retire ce Teach'r de mes favoris</Text>
        </TouchableHighlight>
        
        </View>
                
      </View>
    );
  }
  
  render() {
    return (
      <View>
        <Carousel
          ref={(c) => this.carousel = c}
          data={DATA}
          renderItem={this._renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          containerCustomStyle={styles.carouselContainer}
                   
        />
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 7,
},
shadowOpacity: 0.41,
shadowRadius: 9.11,

elevation: 14,
  },
  carouselContainer: {
    
    marginTop: 150
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  itemLabel: {
    color: 'black',
    fontSize: 24,
    marginLeft:20
    
    
  },
  img: {
      width: 50,
    height: 50,
   
   
    borderRadius: 50 / 2,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "red"
  },
   submit:{
     height:30,
    backgroundColor:'#0000FF',
    borderRadius:5,
    borderWidth: 1,
    borderColor: '#fff'
  },
  submit1:{
    marginTop:5,
     height:30,
    backgroundColor:'#fff',
    borderRadius:5,
    borderWidth: 1,
    borderColor: '#FF0000'
  },
  submitText1:{
      color:'#fff',
      textAlign:'center',
  },
  submitText:{
      color:'#FF0000',
      textAlign:'center',
  }
});

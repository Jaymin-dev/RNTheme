import React from 'react';
import {Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import {Divider, useTheme} from 'react-native-paper';

//style
import styles from '../style';

const ListItems = ({placeList, setPlace}) => {
  const theme = useTheme();
  return (
    <View style={styles.listItemWrapper}>
      <FlatList
        data={placeList}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={setPlace(item.name)}>
            <View
              style={[
                styles.labelWrapper,
                {backgroundColor: theme.colors.onSurface},
              ]}>
              <Image source={item.image} style={styles.itemImage} />
              <Text
                style={{...styles.placeName, color: theme.colors.background}}>
                {item.name}
              </Text>
            </View>
            <Divider />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.uid}
      />
    </View>
  );
};
export default ListItems;

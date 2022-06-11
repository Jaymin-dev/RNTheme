import React from 'react';
import {Text, View, Image, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useTheme} from 'react-native-paper';

import ListItems from '../Components/ListItems';
import {PreferencesContext} from '../../../context';

//style
import styles from '../style';
import {
  brandColors,
  horizontalScale,
} from '../../../components/Core/basicStyles';

const MainWrapper = ({isShow, placeList, setPlace, search, placeSearch}) => {
  const theme = useTheme();
  const {toggleTheme} = React.useContext(PreferencesContext);
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.textInputWrapper}>
          <Icon
            name="search"
            style={styles.searchIcon}
            color={brandColors.gray}
            size={horizontalScale(20)}
          />
          <TextInput
            value={search}
            onChangeText={placeSearch}
            style={{...styles.textInput,backgroundColor: theme.colors.onSurface}}
            placeholder={'Search here'}
            placeholderTextColor={brandColors.gray}
          />
        </View>
        {isShow && <ListItems placeList={placeList} setPlace={setPlace} />}
      </View>
      <View>
        <View style={[styles.iconCover, {top: 10,backgroundColor: theme.colors.onSurface}]}>
          <MaterialCommunityIcons
            name="tune-variant"
            color={theme.colors.background}
            size={horizontalScale(20)}
            onPress={toggleTheme}
          />
        </View>
        <View style={{...styles.iconCover,backgroundColor: theme.colors.onSurface}}>
          <FontAwesome
            name="location-arrow"
            color={theme.colors.background}
            size={horizontalScale(20)}
          />
        </View>
      </View>
      <View style={{...styles.listWrapper,backgroundColor: theme.colors.onSurface}}>
        <Image
          source={require('../../../assets/place.png')}
          style={styles.listImage}
        />
        <View>
          <Text style={{...styles.header, color: theme.colors.background}}>
            Lokal Hamburk
          </Text>
          <Text style={styles.subTitle}>Pub in Prague</Text>
        </View>
      </View>
    </View>
  );
};

export default MainWrapper;

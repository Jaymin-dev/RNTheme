import React from 'react';
import {Image, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {useTheme} from 'react-native-paper';

import {PreferencesContext} from '../../../context';

//style
import styles from '../style';
import { horizontalScale } from '../../../components/Core/basicStyles';

import {locationList, locationData, DarkMapTheme, DefaultMapTheme} from '../../../utils/constants';

const MapViewComponent = () => {
  const theme = useTheme();
  const {isThemeDark} = React.useContext(PreferencesContext);
 
  return (
    <MapView
      showsUserLocation={true}
      followUserLocation
      loadingEnabled
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map}
      customMapStyle={!isThemeDark ? DarkMapTheme : DefaultMapTheme}
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      {locationData.map((i, index) => (
        <Marker
          opacity={0.9}
          tileSize={256}
          description={locationList[index].name}
          coordinate={{
            ...i,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <View
            style={{
              ...styles.markerWrapper,
              backgroundColor: theme.colors.onSurface,
              borderColor:theme.colors.background,
              borderRadius: horizontalScale(50),
              borderWidth:1
            }}>
            <Image
              source={locationList[index].image}
              style={styles.locationImage}
              resizeMode="contain"
            />
          </View>
        </Marker>
      ))}
    </MapView>
  );
};

export default MapViewComponent;

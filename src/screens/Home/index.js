import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import MainWrapper from './Components/MainWrapper';
import MapViewComponent from './Components/MapViewComponent';

//style
import styles from './style';

import {locationList} from '../../utils/constants';

const Home = () => {
  const [search, setSearch] = useState('');
  const [placeList, setPlaceList] = useState(locationList);
  const [isShow, setIsShow] = useState(false);

  //search function for location
  const placeSearch = searchText => {
    setIsShow(true);
    setSearch(searchText);
    let filteredData = locationList.filter(function (item) {
      return item.name
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase());
    });
    setPlaceList(filteredData);
  };

  //location setter
  const setPlace = place => () => {
    setIsShow(false);
    setSearch(place);
  };
  
  return (
    <SafeAreaView style={styles.mainWrapper}>
      <MapViewComponent />
      <MainWrapper
        placeList={placeList}
        setPlace={setPlace}
        search={search}
        isShow={isShow}
        placeSearch={placeSearch}
      />
    </SafeAreaView>
  );
};

export default Home;

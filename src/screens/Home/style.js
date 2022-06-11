import {StyleSheet} from 'react-native';
import {
  brandColors,
  fontScale,
  horizontalScale,
  verticalScale,
} from '../../components/Core/basicStyles';

const style = StyleSheet.create({
  mainWrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginHorizontal: horizontalScale(15),
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  searchIcon: {position: 'absolute', zIndex: 1, left: 15},
  textInputWrapper: {justifyContent: 'center', marginTop: verticalScale(30)},
  header: {
    fontSize: fontScale(14),
    fontWeight: '800',
  },
  subTitle: {
    fontSize: fontScale(12),
    fontWeight: '600',
    color: brandColors.gray,
  },
  placeName: {
    fontSize: fontScale(15),
    fontWeight: '500',
    padding: 10,
  },
  locationImage: {
    width: horizontalScale(30),
    height: horizontalScale(100),
  },
  listImage: {
    width: horizontalScale(50),
    height: horizontalScale(50),
    marginRight: horizontalScale(10),
    resizeMode: 'contain',
    borderRadius: 10,
  },
  listWrapper: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    borderRadius: 10,
    shadowColor: brandColors.black,
    shadowOffset: {width: 10, height: 20},
    shadowOpacity: 5,
    shadowRadius: 6,
    elevation: 5,
    bottom: 30,
  },
  iconCover: {
    right: 0,
    position: 'absolute',
    top: 60,
    height: 40,
    width: 40,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: 40,
    width: '100%',
    borderRadius: 10,
    paddingLeft: 50,
    fontWeight: '500',
  },
  listItemWrapper: {
    backgroundColor: 'white',
    marginTop: 5,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  itemImage: {
    width: horizontalScale(25),
    height: horizontalScale(25),
    marginRight: horizontalScale(5),
    resizeMode: 'contain',
    borderRadius: 10,
  },
  labelWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
  },
  markerWrapper:{
    width: horizontalScale(50),
    height: horizontalScale(50),
    backgroundColor:brandColors.gray,
    alignItems:'center',
    justifyContent:'center'
  }
});

export default style;

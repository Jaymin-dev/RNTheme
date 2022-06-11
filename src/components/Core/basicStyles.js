import {Dimensions, PixelRatio, Platform} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const [shortDimension, longDimension] =
  SCREEN_WIDTH < SCREEN_HEIGHT
    ? [SCREEN_WIDTH, SCREEN_HEIGHT]
    : [SCREEN_HEIGHT, SCREEN_WIDTH];

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const hScale = shortDimension / guidelineBaseWidth;
const vScale = longDimension / guidelineBaseHeight;

export function horizontalScale(val) {
  return hScale * val;
}

export function verticalScale(val) {
  return vScale * val;
}

export const isIOS = Platform.OS === 'ios';

export function fontScale(size) {
  const newSize = hScale * size;
  if (isIOS) {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
}

export function normalFontScale(size) {
  const newSize = hScale * size;
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
}

export const brandColors = {
  primaryColor:'rgb(60,109,130)',
  primaryLight:'rgb(99,146,166)',
  secondaryColor:'rgb(118,217,254)',
  secondaryLight:'#00E0E8',
  lightRed:'rgb(254,124,134)',
  lightGray:'#333333',
  textBlackColor: '#333647',
  placeHolder: '#7C82A1',
  whiteColor: '#FFFFFF',
  gray:"gray",
  transparentBlackColor: 'rgba(0, 0, 0, 0.1)',
  black: '#000',
  error: 'rgba(200, 0, 0, 0.8)',
};

let paddingMedium = horizontalScale(20);

export const layoutStyles = {
  paddingMedium,
  screenHeight: SCREEN_HEIGHT,
  screenWidth: SCREEN_WIDTH,
};

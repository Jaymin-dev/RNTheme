import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootNavigator from './SwitchNavigator';
import {PreferencesContext} from './context';
import {brandColors} from './components/Core/basicStyles';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import merge from 'deepmerge';

const CombinedDefaultTheme = merge(
  {
    ...PaperDefaultTheme,
    color: {
      ...PaperDefaultTheme.colors,
    },
  },
  {
    ...NavigationDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      onSurface: brandColors.lightGray,
      backgroundMode: brandColors.black,
    },
  },
);
const CombinedDarkTheme = merge(
  {
    ...PaperDarkTheme,
    color: {
      ...PaperDarkTheme.colors,
    },
  },
  {
    ...NavigationDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      backgroundMode: brandColors.whiteColor,
    },
  },
);
const App = () => {
  const [isThemeDark, setIsThemeDark] = React.useState(false);

  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark],
  );
  return (
    <PreferencesContext.Provider value={preferences}>
      <PaperProvider theme={theme}>
        <StatusBar
          hidden
          translucent
          backgroundColor={brandColors.whiteColor}
        />
        <SafeAreaProvider>
          <RootNavigator theme={theme} />
        </SafeAreaProvider>
      </PaperProvider>
    </PreferencesContext.Provider>
  );
};

export default App;

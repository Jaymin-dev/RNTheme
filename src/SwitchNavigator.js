import React from 'react';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Home from './screens/Home';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {View} from 'react-native';
import {horizontalScale, verticalScale} from './components/Core/basicStyles';

const Tab = createBottomTabNavigator();
const RootNavigator = ({theme}) => {
  return (
    <React.Fragment>
      <SafeAreaProvider>
        <NavigationContainer theme={theme}>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarStyle: {backgroundColor: theme.colors.backgroundMode},
            }}>
            <Tab.Screen
              name="Home"
              component={Home}
              options={{
                tabBarLabel: '',
                tabBarIcon: ({color, size}) => (
                  <SimpleLineIcons
                    name="compass"
                    style={{
                      fontSize: size,
                      color: color,
                    }}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Likes"
              component={Home}
              options={{
                tabBarLabel: '',
                tabBarIcon: ({color, size}) => (
                  <FontAwesome
                    name="map"
                    style={{
                      fontSize: size,
                      color: color,
                    }}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Center"
              component={Home}
              options={{
                tabBarLabel: '',
                tabBarButton: () => (
                  <View
                    style={{
                      height: horizontalScale(50),
                      width: horizontalScale(50),
                      backgroundColor: 'red',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: horizontalScale(50),
                      bottom: verticalScale(20),
                    }}>
                    <MaterialIcons
                      name="add"
                      style={{
                        fontSize: 32,
                        color: '#EDF2F4',
                      }}
                    />
                  </View>
                ),
              }}
            />
            <Tab.Screen
              name="Posts"
              component={Home}
              options={{
                tabBarLabel: '',
                tabBarIcon: ({color, size}) => (
                  <FontAwesome
                    name="bell-o"
                    style={{
                      fontSize: size,
                      color: color,
                    }}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Settings"
              component={Home}
              options={{
                tabBarLabel: '',
                tabBarIcon: ({color, size}) => (
                  <FontAwesome
                    name="user-o"
                    style={{
                      fontSize: size,
                      color: color,
                    }}
                  />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </React.Fragment>
  );
};

export default RootNavigator;

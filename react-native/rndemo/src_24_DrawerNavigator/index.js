// import React, {Component} from 'react';
import * as React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import {createDrawerNavigator,createAppContainer} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

Ionicons.loadFont();
function HomeScreen(prop) {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>Home Screen</Text>
      <Button
        title={'Open Drawer'}
        onPress={() => prop.navigation.openDrawer()}
      />
      <Button
        title={'Toggle Drawer'}
        onPress={() => prop.navigation.toggleDrawer()}
      />
    </View>
  );
}

function NewsScreen(prop) {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>News Screen</Text>
      <Button
        title={'Open Drawer'}
        onPress={() => prop.navigation.openDrawer()}
      />
      <Button
        title={'跳到 Home 页面'}
        onPress={() => prop.navigation.navigate('Home')}
      />
    </View>
  );
}

// const Drawer = createDrawerNavigator();
const RootStack = createDrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  Signup: {
    screen: NewsScreen
  }
});

const Index = createAppContainer(RootStack)

export default Index

// export default function index() {
//   return (
    
//     <NewsScreen/>
//     // <NavigationContainer>
//     //   22222
//     //   <Drawer.Navigator
//     //     drawerStyle={{
//     //       width: 180,
//     //       backgroundColor: '#dfb',
//     //     }}
//     //     drawerPosition={'right'}
//     //     drawerType={'slide'}
//     //     drawerContentOptions={{
//     //       activeTintColor: 'red',
//     //       itemStyle: {
//     //         // 设置菜单项的样式
//     //         marginVertical: 20,
//     //       },
//     //     }}>
//     //     <Drawer.Screen
//     //       name="Home"
//     //       component={HomeScreen}
//     //       options={{
//     //         title: '首页',
//     //         drawerIcon: ({focused, color, size}) => {
//     //           let iconName;
//     //           iconName = focused ? 'home' : 'home-outline';
//     //           return <Ionicons name={iconName} size={size} color={color} />;
//     //         },
//     //       }}
//     //     />
//     //     <Drawer.Screen
//     //       name="News"
//     //       component={NewsScreen}
//     //       options={{
//     //         title: '新闻',
//     //         drawerIcon: ({focused, color, size}) => {
//     //           let iconName;
//     //           iconName = focused ? 'person' : 'person-outline';
//     //           return <Ionicons name={iconName} size={size} color={color} />;
//     //         },
//     //       }}
//     //     />
//     //   </Drawer.Navigator>
//     // </NavigationContainer>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
  },
});

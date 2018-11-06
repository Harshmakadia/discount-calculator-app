import React from  'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image
} from "react-native";

//library imports 
import { Container, Content, Icon, Header, Body } from 'native-base'
import { DrawerNavigator, StackNavigator, DrawerItems, SafeAreaView } from 'react-navigation'

//custom files 
import DiscountScreen from './screens/discount'
import PercentageScreen from "./screens/percentage";

export default class App extends React.Component {
  render() {
    return (
      <MyApp />
    )
  }
}

const CustomDrawerContentComponent = (props) => (
  <Container>
    <Header style={styles.drawerHeader}>
      <Body>
        <Image
          style={styles.drawerImage}
          source={require('./assets/calculator.png')} />
        <Text style={styles.appName}>Calculator</Text>
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>

  </Container>

);

const MyApp = DrawerNavigator({

  // For each screen that you can navigate to, create a new entry like this:
  Percentage: {
    screen: PercentageScreen,
  },
  Discount: {
    screen: DiscountScreen
  }
},
  {
    initialRouteName: 'Percentage',
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  });


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerHeader: {
    height: 200,
    backgroundColor: 'white'
  },
  drawerImage: {
    height: 150,
    width: 150,
    borderRadius: 0
  },
  appName: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Helvetica"
  }
})
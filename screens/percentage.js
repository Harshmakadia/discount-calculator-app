import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image
} from "react-native";

//library imports
import { Icon, Button, Container, Header, Content, Left } from 'native-base'

//custom components imports 
import CustomHeader from './components/customHeader';

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Home",
    headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
    drawerLabel: 'Percentage Calculator',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/percent.png')}
        style={styles.icon}
      />
    ),
  })

  render() {
    return (
      <Container>
        <CustomHeader title="% Calculator" drawerOpen={() => this.props.navigation.openDrawer()} />
            <Content
            contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
            <Button
                onPress={() => this.props.navigation.navigate('Settings')} full>
                <Text style={{ color: 'white' }}>Go To Settings Screen</Text>
            </Button>
            </Content>
      </Container>
    )
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  },
});
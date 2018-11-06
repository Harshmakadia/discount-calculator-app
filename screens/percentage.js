import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput
} from "react-native";

//library imports
import { Icon, Button, Container, Header, Content, Footer, FooterTab } from 'native-base'

//custom components imports 
import CustomHeader from './components/customHeader';

class HomeScreen extends React.Component {
  constructor(){
    super()
    this.state = {
        amount : '5',
        percentageOf : '5',
        finalAmount: '100',
        showFinalAmount: false
    }
  }

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

  onPercentChanged(percentageOf){
    this.setState({ percentageOf });
  }

  onAmountChanged(amount){
    this.setState({ amount });
  }

  calculatePercentageOf(){
    let {percentageOf, amount} = this.state;
    percentageOf = parseFloat(percentageOf);
    amount = parseFloat(amount);
    let finalAmount = ((amount * percentageOf)/100).toFixed(2);
        this.setState({
          finalAmount,
          showFinalAmount: true
        });
  }

  render() {
    return (
      <Container>
        <CustomHeader title="% Calculator" drawerOpen={() => this.props.navigation.openDrawer()} />
            <Content
            contentContainerStyle={{ marginTop: 20, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
            <Text style={styles.title}>% Percentage of</Text>
                    <Text> {"\n"} </Text>
                    <TextInput 
                        style={styles.textInput}
                        keyboardType='numeric'
                        onChangeText={(text)=> this.onPercentChanged(text)}
                        value={this.state.percentageOf}
                        maxLength={10}  //setting limit of input
                    />

                    <Text> {"\n"}{"\n"} </Text>

                    <Text style={styles.title}>₹ Amount</Text>
                    <Text> {"\n"} </Text>
                    <TextInput 
                        style={styles.textInput}
                        keyboardType='numeric'
                        onChangeText={(text)=> this.onAmountChanged(text)}
                        value={this.state.amount}
                        maxLength={10}  //setting limit of input
                    />      
                    <Text> {"\n"}{"\n"} </Text>
                    {this.state.showFinalAmount && 
                    <View style={styles.view}>
                        <Text style={styles.title}>₹ Final Amount</Text>
                        <Text style={styles.result}>{this.state.finalAmount}</Text>
                    </View>}  
                </Content>
                <Footer>
                    <FooterTab>
                        <Button style={styles.btn} full onPress = {() => this.calculatePercentageOf()}>
                        <Text style={styles.calculateBtn}>Calculate % Of</Text>
                        </Button>
                    </FooterTab>
                </Footer>
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
  title:{
    height: 40,
    fontSize: 30,
    color: '#000000',
    textAlign: 'center',
    backgroundColor: '#00b0ff',
    width: '100%',
  },
  textInput: {
      height: 40,
      fontSize: 40,
      borderWidth: 1,
      borderBottomColor: '#dcdcdc',
      borderColor: 'transparent',
      width: '100%',
      textAlign: 'center'
  },
  result: {
    fontSize: 50,
    textAlign: 'center',
    marginTop: 20
  },
  btn: {
    backgroundColor: '#00b0ff'
  },
  view: {
    width: '100%'
  },
});
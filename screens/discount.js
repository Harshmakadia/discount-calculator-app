import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput
} from "react-native";
import { Container, Content, Icon, Button, Footer, FooterTab } from 'native-base';

//Custom Import
import CustomHeader from './components/customHeader';

class DiscountScreen extends React.Component {
    constructor(){
        super()
        this.state = {
            amount : '5',
            discount : '5',
            discountPrice: '100',
            showDiscountPrice: false
        }
    }

    static navigationOptions = ({ navigation }) => ({
        title: "Percentage Discount",
        headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} />,
        drawerIcon:
            <Image
                source={require('../assets/discount.png')}
                style={[styles.icon]}
            />

    })

    onAmountChanged(amount){
        this.setState({ amount });
    }

    onDiscountChanged(discount){
        this.setState({ discount });
    }

    calculateDiscount(){
        let {discount, amount} = this.state;
        amount = parseFloat(amount);
        discount = parseFloat(discount)/100;
        let discountPrice = amount - (amount * discount).toFixed(2);
        this.setState({
            discountPrice,
            showDiscountPrice: true
        });
    }

    render() {
        return (
            <Container>
                <CustomHeader
                    title="% Discount"
                    drawerOpen={() => this.props.navigation.openDrawer()}
                />
                <Content contentContainerStyle={{ marginTop: 20, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
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

                    <Text style={styles.title}>% Discount</Text>
                    <Text> {"\n"} </Text>
                    <TextInput 
                        style={styles.textInput}
                        keyboardType='numeric'
                        onChangeText={(text)=> this.onDiscountChanged(text)}
                        value={this.state.discount}
                        maxLength={10}  //setting limit of input
                    />      
                    <Text> {"\n"}{"\n"} </Text>
                    {this.state.showDiscountPrice && 
                    <View style={styles.view}>
                        <Text style={styles.title}>₹ Final Amount</Text>
                        <Text style={styles.result}>{this.state.discountPrice}</Text>
                    </View>}  
                </Content>
                <Footer>
                    <FooterTab>
                        <Button full primary onPress = {() => this.calculateDiscount()}>
                        <Text style={styles.calculateBtn}>Calculate</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}

export default DiscountScreen

const styles = StyleSheet.create({
    icon: {
        height: 30,
        width: 30
    },
    calculateBtn: {
        color: '#ffffff'
    },
    title:{
        height: 40,
        fontSize: 30,
        color: '#000000',
        textAlign: 'center',
        backgroundColor: '#dcdcdc',
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
    view: {
        width: '100%'
    },
    result: {
        fontSize: 50,
        textAlign: 'center',
        marginTop: 20
    }
})

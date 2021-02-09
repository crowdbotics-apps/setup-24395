import { connect } from "react-redux"
import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

class Blank extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }

  render = () => (
    <ImageBackground
      source={{
        uri:
          "https://d3tklmlrp1a8c2.cloudfront.net/media/resources/project/24395/a3cb92b0-c3a2-4775-a6b3-bb64cf00b41a.png"
      }}
      style={styles.ImageBackground_1}
    >
      <Button
        title="Press me!"
        style={styles.Button_2}
        onPress={() => this.props.navigation.navigate("BlankScreen14202789")}
      />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  ImageBackground_1: { backgroundSize: "contain" },
  Button_2: { marginTop: 144 }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)

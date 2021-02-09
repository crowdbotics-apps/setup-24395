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
          "https://d3tklmlrp1a8c2.cloudfront.net/media/resources/project/24395/d0901377-dc14-4cb2-8505-596d67cf80ea.png"
      }}
      style={styles.ImageBackground_1}
    >
      <Button
        title=""
        style={styles.Button_4}
        onPress={() => this.props.navigation.navigate("BlankScreen19202747")}
      />
      <Button
        title=""
        style={styles.Button_3}
        onPress={() =>
          this.props.navigation.navigate("WelcometotheFunRun10202733")
        }
      />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  ImageBackground_1: { backgroundSize: "contain" },
  Button_4: {
    width: "55%",
    marginLeft: -32,
    marginTop: 404,
    overflow: "hidden",
    alignSelf: "flex-end"
  },
  Button_3: {
    width: "35%",
    marginLeft: 265,
    marginTop: 192,
    overflow: "hidden"
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)

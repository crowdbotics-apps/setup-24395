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
    <ImageBackground style={styles.ImageBackground_1}>
      <Button
        title=","
        style={styles.Button_3}
        onPress={() =>
          this.props.navigation.navigate("WelcometotheFunRun10202733")
        }
      />
      <Button
        title="."
        style={styles.Button_5}
        onPress={() =>
          this.props.navigation.navigate("CopyofBlankScreen9202755")
        }
      />
      <Button
        title="."
        style={styles.Button_7}
        onPress={() => this.props.navigation.navigate("BlankScreen18202748")}
      />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  ImageBackground_1: { backgroundSize: "contain" },
  Button_3: { width: "41%", marginTop: 45 },
  Button_5: { width: "85%", marginLeft: 49, marginTop: 333 },
  Button_7: { width: "79%", marginLeft: 63, marginRight: 5, marginTop: 168 }
})

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Blank)

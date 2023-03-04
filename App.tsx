import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { appStyles } from "./app.style";
import { useFonts, Nunito_600SemiBold } from "@expo-google-fonts/nunito";
import * as Animatable from "react-native-animatable";

const App = () => {
  let [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
  });

  if (!fontsLoaded) return null;
  return (
    <View style={appStyles.baseContainer}>
      <ImageBackground
        source={require("./assets/get_started.png")}
        imageStyle={{
          width: "100%",
          height: 400,
          opacity: 0.1,
          borderBottomRightRadius: 300,
        }}
      >
        <Animatable.Text
          style={{
            color: "#fff",
            fontSize: 22,
            marginTop: 350,
            textAlign: "center",
            fontFamily: "Nunito_600SemiBold",
          }}
          animation="slideInDown"
        >
          Welcome to BookStore
        </Animatable.Text>
        <Animatable.Text
          style={{
            color: "grey",
            fontSize: 16,
            marginTop: 20,
            textAlign: "center",
            fontFamily: "Nunito_600SemiBold",
          }}
          animation="slideInUp"
        >
          The number one best e-book store and reader application of the century
        </Animatable.Text>
      </ImageBackground>

      <Animatable.View animation={"fadeInUp"}>
        <TouchableOpacity>
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
              marginTop: 20,
              textAlign: "center",
              fontFamily: "Nunito_600SemiBold",
              backgroundColor: "#526ee7",
              marginHorizontal: 20,
              borderRadius: 10,
              padding: 7,
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </Animatable.View>
      <Animatable.View animation={"fadeInUp"}>
        <TouchableOpacity>
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
              marginTop: 20,
              textAlign: "center",
              fontFamily: "Nunito_600SemiBold",
              backgroundColor: "#171B29",
              marginHorizontal: 20,
              borderRadius: 10,
              padding: 7,
            }}
          >
            Already Have An Account
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default App;

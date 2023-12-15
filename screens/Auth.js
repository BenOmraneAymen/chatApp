import { StatusBar } from "expo-status-bar";
import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../AuthProvider";
import firebase from "../config";
import {
  Alert,
  BackHandler,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground
} from "react-native";
import { Storage } from "expo-storage";

const userCredentials = () => {
  Alert.alert();
};

const auth = firebase.auth();
export default function Auth({ navigation }) {
  const [email, setEmail] = useState("fatmafatou3@gmail.com");
  const [password, setPassword] = useState("123456");
  const { currentUserID, setCurrentUserID } = useContext(AuthContext);
  useEffect(() => {
    const userLoggedIn = async () => {
      const item = await Storage.getItem({ key: "currentUserID" });
      if (item) {
        setCurrentUserID(item);
        navigation.navigate("home", { item });
      }
      console.log("user login :", item);
    };

    userLoggedIn();
  }, []);
  const signIn = async () => {
    console.log("email", email, " password : ", password);
    if (!email) {
      alert("email is required");
      return;
    }
    if (!password) {
      alert("password is required");
      return;
    }
    auth
      .signInWithEmailAndPassword(email, password)
      .then(async (res) => {
        console.log(res);
        const currentId = auth.currentUser.uid;
        setCurrentUserID(currentId);
        await Storage.setItem({
          key: "currentUserID",
          value: currentId,
        });
        navigation.navigate("home", { currentId });
      })
      .catch((err) => alert(err));
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/background.jpg')} resizeMode="cover" style={styles.image}>
        <Text style={{ color: "white", fontSize: 30 }}>Authentification</Text>
        <TextInput
          style={styles.text_input}
          value={email}
          placeholder="Email"
          placeholderTextColor="#FFF"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.text_input}
          value={password}
          placeholder="Password"
          placeholderTextColor="#FFF"
          onChangeText={(text) => setPassword(text)}
        />
        <View style={{ flex: 0, flexDirection: "row", gap: 10 }}>
          <Button title="Submit" onPress={signIn} />
          <Button title="Cancel" onPress={() => BackHandler.exitApp()} />
        </View>
        <Text
          style={{
            color: "white",
            alignSelf: "flex-end",
            paddingRight: 5,
            marginTop: 20,
          }}
          onPress={() => navigation.navigate("newUser")}
        >
          Create new user
        </Text>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40,
  },
  auth_container: {
    backgroundColor: "#0003",
    width: "90%",
    paddingTop: 50,
    height: 350,
    flex: 0,
    gap: 10,
    alignItems: "center",
    justifyContent: "start",
    borderRadius: 10,
  },
  text_input: {
    height: 40,
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "rgba(0,0,0,0)"
  },
});

import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function ProfilItem({
  firstName,
  lastName,
  num,
  url,
  id,
  setClickedProfile,
  setIsVisible,
  navigate,
}) {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          //setClickedProfile({ firstName, lastName, num, url, id });
          //setIsVisible(true);
          navigate.navigate("chat", {
            clickedProfile: { secondId: id, firstName, lastName, url },
          });
        }}
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          gap: 25,
        }}
      >
        <Image
          source={{ uri: url }}
          style={{
            width: 70,
            height: 70,
            marginVertical: 15,
            borderRadius: 50,
          }}
        />
        <Text style={{ fontSize: 18, marginBottom: 10 }}>
          {firstName} {lastName}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

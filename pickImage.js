import * as ImagePicker from "expo-image-picker";

export const pickImage = async () => {
  // No permissions request is necessary for launching the image library
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  //console.log(result.assets[0].uri);

  if (!result.canceled) {
    const uri = result.assets[0].uri;
    return uri;
  }
};
export const pickMessageImage = async () => {
  // No permissions request is necessary for launching the image library
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });
  if (!result.canceled) {
    const uri = result.assets[0].uri;
    return uri;
  }
};
export const imageToBlob = async (uri) => {
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function (e) {
      console.log(e);
      reject(new TypeError("Network request failed"));
    };
    xhr.responseType = "blob"; //bufferArray
    xhr.open("GET", uri, true);
    xhr.send(null);
  });
  return blob;
};

import AsyncStorage from '@react-native-community/async-storage';



export async function saveToken (token) {

    try {
        await AsyncStorage.setItem('user_token', token);
        console.log("token save in async")
        return true
      } catch (error) {

        console.log(error);
        
      }

}
export async function getToken () {
    try {
    const value = await AsyncStorage.getItem('user_token');
    return value;

  } catch (error) {
    console.log(error);
  }
}


import { View, StyleSheet, Text } from 'react-native';
import { Bubble } from "@typebot.io/react";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Olha que legal</Text>
      <Bubble
      typebot="my-typebot-6c30140"
      theme={{ button: { backgroundColor: "#0042DA" } }}
    />
      </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    padding: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,

  }
})
import { StyleSheet, View, Dimensions, Button } from "react-native";
import { useVideoPlayer, VideoView } from "expo-video";

const source = require("./assets/video.mp4");

export default function App() {
  const player = useVideoPlayer(source, (player) => {
    player.loop = true;
    player.staysActiveInBackground = true;
    player.play();
  });

  return (
    <View style={styles.container}>
      <VideoView
        player={player}
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").width * (9 / 16),
        }}
        allowsFullscreen
        allowsPictureInPicture
        startsPictureInPictureAutomatically
      />
      <View style={styles.controlsContainer}>
        <Button
          title="play"
          onPress={() => {
            player.play();
          }}
        />
        <Button
          title="pause"
          onPress={() => {
            player.pause();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  controlsContainer: {
    gap: 10,
    padding: 10,
  },
});

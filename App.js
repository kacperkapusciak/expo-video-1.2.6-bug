import { StyleSheet, View, Dimensions, Button } from "react-native";
import { useVideoPlayer, VideoView } from "expo-video";

const { width } = Dimensions.get("window");

const localSource = require("./assets/video.mp4");
const remoteSource =
  "https://videos.pexels.com/video-files/1580455/1580455-hd_1920_1080_30fps.mp4";

export default function App() {
  const player = useVideoPlayer(localSource, (player) => {
    player.loop = true;
    player.staysActiveInBackground = true;
    player.play();
  });

  return (
    <View style={styles.container}>
      <VideoView
        player={player}
        style={{
          width: width,
          height: width * (9 / 16),
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

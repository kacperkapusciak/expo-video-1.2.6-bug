import { useVideoPlayer, VideoView } from "expo-video";
import { useRef } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  SafeAreaView,
  Button,
} from "react-native";

const width = Dimensions.get("screen").width;

const localSource = require("./assets/video.mp4");
const remoteSource =
  "https://videos.pexels.com/video-files/1580455/1580455-hd_1920_1080_30fps.mp4";

export default function VideoScreen() {
  const ref = useRef(null);
  const player = useVideoPlayer(remoteSource, (player) => {
    player.loop = true;
    player.play();
  });

  return (
    <SafeAreaView style={styles.contentContainer}>
      <VideoView
        ref={ref}
        style={styles.video}
        player={player}
        allowsFullscreen
        allowsPictureInPicture
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: "#020617",
  },
  video: {
    width: width,
    height: width * (9 / 16),
  },
  controlsContainer: {
    gap: 10,
    padding: 10,
  },
});

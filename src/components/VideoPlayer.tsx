import { useVideoPlayer, VideoSource, VideoView } from 'expo-video';
import React from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';

const VideoPlayer = ({video, pause, full, contentFit,isConnect, native}: {video: any, isConnect:any, pause: any, full: boolean, contentFit: any, native: boolean}) => {
   
    const dimensions = useWindowDimensions()
    const styles = videoStyles(dimensions)
    
    const videoSource: VideoSource = {
        //assetId: video?.vid,
        uri: video?.vid || video,
        metadata: {
          title: video.title,
          artist: '',
        },
      };
    
      const player = useVideoPlayer(videoSource, player => {
        player.loop = true;
        player.showNowPlayingNotification = true ;
        player.muted = native ? false : true;
        pause ? player.pause() : player.play()
      });
  
    

  return (
    <View style={styles.contentContainer}>
       <VideoView style={[styles.video, {width: isConnect ? 200 : dimensions.width >= 400 ? dimensions.width : 400 }]} contentFit={contentFit} nativeControls={native} player={player}  allowsFullscreen={full} allowsPictureInPicture />
    </View>
  )
}

const videoStyles = (dimensions: any) => StyleSheet.create({
    contentContainer: {
      flex: 1,
    },
    video: {
        width: dimensions.width,
        height: dimensions.height >= 700 ? '100%' : '100%',
    },
  });

export default VideoPlayer
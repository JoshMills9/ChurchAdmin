// hooks/useExpoAudioRecorder.ts
import { AudioModule, RecordingPresets, useAudioRecorder } from 'expo-audio';
import { useState } from 'react';
import { Alert } from 'react-native';

export const useExpoAudioRecorder = () => {
  const [uri, setUri] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const audioRecorder = useAudioRecorder(RecordingPresets.HIGH_QUALITY);


  const requestPermission = async () => {
    const status = await AudioModule.requestRecordingPermissionsAsync();
    return status.granted;
  };

  const startRecording = async () => {
    const granted = await requestPermission();
    if (!granted) {
      Alert.alert('Microphone permission denied');
      return;
    }

    await audioRecorder.prepareToRecordAsync();
    audioRecorder.record();
    setIsRecording(true);
  };

  const stopRecording = async () => {
    if (isRecording) {
      await audioRecorder.stop();
      const recordingUri = audioRecorder.uri
      setUri(recordingUri);
      setIsRecording(false);
      return recordingUri;
    }
    return null;
  };

  return {
    uri,
    isRecording,
    startRecording,
    stopRecording,
  };
};

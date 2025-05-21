import ListComponent from '@/src/components/ListsComponent';
import { updateStyles } from '@/src/styles/update/update';
import React from 'react';
import { useWindowDimensions, View } from 'react-native';

const UpdateScreen = () => {

  const dimensions = useWindowDimensions();
  const styles = updateStyles(dimensions);

  return (
    <View style={styles.container}>
      <ListComponent />
    </View>
  )
}

export default UpdateScreen
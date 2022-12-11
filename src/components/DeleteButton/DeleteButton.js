import React from 'react';
import {TouchableOpacity} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './DeleteButton.style';

const DeleteButton = ({handlePress}) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <MaterialCommunityIcons name="delete-outline" style={styles.deleteIcon} />
    </TouchableOpacity>
  );
};

export default DeleteButton;

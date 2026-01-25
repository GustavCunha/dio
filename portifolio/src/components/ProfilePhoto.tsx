import { Image, StyleSheet } from 'react-native';

import logo from '../images/logo.jpg';

export default function ProfilePhoto() {
  return (
    <Image
      source={logo}
      style={styles.photo}
    />
  );
}

const styles = StyleSheet.create({
  photo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
});
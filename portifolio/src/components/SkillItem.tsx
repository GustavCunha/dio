import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
    name: string;
    level: number;
}

export default function SkillItem({ name, level }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.stars}>{'★'.repeat(level) + '☆'.repeat(5 - level)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  stars: {
    fontSize: 20,
    color: '#FFD700',
  },
});
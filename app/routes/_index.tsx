import type { MetaFunction } from '@remix-run/node'

import { StyleSheet, View, Text } from 'react-native'

import { Landing } from '../features/landing'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

const styles = StyleSheet.create({
  root: {
    padding: 16,
  },
  h1: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 16,
  },
})

export default function Index() {
  return (
    <View style={styles.root}>
      <Text style={styles.h1} role="heading">
        Welcome to Remix Vite
      </Text>
      <Landing />
    </View>
  )
}

import type { MetaFunction } from '@remix-run/node'

import { StyleSheet, View, Text } from 'react-native'

import { Landing } from '../features/landing'
import { useResponsive } from '~/hooks/use-responsive'

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
  const { width, md } = useResponsive()
  return (
    <View style={styles.root}>
      <Text style={styles.h1} role="heading">
        Welcome to Remix Vite
      </Text>
      <Landing />
      <Text
        style={{
          color: width < md ? 'blue' : 'red',
        }}
      >
        This text should be blue on small screens and red on large screens.
      </Text>
      {width < md && <Text>This text should always be rendered on SSR.</Text>}
      {width >= md && <Text>This text should never be rendered on SSR.</Text>}
    </View>
  )
}

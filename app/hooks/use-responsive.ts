import React from 'react'
import { Dimensions } from 'react-native'

export const Breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const

// On SSR, always return the initialDimensions
// This means regardless of the user's screen size, the server will always render the same HTML (mobile version).

const initialDimensions = {
  width: 700,
  height: 1000,
}

let dimensions = {
  ...initialDimensions,
}

function update() {
  dimensions = Dimensions.get('window')
}

const subscriptions = new Set<{ listener: () => void }>()

function subscribe(listener: () => void) {
  const subscription = { listener }
  subscriptions.add(subscription)
  return () => {
    subscriptions.delete(subscription)
  }
}

function getSnapshot() {
  return dimensions
}

function getServerSnapshot() {
  return initialDimensions
}

if (typeof window !== 'undefined') {
  update()
  Dimensions.addEventListener('change', () => {
    update()
    for (const { listener } of subscriptions) {
      listener()
    }
  })
}

export function useResponsive() {
  const { width } = React.useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  )

  // This is an un-optimized version of useResponsive() hook.
  // In a real app, you don't want to return the width directly
  // because re-renders is only necessary on breakpoint changes.

  return {
    width,
    ...Breakpoints,
  }
}

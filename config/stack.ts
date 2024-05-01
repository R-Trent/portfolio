export enum Stack {
  // Languages
  python,
  typescript,
  javascript,

  // Mobile
  swift,
  obj_c,
  swiftui,

  // Frontend
  react,
  next,
  bootstrap,
  css,
  html,
  vue,
}

export const AboutStack = [Stack.vue, Stack.swift, Stack.swiftui, Stack.python]

type StackInfoMap = {
  value: string
  kind: string
}

export const StackInfo: Record<Stack, StackInfoMap> = {
  [Stack.typescript]: {
    value: 'TypeScript',
    kind: 'typeScript',
  },
  [Stack.javascript]: {
    value: 'JavaScript',
    kind: 'javaScript',
  },
  [Stack.react]: {
    value: 'React',
    kind: 'react',
  },
  [Stack.python]: {
    value: 'Python',
    kind: 'python',
  },
  [Stack.swift]: {
    value: 'Swift',
    kind: 'swift',
  },
  [Stack.html]: {
    value: 'HTML',
    kind: 'html',
  },
  [Stack.obj_c]: {
    value: 'Objective-C',
    kind: 'objc',
  },
  [Stack.swiftui]: {
    value: 'SwiftUI',
    kind: 'swiftui',
  },
  [Stack.css]: {
    value: 'CSS',
    kind: 'css',
  },
  [Stack.bootstrap]: {
    value: 'Bootstrap',
    kind: 'bootstrap',
  },
  [Stack.next]: {
    value: 'Next.js',
    kind: 'next',
  },
  [Stack.vue]: {
    value: 'Vue.js',
    kind: 'vue',
  },
}

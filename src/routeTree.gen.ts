/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const SpeechLazyImport = createFileRoute('/speech')()
const DebateLazyImport = createFileRoute('/debate')()
const CongressLazyImport = createFileRoute('/congress')()
const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const SpeechLazyRoute = SpeechLazyImport.update({
  id: '/speech',
  path: '/speech',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/speech.lazy').then((d) => d.Route))

const DebateLazyRoute = DebateLazyImport.update({
  id: '/debate',
  path: '/debate',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/debate.lazy').then((d) => d.Route))

const CongressLazyRoute = CongressLazyImport.update({
  id: '/congress',
  path: '/congress',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/congress.lazy').then((d) => d.Route))

const AboutLazyRoute = AboutLazyImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/congress': {
      id: '/congress'
      path: '/congress'
      fullPath: '/congress'
      preLoaderRoute: typeof CongressLazyImport
      parentRoute: typeof rootRoute
    }
    '/debate': {
      id: '/debate'
      path: '/debate'
      fullPath: '/debate'
      preLoaderRoute: typeof DebateLazyImport
      parentRoute: typeof rootRoute
    }
    '/speech': {
      id: '/speech'
      path: '/speech'
      fullPath: '/speech'
      preLoaderRoute: typeof SpeechLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/congress': typeof CongressLazyRoute
  '/debate': typeof DebateLazyRoute
  '/speech': typeof SpeechLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/congress': typeof CongressLazyRoute
  '/debate': typeof DebateLazyRoute
  '/speech': typeof SpeechLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/congress': typeof CongressLazyRoute
  '/debate': typeof DebateLazyRoute
  '/speech': typeof SpeechLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '/congress' | '/debate' | '/speech'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/congress' | '/debate' | '/speech'
  id: '__root__' | '/' | '/about' | '/congress' | '/debate' | '/speech'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  AboutLazyRoute: typeof AboutLazyRoute
  CongressLazyRoute: typeof CongressLazyRoute
  DebateLazyRoute: typeof DebateLazyRoute
  SpeechLazyRoute: typeof SpeechLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  AboutLazyRoute: AboutLazyRoute,
  CongressLazyRoute: CongressLazyRoute,
  DebateLazyRoute: DebateLazyRoute,
  SpeechLazyRoute: SpeechLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/congress",
        "/debate",
        "/speech"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/about": {
      "filePath": "about.lazy.tsx"
    },
    "/congress": {
      "filePath": "congress.lazy.tsx"
    },
    "/debate": {
      "filePath": "debate.lazy.tsx"
    },
    "/speech": {
      "filePath": "speech.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
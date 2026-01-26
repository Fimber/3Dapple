import { useGLTF } from '@react-three/drei'

// List of all 3D models to preload
const modelPaths = [
  '/models/iphone17-transformed.glb',
  '/models/cameras-transformed.glb',
  '/models/macbook-transformed.glb',
  '/models/macbook-14-transformed.glb',
  '/models/macbook-16-transformed.glb',
  '/models/apple_watch_series_5-transformed.glb',
  '/models/apple_watch_ultra_2-transformed.glb',
  '/models/apple-watch-v2-transformed.glb',
]

// Preload all models in background
export const preloadAllModels = () => {
  modelPaths.forEach(path => {
    useGLTF.preload(path)
  })
}

// Preload specific models based on current page
export const preloadModelsForPage = (page) => {
  const pageModels = {
    home: [
      '/models/macbook-transformed.glb',
      '/models/macbook-14-transformed.glb',
      '/models/macbook-16-transformed.glb',
    ],
    iphone: [
      '/models/iphone17-transformed.glb',
      '/models/cameras-transformed.glb',
    ],
    watch: [
      '/models/apple_watch_series_5-transformed.glb',
      '/models/apple_watch_ultra_2-transformed.glb',
    ]
  }

  const models = pageModels[page] || []
  models.forEach(path => {
    useGLTF.preload(path)
  })
}

export default preloadAllModels

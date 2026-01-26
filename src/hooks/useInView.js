import { useState, useEffect, useRef } from 'react'

/**
 * Hook to detect when an element is in viewport
 * Useful for lazy loading heavy components like 3D canvases
 */
export const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false)
  const [hasBeenInView, setHasBeenInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
        if (entry.isIntersecting) {
          setHasBeenInView(true)
        }
      },
      {
        threshold: options.threshold || 0,
        rootMargin: options.rootMargin || '100px', // Start loading 100px before element is visible
        ...options
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [options.threshold, options.rootMargin])

  return { ref, isInView, hasBeenInView }
}

export default useInView

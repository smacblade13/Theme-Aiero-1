'use client'

import {
  createContext,
  useContext,
  useRef,
  type ReactNode,
  useEffect,
  useCallback,
  useState,
} from 'react'
import { usePathname } from 'next/navigation'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface TitleSplitContextType {
  registerElement: (element: HTMLElement) => void
  unregisterElement: (element: HTMLElement) => void
}

const TitleSplitContext = createContext<TitleSplitContextType | null>(null)

export function useTitleSplitContext() {
  const context = useContext(TitleSplitContext)
  return context || { registerElement: () => {}, unregisterElement: () => {} }
}

export default function TitleSplitProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const elementsRef = useRef<Set<HTMLElement>>(new Set())
  const initializedRef = useRef<Set<HTMLElement>>(new Set())
  const tweensRef = useRef<Map<HTMLElement, gsap.core.Tween>>(new Map())
  const [elementCount, setElementCount] = useState(0)

  const registerElement = useCallback((element: HTMLElement) => {
    if (element && !elementsRef.current.has(element)) {
      elementsRef.current.add(element)
      setElementCount(elementsRef.current.size)
    }
  }, [])

  const unregisterElement = useCallback((element: HTMLElement) => {
    const tween = tweensRef.current.get(element)
    if (tween) {
      tween.kill()
      tweensRef.current.delete(element)
    }
    elementsRef.current.delete(element)
    initializedRef.current.delete(element)
    setElementCount(elementsRef.current.size)
  }, [])

  // Reset animations when the route changes so titles can animate again
  useEffect(() => {
    initializedRef.current.forEach((el) => {
      const tween = tweensRef.current.get(el)
      if (tween) {
        tween.kill()
        tweensRef.current.delete(el)
      }
    })
    initializedRef.current.clear()
  }, [pathname])

  useEffect(() => {
    const elements = Array.from(elementsRef.current).filter(
      (el) => !initializedRef.current.has(el) && el.textContent?.trim(),
    )

    elements.forEach((element) => {
      try {
        const splitText = new SplitType(element, { types: 'chars,words' })
        const chars = splitText.chars || []

        if (chars.length === 0) {
          return
        }

        const tween = gsap.from(chars, {
          duration: 1,
          delay: 0.1,
          x: 20,
          autoAlpha: 0,
          stagger: 0.03,
          ease: 'power2.out',
          scrollTrigger: { trigger: element, start: 'top 85%' },
        })

        tweensRef.current.set(element, tween)
        initializedRef.current.add(element)
      } catch (error) {
        console.error('Error creating SplitText animation:', error)
      }
    })

    ScrollTrigger.refresh()
  }, [pathname, elementCount])

  return (
    <TitleSplitContext.Provider value={{ registerElement, unregisterElement }}>
      {children}
    </TitleSplitContext.Provider>
  )
}


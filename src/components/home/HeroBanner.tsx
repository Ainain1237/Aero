"use client"

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'

export function HeroBanner() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [showLogo, setShowLogo] = useState(false)

  useEffect(() => {
    const videoElement = videoRef.current

    if (videoElement) {
      videoElement.playbackRate = 2.0 
      const handleVideoEnd = () => {
        setShowLogo(true)
        setTimeout(() => {
          setShowLogo(false)
          videoElement.play()
        }, 1000) // Show logo for 3 seconds
      }

      videoElement.addEventListener('ended', handleVideoEnd)

      return () => {
        videoElement.removeEventListener('ended', handleVideoEnd)
      }
    }
  }, [])

  return (
    <section className="relative h-[100vh] overflow-hidden">
      <video
        ref={videoRef}
        src="https://res.cloudinary.com/dqdojki39/video/upload/v1740245040/BrightQ/l7unhdyvffg46dhmar6h.mp4"
        autoPlay
        muted
        
        className={`absolute inset-0 object-cover w-full h-full brightness-110 ${showLogo ? 'hidden' : ''}`}
      />
      {showLogo && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <img src="/Logo .jpeg" alt="Logo" className="absolute inset-0 object-cover w-full h-full" /> {/* Adjust size as needed */}
        </div>
      )}
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-4"></h1>
        <p className="text-xl mb-8 max-w-2xl">
         
        </p>
        <Button size="lg" className="mt-8">
          Explore Our Services
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}
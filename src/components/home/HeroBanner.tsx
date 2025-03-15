"use client"

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
//import { Button } from '@/components/ui/button'
// import { ChevronRight } from 'lucide-react'

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
        }, 1000)
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
          <Image
            src="https://res.cloudinary.com/dqdojki39/image/upload/v1735195300/Logo_bq2do5.jpg"
            alt="BrightQ Logo"
            // width={400}
            //height={400}
            //className="object-contain"
            //priority
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      )}
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-4">Welcome to BrightQ</h1>
        <p className="text-xl mb-8 max-w-2xl">Revolutionizing Aerospace for a Better Tomorrow</p>
        
      </div>
    </section>
  )
}
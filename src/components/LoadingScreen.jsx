import React from 'react'

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">
        {/* Apple-style loading spinner */}
        <div className="relative w-12 h-12">
          <div 
            className="absolute inset-0 rounded-full border-2 border-gray-800"
          />
          <div 
            className="absolute inset-0 rounded-full border-2 border-transparent border-t-white animate-spin"
          />
        </div>
        <p className="text-gray-400 text-sm">Loading...</p>
      </div>
    </div>
  )
}

export default LoadingScreen

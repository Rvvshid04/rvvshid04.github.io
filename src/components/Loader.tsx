const Loader = ({ text = "Loading..." }: { text?: string }) => {
  return (
    <div className="flex flex-col items-center justify-center p-12 min-h-[300px] w-full h-full">
      <div className="relative mb-6">
        {/* Animated Background Blob */}
        <div className="absolute inset-0 bg-indigo-500 blur-2xl opacity-20 rounded-full animate-pulse" />
        
        {/* Logo with the custom animation from index.css */}
        <img
          src="/images/RA-Logo-1.svg"
          alt="Loading logo"
          className="w-16 h-16 relative z-10 route-logo-loader"
        />
      </div>

      <div className="flex flex-col items-center gap-3">
        {/* Progress Bar Container */}
        <div className="w-48 h-1.5 bg-gray-100 rounded-full overflow-hidden relative">
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-indigo-500 rounded-full route-loader-progress" />
        </div>
        
        {/* Loading Text */}
        <p className="text-gray-500 font-medium tracking-wide animate-pulse">{text}</p>
      </div>
    </div>
  )
}

export default Loader

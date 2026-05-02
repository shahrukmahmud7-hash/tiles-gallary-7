

const LoadingPage = () => {
    return (
     <div className="min-h-screen flex items-center justify-center bg-[#FAFAF9]">

      <div className="text-center space-y-4">

        <div className="flex justify-center gap-2">

          <span className="w-3 h-3 
          bg-gray-700 rounded-full animate-bounce
          ">
          </span>

          <span className="w-3 h-3
          bg-gray-500 rounded-full animate-bounce delay-150
          ">
          </span>
          <span className="w-3 h-3 
          bg-gray-400 rounded-full animate-bounce delay-300
          ">
          </span>
        </div>

        <h2 className="text-gray-700 font-medium text-lg">
          Bringing Tiles Gallery to Life ✨
        </h2>

        <p className="text-gray-500 text-sm">
          Please wait a moment...
        </p>

      </div>

    </div>
    );
};

export default LoadingPage;  
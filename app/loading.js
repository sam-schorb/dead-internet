// app/loading.js
export default function Loading() {
    return (
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Loading...</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg animate-pulse">
              <div className="bg-gray-700 w-full h-48 object-cover rounded"></div>
              <h3 className="text-xl font-bold mt-2 bg-gray-700 w-3/4 h-6 rounded"></h3>
              <p className="mt-1 bg-gray-700 w-full h-4 rounded"></p>
              <p className="mt-1 bg-gray-700 w-full h-4 rounded"></p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
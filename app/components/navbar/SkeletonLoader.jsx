

const SkeletonLoader = () => (
  <nav className="relative flex flex-col py-6 px-10 w-full h-full bg-white border-r overflow-y-auto">
    {/* Logo placeholder */}
    <div className="mb-16 animate-pulse">
      <div className="h-10 bg-gray-300 rounded"></div>
    </div>
    {/* Menu items placeholder */}
    <ul className="mb-2">
      <li>
        <div className="py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg animate-pulse">
          Loading...
        </div>
      </li>
      <li>
        <div className="py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg animate-pulse">
          Loading...
        </div>
      </li>
      <li>
        <div className="py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg animate-pulse">
          Loading...
        </div>
      </li>
    </ul>
    {/* Sign in button placeholder */}
    <div className="py-6 px-5">
      <div className="w-full py-4 px-6 mb-3 text-sm font-semibold text-orange-900 hover:text-white border border-gray-200 rounded-md animate-pulse">
        Loading...
      </div>
    </div>
  </nav>
);

export default SkeletonLoader;

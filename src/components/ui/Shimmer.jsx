/**
 * Shimmer — A simple animated loading placeholder.
 * Used across skeleton components to indicate loading state.
 */
const Shimmer = ({ className = '' }) => (
  <div className={`animate-pulse bg-gray-200 rounded ${className}`} />
);

export default Shimmer;

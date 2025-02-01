import { PERFORMANCE_CONFIG } from '../../types/references';

type AnyFunction = (...args: unknown[]) => unknown;

/**
 * Debounces a function call according to performance guidelines
 * @param {Function} fn - The function to debounce
 * @param {number} [delay] - Delay in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = <T extends AnyFunction>(
  fn: T,
  delay: number = PERFORMANCE_CONFIG.debounceTime
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};

/**
 * Throttles a function call according to performance guidelines
 * @param {Function} fn - The function to throttle
 * @param {number} [limit] - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
export const throttle = <T extends AnyFunction>(
  fn: T,
  limit: number = PERFORMANCE_CONFIG.throttleTime
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

/**
 * Calculates image dimensions based on configuration
 * @param {string} size - Size category (thumbnail, preview, full)
 * @param {number} originalWidth - Original image width
 * @param {number} originalHeight - Original image height
 * @returns {{ width: number, height: number }} Calculated dimensions
 */
export const calculateImageDimensions = (
  size: keyof typeof PERFORMANCE_CONFIG.imageSizes,
  originalWidth: number,
  originalHeight: number
): { width: number; height: number } => {
  const config = PERFORMANCE_CONFIG.imageSizes[size];
  const aspectRatio = originalWidth / originalHeight;

  if (aspectRatio > 1) {
    return {
      width: config.width,
      height: Math.round(config.width / aspectRatio),
    };
  } else {
    return {
      width: Math.round(config.height * aspectRatio),
      height: config.height,
    };
  }
};

/**
 * Memoizes a function to cache its results
 * @param {Function} fn - The function to memoize
 * @returns {Function} Memoized function
 */
export const memoize = <T extends AnyFunction>(fn: T): T => {
  const cache = new Map();

  return ((...args: Parameters<T>) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  }) as T;
}; 
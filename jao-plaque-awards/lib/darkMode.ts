// Function to get the initial dark mode state
export const getInitialDarkMode = (): boolean => {
  // Check if we're in the browser
  if (typeof window !== 'undefined') {
    const savedDarkMode = localStorage.getItem('darkMode');
    
    // If user has a saved preference, use it
    if (savedDarkMode !== null) {
      return savedDarkMode === 'true';
    }
    
    // If no saved preference, check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  
  // Default to false on server-side
  return false;
};

// Function to set dark mode
export const setDarkMode = (isDark: boolean): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('darkMode', isDark.toString());
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
};

// Function to toggle dark mode
export const toggleDarkMode = (): boolean => {
  if (typeof window !== 'undefined') {
    const currentDarkMode = localStorage.getItem('darkMode') === 'true';
    const newDarkMode = !currentDarkMode;
    setDarkMode(newDarkMode);
    return newDarkMode;
  }
  return false;
}; 
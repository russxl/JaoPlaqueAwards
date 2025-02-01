/**
 * This file serves as a central reference point for types and constants
 * that align with our contributing guidelines (CONTRIBUTING.md)
 */

// Component Props Types (as per Component Guidelines section)
export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ButtonProps extends BaseProps {
  variant: 'primary' | 'secondary' | 'outline';
  onClick: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
}

// Form Types (as per Form Validation section)
export interface ValidationErrors {
  [key: string]: string;
}

export interface FormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

// Award Types (as per Type Definitions section)
export interface Award {
  id: number;
  name: string;
  price: string;
  description: string;
  features: string[];
  image: string;
  category: AwardCategory;
}

export type AwardCategory = 'wood' | 'acrylic' | 'glass';

// Git Branch Types (as per Git Workflow section)
export type BranchPrefix = 'feature' | 'bugfix' | 'refactor' | 'hotfix';

// Styling Constants (as per Styling Guidelines section)
export const TAILWIND_BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const STYLE_VARIANTS = {
  button: {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-blue-100 text-blue-700 hover:bg-blue-200',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
  },
  container: {
    default: 'container mx-auto px-4 sm:px-6 lg:px-8',
    narrow: 'container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl',
    wide: 'container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl',
  },
} as const;

// Error Messages (as per Error Handling section)
export const ERROR_MESSAGES = {
  required: (field: string) => `${field} is required`,
  invalid: (field: string) => `Invalid ${field.toLowerCase()}`,
  email: 'Please enter a valid email address',
  generic: 'An unexpected error occurred. Please try again.',
  api: {
    network: 'Network error. Please check your connection.',
    server: 'Server error. Please try again later.',
    validation: 'Please check your input and try again.',
  },
} as const;

// Test Constants (as per Testing section)
export const TEST_IDS = {
  button: {
    submit: 'submit-button',
    cancel: 'cancel-button',
    menu: 'menu-button',
  },
  form: {
    name: 'name-input',
    email: 'email-input',
    message: 'message-input',
  },
  navigation: {
    main: 'main-nav',
    dropdown: 'dropdown-menu',
  },
} as const;

// Performance Constants (as per Performance section)
export const PERFORMANCE_CONFIG = {
  debounceTime: 300,
  throttleTime: 100,
  imageSizes: {
    thumbnail: { width: 100, height: 100 },
    preview: { width: 300, height: 300 },
    full: { width: 800, height: 600 },
  },
} as const;

// Accessibility Constants (as per Accessibility section)
export const ARIA_LABELS = {
  navigation: {
    main: 'Main navigation',
    footer: 'Footer navigation',
    awards: 'Awards navigation',
  },
  buttons: {
    menu: 'Toggle menu',
    close: 'Close',
    submit: 'Submit form',
  },
  forms: {
    name: 'Enter your name',
    email: 'Enter your email address',
    message: 'Enter your message',
  },
} as const;

// Documentation Templates (as per Documentation section)
export const DOC_TEMPLATES = {
  component: `
/**
 * Component description
 * @param {ComponentProps} props - The component props
 * @returns {JSX.Element} Component JSX
 */`,
  hook: `
/**
 * Hook description
 * @param {HookParams} params - The hook parameters
 * @returns {HookReturn} Hook return value
 */`,
  function: `
/**
 * Function description
 * @param {FunctionParams} params - The function parameters
 * @returns {ReturnType} Function return value
 */`,
} as const; 
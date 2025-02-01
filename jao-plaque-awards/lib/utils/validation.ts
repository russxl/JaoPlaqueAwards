import { ValidationErrors, FormData } from '../../types/references';
import { ERROR_MESSAGES } from '../../types/references';

/**
 * Validates form data according to the guidelines in CONTRIBUTING.md
 * @param {FormData} data - The form data to validate
 * @returns {ValidationErrors} Object containing validation errors
 */
export const validateForm = (data: FormData): ValidationErrors => {
  const errors: ValidationErrors = {};

  // Name validation
  if (!data.name.trim()) {
    errors.name = ERROR_MESSAGES.required('Name');
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email.trim()) {
    errors.email = ERROR_MESSAGES.required('Email');
  } else if (!emailRegex.test(data.email)) {
    errors.email = ERROR_MESSAGES.email;
  }

  // Phone validation (optional)
  if (data.phone) {
    const phoneRegex = /^\+?[\d\s-()]{10,}$/;
    if (!phoneRegex.test(data.phone)) {
      errors.phone = ERROR_MESSAGES.invalid('phone number');
    }
  }

  // Subject validation
  if (!data.subject) {
    errors.subject = ERROR_MESSAGES.required('Subject');
  }

  // Message validation
  if (!data.message.trim()) {
    errors.message = ERROR_MESSAGES.required('Message');
  } else if (data.message.length < 10) {
    errors.message = 'Message must be at least 10 characters long';
  }

  return errors;
};

/**
 * Checks if the form has any validation errors
 * @param {ValidationErrors} errors - The validation errors object
 * @returns {boolean} True if there are no errors
 */
export const isFormValid = (errors: ValidationErrors): boolean => {
  return Object.keys(errors).length === 0;
};

/**
 * Formats error message for display
 * @param {string} field - The field name
 * @param {string} message - The error message
 * @returns {string} Formatted error message
 */
export const formatErrorMessage = (field: string, message: string): string => {
  return `${field}: ${message}`;
}; 
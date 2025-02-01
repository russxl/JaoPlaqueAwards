# Contributing to Jao Plaque Awards

This document outlines the coding standards and best practices for the Jao Plaque Awards project. Following these guidelines ensures consistency and maintainability across the codebase.

## Table of Contents
- [Project Structure](#project-structure)
- [TypeScript Guidelines](#typescript-guidelines)
- [Component Guidelines](#component-guidelines)
- [Styling Guidelines](#styling-guidelines)
- [State Management](#state-management)
- [Performance](#performance)
- [Testing](#testing)
- [Git Workflow](#git-workflow)

## Project Structure

```
jao-plaque-awards/
├── components/
│   ├── layout/       # Layout components
│   ├── ui/           # Reusable UI components
│   └── awards/       # Feature-specific components
├── lib/              # Utility functions
├── hooks/            # Custom React hooks
├── types/            # TypeScript types/interfaces
├── styles/           # CSS and style modules
├── pages/            # Next.js pages
└── public/           # Static assets
```

### File Naming Conventions

- React Components: `PascalCase.tsx` (e.g., `AwardCard.tsx`)
- Utilities/Hooks: `camelCase.ts` (e.g., `useAwardFilter.ts`)
- Styles: `kebab-case.css` (e.g., `global-styles.css`)
- Test Files: `ComponentName.test.tsx`

## TypeScript Guidelines

### Type Definitions

```typescript
// ✅ DO: Define explicit interfaces for props
interface AwardProps {
  id: number;
  name: string;
  price: string;
  features: string[];
}

// ✅ DO: Use type unions for specific values
type ButtonVariant = 'primary' | 'secondary' | 'outline';

// ❌ DON'T: Use 'any' type
const handleData = (data: any) => {}; // Avoid
```

### Type Assertions

```typescript
// ✅ DO: Use type assertions when necessary
const userInput = event.target as HTMLInputElement;

// ❌ DON'T: Use type assertions unnecessarily
const str = "hello" as string; // Unnecessary
```

## Component Guidelines

### Component Structure

```typescript
// ✅ DO: Use functional components with TypeScript
import React from 'react';

interface ButtonProps {
  variant: ButtonVariant;
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  onClick,
  children
}) => {
  return (
    <button
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
```

### Props

```typescript
// ✅ DO: Destructure props
const AwardCard: React.FC<AwardProps> = ({ name, price, features }) => {
  return <div>{/* ... */}</div>;
};

// ❌ DON'T: Use props object directly
const AwardCard: React.FC<AwardProps> = (props) => {
  return <div>{props.name}</div>;
};
```

## Styling Guidelines

### Tailwind CSS Usage

```typescript
// ✅ DO: Use consistent spacing and responsive patterns
<div className="p-4 md:p-6 lg:p-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

// ✅ DO: Group related utilities
<button className="
  px-4 py-2 
  bg-blue-600 hover:bg-blue-700 
  text-white font-medium
  rounded-md shadow-sm
">
```

### Custom Classes

```css
/* globals.css */
@layer components {
  .btn {
    @apply inline-flex items-center justify-center px-4 py-2 rounded-md;
  }

  .btn-primary {
    @apply bg-blue-600 text-white hover:bg-blue-700;
  }
}
```

## State Management

### React Hooks

```typescript
// ✅ DO: Use proper typing with useState
const [isLoading, setIsLoading] = useState<boolean>(false);
const [awards, setAwards] = useState<Award[]>([]);

// ✅ DO: Use proper dependencies in useEffect
useEffect(() => {
  // Effect logic
}, [dependency1, dependency2]);
```

### Custom Hooks

```typescript
// ✅ DO: Create reusable hooks for common functionality
const useAwardFilter = (awards: Award[]) => {
  const [filtered, setFiltered] = useState<Award[]>(awards);
  
  const filterByCategory = useCallback((category: string) => {
    setFiltered(awards.filter(award => award.category === category));
  }, [awards]);

  return { filtered, filterByCategory };
};
```

## Performance

### Optimization Techniques

```typescript
// ✅ DO: Memoize expensive calculations
const memoizedValue = useMemo(() => {
  return expensiveCalculation(props.data);
}, [props.data]);

// ✅ DO: Memoize callbacks
const memoizedCallback = useCallback(() => {
  handleClick(value);
}, [value]);

// ✅ DO: Use proper keys in lists
{items.map((item) => (
  <ListItem key={item.id} {...item} />
))}
```

## Testing

### Component Testing

```typescript
// ✅ DO: Write meaningful test descriptions
describe('AwardCard', () => {
  it('should render award information correctly', () => {
    const award = {
      id: 1,
      name: 'Test Award',
      price: '$99.99'
    };
    
    render(<AwardCard {...award} />);
    
    expect(screen.getByText('Test Award')).toBeInTheDocument();
    expect(screen.getByText('$99.99')).toBeInTheDocument();
  });
});
```

### Test Organization

```typescript
// ✅ DO: Group related tests
describe('Award Form', () => {
  describe('validation', () => {
    it('should show error for invalid price');
    it('should show error for empty name');
  });

  describe('submission', () => {
    it('should call API with correct data');
    it('should show success message');
  });
});
```

## Git Workflow

### Branch Naming

```
feature/   # New features (e.g., feature/add-award-filtering)
bugfix/    # Bug fixes (e.g., bugfix/contact-form-validation)
refactor/  # Code refactoring (e.g., refactor/award-component)
hotfix/    # Urgent fixes for production (e.g., hotfix/critical-error)
```

### Commit Messages

```
feat: add award filtering functionality
fix: resolve contact form validation issues
refactor: improve award component structure
docs: update README with setup instructions
style: format award card component
test: add tests for award filtering
```

### Pull Request Guidelines

1. Keep PRs focused on a single feature or fix
2. Include relevant tests
3. Update documentation as needed
4. Ensure all checks pass
5. Request review from at least one team member

## Accessibility

### ARIA Labels and Roles

```typescript
// ✅ DO: Include proper accessibility attributes
<button
  aria-label="Open menu"
  role="button"
  onClick={toggleMenu}
>
  <MenuIcon />
</button>

// ✅ DO: Use semantic HTML
<nav aria-label="Main navigation">
<main role="main">
<aside aria-label="Sidebar">
```

## Error Handling

### API Errors

```typescript
// ✅ DO: Implement proper error handling
try {
  const response = await submitForm(data);
  handleSuccess(response);
} catch (error) {
  if (error instanceof Error) {
    handleError(error.message);
  } else {
    handleError('An unknown error occurred');
  }
}
```

### Form Validation

```typescript
// ✅ DO: Implement proper form validation
const validateForm = (data: FormData): ValidationErrors => {
  const errors: ValidationErrors = {};
  
  if (!data.name) {
    errors.name = 'Name is required';
  }
  
  if (!isValidEmail(data.email)) {
    errors.email = 'Invalid email address';
  }
  
  return errors;
};
```

## Documentation

### Component Documentation

```typescript
/**
 * Award card component that displays award information
 * @param {Award} award - The award data to display
 * @param {() => void} onSelect - Callback when award is selected
 * @returns {JSX.Element} A card displaying award information
 */
const AwardCard: React.FC<AwardCardProps> = ({ award, onSelect }) => {
  return <div>{/* ... */}</div>;
};
```

### Function Documentation

```typescript
/**
 * Filters awards based on given criteria
 * @param {Award[]} awards - Array of awards to filter
 * @param {FilterCriteria} criteria - Filter criteria
 * @returns {Award[]} Filtered array of awards
 */
const filterAwards = (awards: Award[], criteria: FilterCriteria): Award[] => {
  // Implementation
};
```

---

This guide should be treated as a living document and updated as new patterns and best practices emerge. All team members should follow these guidelines to maintain consistency across the project. 
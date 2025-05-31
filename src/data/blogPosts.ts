export interface BlogPost {
  id: string
  title: string
  excerpt: string
  coverImage: string
  date: string
  readTime: string
  tags: string[]
  author: {
    name: string
    avatar: string
    role: string
  }
  content: string
  references: {
    title: string
    url: string
  }[]
  furtherReading: {
    title: string
    url: string
  }[]
}

export const blogPosts: BlogPost[] = [
  {
    id: 'building-modern-web-apps',
    title: 'Building Modern Web Applications with React and TypeScript',
    excerpt: 'A comprehensive guide to creating scalable and maintainable web applications using React and TypeScript. Learn about best practices, type safety, and modern development workflows.',
    coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    date: 'March 15, 2024',
    readTime: '8 min read',
    tags: ['React', 'TypeScript', 'Web Development'],
    author: {
      name: 'Raashid Arquil',
      avatar: 'https://github.com/Rvvshid04.png',
      role: 'Full Stack Developer'
    },
    content: `
# Building Modern Web Applications with React and TypeScript

In today's fast-paced web development landscape, creating robust and maintainable applications is crucial. This guide explores how React and TypeScript can be combined to build scalable web applications that stand the test of time.

## Why TypeScript?

TypeScript brings static typing to JavaScript, providing several benefits:

- **Early Error Detection**: Catch bugs during development instead of runtime
- **Better IDE Support**: Enhanced autocompletion and IntelliSense
- **Improved Maintainability**: Self-documenting code through types
- **Enhanced Team Collaboration**: Clear interfaces and contracts

## Setting Up Your Project

Getting started with React and TypeScript is straightforward. Here's how to create a new project:

\`\`\`bash
# Create a new React project with TypeScript
npx create-react-app my-app --template typescript

# Navigate to the project directory
cd my-app

# Start the development server
npm start
\`\`\`

## TypeScript Best Practices

### 1. Define Clear Interfaces

\`\`\`typescript
interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  preferences?: {
    theme: 'light' | 'dark';
    notifications: boolean;
  };
}

// Using the interface
const user: User = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  role: 'user',
  preferences: {
    theme: 'dark',
    notifications: true
  }
};
\`\`\`

### 2. Use Type Guards

\`\`\`typescript
function isAdmin(user: User): user is User & { role: 'admin' } {
  return user.role === 'admin';
}

// Type guard in action
if (isAdmin(user)) {
  // TypeScript knows user.role is 'admin' here
  console.log('Admin privileges granted');
}
\`\`\`

## React Component Patterns

### 1. Functional Components with TypeScript

\`\`\`typescript
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
  disabled = false
}) => {
  return (
    <button
      className={\`btn btn-\${variant}\`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
\`\`\`

### 2. Custom Hooks with TypeScript

\`\`\`typescript
interface UseCounterProps {
  initialValue?: number;
  step?: number;
}

interface UseCounterReturn {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

const useCounter = ({
  initialValue = 0,
  step = 1
}: UseCounterProps = {}): UseCounterReturn => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(c => c + step);
  const decrement = () => setCount(c => c - step);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
};
\`\`\`

## State Management

For larger applications, consider using Redux Toolkit with TypeScript:

\`\`\`typescript
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoState {
  items: Todo[];
  filter: 'all' | 'active' | 'completed';
}

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    filter: 'all'
  } as TodoState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.items.push(action.payload);
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.items.find(t => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    setFilter: (state, action: PayloadAction<TodoState['filter']>) => {
      state.filter = action.payload;
    }
  }
});
\`\`\`

## Testing with TypeScript

Write type-safe tests using Jest and React Testing Library:

\`\`\`typescript
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  it('renders with correct label', () => {
    const handleClick = jest.fn();
    render(<Button label="Click me" onClick={handleClick} />);
    
    const button = screen.getByText('Click me');
    expect(button).toBeInTheDocument();
    
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('handles disabled state', () => {
    render(<Button label="Disabled" onClick={() => {}} disabled />);
    
    const button = screen.getByText('Disabled');
    expect(button).toBeDisabled();
  });
});
\`\`\`

## Conclusion

By combining React with TypeScript, you can build more reliable and maintainable web applications. The initial setup time is worth the long-term benefits of type safety and better developer experience.

Remember to:
- Define clear interfaces and types
- Use type guards for runtime type checking
- Leverage TypeScript's utility types
- Write type-safe tests
- Keep your types DRY (Don't Repeat Yourself)

Happy coding! 🚀
    `,
    references: [
      {
        title: 'React Documentation',
        url: 'https://reactjs.org/docs/getting-started.html'
      },
      {
        title: 'TypeScript Handbook',
        url: 'https://www.typescriptlang.org/docs/handbook/intro.html'
      }
    ],
    furtherReading: [
      {
        title: 'Advanced TypeScript Patterns',
        url: 'https://www.typescriptlang.org/docs/handbook/advanced-types.html'
      },
      {
        title: 'React Performance Optimization',
        url: 'https://reactjs.org/docs/optimizing-performance.html'
      }
    ]
  },
  {
    id: 'cloud-architecture',
    title: 'Cloud Architecture: Best Practices for 2024',
    excerpt: 'Explore the latest trends and best practices in cloud architecture. From microservices to serverless computing, learn how to design scalable and resilient cloud solutions.',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    date: 'March 10, 2024',
    readTime: '12 min read',
    tags: ['Cloud Computing', 'AWS', 'Architecture'],
    author: {
      name: 'Raashid Arquil',
      avatar: 'https://github.com/Rvvshid04.png',
      role: 'Full Stack Developer'
    },
    content: `
      # Cloud Architecture: Best Practices for 2024

      Cloud computing continues to evolve, bringing new opportunities and challenges for architects and developers. This article explores the latest trends and best practices in cloud architecture.

      ## Key Trends

      1. Serverless Computing
      2. Microservices Architecture
      3. Container Orchestration
      4. Edge Computing

      ## Best Practices

      ### 1. Design for Scalability
      - Use auto-scaling groups
      - Implement load balancing
      - Design stateless applications

      ### 2. Security First
      - Implement zero-trust architecture
      - Use encryption at rest and in transit
      - Regular security audits

      ## Conclusion

      Cloud architecture requires careful planning and consideration of various factors. By following these best practices, you can build robust and scalable cloud solutions.
    `,
    references: [
      {
        title: 'AWS Well-Architected Framework',
        url: 'https://aws.amazon.com/architecture/well-architected/'
      },
      {
        title: 'Cloud Security Best Practices',
        url: 'https://cloud.google.com/security/best-practices'
      }
    ],
    furtherReading: [
      {
        title: 'Microservices Architecture',
        url: 'https://microservices.io/patterns/index.html'
      },
      {
        title: 'Serverless Computing Guide',
        url: 'https://aws.amazon.com/serverless/'
      }
    ]
  },
  {
    id: 'ai-in-development',
    title: 'The Impact of AI on Software Development',
    excerpt: 'Discover how artificial intelligence is transforming the software development landscape. From code generation to testing automation, AI is revolutionizing how we build software.',
    coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    date: 'March 5, 2024',
    readTime: '10 min read',
    tags: ['AI', 'Machine Learning', 'Development'],
    author: {
      name: 'Raashid Arquil',
      avatar: 'https://github.com/Rvvshid04.png',
      role: 'Full Stack Developer'
    },
    content: `
      # The Impact of AI on Software Development

      Artificial Intelligence is revolutionizing the way we develop software. From automated code generation to intelligent testing, AI tools are becoming an integral part of the development process.

      ## AI in Development

      ### 1. Code Generation
      - GitHub Copilot
      - Code completion
      - Pattern recognition

      ### 2. Testing Automation
      - Automated test generation
      - Bug prediction
      - Performance optimization

      ## Future Implications

      The integration of AI in software development is just beginning. As these tools become more sophisticated, they will continue to transform how we write and maintain code.

      ## Conclusion

      AI is not replacing developers but rather augmenting their capabilities. Understanding and leveraging these tools will be crucial for staying competitive in the field.
    `,
    references: [
      {
        title: 'GitHub Copilot Documentation',
        url: 'https://docs.github.com/en/copilot'
      },
      {
        title: 'AI in Software Development',
        url: 'https://www.microsoft.com/en-us/ai/ai-software-development'
      }
    ],
    furtherReading: [
      {
        title: 'Machine Learning for Developers',
        url: 'https://developers.google.com/machine-learning'
      },
      {
        title: 'AI Testing Tools',
        url: 'https://www.testim.io/blog/ai-testing-tools/'
      }
    ]
  }
] 
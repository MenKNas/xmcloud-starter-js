import componentMap from '.sitecore/component-map';
import { ComponentType } from 'react';

// Type for a React component function
type ReactComponent = ComponentType<Record<string, unknown>>;

// Type for a module that exports a React component
type ComponentModule = {
  default: ReactComponent;
};

// Type for the clean component map - only contains React components
export type CleanComponentMap = Map<string, ReactComponent | ComponentModule>;

/**
 * Creates a clean component map that only contains component functions,
 * filtering out server-side functions like getComponentServerProps
 */
export const getCleanComponentMap = (): CleanComponentMap => {
  const cleanMap = new Map<string, ReactComponent | ComponentModule>();

  componentMap.forEach((value, key) => {
    // Only include entries that are component functions
    if (typeof value === 'function') {
      // Direct function (like Form)
      cleanMap.set(key, value as ReactComponent);
    } else if (value && typeof value.default === 'function') {
      // Module with default export function
      cleanMap.set(key, { default: value.default as ReactComponent });
    }
    // Skip entries with getComponentServerProps or other server-side functions
  });

  return cleanMap;
};

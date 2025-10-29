'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HiExclamationTriangle, HiRefresh } from 'react-icons/hi';
import styles from './ErrorBoundary.module.css';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error?: Error; resetError: () => void }>;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback;
        return <FallbackComponent error={this.state.error} resetError={this.resetError} />;
      }

      return <DefaultErrorFallback error={this.state.error} resetError={this.resetError} />;
    }

    return this.props.children;
  }
}

function DefaultErrorFallback({ error, resetError }: { error?: Error; resetError: () => void }) {
  return (
    <div className={styles.errorBoundary}>
      <motion.div 
        className={styles.errorContent}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.errorIcon}>
          <HiExclamationTriangle />
        </div>
        
        <h2 className={styles.errorTitle}>Oops! Something went wrong</h2>
        
        <p className={styles.errorMessage}>
          We're sorry, but something unexpected happened. Please try refreshing the page.
        </p>
        
        {process.env.NODE_ENV === 'development' && error && (
          <details className={styles.errorDetails}>
            <summary>Error Details (Development Only)</summary>
            <pre className={styles.errorStack}>
              {error.message}
              {error.stack}
            </pre>
          </details>
        )}
        
        <div className={styles.errorActions}>
          <button onClick={resetError} className="btn btn-primary">
            <HiRefresh />
            Try Again
          </button>
          
          <button 
            onClick={() => window.location.href = '/'}
            className="btn btn-secondary"
          >
            Go Home
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default ErrorBoundary;
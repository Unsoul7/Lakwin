// vite.config.js
export default {
    build: {
      rollupOptions: {
        input: {
          main: 'index.html',    // Main entry point
          payment: 'payment.html',   // Additional entry points
  
          // Add more entry points as needed
        }
      }
    }
  };
  
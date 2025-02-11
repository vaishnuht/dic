
        // Performance monitoring
        if ('performance' in window && 'PerformanceObserver' in window) {
            // Create performance observer
            const observer = new PerformanceObserver((list) => {
              const entries = list.getEntries();
              entries.forEach((entry) => {
                if (entry.entryType === 'largest-contentful-paint') {
                  // console.log(`LCP: ${entry.startTime}ms`);
                }
                if (entry.entryType === 'first-input') {
                  // console.log(`FID: ${entry.processingStart - entry.startTime}ms`);
                }
                if (entry.entryType === 'layout-shift') {
                  // console.log(`CLS: ${entry.value}`);
                }
              });
            });
  
            // Observe performance metrics
            observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
  
          }
  
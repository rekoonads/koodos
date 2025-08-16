declare global {
  interface Window {
    MonacoEnvironment?: {
      getWorkerUrl?: (workerId: string, label: string) => string
      getWorker?: (workerId: string, label: string) => Worker
    }
  }
}

// Configure Monaco Environment for proper worker loading
if (typeof window !== "undefined") {
  window.MonacoEnvironment = {
    getWorkerUrl: (workerId: string, label: string) =>
      `data:text/javascript;charset=utf-8,${encodeURIComponent(`
        self.MonacoEnvironment = {
          baseUrl: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/'
        };
        importScripts('https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs/base/worker/workerMain.js');
      `)}`,
  }
}

export {}

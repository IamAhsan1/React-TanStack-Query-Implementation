import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './routes/router';
import { RouterProvider } from 'react-router';

// 1. We ONLY import the capitalized QueryClient and QueryClientProvider
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// 2. Now it is safe to declare the lowercase queryClient here
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  </StrictMode>,
)
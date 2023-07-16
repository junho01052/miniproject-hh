import { QueryClient, QueryClientProvider } from 'react-query';
import Router from './shared/Router';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;

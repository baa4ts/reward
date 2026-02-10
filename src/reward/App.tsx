// Imports organizados por categoría
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "./components/Header";
import RewardsHeader from "./components/RewardsHeader";
import { CardGrid } from "./components/CardGrid";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Hero } from "./components/Hero";



const queryClient = new QueryClient()

export const App = () => {

  return (
    <QueryClientProvider client={queryClient}>

      {/* Tienen memo */}
      <Header />
      <Hero />
      <RewardsHeader />


      {/* Cards */}
      <CardGrid />

      {/* DevTools */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
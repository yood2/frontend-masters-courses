import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity,
        },
    },
});

import Details from './Details';
import SearchParams from './SearchParams';

const App = () => {
    return (
        <div>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <header>
                        <Link to="/">Adopt Me!</Link>
                    </header>
                    <Routes>
                        <Route path="/details/:id" element={<Details />} />
                        <Route path="/" element={<SearchParams />} />
                    </Routes>
                </BrowserRouter>
            </QueryClientProvider>
        </div>
    );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(React.createElement(App));

import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react';

import Home from 'pages/Home';
const Catalog = lazy(() => import('pages/Catalog'));

export const ComponentsRoutes = () => {
    return (
        <Suspense fallback={<h1>Carregando...</h1>}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="*" element={<h1>Pagina Não Encontrada!!</h1>} />
            </Routes>
        </Suspense>
    )
}
import React, { Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';
import NotFound from './components/NotFound';

const pageMap = {
    login: lazy(() => import('./pages/login')),
    register: lazy(() => import('./pages/register')),
    // Add other pages here if needed
};

const generatePage = (pageName) => {
    const PageComponent = pageMap[pageName.toLowerCase()];

    if (!PageComponent) {
        return <NotFound />;
    }

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PageComponent />
        </Suspense>
    );
};

const PageRender = () => {
    const { page, id } = useParams();
    let pageName = page;

    if (id) {
        pageName = `${page}/${id}`;
    }

    return generatePage(pageName);
};

export default PageRender;

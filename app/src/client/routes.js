import App from './App';
import ArticleListPage from './pages/ArticleListPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage
      },
      {
        path: '/ssr/articles/:id',
        ...ArticleListPage
      },
      {
        ...NotFoundPage
      }
    ]
  }
];

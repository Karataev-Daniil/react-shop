import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';

import HomePage from '../pages/Home/HomePage';
import CatalogPage from '../pages/Catalog/CatalogPage';
import ProductPage from '../pages/Product/ProductPage';
import Product, { 
	loader as productLoader 
} from '../pages/Product/ProductPage';
import CartPage from '../pages/Cart/CartPage';
import OrdersPage from '../pages/Orders/OrdersPage';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <HomePage />
			},
			{
				path: 'catalog',
				element: <CatalogPage />
			},
			{
				path: 'catalog/:category',
				element: <CatalogPage />
			},
			{
				path: 'product/:id',
				element: <ProductPage />,
				loader: productLoader,
			},
			{
				path: 'cart',
				element: <CartPage />,
			},
			{
				path: 'orders',
				element: <OrdersPage />,
			}
		]
	}
]);

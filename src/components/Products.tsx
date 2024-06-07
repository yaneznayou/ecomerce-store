import React from 'react'
import { IProduct } from '../types'
import ProductItem from './ProductItem'

const products: IProduct[] = [
	{
		_id: 'wefe',
		imagePath: 'https://items.s1.citilink.ru/1522118_v01_b.jpg',
		name: 'Ноутбук MSI GE76 Raider',
		price: 4500,
	},
	{
		_id: '34tf3ef',
		imagePath: 'https://items.s1.citilink.ru/1603590_v01_b.jpg',
		name: 'Ноутбук Gigabyte Aero 17',
		price: 3500,
	},
	{
		_id: '3g43463tg',
		imagePath: 'https://items.s1.citilink.ru/1621982_v01_b.jpg',
		name: 'Ноутбук MSI GE76 Raider',
		price: 3000,
	},
]

const Products = () => {
	return (
		<div className='mt-4'>
			{products.map(product => (
				<ProductItem product={product} key={product._id} />
			))}
		</div>
	)
}

export default Products

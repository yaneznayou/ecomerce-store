import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/cart/actions'
import { IProduct } from '../types'
import Quantity from './Quantity'

interface IProductItem {
	product: IProduct
}

const ProductItem: FC<IProductItem> = ({ product }) => {
	const [count, setCount] = useState(0)

	const dispatch = useDispatch()

	const addHandler = () => {
		dispatch(addToCart(product, count))
	}

	return (
		<div
			className='p-7 w-4/5 mx-auto mt-7 flex justify-center flex-col text-center items-center overflow-hidden'
			style={{
				borderRadius: 50,
				background: 'linear-gradient(145deg, #cacaca, #f0f0f0)',
				boxShadow: '20px 20px 60px #bebebe, -20px -20px 60px #ffffff',
			}}
		>
			<img
				src={product.imagePath}
				className='w-full rounded-3xl'
				alt={product.name}
			/>
			<div className='text-lg font-bold my-2'>{product.name}</div>
			<div className='text-sm text-gray-600'>${product.price}</div>
			<Quantity count={count} setCount={setCount} />
			<button
				onClick={addHandler}
				className='bg-pink-500 font-semibold text-white rounded-sm px-3 py-1'
			>
				В корзину
			</button>
		</div>
	)
}

export default ProductItem

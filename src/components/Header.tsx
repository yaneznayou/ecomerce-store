import React, { FC, useState } from 'react'
import cn from 'classnames'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../store/cart/actions'

import logoImage from '../assets/images/fastify.svg'
import cartIcon from '../assets/images/bx-cart.svg'

const Header: FC = () => {
	const [isShowCart, setIsShowCart] = useState(false)

	const cart = useTypedSelector(state => state.cart)
	const total = cart.reduce((acc, item) => acc + item.price, 0)

	const dispatch = useDispatch()

	const removeHandler = (id: string) => {
		dispatch(removeFromCart(id))
	}

	return (
		<div
			className='flex items-center justify-between relative w-full py-1 px-3'
			style={{
				background:
					'linear-gradient(90deg, rgba(255,0,104,1) 0%, rgba(255,226,0,1) 100%)',
				boxShadow: '1px 3px 30px 0px rgba(50, 50, 50, 0.75)',
			}}
		>
			<img src={logoImage} alt='' width='180' />

			<button
				className='bg-transparent border-none relative'
				onClick={() => setIsShowCart(!isShowCart)}
			>
				<img src={cartIcon} alt='' width='50' />

				<div className='text-red-600 absolute bottom-0 right-1 font-bold rounded-full bg-white w-5 h-5 flex items-center text-center'>
					{cart.length}
				</div>
			</button>

			<div
				className={cn(
					'bg-white absolute right-0 shadow-md p-5 rounded-md z-10',
					{
						hidden: !isShowCart,
					}
				)}
				style={{
					top: 60,
				}}
			>
				{cart.map(item => (
					<div
						className='flex items-center mb-4'
						key={`cart item ${item.name}`}
					>
						<img
							src={item.imagePath}
							alt={item.name}
							width='55'
							height='55'
							className='mr-3'
						/>
						<div>
							<div>{item.name}</div>
							<div>{`${item.count} x $${item.price.toLocaleString()}`}</div>
							<button
								className='text-red-600 bg-transparent border-0'
								onClick={() => removeHandler(item._id)}
							>
								Удалить
							</button>
						</div>
					</div>
				))}

				<div className='text-lg border-solid border-t-2 border-red-100 pt-1 mt-5'>
					Total: <b>${total.toLocaleString()}</b>
				</div>
			</div>
		</div>
	)
}

export default Header

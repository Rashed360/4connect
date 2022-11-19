import CPU from '../assets/cpu.svg'

const Menu = () => {
	return (
		<div className='menu-box'>
			<div className='menu-item'>
				<p>Play vs cpu</p>
				<CPU />
			</div>
			<div className='menu-item'>Play vs player</div>
			<div className='menu-item'>Game rules</div>
		</div>
	)
}

export default Menu

import Image from 'next/image'
import Link from 'next/link'

import CPU from '../assets/cpu.svg'
import PLR from '../assets/player.svg'
import LOGO from '../assets/logo.svg'

const Menu = () => {
	return (
		<div className='menu-box'>
			<Image className='logo' src={LOGO} width={57} height={57} alt='' />
			<Link href='/play'>
				<div className='menu-item home'>
					<span>Play vs cpu</span>
					<Image src={CPU} width={81} height={47} alt='' />
				</div>
			</Link>
			<Link href='/play'>
				<div className='menu-item away'>
					<span>Play vs player</span>
					<Image src={PLR} width={81} height={47} alt='' />
				</div>
			</Link>
			<Link href='/rules'>
				<div className='menu-item'>Game rules</div>
			</Link>
		</div>
	)
}

export default Menu

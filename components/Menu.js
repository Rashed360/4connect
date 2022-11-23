import Image from 'next/image'
import Link from 'next/link'

import CPU from '../assets/cpu.svg'
import PLR from '../assets/player.svg'
import LOGO from '../assets/logo.svg'

const Menu = () => {
	return (
		<div className='menu-box'>
			<Image className='logo' src={LOGO} width={57} height={57} />
			<Link href='/play'>
				<div className='menu-item home'>
					<p>Play vs cpu</p>
					<Image src={CPU} width={81} height={47} />
				</div>
			</Link>
			<Link href='/play'>
				<div className='menu-item away'>
					<p>Play vs player</p>
					<Image src={PLR} width={81} height={47} />
				</div>
			</Link>
			<Link href='/rules'>
				<div className='menu-item'>Game rules</div>
			</Link>
		</div>
	)
}

export default Menu

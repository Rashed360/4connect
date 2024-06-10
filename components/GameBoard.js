const GameBoard = () => {
	return (
		<>
			<div className='game-board'>
				{[...Array(42)].map((itm, idx) => (
					<div className='slot' key={idx}>
						<div className='highlight'></div>
					</div>
				))}
				<div className='game-turn'></div>
			</div>
			<div className='game-state'></div>
		</>
	)
}

export default GameBoard

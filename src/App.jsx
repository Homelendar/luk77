import './App.scss';

function App() {
return (
	<div className="App">
		<header>
			<div className='header_section'>
				<img src={require('./images/logo1.svg').default} alt="" />
				<div className='burger menu'>
					<div className='navigation'>
						<a href="#">Platform</a>
						<a href="#">Marketplace</a>
						<a href="#">About the Company</a>
						<a href="#">Trading Conditions</a>
						<a href="#">Contact Us</a>
					</div>
				</div>

				<div className='nav_but'>
					<img src={require('./images/global-line.svg').default} alt="" />
					<span>
						En
					</span>
					<img src={require('./images/Arrow.svg').default} alt="" />
					<div className='button_first'>
						<button className='but_trans'>
							Log in
						</button>
						<button className='but_white'>
							Sign up
						</button>
					</div>
				</div>
			</div>
		</header>
		<div className='second_block'>
			<div className='trade_platform'>
				<h1>
					Trade with the best CFD platform in Europe
				</h1>
				<p>
					Reliable and simple.
					Trade the most popular in Europe: S&P/ASX 200, Bitcoin, EUR/USD and RUB with our CFD service.
				</p>
				<div className='bit_but'>
					<button className='but_dark_blue'>
						Begin
					</button>
					<button className='button_blue'>
						Demo
					</button>
				</div>
			</div>
			<img src={require('./images/glav_logo.png')} alt="" />
		</div>
		<div className='logo_cards'>
			<img className='block_pictures' src={require('./images/1.png')} alt="" />
			<img className='block_pictures' src={require('./images/2.png')} alt="" />
			<img className='block_pictures' src={require('./images/3.png')} alt="" />
			<img className='block_pictures' src={require('./images/4.png')} alt="" />
		</div>
	</div>
);
}

export default App;

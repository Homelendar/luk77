import './App.scss';

function App() {
return (
	<div className="App">
		<header>
			<div className='header_section'>
				<img src={require('./images/Logo dark (1).svg').default} alt="" />
				<div className='burger_menu'>
					<img className='burger_img' src={require('./images/burger_img.svg').default} alt="" />
					<div className='navigation'>
						<a href="#">Platform</a>
						<a href="#">Marketplace</a>
						<a href="#">About the Company</a>
						<a href="#">Trading Conditions</a>
						<a href="#">Contact Us</a>
						<div className='nav_but mobile'>
							<div className='global'>
								<img src={require('./images/global-line.svg').default} alt="" />
								<span>
									En
								</span>
								<img src={require('./images/Arrow.svg').default} alt="" />
							</div>
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
				</div>
				<div className='nav_but desktop'>
					<div className='global'>
						<img src={require('./images/global-line.svg').default} alt="" />
						<span>
							En
						</span>
						<img src={require('./images/Arrow.svg').default} alt="" />
					</div>
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
			<img className='loyal' src={require('./images/glav_logo.png')} alt="" />
		</div>
		<div className='logo_cards'>
			<img className='block_pictures' src={require('./images/1.png')} alt="" />
			<img className='block_pictures' src={require('./images/2.png')} alt="" />
			<img className='block_pictures' src={require('./images/3.png')} alt="" />
			<img className='block_pictures' src={require('./images/4.png')} alt="" />
		</div>
		<div className="benefits">
			<div className="benefits_text">
				<h2>
					Trust and benefits
				</h2>
				<p>
					Trade with top-notch traders.Profit from rising and falling prices.
				</p>
			</div>
			<div className="benefits_users">
				<div className="user">
					<img src={require('./images/Vasily.svg').default} alt="" />
					<div className="user_info">
						<h3>
							Vasily Alikperov
						</h3>
						<span>
							Mos
						</span>
						<p>
							In terms of automation, COMPANY NAME is a great platform with transparent rates.
						</p>
						<button className="user_badge green">
							Top trader
						</button>
					</div>
				</div>
				<div className="user">
					<img src={require('./images/Violeta.svg').default} alt="" />
					<div className="user_info">
						<h3>
							Violeta Podgorneva
						</h3>
						<span>
							St. Petersburg
						</span>
						<p>
							The company is very good! I have been trading here since November.
						</p>
						<button className="user_badge red">
							Order master
						</button>
					</div>
				</div>
			</div>
		</div>
		<div className='frick'>
			<div className='wallet'>
				<img src={require('./images/wallet_img.png')} alt="" />
				<div className='traders'>
					<h3>
						Pro results with pro traders
					</h3>
					<p>
						Join a team of professional traders who will manage your assets.
						
						Diversify your portfolio, reducing risk. Trade to maximize your profits.
					</p>
					<div className='join_but'>
						<button className='pox'>
							Join the professionals
						</button>
					</div>
				</div>
			</div>
		</div>
		<div className='markets'>
			<div className='text_table'>
				<div className='block_text'>
					<span>
						Cryptocurrencies. Stocks. Indices.
					</span>
					<h3>
						Markets on COMPANY NAME
					</h3>
					<p>
						Trade bitcoin, S&P 500, gold, EUR/USD and over 100 assets. Get easy access to cryptocurrencies, stock indices, commodities and Forex markets from one account.
					</p>
					<div className='trading_but'>
						<button>
							Start Trading
						</button>
					</div>
				</div>
				<img src={require('./images/Table.png')} alt="" />
			</div>
		</div>
		<div className="steps">
			<div className="steps_left">
				<div className='step_item'>
					<img className='number_img' src={require('./images/num1.svg').default} alt="" />
					<span>
						Go to the <a href="#">registration page</a>
					</span>
					<p>
						To get started, go the registration section.
					</p>
				</div>
				<div className='step_item'>
					<img className='number_img' src={require('./images/num2.svg').default} alt="" />
					<span>
						Specify user details
					</span>
					<p>
						Enter the contact details of the new user and go to the personal account after successful registration.
					</p>
				</div>
				<div className='step_item'>
					<img className='number_img' src={require('./images/num3.svg').default} alt="" />
					<span>
						Make a deposit
					</span>
					<p>
						Fill your account through your personal cabinet in any convenient way, whether it's a credit card or a digital wallet.
					</p>
				</div>
				<div className='step_item'>
					<img className='number_img' src={require('./images/num4.svg').default} alt="" />
					<span>
						Start earning
					</span>
					<p>
						Start trading in any asset you like. You will have to choose from more than 250 tools!
					</p>
				</div>
			</div>
			<div className="steps_right">
				<h3>
					Just 4 steps to open a trading account
				</h3>
				<p>
					After which you will be able to plunge into professional trading
					together with COMPANY NAME
				</p>
				<div className='steps_but_create'>
					<button className="steps_btn">
						Create an account
					</button>
				</div>
			</div>
		</div>
		<div className='platform'>
			<div className='platform_name'>
				<div className='platform_text'>
					<h3>
						A unique platform for comfortable trading from anywhere in the world
					</h3>
					<p>
						COMPANY NAME is an award-winning platform that allows you to trade the world's financial markets.
					</p>
					<div className='platform_button'>
						<button>
							Start trading
						</button>
					</div>
				</div>
			</div>
			<img className='platform_trade' src={require('./images/platform.png')} alt="" />
		</div>
	</div>
);
}

export default App;

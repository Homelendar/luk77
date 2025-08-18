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
									EN
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
							EN
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
					<div className='but_user'>
						<img src={require('./images/Vasily.svg').default} alt="" />
						<button className="user_badge green">
							Top trader
						</button>
					</div>
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
					</div>
				</div>
				<div className="user">
					<div className='but_user'>
						<img src={require('./images/Violeta.svg').default} alt="" />
						<button className="user_badge red">
							Order master
						</button>
					</div>
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
					</div>
				</div>
			</div>
		</div>
		<div className='frick'>
			<div className='wallet'>
				<img className='img_wallet' src={require('./images/wallet_img.png')} alt="" />
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
				<img className='markets_img' src={require('./images/Table.png')} alt="" />
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
		<div className='platform_container'>
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
		<div className='card_container'>
			<div className='titl'>
				<h3>
					Choose the right account type for you
				</h3>
				<p>
					Start working and earning with thousands of traders around the world right now. The last step is to choose the account type that suits your needs
				</p>
			</div>
			<div className='tabl_cards_glav'>
				<div className='minimal_tabl_cards'>
					<div className='hh_titl'>
						<h4>
							Beginner
						</h4>
						<span className='sp'>
							popular
						</span>
					</div>
					<span className='rete'>
						Minimal Deposit:
					</span>
					<h4>
						$1,000
					</h4>
					<p>
						A starter type of account that will suit anyone who wants to familiarize themselves with the basics of forex trading.
					</p>
					<div className='traficall'>
						<div className='tariff_title'>
							<div className='tariff_item'>
								<img src={require('./images/tick.svg').default} alt="" />
								<span>
									Minimal Deposit
								</span>
							</div>
							<span>
								$1,000
							</span>
						</div>
						<div className='tariff_title'>
							<div className='tariff_item'>
								<img src={require('./images/tick.svg').default} alt="" />
								<span>
									Leverage:
								</span>
							</div>
							<span>
								1:20
							</span>
						</div>
						<div className='tariff_title'>
							<div className='tariff_item'>
								<img src={require('./images/tick.svg').default} alt="" />
								<span>
									Signals:
								</span>
							</div>
							<span>
								5
							</span>
						</div>
						<div className='tariff_title'>
							<div className='tariff_item'>
								<img src={require('./images/tick.svg').default} alt="" />
								<span>
									Financial Plan:
								</span>
							</div>
							<span>
								Standart
							</span>
						</div>
						<div className='tariff_title'>
							<div className='tariff_item'>
								<img src={require('./images/tick.svg').default} alt="" />
								<span>
									Instant Execution
								</span>
							</div>
						</div>
						<div className='inactive'>
							<img src={require('./images/minus.svg').default} alt="" />
							<span>
								Cryptocurrency and metal trading
							</span>
						</div>
						<div className='inactive'>
							<img src={require('./images/minus.svg').default} alt="" />
							<span>
								Deposit Insurance
							</span>
						</div>
						<div className='inactive'>
							<img src={require('./images/minus.svg').default} alt="" />
							<span>
								Deposit Protection
							</span>
						</div>
						<div className='inactive'>
							<img src={require('./images/minus.svg').default} alt="" />
							<span>
								24/7 personal support
							</span>
						</div>
					</div>
				</div>
				<div className='minimal_tabl_cards'>
					<div className='hh_titl'>
						<h4>
							Experienced
						</h4>
					</div>
					<span>
						Minimal Deposit:
					</span>
					<h4>
						$25,000
					</h4>
					<p>
						Optimal account with balanced trading conditions and an extended list of financial instruments.
					</p>
					<div className='traficall'>
						<div className='tariff_title'>
							<div className='tariff_item'>
								<img src={require('./images/tick.svg').default} alt="" />
								<span>
									Minimal Deposit
								</span>
							</div>
							<span>
								$25,000
							</span>
						</div>
						<div className='tariff_title'>
							<div className='tariff_item'>
								<img src={require('./images/tick.svg').default} alt="" />
								<span>
									Leverage:
								</span>
							</div>
							<span>
								1:50
							</span>
						</div>
						<div className='tariff_title'>
							<div className='tariff_item'>
								<img src={require('./images/tick.svg').default} alt="" />
								<span>
									Signals:
								</span>
							</div>
							<span>
								15
							</span>
						</div>
						<div className='tariff_title'>
							<div className='tariff_item'>
								<img src={require('./images/tick.svg').default} alt="" />
								<span>
									Financial Plan:
								</span>
							</div>
							<span>
								Individual
							</span>
						</div>
						<div className='tariff_title'>
							<div className='tariff_item'>
								<img src={require('./images/tick.svg').default} alt="" />
								<span>
									Instant Execution
								</span>
							</div>
						</div>
						<div className='tariff_item'>
							<img src={require('./images/tick.svg').default} alt="" />
							<span>
								Cryptocurrency and metal trading
							</span>
						</div>
						<div className='tariff_item'>
							<img src={require('./images/tick.svg').default} alt="" />
							<span>
								Deposit Insurance
							</span>
						</div>
						<div className='inactive'>
							<img src={require('./images/minus.svg').default} alt="" />
							<span>
								Deposit Protection
							</span>
						</div>
						<div className='inactive'>
							<img src={require('./images/minus.svg').default} alt="" />
							<span>
								24/7 personal support
							</span>
						</div>
							<button className='button_arrow'>
								<span>
									Start trading
								</span>
								<img src={require('./images/arrow_mini.svg').default} alt="" />
							</button>
					</div>
				</div>
				<div className='minimal_tabl_cards'>
					<div className='hh_titl'>
						<h4>
							Professional
						</h4>
					</div>
					<span>
						Minimal Deposit:
					</span>
					<h4>
						$50,000
					</h4>
					<p>
						An improved account type for experienced traders who are confident in trading in the financial markets.
					</p>
					<div className='traficall'>
						<div className='tariff_title'>
							<div className='tariff_item'>
								<img src={require('./images/tick.svg').default} alt="" />
								<span>
									Minimal Deposit
								</span>
							</div>
							<span>
								$50,000
							</span>
						</div>
						<div className='tariff_title'>
							<div className='tariff_item'>
								<img src={require('./images/tick.svg').default} alt="" />
								<span>
									Leverage:
								</span>
							</div>
							<span>
								1:100
							</span>
						</div>
						<div className='tariff_title'>
							<div className='tariff_item'>
								<img src={require('./images/tick.svg').default} alt="" />
								<span>
									Signals:
								</span>
							</div>
						</div>
						<div className='tariff_title'>
							<div className='tariff_item'>
								<img src={require('./images/tick.svg').default} alt="" />
								<span>
									Financial Plan:
								</span>
							</div>
							<span>
								Individual
							</span>
						</div>
						<div className='tariff_title'>
							<div className='tariff_item'>
								<img src={require('./images/tick.svg').default} alt="" />
								<span>
									Instant Execution
								</span>
							</div>
						</div>
						<div className='tariff_item'>
							<img src={require('./images/tick.svg').default} alt="" />
							<span>
								Cryptocurrency and metal trading
							</span>
						</div>
						<div className='tariff_item'>
							<img src={require('./images/tick.svg').default} alt="" />
							<span>
								Deposit Insurance
							</span>
						</div>
						<div className='tariff_item'>
							<img src={require('./images/tick.svg').default} alt="" />
							<span>
								Deposit Protection
							</span>
						</div>
						<div className='tariff_item'>
							<img src={require('./images/tick.svg').default} alt="" />
							<span>
								24/7 personal support
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className='block_input_data'>
			<div className='title_input'>
					<h3>
						Any questions left?
					</h3>
					<p>
						Fill out the form below with your question. Our customer care team will answer you within 24 hours!
					</p>
			</div>
			<div className='imput_data'>
				<div className='data_entry'>
					<div className='input_text'>
						<input type="text" placeholder='Email' />
						<input type="text" placeholder='Password' />
						<button>
							Contact Us
						</button>
					</div>
					<p className='text_pp'>
						By clicking the “contact us” button you agree to the processing of your personal data. We do not pass your data to third parties.
					</p>
				</div>
			</div>
		</div>
		<footer>
			<div className='container'>
				<div className='footer_contain'>
					<div className='name_company'>
						<img className='img_logo1' src={require('./images/Logo dark (1).svg').default} alt="" />
						<p>
							COMPANY NAME, as well as the web COMPANY-NAME.com, does not provide any services to citizens and residents of the United States, Belgium, Turkey, Israel, Syria, Sudan, Iran, North Korea, Japan, as well as other countries and jurisdictions where said services cannot be provided due to applicable laws.
						</p>
						<div className='span_engine'>
							<span>
								COMPANY NAME 2022 ©
							</span>
							<span>
								All rights reserved
							</span>
						</div>
					</div>
					<div className='general_container'>
						<div className='sign_links' >
							<span>
								Main
							</span>
							<a href="#">Sign up</a>
							<a href="#">Log into your account</a>
						</div>
						<div className='sign_links'>
							<span>
								Marketplace
							</span>
							<a href="#">Real-Time Markets</a>
							<a href="#">Forex</a>
							<a href="#">Commodities</a>
							<a href="#">Stocks</a>
							<a href="#">Index</a>
							<a href="#">Cryptocurrencies</a>
						</div>
						<div className='sign_links'>
							<span>
								Accounts and platforms
							</span>
							<a href="#">Account types</a>
							<a href="#">Our platform</a>
							<span>
								FAQ
							</span>
						</div>
					</div>
				</div>
				<div className='p_text'>
					<p>
						Trading contracts for difference and currency pairs carries a high risk of loss due to the fact that such trading is realized through lending, which can lead to the complete loss of your capital. This type of trading is not suitable for all categories of investors. Click here for the full text of our Risk Warning and before you start trading, make sure that you understand all the risks, taking into account your experience in this area. If necessary, contact independent consultants. The information contained on this website and in the documents posted on it is of a general nature and does not take into account your personal circumstances, financial situation or needs. In order to assess whether trading in such financial assets is suitable for you, you should carefully study our Client Agreement and seek independent expert advice. COMPANY NAME is a trademark of COMPANY NAME LTD. Company Number: 26350 BC 2021 Registered Address: Suite 305, Griffith Corporate Center, Kingstown, St. Vincent and the Grenadines. COMPANY-NAME.com transactions are processed by Dotwallet OÜ. Company number: 16253252. Registration address: Harju maakond, Tallinn, Kesklinna linnaosa, Tuukri tn 19-315, 10120, Estonia. COMPANY-NAME.com © 2022 - All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	</div>
);
}

export default App;

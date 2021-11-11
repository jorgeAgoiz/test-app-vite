import React from 'react'
import { Container } from 'react-bootstrap'
import { Route, Switch } from 'wouter'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Suscribe from './components/Suscribe/Suscribe'


const App = (): JSX.Element => {

	return (
		<Container className='App'>
			<Header />
			<Switch>
				<Route path={'/'} component={Home} />
				<Route path={'/suscribe'} component={Suscribe} />
			</Switch>
			<Footer />
		</Container>
	)
}

export default App

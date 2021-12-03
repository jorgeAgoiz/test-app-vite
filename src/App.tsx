import React from 'react'
import { Container } from 'react-bootstrap'
import { Route, Switch } from 'wouter'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Suscribe from './components/Suscribe/Suscribe'
import MainDocs from './components/MainDocs/MainDocs'


const App = (): JSX.Element => {

	return (
		<Container className='App'>
			<Header />
			<Switch>
				<Route path={'/'} component={Home} />
				<Route path={'/suscribe'} component={Suscribe} />
				<Route path={'/docs'} component={MainDocs} />
			</Switch>
			<Footer />
		</Container>
	)
}

export default App

import React from 'react'
import { Container } from 'react-bootstrap'
import { Route, Switch } from 'wouter'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Suscribe from './components/Suscribe/Suscribe'


const App = (): JSX.Element => {

	return (
		<Container className='App'>
			<Header />
			<Switch>
				<Route path={'/'} component={Home} />
				<Route path={'/contact'} component={Contact} />
				<Route path={'/suscribe'} component={Suscribe} />
			</Switch>
		</Container>
	)
}

export default App

import React, { useState } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import Header from './components/Header/Header'

interface State {
  count: number;
}

const App = (): JSX.Element => {
	const [ count, setCount ] = useState<State['count']>(0)

	const addCount = (): void => {
		setCount(count + 1)
	}
	const substractCount = (): void => {
		setCount(count - 1)
	}

	return (
		<Container className='App'>
			<Header />
			<Row>
				<p>{count}</p>
			</Row>
			<Row md={2}>
				<Button onClick={addCount} size='sm' variant='success'>
          Add
				</Button>
				<Button onClick={substractCount} size='sm' variant='warning'>
          Substract
				</Button>
			</Row>
		</Container>
	)
}

export default App

import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Header from './components/Header/Header'


const App = (): JSX.Element => {

	return (
		<Container className='App'>
			<Header />
			<Row xs={1} md={1} lg={2} xl={2} className="g-4 mt-2 justify-content-center">
				<Col>
					<Card bg='warning' >
						<Card.Img 
							variant="top"
							src="../images/mainPic.jpg" 
						/>
						<Card.Body>
							<Card.Title>API PREGUNTAS TRIVIA</Card.Title>
							<Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	)
}

export default App

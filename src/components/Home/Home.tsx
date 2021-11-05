import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'

const Home = () => {

	return (
		<>
			<Row xs={1} md={2} lg={2} xl={2} className="g-4 mt-1 justify-content-center">
				<Col md={10} lg={8} xl={8}>
					<Card bg='dark' className='text-light' >
						<Card.Img 
							variant="top"
							src="../images/mainPic.jpg" 
						/>
						<Card.Body className='text-center'>
							<Card.Title className='fst-italic'>API PREGUNTAS TRIVIA</Card.Title>
							<Card.Text>
								API de preguntas estilo trivial en castellano. Solicita una API key y empieza a disfrutar de ella.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default Home
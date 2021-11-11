import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'

const Home = ():JSX.Element => {

	return (
		<>
			<Row xs={1} md={2} lg={2} xl={2} className="g-4 mt-5 justify-content-center">
				<Col md={10} lg={8} xl={8}>
					<Card bg='primary' className='text-light' >
						<Card.Img 
							variant="top"
							src="../images/main-image-question.jpg"
							max-width="350px"
							max-height="450px" 
						/>
						<Card.Body className='text-center'>
							<Card.Title className='fst-italic'>QuizQuestions API</Card.Title>
							<Card.Text>
								API de preguntas y respuestas en castellano. Solicita una API key y empieza a disfrutar de ella.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default Home
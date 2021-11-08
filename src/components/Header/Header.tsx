import React from 'react'
import { Row, Navbar, Container, Nav } from 'react-bootstrap'
import { useLocation } from 'wouter'

const Header = (): JSX.Element => {
	const [ location, setLocation ] = useLocation()

	return (
		<Row>
			<Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
				<Container>
					<Navbar.Brand className='mb-2'>
						QuizQuestions API
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
						<Nav>
							<Nav.Link className='me-3' onClick={() => setLocation('/')}>
								Inicio
							</Nav.Link>
							<Nav.Link className='me-3' href="https://jorgeagoiz.github.io/quizQuestions-REST_API/index.html">
									Documentación
							</Nav.Link>
							<Nav.Link className='me-3' onClick={() => setLocation('/suscribe')}>
								Suscribirte
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Row>
	)
}

export default Header

/* Una cosa que quiero hacer es añadir configuración al eslint para ignorar ciertas longiduted de linea permitidas */
import React from 'react'
import { Row, Navbar, Container, Nav } from 'react-bootstrap'

const Header = (): JSX.Element => {

	return (
		<Row>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand className='mb-2'>
						QuizQuestions API
					</Navbar.Brand>
					<Nav className="justify-content-end">
						<Nav.Link className='me-3' href="/">
								Inicio
						</Nav.Link>
						<Nav.Link className='me-3' href="/documentation">
								Documentación
						</Nav.Link>
						<Nav.Link className='me-3' href="/suscribe">
								Suscribirte
						</Nav.Link>
						<Nav.Link className='ms-3' href="/contact">
								Contacto
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</Row>
	)
}

export default Header

/* Una cosa que quiero hacer es añadir configuración al eslint para ignorar ciertas longiduted de linea permitidas */
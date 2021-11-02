import React from 'react'
import { Row, Navbar, Container, Nav } from 'react-bootstrap'

const Header = (): JSX.Element => {

	return (
		<Row>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="#home">GiorgioBlog</Navbar.Brand>
					<Nav className="justify-content-end">
						<Nav.Link className='me-3' href="#home">
								Inicio
						</Nav.Link>
						<Nav.Link className='ms-3' href="#features">
								Contacto
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</Row>
	)
}

export default Header
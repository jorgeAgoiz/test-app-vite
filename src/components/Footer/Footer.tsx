import React from 'react'
import { Container, Navbar, Row, Image } from 'react-bootstrap'

const Footer = ():JSX.Element => {
	return (
		<Row>
			<Navbar bg="primary" fixed='bottom'>
				<Container>
					<Navbar.Brand href="https://www.linkedin.com/in/jorge-agoiz-pedraja-78321b39/">
						<Image src='../../../images/linkedin.png' width="40px" height="40px" title='Jorge Agoiz'/>
					</Navbar.Brand>
				</Container>
			</Navbar>
		</Row>
	)
}

export default Footer
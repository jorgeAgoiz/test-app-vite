import React from 'react'
import { Button, Form, Row } from 'react-bootstrap'

const Suscribe = () => {

	return (
		<Row className='d-flex justify-content-center'>
			<Form className='mt-5 text-center col-4 ' >
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email</Form.Label>
					<Form.Control type="email" placeholder="Introduce tu email..." />
					<Form.Text className="text-muted">
						Introduce tu email para que te mandemos una API Key...
					</Form.Text>
				</Form.Group>
				<Button variant="success" type="submit">
					Enviar
				</Button>
			</Form>
		</Row>
	)
}

export default Suscribe
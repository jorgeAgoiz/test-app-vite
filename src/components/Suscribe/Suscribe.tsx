import React from 'react'
import { Button, Form, Row } from 'react-bootstrap'

const Suscribe = ():JSX.Element => {

	const onHandleSubmit = (evt: React.FormEvent<HTMLFormElement>):void => {
		evt.preventDefault()
		console.log(`El email introducido es: ${evt.currentTarget.email.value}`)
	}

	return (
		<>
			<Row className='mt-5 mb-5'></Row>
			<Row className='d-flex justify-content-center mt-5'>
				<Form className='mt-5 text-center col-4 ' onSubmit={onHandleSubmit}>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label><strong>Email</strong></Form.Label>
						<Form.Control type="email" name='email' placeholder="Introduce tu email..." />
						<Form.Text className="text-muted">
							<em>Suscribete y consigue tu API KEY</em>
						</Form.Text>
					</Form.Group>
					<Button variant="success" type="submit">
						Enviar
					</Button>
				</Form>
			</Row>
		</>
	)
}

export default Suscribe
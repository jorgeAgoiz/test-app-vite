import React from 'react'
import { Button, Form, Row } from 'react-bootstrap'
import { getKey } from '../../services/getKey'

const Suscribe = ():JSX.Element => {

	const onHandleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault()
		const email: string = evt.currentTarget.email.value
		const signed = await getKey(email)
		console.log(signed)
		/* Depende de la respuesta hacemos una cosa o otra */
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
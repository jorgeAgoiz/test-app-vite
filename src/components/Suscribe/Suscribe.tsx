import React, { useState } from 'react'
import { Button, Form, Row } from 'react-bootstrap'
import { useLocation } from 'wouter'
import { getKey } from '../../services/getKey'

interface State {
	suscribeMsg: string | null;
	textColor: string | null;
}

const Suscribe = (): JSX.Element => {
	const [ suscribeMsg, setSuscribeMsg ] = useState<State['suscribeMsg']>()
	const [ textColor, setTextColor ] = useState<State['textColor']>()
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [ location, setLocation ] = useLocation()

	const onHandleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault()
		const email: string = evt.currentTarget.email.value
		const signed = await getKey(email)
		const statusCode: string | null = localStorage.getItem('status_code') 
		
		if (statusCode === '201') {
			setTextColor('text-success')
			setTimeout(() => {
				return setLocation('/')
			}, 2000)
		} else {
			setTextColor('text-danger')
		}
		setSuscribeMsg(signed.message)
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
			<Row className={`mt-5 mb-5 justify-content-center ${textColor}`}>
				{suscribeMsg}
			</Row>
		</>
	)
}

export default Suscribe
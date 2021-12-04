import React from 'react'
import { Card, Row, Table } from 'react-bootstrap'

const MainDocs = (): JSX.Element => {
	return (
		<>
			<Row className='mt-5 mb-5'></Row>
			<Row className='mt-5 mb-5'>
				<Card>
					<Card.Header>
						<h1>Obtener preguntas</h1>
					</Card.Header>
					<Card.Body>
						<h4>Endpoint:</h4>
						<p>
							<strong>
								<em>https://quiz-questions-rest-api.herokuapp.com/questions</em>
							</strong>
						</p>
					</Card.Body>
					<Card.Body>
						<h4>Metodo:</h4>
						<p>GET</p>
					</Card.Body>
					<Card.Body>
						<h4>Autenticación:</h4> 
						<p>Esta llamada requiere una API KEY. Sin ella la autenticación falla y devuelve un codigo de estado 401</p>
					</Card.Body>
					<Card.Body>
						<h4>Parametros:</h4>
						<Table striped bordered hover>
							<thead>
								<tr>
									<th>Nombre</th>
									<th>Tipo</th>
									<th>Descripción</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>category</td>
									<td>String</td>
									<td>(optional) Category acepta seis opciones: [arte, historia, ciencia, deporte, entretenimiento, geografia].</td>
								</tr>
								<tr>
									<td>format</td>
									<td>String</td>
									<td>(optional) Acepta dos opciones: [multiple, boolean].</td>
								</tr>
								<tr>
									<td>amount</td>
									<td>String</td>
									<td>(optional) Por defecto diez, pero como maximo cuarenta.</td>
								</tr>
								<tr>
									<td>key</td>
									<td>String</td>
									<td>Api Key del usuario.</td>
								</tr>
							</tbody>
						</Table>
					</Card.Body>
					<Card.Body>
						<h4>Respuesta:</h4>
						<Table striped bordered hover>
							<thead>
								<tr>
									<th>Nombre</th>
									<th>Tipo</th>
									<th>Descripción</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>message</td>
									<td>String</td>
									<td>{'"Your results."'}</td>
								</tr>
								<tr>
									<td>response</td>
									<td>{'Array.<Object>'}</td>
									<td>Preguntas solicitadas</td>
								</tr>
							</tbody>
						</Table>
					</Card.Body>
					<Card.Body>
						<h4>Códigos de respuesta:</h4>
						<Table striped bordered hover>
							<thead>
								<tr>
									<th>Tipo</th>
									<th>Descripción</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>200</td>
									<td>Petición exitosa.</td>
								</tr>
								<tr>
									<td>412</td>
									<td>Fallo en condición previa. Error en campos de validación.</td>
								</tr>
								<tr>
									<td>404</td>
									<td>Sin resultados.</td>
								</tr>
								<tr>
									<td>401</td>
									<td>No autorizado.</td>
								</tr>
								<tr>
									<td>500</td>
									<td>Error interno del servidor.</td>
								</tr>
							</tbody>
						</Table>
					</Card.Body>
				</Card>
			</Row>
		</>
	)
}

export default MainDocs
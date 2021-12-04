import React from 'react'
import './MainDocs.css'
import { Card, Row, Table } from 'react-bootstrap'

// eslint-disable-next-line max-len
const url = 'https://carbon.now.sh/embed?bg=rgba%28251%2C216%2C252%2C1%29&t=one-dark&wt=none&l=application%2Fjson&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=47px&ph=32px&ln=false&fl=1&fm=Source+Code+Pro&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%257B%250A%2520%2520%2522message%2522%253A%2520%2522Your%2520results.%2522%252C%250A%2520%2520%2522data%2522%253A%2520%255B%250A%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2522incorrectAnswers%2522%253A%2520%255B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2522Idefix%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2522Tantampl%25C3%25A1n%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2522Odie%2522%250A%2520%2520%2520%2520%2520%2520%255D%252C%250A%2520%2520%2520%2520%2520%2520%2522category%2522%253A%2520%2522entretenimiento%2522%252C%250A%2520%2520%2520%2520%2520%2520%2522format%2522%253A%2520%2522multiple%2522%252C%250A%2520%2520%2520%2520%2520%2520%2522question%2522%253A%2520%2522%25C2%25BFC%25C3%25B3mo%2520se%2520llama%2520el%2520perro%2520de%2520Tint%25C3%25ADn%253F%2522%252C%250A%2520%2520%2520%2520%2520%2520%2522correctAnswer%2522%253A%2520%2522Mil%25C3%25BA%2522%252C%250A%2520%2520%2520%2520%2520%2520%2522__v%2522%253A%25200%250A%2520%2520%2520%2520%257D%252C%250A%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2522incorrectAnswers%2522%253A%2520%255B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2522Jim%2520Morrison%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2522Chris%2520Martin%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2522John%2520Lennon%2522%250A%2520%2520%2520%2520%2520%2520%255D%252C%250A%2520%2520%2520%2520%2520%2520%2522category%2522%253A%2520%2522entretenimiento%2522%252C%250A%2520%2520%2520%2520%2520%2520%2522format%2522%253A%2520%2522multiple%2522%252C%250A%2520%2520%2520%2520%2520%2520%2522question%2522%253A%2520%2522%25C2%25BFC%25C3%25B3mo%2520se%2520llamaba%2520el%2520cantante%2520de%2520Queen%253F%2522%252C%250A%2520%2520%2520%2520%2520%2520%2522correctAnswer%2522%253A%2520%2522Freddy%2520Mercury%2522%252C%250A%2520%2520%2520%2520%2520%2520%2522__v%2522%253A%25200%250A%2520%2520%2520%2520%257D%252C%250A%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2522incorrectAnswers%2522%253A%2520%255B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2522Falso%2522%250A%2520%2520%2520%2520%2520%2520%255D%252C%250A%2520%2520%2520%2520%2520%2520%2522category%2522%253A%2520%2522entretenimiento%2522%252C%250A%2520%2520%2520%2520%2520%2520%2522format%2522%253A%2520%2522boolean%2522%252C%250A%2520%2520%2520%2520%2520%2520%2522question%2522%253A%2520%2522La%2520actriz%2520m%25C3%25A1s%2520joven%2520en%2520ganar%2520un%2520%25C3%2593scar%2520es%2520Tatum%2520O%27Neal%2520con%2520solo%252010%2520a%25C3%25B1os%2520por%2520%27Luna%2520de%2520papel%27.%2522%252C%250A%2520%2520%2520%2520%2520%2520%2522correctAnswer%2522%253A%2520%2522Verdadero%2522%252C%250A%2520%2520%2520%2520%2520%2520%2522__v%2522%253A%25200%250A%2520%2520%2520%2520%257D%252C%250A%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2522incorrectAnswers%2522%253A%2520%255B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2522Alfred%2520Hitchcock%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2522Stanley%2520Kubrik%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2522Sergio%2520Leone%2522%250A%2520%2520%2520%2520%2520%2520%255D%252C%250A%2520%2520%2520%2520%2520%2520%2522category%2522%253A%2520%2522entretenimiento%2522%252C%250A%2520%2520%2520%2520%2520%2520%2522format%2522%253A%2520%2522multiple%2522%252C%250A%2520%2520%2520%2520%2520%2520%2522question%2522%253A%2520%2522%25C2%25BFQu%25C3%25A9%2520director%2520de%2520cine%2520norteamericano%2520aterroriz%25C3%25B3%2520a%2520los%2520Estados%2520Unidos%2520con%2520su%2520adaptaci%25C3%25B3n%2520radiof%25C3%25B3nica%2520de%2520%27La%2520guerra%2520de%2520los%2520mundos%27%253F%2522%252C%250A%2520%2520%2520%2520%2520%2520%2522correctAnswer%2522%253A%2520%2522Orson%2520Welles%2522%252C%250A%2520%2520%2520%2520%2520%2520%2522__v%2522%253A%25200%250A%2520%2520%2520%2520%257D%252C%250A%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2522incorrectAnswers%2522%253A%2520%255B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2522Will%2520Wheaton%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2522Simon%2520Helberg%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2522Jim%2520Parsons%2522%250A%2520%2520%2520%2520%2520%2520%255D%252C%250A%2520%2520%2520%2520%2520%2520%2522category%2522%253A%2520%2522entretenimiento%2522%252C%250A%2520%2520%2520%2520%2520%2520%2522format%2522%253A%2520%2522multiple%2522%252C%250A%2520%2520%2520%2520%2520%2520%2522question%2522%253A%2520%2522%25C2%25BFQu%25C3%25A9%2520actor%2520interpreta%2520a%2520Leonard%2520Hofstadter%2520en%2520la%2520popular%2520serie%2520%25E2%2580%259CThe%2520Big%2520Bang%2520Theory%25E2%2580%259D%253F%2522%252C%250A%2520%2520%2520%2520%2520%2520%2522correctAnswer%2522%253A%2520%2522Johnny%2520Galecki%2522%252C%250A%2520%2520%2520%2520%2520%2520%2522__v%2522%253A%25200%250A%2520%2520%2520%2520%257D%252C%250A%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2522incorrectAnswers%2522%253A%2520%255B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2522Falso%2522%250A%2520%2520%2520%2520%2520%2520%255D%252C%250A%2520%2520%2520%2520%2520%2520%2522category%2522%253A%2520%2522entretenimiento%2522%252C%250A%2520%2520%2520%2520%2520%2520%2522format%2522%253A%2520%2522boolean%2522%252C%250A%2520%2520%2520%2520%2520%2520%2522question%2522%253A%2520%2522El%2520l%25C3%25ADder%2520de%2520los%2520Autobots%2520en%2520la%2520saga%2520de%2520pel%25C3%25ADculas%2520de%2520%25E2%2580%259CTransformers%25E2%2580%259D%2520se%2520llama%2520Optimus%2520Prime%2522%252C%250A%2520%2520%2520%2520%2520%2520%2522correctAnswer%2522%253A%2520%2522Verdadero%2522%252C%250A%2520%2520%2520%2520%2520%2520%2522__v%2522%253A%25200%250A%2520%2520%2520%2520%257D%252C%250A%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2522incorrectAnswers%2522%253A%2520%255B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2522El%2520libro%2520'


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
						<h4>Parametros (Query Strings):</h4>
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
					<Card.Body>
						<h4>Ejemplo de respuesta</h4>
						<p><strong>Endpoint: </strong>https://quiz-questions-rest-api.herokuapp.com/questions?key=TU_API_KEY&category=entretenimiento</p>
						<iframe
							id="iframe-style"
							src={url}
							sandbox="allow-scripts allow-same-origin"
							title="json-response"
						>
						</iframe>

					</Card.Body>
				</Card>
			</Row>			
		</>
	)
}

export default MainDocs
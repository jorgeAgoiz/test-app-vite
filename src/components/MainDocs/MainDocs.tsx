import React from 'react'
import { Col, Row, Table } from 'react-bootstrap'

const MainDocs = (): JSX.Element => {
	return (
		<>
			<Row className='mt-5 mb-5'></Row>
			<Row className='mt-5 mb-5'>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>Method</th>
							<th>Endpoint</th>
							<th>Body</th>
							<th>Query</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>GET</td>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
						</tr>
						<tr>
							<td>POST</td>
							<td>Jacob</td>
							<td>Thornton</td>
							<td>@fat</td>
						</tr>
						<tr>
							<td>PUT</td>
							<td>Larry the Bird</td>
							<td>@twitter</td>
							<td>@fat</td>
						</tr>
					</tbody>
				</Table>
			</Row>
		</>
	)
}

export default MainDocs
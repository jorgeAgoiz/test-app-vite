import React, { useState } from 'react'
import { Button, Container, Row } from 'react-bootstrap'

interface State {
  count: number
}

function App() {
  const [ count, setCount ] = useState<State['count']>(0)

  return (
    <Container className='App'>
      <Row>
        <p>{count}</p>
      </Row>
      <Row md={2}>
        <Button onClick={() => setCount(count + 1)} size='sm' variant='success'>
          Add
        </Button>
        <Button onClick={() => setCount(count - 1)} size='sm' variant='warning'>
          Substract
        </Button>
      </Row>
    </Container>
  )
}

export default App

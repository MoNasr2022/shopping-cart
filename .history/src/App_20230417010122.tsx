import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function App() {
  return <Container>
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      
    </Routes>
  </Container>;
}

export default App;

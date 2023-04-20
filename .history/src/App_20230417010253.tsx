import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function App() {
  return <Container>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About/>} />
      <Route path="store" element={<Found/>} />
    </Routes>
  </Container>;
}

export default App;

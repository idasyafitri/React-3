// 1. React-Bootstrap
// import Navs from "./component/navbar";
// import {Container, Button} from "react-bootstrap";
// function App() {
//   return(
//     <div>
//       <Navs />
//       <Container>
//         <h1>This is Content</h1>
//         <Button variant="primary">Klik</Button>
//       </Container>
//     </div>
//   );
// }

// 2. React Router
// React Package
import {Routes, Route} from "react-router-dom";
import { Container } from "react-bootstrap";

// Our Module
import Home from "./Pages/home.jsx";
import Form from "./Pages/form.jsx";
import List from "./Pages/list.jsx";
import Navs from "./component/navbar.jsx";

const App = () => {
  return (
    <div>
      <Navs />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;

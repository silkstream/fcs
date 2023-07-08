import {Home} from "./Home";
import {Route, Routes} from "react-router-dom";
import Button from '@mui/material/Button';

export function App() {
  return (
    <>
    <p>App file</p>
    <Button variant="contained">Hello app</Button>
   <Routes>
      <Route path="/" element={<Home/>}/>
   </Routes>
   </>
  );
}

export default App;

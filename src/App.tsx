import { Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<SignIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/form" element={<Form/>}/>
      <Route path="/table" element={<Table/>}/>
    </Routes>
    </>
  )
}

export default App
import "./App.css";
import "./Components/Css/login.css";
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Login from "./Components/Js/Login";
import Mainpage from "./Components/Js/Mainpage";
import Signup from "./Components/Js/Signup";
import UserProfile from "./Components/Js/UserProfile";
import Introduct from "./Components/Js/Introduct";
import Forgotpass from "./Components/Js/Forgotpass";
import Passwordsent from "./Components/Js/Passwordsent";
import { useEffect,useState } from 'react';



function App() {
  const [Backend, setBackend] = useState()
  const [frontdata, setfrontdata] = useState("An essay is, generally, a piece of writing that gives the author's own argument, but the definition is vague, overlapping with those of a letter, a paper, an article, a pamphlet, and a short story. Essays have been sub-classified as formal and informal: formal essays are characterized by serious purpose, dignity, logical organization, length,whereas the informal essay is characterized by the personal element, humor, graceful style, rambling structure, unconventionality or novelty of theme ")
 
  useEffect(() => {
    fetch(`http://localhost:6001/summarize?article=${frontdata}`)
    .then(
      response => response.json()
    )
    .then(data =>{
      setBackend(data)
      console.log(data)
    })
  }, [])
 

  
  return (
    <div className="App">
      <Router>
         <Routes>
               <Route path="/" element={<Introduct />} />
               <Route path="/Login" element={<Login />} />
               <Route path="/Signup" element={<Signup />} />
               <Route path="/Forgotpass" element={<Forgotpass />} />
               <Route path="/Home_page" element={<Mainpage />} />
               <Route path="/User_profile" element={<UserProfile />} />
               <Route path="/Passwordsent" element={<Passwordsent />} />
         </Routes>
      </Router> 
    </div>
  );
}

export default App;

import { useRef , useState, useEffect } from "React";
import './App.css';
import download from 'downloadjs';



function App() {

  var myName = useRef("");
  const [peerUsername , setPeerUsername] = useState("");
  const userList = useRef([""]);



  return (
    <div >
      <div> 
        Transfer Completered
      </div>
      
    </div>
  );
}

export default App;

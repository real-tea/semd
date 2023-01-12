import { useRef , useState, useEffect } from "React";
import './App.css';
import download from 'downloadjs';
import { generateUsername } from "unique-username-generator";


function App() {

  var myname = useRef("");
  const [peerUsername , setPeerUsername] = useState("");
  const userList = useRef([""]);

  const production = false // TODO : CHANGE IT TO TRUE WHEN DEPLOYING


  var configuration = {
    iceServers : [
      { urls: "stun:stun.l.google.com:19302" },
      { urls: "stun:stun1.l.google.com:19302" },
      { urls: "stun:stun2.l.google.com:19302" },
      { urls: "stun:stun3.l.google.com:19302" },
      { urls: "stun:stun4.l.google.com:19302" },
    ]
  }

  const baseURL = production 
  ? `https://${window.location.hostname}`
  : "https://192.168.18.27:3000";

  var peerConnection = useRef( new RTCPeerConnection(configuration) );


  useEffect(()=>{
    const username = generateUsername("-");
    window.document.title = "SEMD";
    if(window.location.pathname !== "/"){
      let p = window.location.pathname.slice(1);
      myname.current = p;
      const btn: any = document.querySelectorAll(".btn");
      btn.forach((i:any)=>{
        i.classList.add("hidden")
      });

      const search:any = document.querySelector(".search");
      search.classList.toggle("hidden");
      document.querySelector(".fileinput")?.classList.add("hidden");

    }

    if(window.location.pathname=="/"){
      username ? (myname.current = username) : null;
      document.querySelector(".fileinput")?.classList.add("hidden");

      document.querySelector(".recieve_btn")?.classList.toggle("hidden");
    }
  })

  return (
    <div >
      <div> 
        Transfer Completered
      </div>
      
    </div>
  );
}

export default App;

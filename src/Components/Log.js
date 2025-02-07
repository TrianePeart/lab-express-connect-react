import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function Log(){
  const [log, setLog] = useState({});
  const { index } = useParams();
  const navigate = useNavigate();
  const newAPI = `${API}/logs`;
  // This could be the issue but I dont think so

  useEffect(() => {
    axios
      .get(newAPI)
      .then((res) => setLog(res.data))
      .catch((err) => console.log(err));
  }, [index]);

  const handleDelete = () => {
    axios
      .delete(newAPI)
      .then(() => {
        navigate("/logs");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="log">
    <h1>Hello</h1>
    </div>
  );
}
// Change to show all logs 

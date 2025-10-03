import { useParams, useNavigate } from "react-router-dom";
function User() {
    const { id } = useParams();
    const navigate = useNavigate();
  return (
    <div>
        <h1>Acerca de: ........</h1>
        <p> Esta es ka sección de USUARIO: {id}</p>
        <button onClick={() => navigate('/')}>Volver a Principal</button>
    </div>
  );
}
export default User;
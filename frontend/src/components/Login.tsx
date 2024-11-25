import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode, JwtPayload } from 'jwt-decode'
import { useNavigate } from 'react-router-dom';

interface GoogleJwtPayload extends JwtPayload {
    email?: string;
}

const Login = () => {
    const navigate = useNavigate();


  return (
    <div className="login-container">
      <h2>Login to Your Account</h2>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
            const token = credentialResponse.credential;
            if (token) {
                const decoded: GoogleJwtPayload = jwtDecode<GoogleJwtPayload>(token);
                console.log("Decoded JWT:", decoded);

                const email = decoded.email;
                console.log("User Email:", email);
                
                if (email) {
                    localStorage.setItem('userEmail', email);
                } else {
                    console.error("Email not found in token.");
                }
            } else {
                console.error("No token received.");
            }
            navigate("/dashboard");
        }}
        onError={() => {
            console.log("Login Failed")
        }}
      />
    </div>
  );
};

export default Login;

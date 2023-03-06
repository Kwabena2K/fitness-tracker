import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import axios from "axios";

const Login = ({ clientId }) => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleGoogleLogin = async (googleUser) => {
    try {
      const { id_token } = googleUser.getAuthResponse();
      const res = await axios.post("/api/google-login", { idToken: id_token });
      console.log(res.data);
      navigate.push("/profile"); // redirect to the user's profile page on successful login
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

  return (
    <div className=" flex flex-col font-montserrat justify-center py-12 sm:px-6 lg:px-8 justify-end sm:justify-center">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Log in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{" "}
          <Link
            to="/signup"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            sign up for an account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="space-y-6">
            <div className="w-full h-12">
              <GoogleButton
                clientId="396584149825-f8umnkdt0hv9a40i5ss7vpmk8d5j932v.apps.googleusercontent.com"
                buttonText="Log in with Google"
                onSuccess={handleGoogleLogin}
                onFailure={(err) => console.log(err)}
                cookiePolicy={"single_host_origin"}
                className="w-full h-12 flex items-center justify-center rounded-md border border-gray-300 text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              />
            </div>
            {error && <div className="text-red-500">{error}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

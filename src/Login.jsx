import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import signInWithGoogle from "../../auth";
import { FaGoogle, FaSlack } from "react-icons/fa";
import bgImage from "../../assets/login_bg.png";
const Login = ({ user }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    signInWithGoogle()
      .then(() => {
        localStorage.setItem("isLogged", true);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error("Error signing in with Google: ", error);
      });
  };
  if (localStorage.getItem("isLogged") == "true")
    return <Navigate to="/dashboard" />;
  return (
    <div
      className="bg-stone-800 flex h-lvh justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className=" m-6 absolute top-0 left-0 border self-stretch flex w-[209px] shrink-0 h-[179px] flex-col rounded-[50%] border-solid border-white">
        <FaSlack
          className="absolute top-0 bottom-0 left-0 right-0 m-auto"
          size={66}
          color="lightblue"
        />
      </div>

      <div className="relative flex w-[537px] max-w-full flex-col items-center justify-center ">
        <div className="border backdrop-blur-[30px] z-[1] flex w-[479px] max-w-full flex-col items-stretch py-8 rounded-3xl border-solid border-white border-opacity-80">
          <div className="flex flex-col px-8 max-md:max-w-full max-md:px-5">
            <div className="text-white text-4xl self-stretch whitespace-nowrap">
              Login
            </div>
            <div className="bg-white self-stretch shrink-0 h-px mt-2.5" />
            <div className="text-white text-xl font-light self-stretch whitespace-nowrap mt-3.5">
              Welcome onboard with us!
            </div>
          </div>
          <button
            className="bg-gradient-to-r from-green-500 to-blue-800 text-white py-5 px-6 rounded-full flex items-center justify-center gap-4 mx-6 my-2 "
            onClick={handleLogin}
            disabled={loading}
          >
            <i className="fab fa-google text-2xl" />
            Sign in with Google{" "}
            <i>
              <FaGoogle />
            </i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

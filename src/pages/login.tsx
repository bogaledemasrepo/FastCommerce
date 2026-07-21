import { useEffect } from "react";
import { useAuth } from "../context/auth-contex/auth-context";
import { useToast } from "../context/toaster-context/toster";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const navigate = useNavigate();
  const { addToast } = useToast()
  const { handleSetUser, user } = useAuth()
  const handleLogin = (e: React.SubmitEvent) => {
    e.preventDefault()
    fetch("https://exp-server-collection.onrender.com/shoeshop/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: "john.doe@example.com",
        password: "admin123"
      })
    }).then(res => res.json())
      .then(({ token, user }) => {
        localStorage.setItem("access-token", token);
        handleSetUser(user);
      }).catch(err => {
        console.log(err);
        addToast('Something went wrong.', 'error')
      })
  };
  useEffect(() => {
    (() => {
      if (user?.role == "ADMIN") return navigate('/admins', { replace: true });
      else if (user?.role == "CUSTOMER") return navigate('/customers', { replace: true });
    })()
  }, [])

  return <div>
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="card w-full max-w-md shadow-2xl border border-base-300">
        <div className="card-body p-8">

          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-base-content mb-2">Welcome Back {user?.name ?? "NB"}</h2>
            <p className="text-sm text-base-content/60">Login to access your personalized dashboard</p>
          </div>

          <div className="flex flex-col gap-2 mb-6">
            <button className="btn btn-outline btn-neutral gap-2 w-full">
              <svg className="h-5 w-5" viewBox="0 0 24 24" width="24" height="24" xmlns="http://w3.org">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
              </svg>
              Continue with Google
            </button>
          </div>

          <div className="divider text-xs text-base-content/40 uppercase tracking-wider mb-6">or use email</div>

          <form onSubmit={(e) => handleLogin(e)}>
            <fieldset className="fieldset p-0 space-y-4">

              <label className="form-control w-full">
                <span className="label text-sm font-semibold text-base-content/80 mb-1">Email Address</span>
                <div className="input input-bordered flex items-center gap-2 focus-within:input-primary">
                  <svg xmlns="http://w3.org" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-50">
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input type="email" className="grow" placeholder="email@example.com" required />
                </div>
              </label>

              <label className="form-control w-full">
                <span className="label text-sm font-semibold text-base-content/80 mb-1">Password</span>
                <div className="input input-bordered flex items-center gap-2 focus-within:input-primary">
                  <svg xmlns="http://w3.org" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-50">
                    <path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" />
                  </svg>
                  <input type="password" className="grow" placeholder="••••••••" required />
                </div>
              </label>

              <div className="flex items-center justify-between pt-1">
                <label className="label cursor-pointer justify-start gap-2 p-0">
                  <input type="checkbox" className="checkbox checkbox-primary checkbox-sm rounded" />
                  <span className="label-text text-sm">Remember me</span>
                </label>
                <a href="#" className="link link-primary link-hover text-sm font-medium">Forgot password?</a>
              </div>

              <div className="pt-2">
                <button type="submit" className="btn btn-primary w-full text-base font-bold shadow-md shadow-primary/20 hover:scale-[1.01] transition-transform">
                  Sign In
                </button>
              </div>

            </fieldset>
          </form>

          <div className="text-center mt-6">
            <p className="text-sm text-base-content/60">
              Don't have an account?
              <a href="#" className="link link-primary link-hover font-semibold">Create one</a>
            </p>
          </div>

        </div>
      </div>
    </div>

  </div>;
}

export default LoginPage;

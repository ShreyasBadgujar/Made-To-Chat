import React, { useState } from 'react';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center px-4">
      {/* Logo + Title */}
      <div className="text-center mb-6">
        <div className="text-5xl flex justify-center text-blue-600 mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain h-8 w-8 text-blue-600 dark:text-blue-400"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg>
       </div>
        <h1 className="text-2xl font-bold text-gray-900">ChatBot Builder</h1>
        <p className="text-gray-600 text-sm">Build and deploy intelligent chatbots</p>
      </div>

      {/* Card */}
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold text-center mb-1">Welcome back</h2>
        <p className="text-sm text-center text-gray-500 mb-6">Sign in to your account to continue</p>

        {/* Google Login */}
        <button className="flex items-center justify-center gap-2 w-full border border-gray-300 rounded-lg py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
          <span><svg width="52" height="52" role="img"><g id="Google-Button" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <rect x="0" y="0" width="52" height="52" rx="2"></rect><g id="logo_googleg_48dp" transform="translate(13.65, 13.65) scale(1.4300000000000002)">
              <path d="M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z" id="Shape" fill="#4285F4"></path>
              <path d="M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z" id="Shape" fill="#FBBC05"></path>
              <path d="M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z" id="Shape" fill="#EA4335"></path>
              </g>
              </g>
              </svg>
          </span>
          Continue with Google
        </button>

        <div className="flex items-center my-6">
          <hr className="flex-1 border-gray-300" />
          <span className="mx-2 text-sm text-gray-500">OR CONTINUE WITH EMAIL</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Email & Password */}
        <form className="space-y-4">
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium">Password</label>
            <div className="relative mt-1">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                className="w-full border rounded-lg p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-2 text-gray-500"
              >
                <svg className='mt-1' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" class role="img" aria-label="Visibility Off Icon" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M14.601 1.266a1.03 1.03 0 0 0-1.433.049L1.704 13.486a.987.987 0 0 0 .062 1.407 1.03 1.03 0 0 0 1.433-.049l1.793-1.904A7.348 7.348 0 0 0 8 13.587c3.934 0 6.473-3.133 7.455-4.59l.043-.063c.215-.316.502-.737.502-1.347s-.287-1.03-.502-1.346l-.043-.065a12.85 12.85 0 0 0-1.949-2.275l1.157-1.228a.987.987 0 0 0-.062-1.407Zm-2.93 4.585-.764.81c.096.292.148.603.148.926 0 1.657-1.368 3-3.055 3-.246 0-.485-.028-.714-.082l-.763.81c.458.176.956.272 1.477.272 2.25 0 4.073-1.79 4.073-4 0-.622-.145-1.211-.403-1.736ZM8 1.587c.919 0 1.762.171 2.526.452L8.98 3.68A5.13 5.13 0 0 0 8 3.587c-2.25 0-4.073 1.79-4.073 4 0 .435.07.853.201 1.245l-1.985 2.107A13.06 13.06 0 0 1 .545 8.998l-.043-.064C.287 8.618 0 8.197 0 7.587s.287-1.03.502-1.346l.043-.065C1.527 4.72 4.066 1.587 8 1.587Zm0 2c.327 0 .654.034.978.095l-.016.017A4.155 4.155 0 0 0 8 3.587Zm0 1c.041 0 .083 0 .124.002L4.966 7.942a2.978 2.978 0 0 1-.02-.355c0-1.657 1.367-3 3.054-3Z" clip-rule="evenodd"></path></svg>
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Don’t have an account?{' '}
          <a href="#" className="text-blue-600 font-medium hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

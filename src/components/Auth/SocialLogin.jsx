import React from "react";

export default function SocialLogin({
  enableGoogle = true,
  enableApple = true,
  enableFacebook = true,
  onGoogleClick = () => {},
  onAppleClick = () => {},
  onFacebookClick = () => {},
}) {
  return (
    <div className="flex flex-col gap-3 mt-6 w-full">
      {enableGoogle && (
        <button
          onClick={onGoogleClick}
          className="w-full flex items-center gap-3 border border-gray-300 py-3 px-4 rounded-lg hover:bg-gray-100 transition"
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="flex items-center justify-center w-full">
            Continue with Google
          </span>
        </button>
      )}

      {enableApple && (
        <button
          onClick={onAppleClick}
          className="w-full flex items-center gap-3 border border-black py-3 px-4 rounded-lg hover:bg-gray-100 transition"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
            alt="Apple"
            className="w-5 h-5"
          />
          <span className="flex items-center justify-center w-full">
            Continue with Apple
          </span>
        </button>
      )}

      {enableFacebook && (
        <button
          onClick={onFacebookClick}
          className="w-full flex items-center gap-3 border border-blue-600 py-3 px-4 rounded-lg hover:bg-blue-50 transition"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg"
            alt="Facebook"
            className="w-5 h-5"
          />
          <span className="flex items-center justify-center w-full">
            Continue with Facebook
          </span>
        </button>
      )}
    </div>
  );
}

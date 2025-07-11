import { type InputHTMLAttributes, useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

interface FloatingInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function FloatingInput({
  label,
  type,
  ...props
}: FloatingInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className="relative w-full">
      <input
        {...props}
        type={inputType}
        placeholder=" "
        className="peer w-full px-4 py-4 text-sm 
          border border-gray-300 rounded-lg 
          focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary
          transition-all bg-transparent"
      />
      <label
        htmlFor={props.id}
        className="absolute text-sm text-gray-500 
          duration-200 transform -translate-y-3 scale-75 top-0 z-10 origin-[0] 
          left-3 bg-white px-1 peer-placeholder-shown:scale-100 
          peer-placeholder-shown:translate-y-4 peer-placeholder-shown:text-base 
          peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-primary"
      >
        {label}
      </label>

      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          {showPassword ? (
            <EyeSlashIcon className="w-5 h-5 text-primary" />
          ) : (
            <EyeIcon className="w-5 h-5 text-primary" />
          )}
        </button>
      )}
    </div>
  );
}

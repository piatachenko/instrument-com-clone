import { type ChangeEvent } from "react";

interface EmailInputProps {
  setIsEmailValid: (value: boolean) => void;
}

export default function EmailInput({ setIsEmailValid }: EmailInputProps) {
  const emailPattern = /^[^\s@]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;

  function validateEmail(event: ChangeEvent<HTMLInputElement>) {
    setIsEmailValid(emailPattern.test(event.target.value));
  }

  return (
    <>
      <input
        onChange={validateEmail}
        type="text"
        id="enter-email"
        className="bg-transparent placeholder-white outline-none xl:text-center"
        placeholder="Enter Email Address..."
      />
    </>
  );
}

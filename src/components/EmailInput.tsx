interface EmailInputProps {
  setIsEmailValid: (value: boolean) => void;
}

export default function EmailInput({ setIsEmailValid }: EmailInputProps) {
  const emailPattern = /^[^\s@]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;

  function validateEmail(event: any) {
    setIsEmailValid(emailPattern.test(event.target.value));
  }

  return (
    <>
      <input
        onChange={validateEmail}
        type="text"
        id="enter-email"
        className="bg-transparent text-center text-[2.25rem] placeholder-white outline-none"
        placeholder="Enter Email Address..."
      />
    </>
  );
}

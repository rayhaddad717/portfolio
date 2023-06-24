import "./Button.css";
export default function Button({ title }: { title: string }) {
  return (
    <button
      className="custom-button w-fit rounded-lg bg-[var(--color-green)] text-[var(--color-white)] px-[24px] py-[16px]"
      type="submit"
    >
      {title}
      <span className="expand-icon expand-hover">
        <svg
          className="first"
          xmlns="http://www.w3.org/2000/svg"
          fill="#fff"
          viewBox="0 0 32 32"
          version="1.1"
        >
          <path d="M8.489 31.975c-0.271 0-0.549-0.107-0.757-0.316-0.417-0.417-0.417-1.098 0-1.515l14.258-14.264-14.050-14.050c-0.417-0.417-0.417-1.098 0-1.515s1.098-0.417 1.515 0l14.807 14.807c0.417 0.417 0.417 1.098 0 1.515l-15.015 15.022c-0.208 0.208-0.486 0.316-0.757 0.316z" />
        </svg>
        <span className="loader"></span>
        <svg
          className="second"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 5L8 15l-5-4"
          />
        </svg>
      </span>
    </button>
  );
}

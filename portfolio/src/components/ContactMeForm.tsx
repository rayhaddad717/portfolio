"use client";

import { useState } from "react";
import "./ContactMe.css";
import axios from "axios";
export default function ContactMeForm() {
  const [state, setState] = useState("finished");
  const [errors, setErrors] = useState<string[]>([]);
  const [form, setForm] = useState<{ [key: string]: string }>({
    fn: "",
    ln: "",
    email: "",
    message: "",
  });
  function handleChange(text: string, key: string) {
    if (text.length) {
      setErrors(errors.filter((e) => e !== key));
    }
    setForm({ ...form, [key]: text });
  }
  function handleSubmit(event: any) {
    event.stopPropagation();
    event.preventDefault();
    setState("loading");

    const newErrors: string[] = [];
    for (const key in form) {
      if (!form[key]) newErrors.push(key);
    }
    setErrors(newErrors);
    if (newErrors.length) {
      setState("");
      return;
    }
    axios
      .post("/api/contactus", {
        ...form,
      })
      .then((res) =>
        setTimeout(() => {
          setState("loaded loading");
          setTimeout(() => {
            setState("loaded loading finished");
            setTimeout(() => {
              setState("finished");
              setErrors([]);
              setForm({ fn: "", ln: "", email: "", message: "" });
            }, 1500);
          }, 700);
        }, 1500)
      )
      .catch(() => {
        setState("");
      });
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center gap-[2rem] w-full mr-auto ml-auto max-w-[100%]"
    >
      <div className="flex sm:flex-row flex-col sm:gap-[20%] gap-8  justify-between ">
        <div className="flex-grow flex flex-col gap-[0.5rem]">
          <input
            value={form.fn}
            onChange={(e) => handleChange(e.target.value, "fn")}
            className=" text-black sm:h-[3.5rem]  h-[2.5rem] p-[0.5rem]  border-[var(--color-light-gray-2)] focus:border-[var(--border-color)] border-[1px] rounded-lg outline-none"
            id="firstName"
            placeholder="First name"
          />
          {errors.filter((e) => e == "fn")?.length ? (
            <p className="text-[#ff0000] ml-auto text-sm">Required</p>
          ) : null}
        </div>
        <div className="flex-grow flex flex-col gap-[0.5rem]">
          <input
            value={form.ln}
            onChange={(e) => handleChange(e.target.value, "ln")}
            id="lastName"
            className=" text-black sm:h-[3.5rem] h-[2.5rem] p-[0.5rem]  border-[var(--color-light-gray-2)] focus:border-[var(--border-color)] border-[1px] rounded-lg outline-none"
            placeholder="Last name"
          />
          {errors.filter((e) => e == "ln")?.length ? (
            <p className="text-[#ff0000] ml-auto text-sm">Required</p>
          ) : null}
        </div>
      </div>
      <div className="flex flex-col gap-[0.5rem]  justify-center ">
        <input
          value={form.email}
          onChange={(e) => handleChange(e.target.value, "email")}
          id="workEmail"
          className="text-black sm:h-[3.5rem] h-[2.5rem] p-[0.5rem]  border-[var(--color-light-gray-2)] focus:border-[var(--border-color)] border-[1px] rounded-lg outline-none"
          placeholder="Work email"
        />
        {errors.filter((e) => e == "email")?.length ? (
          <p className="text-[#ff0000] ml-auto text-sm">Required</p>
        ) : null}
      </div>
      <div className="flex flex-col gap-[0.5rem]  justify-center ">
        <textarea
          value={form.message}
          id="message"
          placeholder="Message"
          onChange={(e) => handleChange(e.target.value, "message")}
          className="resize-none text-black h-[10rem] p-[0.5rem]  border-[var(--color-light-gray-2)] focus:border-[var(--border-color)] border-[1px] rounded-lg outline-none"
        ></textarea>
        {errors.filter((e) => e == "message")?.length ? (
          <p className="text-[#ff0000] ml-auto text-sm">Required</p>
        ) : null}
      </div>
      <div className="ml-auto">
        <button className={`expand ${state}`} type="submit">
          Submit Message
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
      </div>
    </form>
  );
}

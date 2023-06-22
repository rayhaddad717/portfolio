"use client";

import { useState } from "react";
import "./ContactMe.css";
import axios from "axios";
export default function ContactMe() {
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
      setState("finished");
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
      .catch(() => {});
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center gap-[2rem] w-[600px] mr-auto ml-auto my-[6rem] max-w-[100%]"
    >
      <h1 className="text-center text-4xl">Contact Me</h1>
      <p className="text-gray-400 mr-auto ml-auto">
        Let&apos;s get this conversation started. Send me a message and we can
        get in touch as soon as possible!
      </p>
      <div className="flex sm:flex-row flex-col sm:gap-0 gap-8  justify-between ">
        <div className="flex flex-col gap-[0.5rem]">
          <label htmlFor="firstName">
            First name <span className="text-[#ff0000]  text-sm">*</span>
          </label>
          <input
            value={form.fn}
            onChange={(e) => handleChange(e.target.value, "fn")}
            className="text-black h-[2.5rem] p-[0.5rem] rounded-sm border-[#fff] focus:border-[var(--border-color)] border-[3px] outline-none"
            id="firstName"
            placeholder="First name"
          />
          {errors.filter((e) => e == "fn")?.length ? (
            <p className="text-[#ff0000] ml-auto text-sm">Required</p>
          ) : null}
        </div>
        <div className="flex flex-col gap-[0.5rem]">
          <label htmlFor="lastName">
            Last name <span className="text-[#ff0000]  text-sm">*</span>
          </label>
          <input
            value={form.ln}
            onChange={(e) => handleChange(e.target.value, "ln")}
            id="lastName"
            className="text-black h-[2.5rem] p-[0.5rem] rounded-sm border-[#fff] focus:border-[var(--border-color)] border-[3px] outline-none"
            placeholder="Last name"
          />
          {errors.filter((e) => e == "ln")?.length ? (
            <p className="text-[#ff0000] ml-auto text-sm">Required</p>
          ) : null}
        </div>
      </div>
      <div className="flex flex-col gap-[0.5rem]  justify-center ">
        <label htmlFor="workEmail">
          Work email <span className="text-[#ff0000]  text-sm">*</span>
        </label>
        <input
          value={form.email}
          onChange={(e) => handleChange(e.target.value, "email")}
          id="workEmail"
          className="text-black h-[2.5rem] p-[0.5rem] rounded-sm border-[#fff] focus:border-[var(--border-color)] border-[3px] outline-none"
          placeholder="Work email"
        />
        {errors.filter((e) => e == "email")?.length ? (
          <p className="text-[#ff0000] ml-auto text-sm">Required</p>
        ) : null}
      </div>
      <div className="flex flex-col gap-[0.5rem]  justify-center ">
        <label htmlFor="message">
          Message <span className="text-[#ff0000]  text-sm">*</span>
        </label>
        <textarea
          value={form.message}
          id="message"
          placeholder="Message"
          onChange={(e) => handleChange(e.target.value, "message")}
          className="resize-none text-black h-[10rem] p-[0.5rem] rounded-sm border-[#fff] focus:border-[var(--border-color)] border-[3px] outline-none"
        ></textarea>
        {errors.filter((e) => e == "message")?.length ? (
          <p className="text-[#ff0000] ml-auto text-sm">Required</p>
        ) : null}
      </div>
      <div className="ml-auto">
        <button className={`expand ${state}`} type="submit">
          Submit
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

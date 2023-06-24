import ContactMeForm from "@/components/ContactMeForm";

export default function ContactMe() {
  return (
    <div
      id="contactme"
      className="pt-4 mt-[2rem] flex flex-col items-center gap-[2rem]  px-[var(--page-padding)]"
    >
      <div className="upper flex flex-col justify-between w-fit gap-[2rem]">
        <h4 className="ml-auto mr-auto w-fit px-[5px] text-[var(--text-primary)] border-[var(--color-green)] border-[1px] rounded-3xl font-medium text-[20px]">
          Contact
        </h4>
        <h2 className="text-center font-semibold text-[40px] text-[var(--color-light-black)] leading-[54px]">
          Let&apos;s Discuss Your{" "}
          <p className="text-[var(--text-primary)] inline">Project</p>
        </h2>
        <p className="text-[var(--color-gray)] text-[1rem]">
          Let’s make something new, different and more meaningful or make thing
          more visual or conceptual
        </p>
      </div>
      <div className="lower flex w-full sm:gap-[10%] sm:flex-row flex-col gap-[4rem]">
        <div className="left flex flex-col gap-[2rem] sm:w-[40%] w-[100%]">
          <div className="flex gap-[1rem] items-center">
            <img
              className="w-[33px] h-[33px]"
              alt="phone"
              src="svgs/phone.svg"
            />
            <div className="flex flex-col justify-between">
              <p className="text-[var(--text-secondary)] text-[1rem]">
                Call me
              </p>
              <p className="font-medium text-[1rem] text-[var(--text-base)]">
                <a href="tel:+961 71 921 387">+961 71 921 387</a>
              </p>
            </div>
          </div>
          <div className="flex gap-[1rem] items-center">
            <img
              className="w-[33px] h-[33px]"
              alt="email"
              src="svgs/email.svg"
            />
            <div className="flex flex-col justify-between">
              <p className="text-[var(--text-secondary)] text-[1rem]">
                Email me
              </p>
              <p className="font-medium text-[1rem] text-[var(--text-base)]">
                <a href="mailto:rayghaddad@gmail.com">rayghaddad@gmail.com</a>
              </p>
            </div>
          </div>
          <div className="flex gap-[1rem] items-center">
            <img
              className="w-[33px] h-[33px]"
              alt="street"
              src="svgs/street.svg"
            />
            <div className="flex flex-col justify-between">
              <p className="text-[var(--text-secondary)] text-[1rem]">
                Address
              </p>
              <p className="font-medium text-[1rem] text-[var(--text-base)]">
                Bayada 1st Street, Qornet Chahwan, Lebanon
              </p>
            </div>
          </div>
        </div>
        <div className="right sm:w-[50%] w-[100%]">
          <ContactMeForm />
        </div>
      </div>
    </div>
  );
}

import "./home.css";
export default function Home() {
  return (
    <section>
      <section className="flex justify-around items-center pt-[100px]">
        <div className="sm:text-4xl text-md flex flex-col gap-7">
          <div className="flex gap-2">
            <h1>HELLO THERE</h1>
            <span className="waving_hand block">👋</span>
          </div>
          <h2>I&apos;m Ray Haddad</h2>
          <h2 className="text-[var(--link-color)]">Full Stack Developer</h2>
        </div>
        <div className="basis-[250px]">
          <img className="max-w-[250px]" src="/icons/developer.svg" />
        </div>
      </section>
    </section>
  );
}

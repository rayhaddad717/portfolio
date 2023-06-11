export default function Resume() {
  const pdfUrl = "./RayHaddad.pdf";
  return (
    <section>
      <h1 className="text-center sm:text-4xl text-lg mb-5">My Resume</h1>
      <iframe src={pdfUrl} width="100%" height="500px" title="Resume" />
      <a
        className=" mb-5 text-end w-full block mt-5 text-[var(--link-color)]"
        download
        href={pdfUrl}
      >
        Download
      </a>
    </section>
  );
}

export default function Resume() {
  const pdfUrl = "./RayHaddad.pdf";
  return (
    <section>
      <h1 className="text-center sm:text-4xl text-lg mb-5">My Resume</h1>
      <iframe src={pdfUrl} width="100%" height="500px" title="Resume" />
      <a
        className="text-gray-600 mb-5 text-end w-full block mt-5"
        download
        href={pdfUrl}
      >
        Download
      </a>
    </section>
  );
}

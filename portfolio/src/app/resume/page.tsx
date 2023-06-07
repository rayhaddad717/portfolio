// "use client";
import { useEffect, useMemo, useState, createContext } from "react";
import { pdfjs, Document, Page } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
export default function Resume() {
  const pdfUrl = useMemo(() => "./RayHaddad.pdf", []);
  return (
    <section>
      <h1 className="text-center sm:text-4xl text-lg mb-5">My Resume</h1>
      <Document file="./RayHaddad.pdf">
        <Page pageIndex={0} />
      </Document>
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

import { useEffect, useState } from "react";
import { PDFDocument } from "pdf-lib";

export default function PDFPreview({ pdfBlob }) {
  const [images, setImages] = useState([]);
console.log(pdfBlob,"pdfBlob")
  useEffect(() => {
    if (!pdfBlob) return;

    const renderPDF = async () => {
      const arrayBuffer = await pdfBlob.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer);

      const imgs = [];

      for (let i = 0; i < pdfDoc.getPageCount(); i++) {
        const page = pdfDoc.getPage(i);

        // Render page to canvas (basic method)
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        // Set canvas size roughly (PDF-lib does not render graphics natively)
        canvas.width = 600; 
        canvas.height = 800;

        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Optional: draw page text as unselectable image
        ctx.fillStyle = "black";
        const { width, height } = canvas;
        ctx.font = "16px sans-serif";
        ctx.fillText(`Page ${i + 1}`, 10, 30);

        imgs.push(canvas.toDataURL("image/png"));
      }

      setImages(imgs);
    };

    renderPDF();
  }, [pdfBlob]);

  return (
    <div className="overflow-auto w-full h-[600px] border">
      {images.map((src, idx) => (
        <img key={idx} src={src} alt={`Page ${idx + 1}`} className="mb-2 w-full" />
      ))}
    </div>
  );
}

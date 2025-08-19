import React, { useState } from "react";
import { Document, Page } from "react-pdf";

function TempsBooklet() {
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div>
            <h1>Ohio Temps Booklet</h1>
            <Document
                file="/ohio-temps-booklet.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
            >
                {Array.from(new Array(numPages), (el, index) => (
                    <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                ))}
            </Document>
        </div>
    );
}

export default TempsBooklet;

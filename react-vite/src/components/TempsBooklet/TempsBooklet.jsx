import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import pdfFile from '../../assets/TempsBook.pdf';
import './TempsBooklet.css'

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function TempsBooklet() {
    const [numPages, setNumPages] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const goToPrevPage = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    };

    const goToNextPage = () => {
        setCurrentPage(prevPage => Math.min(prevPage + 1, numPages));
    };

    const goToPage = (pageNumber) => {
        const page = Math.max(1, Math.min(pageNumber, numPages));
        setCurrentPage(page);
    };

    return (
        <div className="tempsBackground">
            <h1>Ohio Temps Booklet</h1>

            <div className="pdf-viewer">
                <Document
                    file={pdfFile}
                    onLoadSuccess={onDocumentLoadSuccess}
                    loading={<div>Loading PDF...</div>}
                    error={<div>Failed to load PDF file.</div>}
                >
                    <Page
                        pageNumber={currentPage}
                        scale={1.0}
                        loading={<div>Loading page...</div>}
                    />
                </Document>

                {/* Navigation Controls */}
                {numPages && (
                    <div className="pdf-controls">
                        <button
                            onClick={goToPrevPage}
                            disabled={currentPage <= 1}
                            className="nav-button"
                        >
                            ← Previous
                        </button>

                        <div className="page-info">
                            <span>
                                Page {currentPage} of {numPages}
                            </span>
                            <input
                                type="number"
                                min="1"
                                max={numPages}
                                value={currentPage}
                                onChange={(e) => goToPage(parseInt(e.target.value))}
                                className="page-input"
                            />
                        </div>

                        <button
                            onClick={goToNextPage}
                            disabled={currentPage >= numPages}
                            className="nav-button"
                        >
                            Next →
                        </button>
                    </div>
                )}
            </div>

            {/* Download button */}
            <a href={pdfFile} download className="download-button">
                Download PDF
            </a>
        </div>
    );
}

export default TempsBooklet;

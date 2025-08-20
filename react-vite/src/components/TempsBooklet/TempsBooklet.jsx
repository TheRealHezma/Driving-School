import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// Import the necessary stylesheets for the annotation and text layers
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Make sure the path to your PDF file is correct
import pdfFile from '../../assets/TempsBook.pdf';
import './TempsBooklet.css'

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

/**
 * Renders the Ohio Temps Booklet PDF viewer with navigation controls.
 */
function TempsBooklet() {
    // State to hold the total number of pages in the PDF
    const [numPages, setNumPages] = useState(null);
    // State to track the current page number
    const [currentPage, setCurrentPage] = useState(1);
    // New state to toggle between one-page and two-page layout
    const [isTwoPageLayout, setIsTwoPageLayout] = useState(false);

    /**
     * Callback function for when the PDF document successfully loads.
     * @param {Object} document - The PDF document object.
     */
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    /**
     * Navigates to the previous page(s).
     */
    const goToPrevPage = () => {
        // Move back by 2 pages if in two-page layout, otherwise by 1
        const pagesToMove = isTwoPageLayout ? 2 : 1;
        setCurrentPage(prevPage => Math.max(prevPage - pagesToMove, 1));
    };

    /**
     * Navigates to the next page(s).
     */
    const goToNextPage = () => {
        // Move forward by 2 pages if in two-page layout, otherwise by 1
        const pagesToMove = isTwoPageLayout ? 2 : 1;
        setCurrentPage(prevPage => Math.min(prevPage + pagesToMove, numPages));
    };

    /**
     * Toggles the page layout between one and two pages.
     */
    const togglePageLayout = () => {
        setIsTwoPageLayout(prevState => !prevState);
    };

    /**
     * Determines which pages to render based on the current layout.
     * @returns {number[]} An array of page numbers to display.
     */
    const getPagesToRender = () => {
        const pages = [currentPage];
        if (isTwoPageLayout && currentPage + 1 <= numPages) {
            pages.push(currentPage + 1);
        }
        return pages;
    };

    return (
        <div className="tempsBackground">
            <h1>Ohio Temps Booklet</h1>

            <div className={`pdf-viewer ${isTwoPageLayout ? 'two-page-layout' : ''}`}>
                <Document
                    file={pdfFile}
                    onLoadSuccess={onDocumentLoadSuccess}
                    loading={<div>Loading PDF...</div>}
                    error={<div>Failed to load PDF file.</div>}
                >
                    {getPagesToRender().map(pageNumber => (
                        <Page
                            key={`page_${pageNumber}`}
                            pageNumber={pageNumber}
                            scale={1.0}
                            loading={<div>Loading page...</div>}
                            renderAnnotationLayer={false}
                            renderTextLayer={false}
                            // Add a specific class for styling the two-page layout
                            className={isTwoPageLayout ? 'pdf-page-two-up' : ''}
                        />
                    ))}
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
                        </div>

                        <button
                            onClick={goToNextPage}
                            disabled={currentPage + (isTwoPageLayout ? 1 : 0) >= numPages}
                            className="nav-button"
                        >
                            Next →
                        </button>
                    </div>
                )}
            </div>

            {/* Layout Toggle Button */}
            {numPages && (
                <div className="layout-controls">
                    <button onClick={togglePageLayout} className="nav-button">
                        {isTwoPageLayout ? 'Show 1 Page' : 'Show 2 Pages'}
                    </button>
                </div>
            )}

            {/* Download button */}
            <a href={pdfFile} download className="download-button">
                Download PDF
            </a>
        </div>
    );
}

export default TempsBooklet;

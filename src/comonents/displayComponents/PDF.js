import { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

const PDF = ({ source_file }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  }

  const changePage = (offset) => setPageNumber(prevPageNumber => prevPageNumber + offset)
  const previousPage = () => changePage(-1)
  const nextPage = () => changePage(1);

  return (
    <center>
      <div>
        <Document file={source_file} onLoadSuccess={onDocumentLoadSuccess} >
          <Page height="600" pageNumber={pageNumber} />
        </Document>
        <div>
          <p>Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}</p>
          <button type="button" disabled={pageNumber <= 1} onClick={previousPage} >Previous</button>
          <button type="button" disabled={pageNumber >= numPages} onClick={nextPage} >Next</button>
        </div>
      </div>
    </center>
  );
}

export default PDF;

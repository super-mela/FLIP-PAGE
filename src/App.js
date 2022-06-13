// import React, { useState } from 'react';
// import { Document, Page, pdfjs } from "react-pdf";
// import PB from './resource/PB.pdf'
// pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.js"

// function App() {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);


//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   return (
//     <div>
//       <Document file={PB} onLoadSuccess={onDocumentLoadSuccess}

//       >
//         <Page pageNumber={pageNumber} />
//       </Document>
//       <p>
//         Page {pageNumber} of {numPages}
//       </p>
//     </div>
//   );
// }

// export default App;
import FlipPages from "./components/FlipPages/FlipPages";
// import MapToPlay from "./components/MapToPlay/MapToPlay";
// import TabToPlay from "./components/TabToPlay/TabToPlay";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="App-header">
        {/* <TabToPlay /> */}
        <FlipPages />
        {/* <MapToPlay /> */}
      </div>
    </div>
  );
}


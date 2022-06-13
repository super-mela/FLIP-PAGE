import React, { useCallback, useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import "./style.css";
import FlipData from "./data.json";
import TextImg from "../../assets/imgs/some_random_text.jpg";
import ImageBlend from "../../assets/imgs/some_blend.jpg";

const FlipPages = () => {
    const { flipData } = FlipData;
    const book = useRef();
    const [pageCount, setPageCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)
    const [selectPage, setSelectPage] = useState(0)
    const [prevButtonState, setprevButtonState] = useState(true);
    const [nextButtonState, setnextButtonState] = useState(false);
    const onInit = useCallback((e) => {
        setPageCount(book.current.pageFlip().getPageCount())

    }, []);
    const onFlip = useCallback((e) => {
        const pagenum = book.current.pageFlip().getCurrentPageIndex() + 1;
        setCurrentPage(pagenum)
        if (pagenum === 1 || pagenum < 1) {
            setprevButtonState(true);
        } else if (pagenum === (pageCount)) {
            setnextButtonState(true);
        } else {
            setprevButtonState(false);
            setnextButtonState(false);
        }
    }, []);

    const privPage = () => {
        const pagenum = book.current.pageFlip().getCurrentPageIndex()
        setCurrentPage(pagenum)
        if (pagenum < 1) {
            setprevButtonState(true)
        }
        setnextButtonState(false)
        book.current.pageFlip().flipPrev()
    }
    const nextPage = () => {
        const pagenum = book.current.pageFlip().getCurrentPageIndex() + 1;
        setCurrentPage(pagenum)
        setprevButtonState(false)
        if (pagenum === pageCount) {
            setnextButtonState(true)
        }
        book.current.pageFlip().flipNext()
    }
    const closeBook = () => {
        book.current.pageFlip().destroy()
    }
    const flip = () => {
        if (selectPage === "") {
            alert("Insert proper page number")
        }
        book.current.pageFlip().flip(JSON.parse(selectPage))
    }

    return (
        <div>
            {/* <div style={{ position: "fixed", width: "100%", zIndex: 1 }}>
                <div className="header">
                    <div className="home-nav">Home</div>
                    <div className="option">
                        <a>Features</a>
                        <a>About</a>
                        <a>Service</a>
                        <a>Contact</a>
                    </div>
                </div>
            </div> */}
            {/* <div style={{ position: "relative", top: "5.4rem" }}> */}
            <button style={{ display: "flex", position: "absolute", right: "15px", top: "0px", padding: "5px" }} onClick={() => closeBook()}>Close</button>
            <input style={{ padding: "5px" }} type="number" max={pageCount} min="0" onChange={(e) => setSelectPage(e.target.value)} />
            <button style={{ padding: "5px", marginRight: "25px" }} onClick={() => flip()}>Go</button>
            <div className="main-page-container" style={{ marginTop: "25px", marginBottom: "25px" }}>
                <HTMLFlipBook
                    showCover={true}
                    width={500}
                    height={500}
                    style={{ margin: "0 auto" }}
                    onInit={onInit}
                    onFlip={onFlip}
                    ref={book}
                >

                    <img src={ImageBlend} alt="" />
                    {flipData.map((el, i) => (
                        <div className="demoPage" key={el.id}>
                            <img src={TextImg} alt="" />
                        </div>
                    ))}
                    <img src={ImageBlend} alt="" />

                </HTMLFlipBook>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <button disabled={prevButtonState} style={{ padding: "5px", marginRight: "15px" }} onClick={() => privPage()}>Privious page</button>
                <div style={{ color: "white" }}>
                    page {currentPage} of {pageCount}
                </div>
                <button disabled={nextButtonState} style={{ padding: "5px", marginLeft: "15px" }} onClick={() =>
                    nextPage()}>Next page</button>
            </div>
        </div>
        // </div>
    );
};

export default FlipPages;

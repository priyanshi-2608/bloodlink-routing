import { useState, useEffect } from "react";

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (!isVisible) {
        return null;
    }

    return (
        <button
            className="btn btn-danger rounded-circle shadow"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            title="Scroll to top"
            style={{
                position: "fixed",
                bottom: "25px",
                right: "25px",
                width: "48px",
                height: "48px",
                zIndex: 1050,
            }}
        >
            <i className="bi bi-arrow-up fs-5"></i>
        </button>
    );
}

export default ScrollToTop;

import { useRef } from "react";

export default function Carousel() {
    const firstCatRef = useRef(null);
    const secondCatRef = useRef(null);

    function handleScrollToFirstCat() {
        firstCatRef.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
        });
    }

    function handleScrollToSecondCat() {
        secondCatRef.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
        });
    }

    return (
        <>
            <nav
                class="btn-group w-100 mb-3"
                role="group"
                aria-label="Basic example"
            >
                <button
                    type="button"
                    class="btn btn-outline-secondary w-100"
                    onClick={handleScrollToFirstCat}
                >
                    Left
                </button>
                <button
                    type="button"
                    class="btn btn-outline-secondary w-100"
                    onClick={handleScrollToSecondCat}
                >
                    Right
                </button>
            </nav>

            <div className="mb-4">
                <ul style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
                    <li className="d-inline p-2">
                        <img
                            src="https://loremflickr.com/320/240/cat"
                            alt="Neo"
                            ref={firstCatRef}
                        />
                    </li>
                    <li className="d-inline p-2">
                        <img
                            src="https://loremflickr.com/320/240/dog"
                            alt="Neo"
                            ref={secondCatRef}
                        />
                    </li>
                </ul>
            </div>
        </>
    );
}

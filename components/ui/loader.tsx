"use client";

import { CircleLoader, PuffLoader } from "react-spinners";

const Loader = () => {
    return (
        <div
        className="
        h-[70vh]
        flex
        flex-col
        justify-center
        items-center">
            <PuffLoader
                size={100}
                color={"#0C4A6E"}
            />
        </div>
    );
};

export default Loader;

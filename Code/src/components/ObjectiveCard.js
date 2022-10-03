import React, { useState } from "react";
const ObjectiveCard = ({ image, title, detail, url }) => {
    console.log(image);
    const [isInside, setIsInside] = useState(false);
    return (
        <div
            className={`md:w-1/5 w-3/5 rounded-md drop-shadow-lg shadow-lg text-center hover:bg-[#F48634]  font-nato relative my-5 group`}
            onMouseEnter={() => setIsInside(true)}
            onMouseLeave={() => setIsInside(false)}
        >
            <div className="overflow-hidden bg-cover">
                <img
                    src={`./assets/images/objective/${image}`}
                    alt=""
                    className={`shadow-xl rounded-tl-md rounded-tr-md transition-all ease-in-out w-full ${
                        isInside === true ? "scale-125 " : ""
                    }`}
                />
            </div>
            <div className="mb-14">
                <p
                    className={`font-semibold my-3  ${
                        isInside === true ? "text-black " : " text-[#F48634]"
                    }`}
                >
                    {title}
                </p>
                <p
                    className={`font-light text-sm  px-2
                ${isInside === true ? "text-black " : " text-gray-500"}`}
                >
                    {detail}
                </p>
            </div>
            <div className="text-xl absolute bottom-2 font-light right-5">
                Read more -{">"}
            </div>
        </div>
    );
};

export default ObjectiveCard;

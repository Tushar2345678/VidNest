import React, { useState } from "react";
import { TextInput } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMicrophone } from "@fortawesome/free-solid-svg-icons";

const SearchBox = () => {
    const [fieldValue, setFieldValue] = useState("");

    return (
        <div className="flex items-center bg-white dark:bg-gray-800 border border-gray-600 rounded-full shadow-md px-3 w-full max-w-xl">
            {/* Search Input */}
            <div className="flex-grow relative">
                <TextInput
                    onChange={(event) => setFieldValue(event.target.value)}
                    className="w-full bg-transparent border-none focus:ring-0 focus:outline-none pl-10 rounded-full px-4 max-w-xl"
                    placeholder="Search"
                    name="video_id_field"
                />
                {/* Search Icon Inside Input */}
            </div>

            {/* Buttons */}
            <button
                onClick={() => alert(`Searching for ${fieldValue}`)}
                className="ml-2 p-2 text-gray-600 hover:text-gray-900 dark:hover:text-white"
            >
                <FontAwesomeIcon icon={faSearch} />
            </button>
            <button className="ml-2 p-2 text-gray-600 hover:text-gray-900 dark:hover:text-white">
                <FontAwesomeIcon icon={faMicrophone} />
            </button>
        </div>
    );
};

export default SearchBox;

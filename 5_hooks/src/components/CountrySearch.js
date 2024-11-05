import { useEffect, useState } from "react";
import { searchByName } from "../util/country";

export default function CountrySearch() {
    const [searchKeyword, setSearchKeyword] = useState("");
    const [countryInfo, setCountryInfo] = useState([]);

    useEffect(() => {
        (async () => {
            const searchRes = await searchByName(searchKeyword);
            setCountryInfo(searchRes);
        })();
    }, [searchKeyword]);

    return (
        <>
            <input
                class="form-control"
                type="text"
                placeholder="Enter country name"
                aria-label="Country search bar"
                name="countryName"
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        setSearchKeyword(e.target.value);
                    }
                }}
            ></input>
            <div className="form-text">Press enter to search.</div>
            <p>
                Related flags:{" "}
                {countryInfo.map((country) => {
                    return (
                        <span key={country.name.official}>{country.flag}</span>
                    );
                })}
            </p>
        </>
    );
}

import { ChangeEvent, FC } from "react";

import "./SearchInput.scss"

interface SearchInputProps {
    setSearch: (e: ChangeEvent<HTMLInputElement>) => void
}

const SearchInput: FC<SearchInputProps> = ({setSearch}) => {
    return (
        <input type="text" className="search" placeholder="Search" onChange={setSearch}/>
    )
}

export default SearchInput;
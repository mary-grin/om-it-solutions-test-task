import {FC} from "react";

import "./SearchInput.scss"

interface SearchInputProps {

}

const SearchInput: FC<SearchInputProps> = ({}) => {
    const handleOnChange = () => {

    }

    return (
        <input type="text" className="search" placeholder="Search" onChange={handleOnChange}/>
    )
}

export default SearchInput;
import { ChangeEvent, FC, useContext, useEffect, useState } from "react";

import "./Toolbar.scss"
import SearchInput from "@/ui-components/SearchInput/SearchInput";
import ColorType from "@/ui-components/ColorType/ColorType";
import Occupation from "@/ui-components/Occupation/Occupation";
import { filterContext } from "@/context/FilterContext";

interface ToolbarProps {

}

const Toolbar: FC<ToolbarProps> = ({}) => {
  const [search, setSearch] = useState<string>('');
  const [type, setType] = useState<string>('All');
  const [occupation, setOccupation] = useState<string>('All')

  const {changeFilter} = useContext(filterContext);

  useEffect(() => {
    changeFilter(search, type, occupation)
  }, [search, type, occupation])

  return (
      <div className="toolbar">
        <SearchInput setSearch={(e) => setSearch(e.target.value)}/>
        <ColorType type={type} setType={(type) => setType(type)}/>
        <Occupation occupation={occupation} setOccupation={(occupation) => setOccupation(occupation)}/>
      </div>
  )
}

export default Toolbar;
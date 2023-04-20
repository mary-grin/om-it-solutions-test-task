import {FC} from "react";

import "./Toolbar.scss"
import SearchInput from "@/ui-components/SearchInput/SearchInput";
import ColorType from "@/ui-components/ColorType/ColorType";
import Occupation from "@/ui-components/Occupation/Occupation";

interface ToolbarProps {

}

const Toolbar: FC<ToolbarProps> = ({}) => {
    return (
        <div className="toolbar">
            <SearchInput/>
            <ColorType/>
            <Occupation/>
        </div>
    )
}

export default Toolbar;
import PropTypes from "prop-types";
import AddContactInput from "../AddContactInput/AddContactInput"

export default function Filtr({value,onChange}) {
    return (
         <AddContactInput
                type="text"
                name="Find contacts by name"
                value={value}
                hahdleChange={onChange}
                title=""
                pattern=""
            />
    )
}

Filtr.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}
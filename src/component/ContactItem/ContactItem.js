import PropTypes from "prop-types";
import style from "./ContactItem.module.css";

export default function ContactItem({contact,delet}) {
    return (
        <li className={style.item}>
            {/* <p>{contact.name}:</p> */}
            <p>результат:</p>
            <p>{contact[2].date}</p>
            <p>{contact[3].date}</p>
            <p>{contact[0].res.toFixed(2)}</p>
            
            {/* <button
                className={style.button}
                onClick={()=>delet(contact.id)}
            >delete</button> */}
        </li>
    )
}

// ContactItem.propTypes = {
//     contact: PropTypes.object.isRequired,
//     delet: PropTypes.func.isRequired,
// }
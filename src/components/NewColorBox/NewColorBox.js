import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";
import styles from "../../styles/NewColorBox";
import getTextColor from "../../helpers/getTextColor";
import { SortableElement } from "react-sortable-hoc";

const NewColorBox = SortableElement(props =>{
    let{classes, backgroundColor, name} = props
    return (
        <div
            className={classes.root}
            style={{ backgroundColor: backgroundColor }}
        >
            <div
                style={{ color: getTextColor(backgroundColor) }}
                className={classes.content}
            >
                <span>{name}</span>
                <DeleteIcon className={classes.deleteIcon} />
            </div>
        </div>
    );
})

export default withStyles(styles)(NewColorBox);

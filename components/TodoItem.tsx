import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCheck, faTrashCan } from '@fortawesome/free-solid-svg-icons'

export const TodoItem = (props: any): JSX.Element => {
  return (
        <div className="todo-item" style={{ backgroundColor: props.completed ? '#32C26F' : '#FF4D56' }}>
          <span className="todo-item-text">{props.name}</span>
          <div className="todo-item-icons">
                {!props.completed && <span className="fa-layers fa-fw fa-2x checkmark" onClick={props.toggleCompleted}>
                    <FontAwesomeIcon icon={faCircle} />
                    <FontAwesomeIcon icon={faCheck} inverse transform="shrink-8" />
                </span>}
                <span className="fa-layers fa-fw fa-2x trash" onClick={props.deleteItem}>
                    <FontAwesomeIcon icon={faCircle} />
                    <FontAwesomeIcon icon={faTrashCan} inverse transform="shrink-8" />
                </span>
            </div>
        </div>
    )
}
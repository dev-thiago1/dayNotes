import React, { useState } from "react";
import { AiTwotoneDelete, AiOutlineExclamation } from "react-icons/ai";
import './styles.css'
import './styles-priority.css'
import api from "../../services/api";

function Notes({ data, handleDelete, handleChangePriority }) {
  const [ changedNote, setChangedNote] = useState('')

function handleEdit(e, priority){
  e.style.cursor = "text"
  

  if(priority){
    e.style.boxShadow = "0 0 5px white"
  }else{
    e.style.boxShadow = "0 0 5px gray"
  }
}


 async function handleSave(e, notes){
  e.style.cursor = "default"
  e.style.boxShadow = "none"

    if (changedNote && changedNote !== notes){
      await api.post(`/contents/${data._id}`,{
        notes: changedNote,
      })
    }
  }


  return (
    <>
      <li className={data.priority ? "notepad-infos-priority" : "notepad-infos"}>
        <div>
          <strong>{data.title}</strong>
          <div>
            <AiTwotoneDelete size="24" onClick={() => handleDelete(data._id)}/>
          </div>
        </div>
        <textarea defaultValue={data.notes}
        onChange={e => setChangedNote(e.target.value)}
        onClick={e  => handleEdit(e.target, data.priority)}
        onBlur={e => handleSave(e.target, data.notes)}></textarea>
        <span>
          <AiOutlineExclamation size="24" onClick={() => handleChangePriority(data._id)}/>
          </span>
      </li>
    </>
  );
}

export default Notes;

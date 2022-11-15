import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Dnd = () => {
  const [languages, setLanguages] = React.useState(["React", "PHP", "C"]);
  
  const handleSort = () =>{
    let language=[...languages]

    // remove and save the item content 
    const draggeditemContent=language.splice(dragitem.current, 1) [0]

    // switch the positions
    language.splice(dragOveritem.current, 0 , draggeditemContent)

    // reset the position ref
    dragitem.current=null
    dragOveritem.current=null

    // update the actual array
    setLanguages(language)
  }
  // save Reference for dragitem and dragoveritem
  const dragitem=React.useRef<any>(null)
  const dragOveritem=React.useRef<any>(null)
  console.log("Drag Started",dragitem);
  console.log("Drag Over", dragOveritem);

  

  return (
    <>
      <h2>List of Languages</h2>
      <div className="input-group">
        <input type="text" name="languageName" placeholder="eg. React" />
        <button className="btn">Add Item</button>
      </div>
      <div className="list-container">
        {languages.map((item, index) => (
          <div key={index} className="list-item" draggable 
          onDragStart={(e)=> dragitem.current=index }
          onDragEnter={(e)=> dragOveritem.current=index}
          onDragEnd={handleSort}  >
            <AiOutlineMenu />
            <h3>{item}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dnd;

import React from "react";
const Second = (props) => {
  const { textBoxValue, saveClick, allData, deleteClick } = props;
//   console.log("textBoxValue", textBoxValue);

  return (
    <>
      <input type="button" value="save" onClick={saveClick} />
      <br />

      {allData.map((data, i) => {
        return (
          <div key={i}>
            {data}
            <input type="button" value="remove" onClick={()=>deleteClick(data)} />
            <br />
          </div>
        );
      })}
    </>
  );
};
export default Second;

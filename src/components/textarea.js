import React from "react";

function TextArea({ value, setValue, state, setState }) {
  const onChange = (evt) => {
    setValue(evt.target.value);
  };
  console.log("state",state)
  return (
    <>
      {state !== 2 && (
        <div id="main-editor">
          <div className="flex">
            <header id="header-editor">Editor</header>

            {state !== 1 && (
              <i
                class="fa fa-arrows-alt"
                onClick={() => {
                  setState(1);
                }}
              ></i>
            )}
            {state !== 0 && (
              <i
                class="fa fa-compress"
                onClick={() => {
                  setState(0);
                }}
              ></i>
            )}
          </div>
          <textarea
            rows={16}
            value={value}
            onChange={onChange}
            id="editor"
          ></textarea>
        </div>
      )}
    </>
  );
}

export default TextArea;

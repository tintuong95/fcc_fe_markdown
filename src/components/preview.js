import { marked } from 'marked';
import React from 'react'

export default function Preview({value,state,setState}) {
  marked.setOptions({
    breaks: true,
  });
  return (
    <>
      {state !== 1 && (
        <div id="main-preview">
          <div className="flex">
            <header id="header-preview">Preview</header>
            {state !== 2 && (
              <i
                class="fa fa-arrows-alt"
                onClick={() => {
                  setState(2);
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
          <div
            id="preview"
            dangerouslySetInnerHTML={{ __html: marked.parse(value) }}
          ></div>
        </div>
      )}
    </>
  );
}

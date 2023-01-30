import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { pushMessage } from "../firebase";

type Props = {inputEl: }

const MessageField = ({ inputEl, name, setText, text }) => {
  const [isComposed, setIsComposed] = useState(false);
  return (
    <TextField
      autoFocus
      fullWidth={true}
      inputRef={inputEl}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
      }}
      onKeyDown={(
        e: React.KeyboardEvent<HTMLInputElement> &
          React.ChangeEvent<HTMLInputElement>
      ) => {
        if (isComposed) return;

        const text = e.target.value;
        if (text === "") return;
        if (e.key === "Enter") {
          pushMessage({ name, text });
          setText("");
          e.preventDefault();
        }
      }}
      onCompositionStart={() => setIsComposed(true)}
      onCompositionEnd={() => setIsComposed(false)}
      value={text}
    />
  );
};

export default MessageField;

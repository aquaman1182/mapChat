import React, { useEffect, useRef } from "react";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { gravatarPath } from "../gravatar";

const MessageItem = ({ name, text, isLastItem }) => {
  const ref = useRef(null);
  const avatarPath = gravatarPath(name);

  useEffect(() => {
    if (isLastItem) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isLastItem]);

  return (
    <ListItem divider={true} ref={ref}>
      <ListItemAvatar>
        <Avatar src={avatarPath} />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={
          <Typography
            sx={{ display: "inline" }}
            component="span"
            variant="body2"
            color="text.primary"
          >
            {text}
          </Typography>
        }
      />
    </ListItem>
  );
};

export default MessageItem;

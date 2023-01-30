import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

interface CopyRight{
    (props: string|number): string
}

export const Copyright:CopyRight = (props) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="" target="_blank" rel="noopener">
        たくみ
      </Link>
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn({ setName }) {
  const [disabled, setDisabled] = useState(true);
  const [string, setString] = useState("");
  const [isComposed, setIsComposed] = useState(false);

  useEffect(() => {
    const disabled = string === "";
    setDisabled(disabled);
  }, [string]);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            ようこそ
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="ニックネーム"
              name="name"
              autoFocus
              onChange={(e) => setString(e.target.value)}
              onKeyDown={(e) => {
                if (isComposed) return;
                if (e.key === "Enter") {
                  setName(e.target.value);
                  e.preventDefault();
                }
              }}
              onCompositionStart={() => setIsComposed(true)}
              onCompositionEnd={() => setIsComposed(false)}
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={disabled}
              onClick={() => {
                setName(string);
              }}
            >
              はじめる
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

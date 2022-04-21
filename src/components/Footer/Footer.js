import Newsletter from "./Newsletter";
import Icons from "./Icons";
import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";

const GridContainer = styled(Grid)(() => ({
  background: "#212121",
  color: "#fff",
  padding: "1rem 0",
}));

const Footer = () => {
  const [input, setInput] = useState("");
  const [isError, setIsError] = useState(false);

  const emailValidationHandler = (value) => {
    if (
      !String(value)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  return (
    <GridContainer container>
      <Icons />
      <Newsletter
        input={input}
        setInput={setInput}
        isError={isError}
        emailValidationHandler={emailValidationHandler}
      />
    </GridContainer>
  );
};

export default Footer;

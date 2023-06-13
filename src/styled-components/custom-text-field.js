import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export const CustomTextField = styled(TextField)`
  & label.Mui-focused {
    color: var(--blue-dark);
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: var(--blue-dark);
    }
  }
`;

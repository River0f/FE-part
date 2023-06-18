import styled from "@emotion/styled";
import { Select } from "@mui/material";

export const CustomSelect = styled(Select)`
  &.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: var(--blue-dark);
  }
`;

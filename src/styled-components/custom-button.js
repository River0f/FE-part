import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const CustomButton = styled(Button)`
  background: var(--violet-dark);
  width: 120px;
  color: var(--white);
  &:hover {
    background: var(--violet-dark);
  }
`;

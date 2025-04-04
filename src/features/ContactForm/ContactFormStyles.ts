import styled from "styled-components";
import { TextField, Button } from "@mui/material";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: #ffffff;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const StyledInput = styled(TextField)`
  margin-bottom: 16px;
`;

export const StyledButton = styled(Button)`
  padding: 12px;
`;
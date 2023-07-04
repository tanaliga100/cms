import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";
import React from "react";
import { FlexRowWrapper } from "../wrapper/Wrapper";

interface IProps {
  label?: string;
  value?: string | number;
  getValue?: any;
}

const Search: React.FC<IProps> = (props) => {
  return (
    <FlexRowWrapper
      gap="3rem"
      borderRadius="109x"
      borderBottom="1px dotted white"
      p=".1rem 0rem"
    >
      <InputBase
        placeholder={props.label}
        value={props.value}
        onChange={props.getValue}
      />
      <SearchIcon />
    </FlexRowWrapper>
  );
};

export default Search;

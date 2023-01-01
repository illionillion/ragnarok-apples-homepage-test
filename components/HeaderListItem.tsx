import { ListItem } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface HeaderListItemProps {
  children: ReactNode;
}
const HeaderListItem: FC<HeaderListItemProps> = ({ children }) => {
  return (
    <ListItem
      flex={1}
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderLeft='1px'
      borderColor='white'
    >
      {children}
    </ListItem>
  );
};

export default HeaderListItem;

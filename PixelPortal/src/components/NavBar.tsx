import { HStack, Heading, Image, Text } from "@chakra-ui/react";
import logo from "../assets/controller.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchString: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px" marginBottom={5}>
      <Image src={logo} boxSize="50px" />
      <Heading fontSize="2xl" whiteSpace={"nowrap"} paddingRight={2}>
        Pixel Portal
      </Heading>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

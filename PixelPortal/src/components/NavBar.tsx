import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/controller.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="50px" />
      <Text whiteSpace={"nowrap"}>Pixel Portal</Text>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

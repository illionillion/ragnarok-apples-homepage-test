import { ExternalLinkIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Input,
  Link,
  List,
  ListItem,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useMediaQueryType } from "../pages";
import HeaderListItem from "./HeaderListItem";
type HeaderProps = {
    mq?: useMediaQueryType
}
const Header: React.FC<HeaderProps> = ({mq}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <Box as="header" position="sticky" top="0%">
      {mq?.isPc && !mq.isMoblie ? (
        <Box className="pc-header" backgroundColor="black">
          <nav>
            <List display="flex">
              <ListItem flex={1} p="3">
                <Box w="28" margin="auto">
                  <Link href="/">
                    <Image src="/image/logo.png" />
                  </Link>
                </Box>
              </ListItem>
              <HeaderListItem>
                <Text color="white" textDecoration="line-through">
                  FEATURE
                </Text>
              </HeaderListItem>
              <HeaderListItem>
                <Text color="white" textDecoration="line-through">
                  ABOUT
                </Text>
              </HeaderListItem>
              <HeaderListItem>
                <Text color="white" textDecoration="line-through">
                  CHARACTER
                </Text>
              </HeaderListItem>
              <HeaderListItem>
                <Text color="white" textDecoration="line-through">
                  MOVIE
                </Text>
              </HeaderListItem>
              <HeaderListItem>
                <Text color="white" textDecoration="line-through">
                  PRODUCT
                </Text>
              </HeaderListItem>
              <HeaderListItem>
                <Link href="https://twitter.com/Ragnarokapples" isExternal>
                  <Badge backgroundColor="twitter.500" color="white">
                    Twitter
                    <ExternalLinkIcon />
                  </Badge>
                </Link>
              </HeaderListItem>
            </List>
          </nav>
        </Box>
      ) : (
        <Box className="mobile-header" backgroundColor="black" textAlign="end">
          <Box w="full">
            <Button ref={btnRef} colorScheme="blackAlpha" onClick={onOpen}>
              <HamburgerIcon />
            </Button>
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerBody>
                    <nav>
                      <List display="flex" flexDirection="column">
                        <HeaderListItem>
                          <Text color="black" textDecoration="line-through">
                            FEATURE
                          </Text>
                        </HeaderListItem>
                        <HeaderListItem>
                          <Text color="black" textDecoration="line-through">
                            ABOUT
                          </Text>
                        </HeaderListItem>
                        <HeaderListItem>
                          <Text color="black" textDecoration="line-through">
                            CHARACTER
                          </Text>
                        </HeaderListItem>
                        <HeaderListItem>
                          <Text color="black" textDecoration="line-through">
                            MOVIE
                          </Text>
                        </HeaderListItem>
                        <HeaderListItem>
                          <Text color="black" textDecoration="line-through">
                            PRODUCT
                          </Text>
                        </HeaderListItem>
                        <HeaderListItem>
                          <Link
                            href="https://twitter.com/Ragnarokapples"
                            isExternal
                          >
                            <Badge backgroundColor="twitter.500" color="white">
                              Twitter
                              <ExternalLinkIcon />
                            </Badge>
                          </Link>
                        </HeaderListItem>
                      </List>
                    </nav>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Header;

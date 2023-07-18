import {
    Box,
    Flex,
    Avatar,
    HStack,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
} from "@chakra-ui/react";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
// import Resume from "../Components/Vivek-Jawale-Resume.pdf";

export default function Navbar(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('Rohit-Nayal-Resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Rohit-Nayal-Resume.pdf';
                alink.click();
            })
        })
    }


    return (
        <>
            <Box
                id="nav-menu"
                bg={useColorModeValue("gray.100", "gray.900")}
                px={4}
                style={{ position: "fixed" }}
                boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
                w="100%"
                top={0}
                zIndex="99"
            >
                <Flex
                    h={16}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    paddingLeft={["0px", "0px", "35px"]}
                    paddingRight={["0px", "0px", "35px"]}
                >
                    <IconButton
                        size={"md"}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={"Open Menu"}
                        display={{ md: "none" }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={"center"}>
                        <Box fontSize={"20px"}>
                            <a href="/">Rohit Nayal </a>
                        </Box>
                    </HStack>
                    <Flex alignItems={"center"} gap="40px">
                        <HStack
                            as={"nav"}
                            spacing={4}
                            display={{ base: "none", md: "flex" }}
                            fontSize="18px"
                        >
                            <a href="#home"  class="nav-link home">Home</a>
                            <a href="#about"  class="nav-link about">About</a>
                            <a href="#skills" class="nav-link skills">Skills</a>
                            <a href="#projects" class="nav-link projects">Projects</a>
                            <a href="#contact" class="nav-link contact">Contacts</a>
                            <a
                                href={" "}
                                id="resume-button-1"
                                class="nav-link resume"
                                target="_blank"
                                rel="noreferrer"
                                download=""
                                onClick={() => window.open(
                                    "https://drive.google.com/file/d/12T-FecNZXpdlvb5Y4z2qpXgvzEF_EMSi/view"
                                )}
                   
                            >
                                Resume
                            </a>
                        </HStack>
                        <Box>
                            <Button
                                aria-label="Toggle Color Mode"
                                onClick={toggleColorMode}
                                _focus={{ boxShadow: "none" }}
                                w="fit-content"
                                {...props}
                            >
                                {colorMode === "dark" ? <BsSun /> : <BsMoonStarsFill />}
                            </Button>
                        </Box>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={"full"}
                                variant={"link"}
                                cursor={"pointer"}
                                minW={0}
                            >
                                <Avatar
                                    className="home-img"
                                    size={"sm"}
                                    src={"https://avatars.githubusercontent.com/u/119488668?v=4"}
                                />
                            </MenuButton>
                            <MenuList>
                                <MenuItem>
                                    {" "}
                                    <a
                                        href={" "}
                                        target="_blank"
                                        rel="noreferrer"
                                        download="https://drive.google.com/file/d/1WoW_5ENmr8bnH1izNNUIXj-QXBVAlj8-/view?usp=sharing"
                                        onClick={onButtonClick}
                                    >
                                        Resume
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a href="https://github.com/rohitnayal12">
                                        Visit Github Account
                                    </a>
                                </MenuItem>
                                <MenuDivider />
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: "none" }} height={"100vh"}>
                        <Stack
                            as={"nav"}
                            mt={12}
                            ml={8}
                            spacing={8}
                            alignItems="left"
                            fontSize={"20px"}
                        >
                            <a href="#home" onClick={onClose}>
                                Home
                            </a>
                            <a href="#about" onClick={onClose}>
                                About
                            </a>
                            <a href="#skills" onClick={onClose}>
                                Skills
                            </a>
                            <a href="#projects" onClick={onClose}>
                                Projects
                            </a>
                            <a href="#contact" onClick={onClose}>
                                Contacts
                            </a>
                            <a
                                href={" "}
                                target="_blank"
                                rel="noreferrer"
                                download="https://drive.google.com/file/d/1WoW_5ENmr8bnH1izNNUIXj-QXBVAlj8-/view?usp=sharing"
                                onClick={onButtonClick}
                            >
                                Resume 
                            </a>
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}
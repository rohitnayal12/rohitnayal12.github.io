import { Flex, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import {
    SiCodesandbox,
    SiGithub,
   
    SiLinkedin,
} from "react-icons/si";

const Footer = () => {
    return (
        <>
            <Flex
                borderTop={"1px solid gray"}
                width="100%"
                gap={4}
                padding={3}
                justifyContent="center"
                textColor={"white.400"}
                direction={["column", "column", "row"]}
                alignItems="center"
            >
                <Text> Copyrights © Rights Reserved By Rohit Nayal</Text>
                <Spacer />
                <Flex gap={12}>
                    <a href="https://github.com/rohitnayal12">
                        {" "}
                        <SiGithub size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/rohit-nayal-7810871ab">
                        {" "}
                        <SiLinkedin size={20} />
                    </a>
                   
                    

                    <a href="https://codesandbox.io/u/rohitnayal12">
                        {" "}
                        <SiCodesandbox size={20} />
                    </a>
                </Flex>
            </Flex>
        </>
    );
};

export default Footer;
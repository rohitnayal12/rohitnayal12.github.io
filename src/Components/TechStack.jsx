import { Box, Grid, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { SiChakraui, SiCss3, SiExpress, SiGithub, SiHtml5, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiReact, SiTypescript, SiRedux, SiGit, SiPostman, SiSlack, SiBootstrap, SiTailwindcss, SiVercel } from "react-icons/si";

const Techstack = () => {
    return (
        <div id="skills">
            <Box
                maxW={"7xl"}
                m="auto"
                mb={8}
                padding="20px"
                paddingTop={["auto", "auto", "20"]}
                alignItems="center"
            >
                <Stack spacing={4} w={["100%"]} m="auto" >
                    <Text
                        textTransform={"uppercase"}
                        color={"white.400"}
                        border="1px solid black"
                        fontWeight={600}
                        textAlign="center"
                        width="200px"
                        m={"auto"}
                        mb={16}
                        fontSize={"sm"}
                        bg={useColorModeValue("blue.50", "blue.900")}
                        p={2}
                        alignSelf={"flex-start"}
                        rounded={"md"}
                    >
                        Tech Skills
                    </Text>
                </Stack>
                <Grid
                    maxW={"5xl"}
                    m="auto"
                    gridTemplateColumns={[
                        // "repeat(1, 1fr)",
                        "repeat(2, 1fr)",
                        "repeat(3,1fr)",
                        // "repeat(4,1fr)",
                        "repeat(6,1fr)",
                    ]}
                    alignItems="center"
                    gap={12}
                    justifyContent="center"
                    id="skills-card"
                >

                    <Box
                        border={"1px solid gray"}
                        borderRadius="15px"
                        boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
                        padding="12px"
                        pt={6}
                        pl={6}
                        pr={6}
                        display={"flex"}
                        flexDirection="column"
                        alignItems={"center"}
                    >
                        <SiHtml5 size="50px" class="skills-card-img" />
                        <Text mt={2} class="skills-card-name">HTML</Text>
                    </Box>

                    <Box
                        border={"1px solid gray"}
                        boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
                        borderRadius="15px"
                        padding="12px"
                        pt={6}
                        pl={6}
                        pr={6}
                        display={"flex"}
                        flexDirection="column"
                        alignItems={"center"}
                    >
                        <SiCss3 size="50px" class="skills-card-img" />
                        <Text mt={2} class="skills-card-name">CSS</Text>
                    </Box>

                    <Box
                        border={"1px solid gray"}
                        borderRadius="15px"
                        boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
                        padding="12px"
                        pt={6}
                        pl={6}
                        pr={6}
                        display={"flex"}
                        flexDirection="column"
                        alignItems={"center"}
                    >
                        <SiJavascript size="50px" class="skills-card-img" />
                        <Text mt={2} class="skills-card-name">Javascript</Text>
                    </Box>

                    <Box
                        border={"1px solid gray"}
                        boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
                        borderRadius="15px"
                        padding="12px"
                        pt={6}
                        pl={6}
                        pr={6}
                        display={"flex"}
                        flexDirection="column"
                        alignItems={"center"}
                    >
                        <SiReact size="50px" class="skills-card-img" />
                        <Text mt={2} class="skills-card-name">React</Text>
                    </Box>

                    <Box
                        border={"1px solid gray"}
                        boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
                        borderRadius="15px"
                        padding="12px"
                        pt={6}
                        pl={6}
                        pr={6}
                        display={"flex"}
                        flexDirection="column"
                        alignItems={"center"}
                    >
                        <SiRedux size="50px" class="skills-card-img" />
                        <Text mt={2} class="skills-card-name">Redux</Text>
                    </Box>

                    

                  

                  


                    <Box
                        border={"1px solid gray"}
                        boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
                        borderRadius="15px"
                        padding="12px"
                        pt={6}
                        pl={6}
                        pr={6}
                        display={"flex"}
                        flexDirection="column"
                        alignItems={"center"}
                    >
                        <SiChakraui size="50px" class="skills-card-img" />
                        <Text mt={2} class="skills-card-name">Chakra UI</Text>
                    </Box>
                   
                   

                    <Box
                        border={"1px solid gray"}
                        boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
                        borderRadius="15px"
                        padding="12px"
                        pt={6}
                        pl={6}
                        pr={6}
                        display={"flex"}
                        flexDirection="column"
                        alignItems={"center"}
                    >
                        <SiTypescript size="50px" class="skills-card-img"/>
                        <Text mt={2} class="skills-card-name">TypeScript</Text>
                    </Box>


                    <Box
                        border={"1px solid gray"}
                        boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
                        borderRadius="15px"
                        padding="12px"
                        pt={6}
                        pl={6}
                        pr={6}
                        display={"flex"}
                        flexDirection="column"
                        alignItems={"center"}
                    >
                        <SiGit size="50px" class="skills-card-img" />
                        <Text mt={2} class="skills-card-name">Git</Text>
                    </Box>

                    <Box
                        border={"1px solid gray"}
                        boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
                        borderRadius="15px"
                        padding="12px"
                        pt={6}
                        pl={6}
                        pr={6}
                        display={"flex"}
                        flexDirection="column"
                        alignItems={"center"}
                    >
                        <SiGithub size="50px" class="skills-card-img" />
                        <Text mt={2} class="skills-card-name">Github</Text>
                    </Box>
                    <Box
                        border={"1px solid gray"}
                        boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
                        borderRadius="15px"
                        padding="12px"
                        pt={6}
                        pl={6}
                        pr={6}
                        display={"flex"}
                        flexDirection="column"
                        alignItems={"center"}
                    >
                        <SiVercel size="50px" class="skills-card-img"/>
                        <Text mt={2} class="skills-card-name">Vercel</Text>
                    </Box>

                    <Box
                        border={"1px solid gray"}
                        boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
                        borderRadius="15px"
                        padding="12px"
                        pt={6}
                        pl={6}
                        pr={6}
                        display={"flex"}
                        flexDirection="column"
                        alignItems={"center"}
                    >
                        <SiPostman size="50px" class="skills-card-img"/>
                        <Text mt={2} class="skills-card-name">Postman</Text>
                    </Box>
                    <Box
                        border={"1px solid gray"}
                        boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
                        borderRadius="15px"
                        padding="12px"
                        pt={6}
                        pl={6}
                        pr={6}
                        display={"flex"}
                        flexDirection="column"
                        alignItems={"center"}
                    >
                        <SiSlack size="50px" class="skills-card-img" />
                        <Text mt={2} class="skills-card-name">Slack</Text>
                    </Box>
                </Grid>
            </Box>
        </div>
    );
};

export default Techstack;
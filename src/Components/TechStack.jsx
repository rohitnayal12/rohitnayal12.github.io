import { Box, Grid, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import {
  SiChakraui,
  SiCss3,
  SiExpress,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  
  SiReactrouter,
  SiNodedotjs,
  SiReact,
  SiTypescript,
  SiRedux,
 SiStyledcomponents,
  SiGit,
  SiPostman,
  SiSlack,
  SiBootstrap,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";

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
        <Stack spacing={4} w={["100%"]} m="auto">
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
            "repeat(2, 1fr)",
            "repeat(3,1fr)",
             "repeat(4,1fr)",
             "repeat(4,1fr)",
            "repeat(6,1fr)",
          ]}
          alignItems="center"
          gap={15}
          justifyContent="center"
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
            className="skills-card"
          >
            <SiHtml5 size="50px" class="skills-card-img" />
            <Text mt={2} class="skills-card-name">
              HTML
            </Text>
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
            className="skills-card"
          >
            <SiCss3 size="50px" className="skills-card-img" />
            <Text mt={2} className="skills-card-name">
              CSS
            </Text>
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
            className="skills-card"
          >
            <SiJavascript size="50px" className="skills-card-img" />
            <Text mt={2} className="skills-card-name">
              Javascript
            </Text>
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
            className="skills-card"
          >
            <SiReact size="50px" className="skills-card-img" />
            <Text mt={2} className="skills-card-name">
              React
            </Text>
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
            className="skills-card"
          >
            <SiRedux size="50px" className="skills-card-img" />
            <Text mt={2} class="skills-card-name">
              Redux
            </Text>
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
            className="skills-card"
          >
            <SiReactrouter size="50px" className="skills-card-img" />
            <Text mt={2} className="skills-card-name">
              ReactRouter
            </Text>
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
            className="skills-card"
          >
            <SiChakraui size="50px" className="skills-card-img" />
            <Text mt={2} className="skills-card-name">
              Chakra UI
            </Text>
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
            className="skills-card"
          >
            <SiTypescript size="50px" className="skills-card-img" />
            <Text mt={2} className="skills-card-name">
              TypeScript
            </Text>
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
            className="skills-card"
          >
            <SiExpress size="50px" className="skills-card-img" />
            <Text mt={2} className="skills-card-name">
             Express
            </Text>
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
            className="skills-card"
          >
            <SiNodedotjs size="50px" className="skills-card-img" />
            <Text mt={2} className="skills-card-name">
              Node
            </Text>
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
            className="skills-card"
          >
            <SiStyledcomponents size="50px" class="skills-card-img" />
            <Text mt={2} class="skills-card-name">
             StyleComponent
            </Text>
          </Box>

          
          



        
          

         
        
        </Grid>
      </Box>
    </div>
  );
};

export default Techstack;

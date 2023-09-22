import { Box, Grid, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import {
 
  SiGithub,
  
  SiMongodb,
  SiMongoose,
 SiVisualstudiocode,
  SiGit,
  SiRender,
  SiNetlify,
  SiPostman,
  SiSlack,
  SiCodepen,
  SiCodesandbox,
  SiNpm,
  
  SiBootstrap,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";

const Techtool = () => {
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
            Tech Tools
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
          gap={12}
          justifyContent="center"
        >
          

         


       


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
            <SiGit size="50px" className="skills-card-img" />
            <Text mt={2} className="skills-card-name">
              Git
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
            <SiGithub size="50px" className="skills-card-img" />
            <Text mt={2} className="skills-card-name">
              Github
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
            <SiVisualstudiocode size="50px" className="skills-card-img" />
            <Text mt={2} className="skills-card-name">
              VS-Code
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
            <SiMongodb size="50px" className="skills-card-img" />
            <Text mt={2} className="skills-card-name">
              MongoDB
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
            <SiPostman size="50px" className="skills-card-img" />
            <Text mt={2} className="skills-card-name">
              Postman
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
            <SiNpm size="50px" className="skills-card-img" />
            <Text mt={2} className="skills-card-name">
              NPM
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
            <SiNetlify size="50px" className="skills-card-img" />
            <Text mt={2} className="skills-card-name">
              Netlify
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
            <SiVercel size="50px" class="skills-card-img" />
            <Text mt={2} class="skills-card-name">
              Vercel
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
            <SiRender size="50px" className="skills-card-img" />
            <Text mt={2} className="skills-card-name">
             Render
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
            <SiCodepen size="50px" className="skills-card-img" />
            <Text mt={2} className="skills-card-name">
              CodePen
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
            <SiCodesandbox size="50px" className="skills-card-img" />
            <Text mt={2} className="skills-card-name">
              CodesandBox
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
            <SiSlack size="50px" className="skills-card-img" />
            <Text mt={2} className="skills-card-name">
              Slack
            </Text>
          </Box>
        </Grid>
      </Box>
    </div>
  );
};

export default Techtool;

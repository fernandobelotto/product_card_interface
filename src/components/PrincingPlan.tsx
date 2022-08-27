import { Box, Image, Text, VStack } from "@chakra-ui/react";
import { ArrowIcon } from "../svg/Arrow";

export function PrincingPlan() {
  return (
    <>
      <Box
        bg="brand.green"
        rounded="20px"
        color="white"
        h="668px"
        w="400px"
        overflow="hidden"
        shadow="2xl"
      >
        <Box pt="40px" px="40px">
          <VStack spacing="24px" align="flex-start">
            <Text fontSize="32px" fontWeight={400}>
              Save More
              <br />
              <Text as="b"> With Goodplans.</Text>
            </Text>
            <Text fontSize="18px">
              Choose a plan and get onboard in minutes. Then get $100 credits
              for your next payment.
            </Text>
            <Box>
              <ArrowIcon />
            </Box>
          </VStack>
        </Box>
        <Image mt="-30px" src="/woman.png" />
      </Box>
    </>
  );
}

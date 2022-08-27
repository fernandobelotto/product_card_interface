import { CheckCircleIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import { SkullIcon } from "../svg/SkullIcon";

export function PrincingCard({ price, items, frequency }: any) {
  return (
    <>
      <Box
        shadow="2xl"
        bg="white"
        rounded="20px"
        h="668px"
        w="400px"
        overflow="hidden"
      >
        <Flex h="100%" flexDir="column" justify="space-between">
          <VStack pt="40px" px="40px" spacing="24px" align="flex-start">
            <HStack>
              <SkullIcon />
              <Text as="b" fontSize="32px">
                Day Pass
              </Text>
            </HStack>
            <Text fontSize="22px" color="brand.gray">
              What You'll Get
            </Text>
            <List spacing={3}>
              {items.map((item: any) => {
                return (
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} />
                    {item}
                  </ListItem>
                );
              })}
            </List>
            <Divider />
            <Text fontSize="32px" fontWeight={700}>
              ${price}
              <Text fontSize="18px" fontWeight={400} as="b">
                / {frequency}
              </Text>
            </Text>
          </VStack>
          <Box w="100%" p="24px">
            <Button
              bg="brand.green"
              w="100%"
              h="64px"
              fontFamily="Inter"
              borderRadius="12px"
              fontSize="22px"
              fontWeight={600}
              color="white"
              textAlign="center"
              variant="unstyled"
            >
              Choose
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

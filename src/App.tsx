import { Center, HStack } from "@chakra-ui/react";
import { PrincingCard } from "./components/PrincingCard";
import { PrincingPlan } from "./components/PrincingPlan";

export default function App() {
  return (
    <Center h="100vh" bg="white">
      <HStack spacing={10}>
        <PrincingPlan />
        <PrincingCard
          items={[
            "8 hours usage of our coworking space",
            "Access to All our rooms",
          ]}
          price="20"
          frequency="day"
        />
        <PrincingCard
          items={[
            "8 hours usage of our coworking space",
            "Access to All our rooms",
            "Dedicated Desk",
            "Free Business Address",
            "Free Lunch 1x a day",
          ]}
          price="380"
          frequency="month"
        />
      </HStack>
    </Center>
  );
}

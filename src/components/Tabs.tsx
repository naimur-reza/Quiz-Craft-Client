import { Tabs, Flex, Text } from "@radix-ui/themes";
import QuizCard from "./QuizCard";

const TabsItems = () => {
  return (
    <>
      <Tabs.Root defaultValue="account">
        <Tabs.List>
          <Tabs.Trigger value="account">Account</Tabs.Trigger>
          <Tabs.Trigger value="documents">Documents</Tabs.Trigger>
        </Tabs.List>

        <Flex px="4" pt="3" pb="2" justify={"center"}>
          <Tabs.Content value="account">
            <QuizCard />
          </Tabs.Content>

          <Tabs.Content value="documents">
            <Text size="2">Access and update your documents.</Text>
          </Tabs.Content>
        </Flex>
      </Tabs.Root>
    </>
  );
};

export default TabsItems;

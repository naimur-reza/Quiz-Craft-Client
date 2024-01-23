import { Card, Text } from "@radix-ui/themes";

const QuizCard = () => {
  return (
    <Card variant="surface" style={{ width: "auto" }}>
      <Text as="div" size="2" weight="bold">
        Quick start
      </Text>
      <Text as="div" color="gray" size="2">
        Start building your next project in minutes
      </Text>
    </Card>
  );
};

export default QuizCard;

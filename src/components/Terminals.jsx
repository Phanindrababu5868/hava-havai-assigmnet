import {
  Flex,
  View,
  Image,
  Button,
  ActionButton,
  ButtonGroup,
  Content,
  Dialog,
  DialogTrigger,
  Divider,
  Header,
  Heading,
  Text,
  TextField,
  TextArea,
  Footer,
} from "@adobe/react-spectrum";
import React from "react";
import MoreSmallList from "@spectrum-icons/workflow/MoreSmallList";
import Share from "@spectrum-icons/workflow/Share";

const SingleTerminal = (props) => {
  const { title, description, imgUrl } = props;

  return (
    <Flex
      UNSAFE_style={{ border: "1px solid #E6E6E6" }}
      width="280px"
      height="104px"
    >
      <Image
        src={imgUrl}
        alt="terminals"
        UNSAFE_style={{
          width: "104px",
          height: "104px",
        }}
      />
      <Flex
        direction="column"
        UNSAFE_style={{
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
          fontSize: "14px",
          maxWidth: "150px",
        }}
      >
        <Flex direction="row" gap="20px" alignSelf="flex-start">
          <Text UNSAFE_style={{ fontSize: "14px", fontWeight: 600 }}>
            {title}
          </Text>
          <MoreSmallList />
        </Flex>

        <Text UNSAFE_style={{ fontSize: "14px", fontWeight: 400 }}>
          {description}
        </Text>
      </Flex>
    </Flex>
  );
};

const Terminals = () => {
  const terminalsData = [
    {
      title: "Terminal 1",
      description: "Optional metadata should be two lines.",
      imgUrl:
        "https://s3-alpha-sig.figma.com/img/e6fa/4d5a/9fa67efdaff0836c6b48500e00b4f1f6?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LdmYr5MqACzkzoqBJySPUXr-BgPcR0Tv3kWP7smBJk--CfbuhTMUeL~FMaGC4SN5ZEuVpAtG9X3pq7V-lFONPEgYXtiQgjpDLVicqokdVgKAG17B6PBljOTgqwDlqjkT91uZcWjHC9vS2~9OCxnUzyLBFTAMwIWADc3yRpeqvV4g4u7k1STFHxq~Nk-vsBw2sXcsVHlMpoa6DT4rTAlmpAlBEQvkmCJkxtQLTPRQ-SXMckrjKDHOo8b~Kgj4tGQ87tTwRTYzx7iSX~K8LxAT9I6ADjFT~SLM-aa0qQXZLomWgc3JLzJmeJ1JIMhF~b2kyqbQfDjrjAyzRqrkIZomYw__",
    },
    {
      title: "Terminal 2",
      description: "Optional metadata should be two lines.",
      imgUrl:
        "https://s3-alpha-sig.figma.com/img/e6fa/4d5a/9fa67efdaff0836c6b48500e00b4f1f6?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LdmYr5MqACzkzoqBJySPUXr-BgPcR0Tv3kWP7smBJk--CfbuhTMUeL~FMaGC4SN5ZEuVpAtG9X3pq7V-lFONPEgYXtiQgjpDLVicqokdVgKAG17B6PBljOTgqwDlqjkT91uZcWjHC9vS2~9OCxnUzyLBFTAMwIWADc3yRpeqvV4g4u7k1STFHxq~Nk-vsBw2sXcsVHlMpoa6DT4rTAlmpAlBEQvkmCJkxtQLTPRQ-SXMckrjKDHOo8b~Kgj4tGQ87tTwRTYzx7iSX~K8LxAT9I6ADjFT~SLM-aa0qQXZLomWgc3JLzJmeJ1JIMhF~b2kyqbQfDjrjAyzRqrkIZomYw__",
    },
  ];

  return (
    <Flex direction="row" gap="size-300" alignItems={"center"} wrap>
      {terminalsData.map((terminal, index) => (
        <View key={index}>
          <SingleTerminal {...terminal} />
        </View>
      ))}

      <DialogTrigger>
        <ActionButton
          variant="primary"
          UNSAFE_style={{
            borderRadius: "30px",
            border: "2px solid #000",
            fontWeight: 600,
          }}
        >
          + Add Terminal
        </ActionButton>
        {(close) => (
          <Dialog>
            <Heading>Terminal title</Heading>

            <Divider />
            <Content>
              <TextArea autoFocus width={"100%"} placeholder="Description">
                Description
              </TextArea>
            </Content>
            <Footer>
              <Button
                variant="accent"
                UNSAFE_style={{
                  backgroundColor: "#E6E6E6",
                  padding: "6px 10px 6px 10px",
                  color: "#000",
                }}
              >
                <Share />
                <Text>upload image</Text>
              </Button>
            </Footer>
            <ButtonGroup>
              <Button variant="secondary" onPress={close}>
                Cancel
              </Button>
              <Button
                variant="secondary"
                UNSAFE_style={{ borderColor: "#000" }}
                onPress={close}
              >
                Confirm
              </Button>
            </ButtonGroup>
          </Dialog>
        )}
      </DialogTrigger>
    </Flex>
  );
};

export default Terminals;

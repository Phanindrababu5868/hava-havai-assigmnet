import {
  Flex,
  View,
  Text,
  Tabs,
  Item,
  TabList,
  TabPanels,
} from "@adobe/react-spectrum";
import React from "react";
import Terminals from "./Terminals";
import Services from "./serviceComponents/service";
import Breadcrumb from "./Breadcrumb";
import { useParams } from "react-router-dom";

const allServices = [
  { name: "Lost & found" },
  { name: "Lounge" },
  { name: "Money Exchange" },
];

const categories = [
  { name: "Option 1" },
  { name: "Option 2" },
  { name: "Option 3" },
  { name: "Option 4" },
];

const AirPortDetails = ({ data }) => {
  const { id: name } = useParams();

  return (
    <View
      backgroundColor={"gray-50"}
      width="100%"
      flexGrow={1}
      borderWidth="thin"
      borderColor="dark"
      padding={"40px"}
    >
      <Flex direction={"column"} gap={"15px"}>
        <Breadcrumb />
        <Text
          elementType="h1"
          UNSAFE_style={{
            fontSize: "34px",
            fontFamily: "Roboto",
            fontWeight: 700,
          }}
        >
          {name}
        </Text>
        <Tabs aria-label="History of Ancient Rome">
          <TabList>
            <Item key="FoR">Terminal</Item>
            <Item key="MaR">Transport</Item>
            <Item key="Emp">Contact details</Item>
          </TabList>
          <TabPanels
            UNSAFE_style={{
              padding: "30px",
            }}
          >
            <Item key="FoR">
              <Terminals />
            </Item>
            <Item key="MaR">Transport</Item>
            <Item key="Emp">Contact Details</Item>
          </TabPanels>
        </Tabs>
        <Services allServices={allServices} categories={categories} />
      </Flex>
    </View>
  );
};

export default AirPortDetails;

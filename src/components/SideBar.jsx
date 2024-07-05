import { Flex, Icon, Text, View } from "@adobe/react-spectrum";
import React from "react";
import Home from "@spectrum-icons/workflow/Home";
import ViewGrid from "@spectrum-icons/workflow/ViewGrid";

const SideBar = () => {
  return (
    <View
      borderWidth="thin"
      borderColor="dark"
      backgroundColor="gray-50"
      UNSAFE_style={{
        width: "250px",
        minHeight: "90vh",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "40px",
      }}
    >
      <Flex direction={"column"} gap={"40px"}>
        <View>
          <View marginBottom={"size-115"}>
            <Icon>
              <Home aria-label="Home" size="S" />
            </Icon>
            <Text
              UNSAFE_style={{
                paddingLeft: "10px",
                fontsize: "14px",
                fontWeight: "400",
                color: "#222222",
              }}
            >
              Home
            </Text>
          </View>
          <View>
            <Icon>
              <ViewGrid aria-label="Dashboard" size="S" />
            </Icon>
            <Text
              UNSAFE_style={{
                paddingLeft: "10px",
                fontsize: "14px",
                fontWeight: "400",
                color: "#222222",
              }}
            >
              DashBoard
            </Text>
          </View>
        </View>
        <Flex direction={"column"} gap={"size-100"}>
          <Text
            UNSAFE_style={{
              padding: "5px",
              fontsize: "14px",
              fontWeight: "600",
              color: "#222222",
            }}
          >
            Services
          </Text>
          <Text
            UNSAFE_style={{
              padding: "5px",
              fontsize: "14px",
              fontWeight: "600",
              color: "#222222",
              background: "#f0f0f0",
            }}
          >
            Airports
          </Text>
          <Text
            UNSAFE_style={{
              padding: "5px",
              fontsize: "14px",
              fontWeight: "600",
              color: "#222222",
            }}
          >
            videos
          </Text>
        </Flex>
        <Flex direction={"column"} gap={"size-100"}>
          <Text
            UNSAFE_style={{
              padding: "5px",
              fontsize: "14px",
              fontWeight: "600",
              color: "#222222",
            }}
          >
            Others
          </Text>
          <Text
            UNSAFE_style={{
              padding: "5px",
              fontsize: "14px",
              fontWeight: "400",
              color: "#222222",
            }}
          >
            List1
          </Text>
          <Text
            UNSAFE_style={{
              padding: "5px",
              fontsize: "14px",
              fontWeight: "400",
              color: "#222222",
            }}
          >
            List2
          </Text>
          <Text
            UNSAFE_style={{
              padding: "5px",
              fontsize: "14px",
              fontWeight: "400",
              color: "#222222",
            }}
          >
            List3
          </Text>
        </Flex>
      </Flex>
    </View>
  );
};

export default SideBar;

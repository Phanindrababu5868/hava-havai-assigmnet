import React from "react";
import { View, Text, Image, Flex } from "@adobe/react-spectrum";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <View
      padding="size-200"
      borderWidth="thin"
      borderColor="dark"
      backgroundColor="gray-50"
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Text
          elementType="h1"
          UNSAFE_style={{ fontSize: "24px", fontFamily: "Roboto" }}
        >
          <Link to={"/"} style={{ textDecoration: "none" }}>
            Hava Havai
          </Link>
        </Text>
        <View backgroundColor="transparent">
          <Image
            src="https://i.imgur.com/Z7AzH2c.png"
            alt="Sky and roof"
            UNSAFE_style={{
              width: "50px",
              height: "50px",
              borderRadius: "25px",
            }}
          />
        </View>
      </Flex>
    </View>
  );
};

export default Header;

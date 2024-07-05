import React from "react";
import { Text, View } from "@adobe/react-spectrum";
import ServiceDetails from "./serviceForm";

const Services = ({ allServices, categories }) => {
  return (
    <View padding="size-200">
      <Text
        UNSAFE_style={{
          fontSize: "22px",
          color: "#222222",
          fontWeight: 700,
        }}
      >
        Services
      </Text>
      {allServices.map((service, index) => (
        <ServiceDetails
          key={service.name}
          name={service.name}
          categories={categories}
          index={index}
        />
      ))}
    </View>
  );
};

export default Services;

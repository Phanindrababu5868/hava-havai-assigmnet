import React, { useState } from "react";
import {
  Text,
  TextField,
  View,
  Button,
  Item,
  Picker,
  Flex,
  Switch,
} from "@adobe/react-spectrum";
import Share from "@spectrum-icons/workflow/Share";

const Services = () => {
  const [serviceName, setServiceName] = useState("Lost & found");
  const [Description, setDescription] = useState("");
  const [category, setCategory] = useState(null);
  const [subCategory, setSubCategory] = useState(null);
  const [isToggled, setIsToggled] = useState(false);
  const [show, setShow] = useState(false);

  const categories = [
    { name: "Option 1" },
    { name: "Option 2" },
    { name: "Option 3" },
    { name: "Option 4" },
  ];

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
      <View
        UNSAFE_style={{
          borderBottom: "2px solid #D5D5D5",
          padding: "20px 0",
        }}
        onClick={() => setShow(!show)}
      >
        Lost & found
      </View>
      {show && (
        <Flex
          justifyContent="space-between"
          alignItems="end"
          marginTop="size-200"
        >
          <Flex alignItems="end" gap="30px">
            <TextField
              label="Service Name"
              value={serviceName}
              onChange={setServiceName}
            />
            <Picker
              label="Category"
              items={categories}
              selectedKey={category}
              onSelectionChange={setCategory}
            >
              {(item) => <Item key={item.name}>{item.name}</Item>}
            </Picker>
            <Picker
              label="Sub Category"
              items={categories}
              selectedKey={subCategory}
              onSelectionChange={setSubCategory}
            >
              {(item) => <Item key={item.name}>{item.name}</Item>}
            </Picker>
            <Button
              variant="accent"
              UNSAFE_style={{
                backgroundColor: "#E6E6E6",
                padding: "6px 10px",
                color: "#000",
              }}
            >
              <Share />
              <Text>Upload Image</Text>
            </Button>
            <Switch isSelected={isToggled} onChange={setIsToggled}>
              Show Image
            </Switch>
            <TextField
              label="Description"
              value={serviceName}
              onChange={setServiceName}
              placeholder="type here"
            />
          </Flex>
          <Button
            variant="primary"
            marginTop="size-200"
            UNSAFE_style={{ backgroundColor: "#000", color: "#fff" }}
          >
            Save
          </Button>
        </Flex>
      )}
    </View>
  );
};

export default Services;

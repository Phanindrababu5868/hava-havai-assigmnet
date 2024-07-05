import React, { useState } from "react";
import {
  TextField,
  View,
  Button,
  Item,
  Picker,
  Flex,
  Switch,
  Text,
} from "@adobe/react-spectrum";
import Share from "@spectrum-icons/workflow/Share";

const ServiceDetails = ({ name, categories, index }) => {
  const [serviceName, setServiceName] = useState(name);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(null);
  const [subCategory, setSubCategory] = useState(null);
  const [isToggled, setIsToggled] = useState(false);
  const [show, setShow] = useState(index === 0);

  return (
    <>
      <View
        UNSAFE_style={{
          borderBottom: "2px solid #D5D5D5",
          padding: "20px 0",
          cursor: "pointer",
        }}
      >
        <p onClick={() => setShow(!show)}>{serviceName}</p>
      </View>
      {show && (
        <Flex
          justifyContent="space-between"
          alignItems="end"
          marginTop="size-200"
        >
          <Flex alignItems="end" gap="30px" wrap>
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
              value={description}
              onChange={setDescription}
              placeholder="Type here"
            />
          </Flex>
          <Button
            variant="primary"
            marginTop="size-200"
            UNSAFE_style={{ backgroundColor: "#000", color: "#fff" }}
            alignSelf={"flex-start"}
          >
            Save
          </Button>
        </Flex>
      )}
    </>
  );
};

export default ServiceDetails;

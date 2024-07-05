import { View, Text, Button, Flex, Checkbox } from "@adobe/react-spectrum";
import {
  Cell,
  Column,
  Row,
  Table,
  TableBody,
  TableHeader,
} from "react-aria-components";
import React from "react";
import AnnotatePen from "@spectrum-icons/workflow/AnnotatePen";

const MyCheckbox = ({ slot }) => <input type="checkbox" slot={slot} />;

const AirPorts = () => {
  const columns = [
    { name: "Name", id: "name", isRowHeader: true },
    { name: "Country", id: "country" },
    { name: "Code", id: "code" },
    { name: "Terminals", id: "terminals" },
  ];

  const rows = [
    {
      id: 1,
      name: "Indra Gandhi International Airport",
      country: "india",
      code: "DEL",
      terminals: 3,
      deleteIcon: <AnnotatePen />,
    },
    {
      id: 2,
      name: "Dubai International Airport",
      country: "UAE",
      code: "DXB",
      terminals: 5,
    },
    {
      id: 3,
      name: "Heathrow Airport",
      country: "England",
      code: "LHR",
      terminals: 6,
    },
    {
      id: 4,
      name: "Istanbul Airport",
      country: "Turkey",
      code: "IST",
      terminals: 6,
    },
    {
      id: 5,
      name: "Rajiv Gandhi International Airport",
      country: "Texas",
      code: "DFW",
      terminals: 14,
    },
  ];

  return (
    <View
      backgroundColor={"gray-50"}
      width="100%"
      flexGrow={1}
      borderWidth="thin"
      borderColor="dark"
      padding={"40px"}
    >
      <View>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          marginBottom={"30px"}
        >
          <Text
            elementType="h1"
            UNSAFE_style={{ fontSize: "24px", fontFamily: "Roboto" }}
          >
            Airports
          </Text>
          <Button
            variant="cta"
            UNSAFE_style={{
              backgroundColor: "#000000",
              fontSize: "14px",
              color: "white",
            }}
          >
            + Add New
          </Button>
        </Flex>
      </View>
      <Table
        aria-label="Files"
        style={{ width: "100%", border: "1ps solid red" }}
        UNSAFE_style={{ width: "100%", border: "1ps solid red" }}
      >
        <TableHeader
          style={{
            textAlign: "left",
            borderBottom: "1px solid red",
            width: "100%",
          }}
        >
          <Column>
            <MyCheckbox slot="selection" />
          </Column>
          <Column flexGrow={12} isRowHeader>
            All Airports
          </Column>
          <Column flexGrow={4}>Country</Column>
          <Column>Code</Column>
          <Column textAlign="right">Terminals</Column>
        </TableHeader>
        <TableBody
          items={rows}
          flexGrow={1}
          style={{ borderTop: "2px solid red" }}
        >
          {(row) => (
            <Row
              key={row.id}
              style={{
                textAlign: "left",
                borderBottom: "1px solid #D5D5D5",
                cursor: "pointer",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
            >
              <Cell>
                <MyCheckbox slot={"selection"} />
              </Cell>
              {columns.map((column) => (
                <Cell key={column.id}>
                  {column.id === "name" ? (
                    <a
                      href={`/${row[column.id]}`}
                      style={{ textDecoration: "none", color: "#222222" }}
                    >
                      {row[column.id]}
                    </a>
                  ) : (
                    row[column.id]
                  )}
                </Cell>
              ))}
            </Row>
          )}
        </TableBody>
      </Table>
    </View>
  );
};

export default AirPorts;

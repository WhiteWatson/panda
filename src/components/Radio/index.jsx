import React, { useState } from "react";
import { View, Text, Radio, RadioGroup } from "@tarojs/components";

const CustomRadio = ({ label, name, value, checkedValue, setCheckedValue }) => {
  const isChecked = value === checkedValue;
  const styles = {
    label: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0.5rem",
      border: isChecked ? "1px solid #10B981" : "1px solid grey",
      position: "relative",
      cursor: "pointer",
      backgroundColor: "white",
      borderRadius: "0.25rem",
      borderWidth: "0.1rem",
      display: "inline-block",
      minWidth: "3rem",
      width: "30%",
      boxSizing: "border-box",
    },
    radio: {
      display: "none",
    },
    checkmark: {
      position: "absolute",
      bottom: 0,
      right: 0,
      backgroundColor: "#10B981",
      width: "1.5rem",
      height: "1.5rem",
      color: "white",
      clipPath: "polygon(100% 100%, 0 100%, 100% 0)",
    },
    checkmarkText: {
      position: "absolute",
      color: "white",
      bottom: "0.5rem",
      right: "0.125rem",
      transform: "translateY(50%)",
    },
  };

  return (
    <View
      style={styles.label}
      onClick={() => {
        setCheckedValue(value);
      }}
    >
      <Radio value={value} checked={isChecked} style={styles.radio} />
      <Text>{label}</Text>
      {isChecked && (
        <View style={styles.checkmark}>
          <Text style={styles.checkmarkText}>✓</Text>
        </View>
      )}
    </View>
  );
};

const RadioGroupComponent = ({
  options,
  name,
  checkedValue,
  setCheckedValue,
}) => {
  function renderRadios(line = 3) {
    const rows = [];
    for (let i = 0; i < options.length; i += line) {
      const rowLabels = options
        .slice(i, i + 3)
        .map((option) => (
          <CustomRadio
            key={option.value}
            label={option.label}
            name={name}
            value={option.value}
            checkedValue={checkedValue}
            setCheckedValue={setCheckedValue}
          />
        ));
      rows.push(
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            marginTop: "0.75rem",
          }}
        >
          {rowLabels.length === line
            ? rowLabels
            : [
                rowLabels,
                <View
                  key={rowLabels.length + 1}
                  style={{ width: "30%", visibility: "hidden" }}
                ></View>,
              ]}
        </View>
      );
    }
    return rows;
  }
  return (
    <View className="flex flex-col">
      <RadioGroup>{renderRadios()}</RadioGroup>
    </View>
  );
};

export default RadioGroupComponent;

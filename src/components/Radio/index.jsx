import React, { useState } from "react";
import { View, Text, Radio, RadioGroup } from "@tarojs/components";

const CustomRadio = ({ label, name, value, checkedValue, setCheckedValue }) => {
  const isChecked = value === checkedValue;

  const styles = {
    label: {
      display: "flex",
      alignItems: "center",
      padding: "0.5rem",
      borderColor: isChecked ? "rgb(16, 185, 129)" : "grey",
      position: "relative",
      cursor: "pointer",
      backgroundColor: "white",
      borderRadius: "0.25rem",
      borderWidth: "0.1rem",
      display: "inline-block",
      minWidth: "3rem",
    },
    radio: {
      display: "none",
    },
    checkmark: {
      position: "absolute",
      bottom: 0,
      right: 0,
      backgroundColor: "rgb(16, 185, 129)",
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
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "1rem",
        padding: "1rem",
      }}
    >
      <RadioGroup>
        {options.map((option) => (
          <CustomRadio
            key={option.value}
            label={option.label}
            name={name}
            value={option.value}
            checkedValue={checkedValue}
            setCheckedValue={setCheckedValue}
          />
        ))}
      </RadioGroup>
    </View>
  );
};

export default RadioGroupComponent;

"use client";
import { useState } from "react";
import { Switch, ConfigProvider } from "antd";

const customTheme = {
  components: {
    Switch: {
      trackMinWidth: 60,
      colorPrimary: "#01c701",
      colorPrimary1: "#e40000",
    },
  },
};

const SwitchYN = ({ id, checked, onchange }: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <div className="flex justify-center items-center">
      <ConfigProvider theme={customTheme}>
        <Switch
          id={id}
          checked={checked}
          onChange={onchange}
          checkedChildren="Oui"
          unCheckedChildren="Non"
          style={
            checked
              ? {
                  backgroundColor: customTheme.components.Switch.colorPrimary,
                }
              : {
                  backgroundColor: customTheme.components.Switch.colorPrimary1,
                }
          }
        />
      </ConfigProvider>
    </div>
  );
};

export default SwitchYN;

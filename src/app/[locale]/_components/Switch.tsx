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

const SwitchYN = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchChange = (
    checked: boolean | ((prevState: boolean) => boolean)
  ) => {
    setIsChecked(checked);
    console.log(`Switch checked: ${checked}`);
  };
  return (
    <div className="flex justify-center items-center">
      <ConfigProvider theme={customTheme}>
        <Switch
          checked={isChecked}
          onChange={handleSwitchChange}
          checkedChildren="Oui"
          unCheckedChildren="Non"
          style={
            isChecked
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

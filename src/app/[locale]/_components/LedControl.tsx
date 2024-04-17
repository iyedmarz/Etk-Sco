const LedControl = async ({
  state,
  color,
}: {
  state: "on" | "off";
  color: string;
}): Promise<void> => {
  try {
    const endpoint =
      state === "on"
        ? `http://localhost:5000/led/${color}`
        : `http://localhost:5000/led/${color}off`;
    const response = await fetch(endpoint, {
      method: "POST",
    });

    if (response.ok) {
      console.log(
        `LED ${state === "on" ? "turned on" : "turned off"} successfully.`
      );
    } else {
      console.error(
        `Error communicating with LED. Status code: ${response.status}`
      );
    }
  } catch (error) {
    console.error("Error Turning On/Off LED Light:", error);
  }
};

export default LedControl;

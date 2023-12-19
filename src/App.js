import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import TextField from "@mui/material/TextField";

import Box from "@mui/material/Box";

export default function ResponsiveDateTimePickers() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleChange = (datetime) => {
    setSelectedDate(datetime);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          slotProps={{
            // The actions will be the same between desktop and mobile
            actionBar: {
              actions: ["clear", "accept"],
            },
          }}
          label="Basic date time picker"
          value={selectedDate}
          onChange={handleChange}
        >
          {(params) => (
            <TextField
              {...params}
              inputProps={{
                ...params.inputProps,
                readOnly: true,
              }}
            />
          )}
        </DateTimePicker>
      </LocalizationProvider>
    </Box>
  );
}

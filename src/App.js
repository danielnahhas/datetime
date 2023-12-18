import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function ResponsiveDateTimePickers() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleChange = (datetime) => {
    setSelectedDate(datetime);
  };

  const handleClear = () => {
    setSelectedDate(null);
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

      <Button
        variant="outlined"
        style={{ marginTop: 16 }}
        onClick={handleClear}
      >
        Clear
      </Button>
    </Box>
  );
}

import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Finished from "../../products/Finished";
import Available from "../../products/Available";
import Category from "../../products/Category";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Protab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="Finished"
            {...a11yProps(0)}
            sx={{ color: "#000", fontWeight: "bold" }}
          />
          <Tab
            label="Available"
            {...a11yProps(1)}
            sx={{ color: "#000", fontWeight: "bold" }}
          />
          <Tab
            label="Category"
            {...a11yProps(2)}
            sx={{ color: "#000", fontWeight: "bold" }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Finished />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <Available />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <Category />
      </CustomTabPanel>
    </Box>
  );
}

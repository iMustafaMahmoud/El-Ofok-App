import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useSelector, useDispatch } from "react-redux";
import { updateFilter } from "../actions/userActions";
import { useTranslation } from "react-i18next";

const FilterHeader = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const { tabsList, filters } = useSelector((state) => state);
  const { t, i18n } = useTranslation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    updateFilter(dispatch, tabsList[newValue]);
  };
  return (
    <Tabs
      value={value}
      onChange={handleChange}
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      {tabsList.map((tab) => (
        <Tab label={t(tab)} />
      ))}
    </Tabs>
  );
};

export default FilterHeader;

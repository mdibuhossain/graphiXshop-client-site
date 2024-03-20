import React, { useEffect, useState } from "react";
import { Container, Grid, Button } from "@mui/material";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Title from "../Components/Shared/Title";
import Product from "../Components/Shared/Product";

const AllProducts = () => {
  const [disProduct, setDisProduct] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [filterType, setFilterType] = useState({});
  const [selectedFilter, setSelectedFilter] = useState({});
  console.log(selectedFilter);
  useEffect(() => {
    fetch("/car_data.json")
      .then((res) => res.json())
      .then((data) => {
        setDisProduct(data);
        setFilteredProduct(data);
      });
  }, []);

  useEffect(() => {
    const newFilterType = {};
    newFilterType["brand"] = Array.from(
      new Set(disProduct.map((item) => item.brand))
    ).sort();
    newFilterType["rimSize"] = Array.from(
      new Set(disProduct.map((item) => item.rimSize))
    ).sort();
    newFilterType["cc"] = Array.from(
      new Set(disProduct.map((item) => item.cc))
    ).sort();
    newFilterType["condition"] = Array.from(
      new Set(disProduct.map((item) => item.condition))
    ).sort();
    newFilterType["color"] = Array.from(
      new Set(disProduct.map((item) => item.color))
    ).sort();
    newFilterType["fuelType"] = Array.from(
      new Set(disProduct.map((item) => item.fuelType))
    ).sort();
    console.log(newFilterType);
    setFilterType(newFilterType);
  }, [disProduct]);

  const handleSearch = (e) => {
    e.preventDefault();
    const tag = e.target.value;
    const newFiltered = disProduct.filter((item) =>
      item?.name?.toLowerCase()?.includes(tag.toLowerCase())
    );
    setFilteredProduct(newFiltered);
  };

  const handleFilter = (key, value, e) => {
    const flag = e.target.checked;
    const tmpFilter = { ...selectedFilter };
    let tmpValue = tmpFilter[key] ? [...tmpFilter[key]] : [];
    if (flag) {
      tmpValue = [...tmpValue, value];
    } else {
      tmpValue = tmpValue.filter((item) => item !== value);
    }
    tmpFilter[key] = tmpValue;
    setSelectedFilter(tmpFilter);
    console.log(tmpFilter);
    let tmpFilterData = [...disProduct];
    // advanced filter function
    tmpFilterData = tmpFilterData.filter((item) => {
      return Object.keys(tmpFilter).every((filterKey) => {
        if (!tmpFilter[filterKey].length) return true;
        return tmpFilter[filterKey].includes(item[filterKey]);
      });
    });
    setFilteredProduct(tmpFilterData);
  };

  return (
    <>
      <Box sx={{ my: 5 }}>
        <Container>
          <Title subTitle="PRODUCT" title="CARS" />
          <Box sx={{ marginBottom: 2 }}>
            <TextField
              fullWidth
              placeholder="Search car by name"
              onChange={handleSearch}
            />
          </Box>
          <Grid container spacing={2}>
            <Grid item md={3}>
              <Box>
                {Object.keys(filterType).map((key, index) => (
                  <Accordion key={index}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      {key}
                    </AccordionSummary>
                    <AccordionDetails>
                      <FormGroup>
                        {filterType[key]?.map((item, index) => (
                          <FormControlLabel
                            key={index}
                            control={
                              <Checkbox
                                onChange={(e) => handleFilter(key, item, e)}
                                checked={
                                  selectedFilter?.[key]?.includes(item) || false
                                }
                              />
                            }
                            label={item}
                          />
                        ))}
                      </FormGroup>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
              <Button
                onClick={() => {
                  setFilteredProduct(disProduct);
                  setSelectedFilter({});
                }}
                variant="contained"
                sx={{ marginTop: 3 }}
              >
                Reset
              </Button>
            </Grid>
            <Grid item container spacing={2} md={9}>
              {filteredProduct?.map((product) => (
                <Product key={product._id} product={product} />
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AllProducts;

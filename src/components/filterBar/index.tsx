import { FC } from "react";
import { StyledFiltredBar } from "./style";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Form, Formik } from "formik";
import { graphqlVariables } from "pages/home/type";
import { filterBar } from "./type";

const FilterBar: FC<filterBar> = ({ onSubmit }) => {
  const initialValues: graphqlVariables = {
    name: "",
    status: "",
    species: "",
    type: "",
    gender: ""
  };

  return (
    <StyledFiltredBar>
      <Formik data-testid="form" initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange }) => (
          <Form>
            <div className="fields">
              {Object.keys(values).map((property, index) => {
                return (
                  <TextField
                    key={`${property}_${index}`}
                    type="text"
                    name={property}
                    label={property}
                    value={values[property as keyof graphqlVariables]}
                    onChange={handleChange}
                    variant="outlined"
                  />
                );
              })}
            </div>
            <Button variant="contained" data-testid="submit" type="submit">
              Search
            </Button>
          </Form>
        )}
      </Formik>
    </StyledFiltredBar>
  );
};

export { FilterBar };

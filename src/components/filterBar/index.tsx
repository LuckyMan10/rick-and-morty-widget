import { FC } from "react";
import { StyledFiltredBar } from "./style";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Form, Formik } from "formik";
import { graphqlVariables } from "pages/home/type";

type filterBar = {
  refetch(args: graphqlVariables): void;
};

const FilterBar: FC<filterBar> = ({ refetch }) => {
  const initialValues: graphqlVariables = {
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
    page: 1
  };
  const formSubmitHandler = (values: graphqlVariables) => {
    refetch(values);
  };

  return (
    <StyledFiltredBar>
      <Formik initialValues={initialValues} onSubmit={formSubmitHandler}>
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
            <Button variant="contained" type="submit">
              Search
            </Button>
          </Form>
        )}
      </Formik>
    </StyledFiltredBar>
  );
};

export { FilterBar };

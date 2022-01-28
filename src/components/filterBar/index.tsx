import { FC } from "react";
import { StyledFiltredBar } from "./style";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Form, Formik } from "formik";

type filterBar = {
  refetch(args: { [key: string]: string }): void;
}

const FilterBar: FC<filterBar> = ({refetch}) => {
  const initialValues: { [key: string]: string } = {
    name: "",
    status: "",
    species: "",
    type: "",
    gender: ""
  };
  const formSubmitHandler = (values: { [key: string]: string }) => {
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
                  value={values[property]}
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

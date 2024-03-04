import React, { Fragment } from 'react';
import { Form, Field } from 'react-final-form';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { AddNewAddressFields } from '../../../../../constants';
import { required, mustBeNumber, minValue, composeValidators } from '../../../../../validations';
import { FormSectionTitle, Col } from '../styles';
import { Button } from '@mui/material';

export const NewAddressForm = (props) => {

    const onSubmit = async values => {
        let randomId = Math.floor(Math.random() * 400000000);
        values["id"] = randomId;
        props.addNewAddressApiFunc(values);
        props.handleClose()
    }

    const renderInput = (labeltxt, inputType) => ({ input, meta }) => (
        <Col>
            <TextField sx={{ width: "300px" }} inputProps={{ style: { padding: '10px', fontSize: "13px" } }}
                {...input} type={inputType} placeholder={labeltxt} />
            {meta.error && meta.touched && <span className='err'>{meta.error}</span>}
        </Col>
    )

    const RadioWrapper = (props) => {
        const {
            input: { checked, value, name, onChange, ...restInput },
        } = props;

        return (
            <Radio
                name={name}
                inputProps={restInput}
                onChange={onChange}
                checked={checked}
                value={value}
            />
        );
    };


    return (<Form
        onSubmit={onSubmit}
        initialValues={{ addressType: 'HOME'}}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
                {Object.values(AddNewAddressFields).map((item, index) => {
                    return (<Fragment key={`section_${index}`}>
                        <FormSectionTitle>{item.title}</FormSectionTitle>
                        {item.fields_type === "radio" ? <>
                            <RadioGroup row aria-label="Save Address As" name={item.groupName}>
                                <>{item.fields.map((f1, ind2) => {
                                    return (<FormControlLabel
                                        key={`field1_${ind2}`}
                                        control={
                                            <Field
                                                name={f1.name}
                                                component={RadioWrapper}
                                                type="radio"
                                                value={f1.value}
                                            />
                                        }
                                        label={f1.labeltxt}
                                    />)
                                })}</>
                            </RadioGroup>
                        </>
                            :
                            <>{item.fields.map((f1, ind2) => {
                                return (<Field key={`field_${ind2}`} name={f1.name} validate={required}>
                                    {renderInput(f1.labeltxt, f1.inputType)}
                                </Field>)
                            })}</>}
                    </Fragment>)
                })}
                <Button type="submit" sx={{ width: "300px" }} variant="contained" disabled={submitting}>
                    Submit
                </Button>
            </form>
        )}
    />)
}


import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { userLogin } from './actions';
import { LoginCreds } from '../../constants';
import { ErrDv } from '../CommonTemplates/CommonStyles';
import { M1, D1, H1, S2, Col } from './styles';

const Login = (props) => {
  const { userProfileDetails } = props;
  const { status, data } = userProfileDetails;
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "success" && data && data?.uid) {
      navigate('/', { replace: true });
    }
  }, [status])

  const onSubmit = async values => {
    const { email, password } = values;
    props.userLogin(email, password);
  }

  const renderInput = (labeltxt, inputType) => ({ input, meta }) => (
    <Col>
      <TextField sx={{ width: "300px" }} inputProps={{ style: { padding: '10px', fontSize: "13px" } }}
        {...input} type={inputType} placeholder={labeltxt} />
      {meta.error && meta.touched && <span className='err'>{meta.error}</span>}
    </Col>
  )

  return (<M1>
    <H1>Shoppe</H1>
    <D1>
      <S2>
        <div className='msg1'>Welcome!!</div>
        <div className='msg2'>Sign in to your account</div>
        <Form
          onSubmit={onSubmit}
          initialValues={{ addressType: 'HOME' }}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <>{LoginCreds.map((f1, ind2) => {
                return (<Fragment key={`field_${ind2}`}>
                  <Field name={f1.name} validate={f1.validation}>
                    {renderInput(f1.labeltxt, f1.inputType)}
                  </Field>
                </Fragment>)
              })}</>
              <Button type="submit" sx={{ width: "300px" }} variant="contained" disabled={submitting}>
                Sign In
              </Button>
            </form>
          )}
        />
        {status === "error" && <ErrDv>{data}</ErrDv>}
      </S2>
    </D1>
  </M1>
  )
}


const mapStateToProps = (state) => ({
  userProfileDetails: state.userProfileModel.userProfileDetails
})

const mapDispatchToProps = dispatch => {
  return {
    userLogin: (email, password) => dispatch(userLogin(email, password)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
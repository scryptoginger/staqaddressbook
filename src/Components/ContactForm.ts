import React from 'react';
import ReactDOM from 'react-dom/client';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import PhysicalAddress from './Contact.ts';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required('Requried'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Pleaes type a valid email'),
  phoneNumber: Yup.string(),
  physAddress: Yup.string(),
  cryptoWalletAddress: Yup.string(),
  cryptoWalletNickname: Yup.string(),
  Notes: Yup.string(),
});



export default ContactForm() {
  //form code goes here
  <Formik
    validationSchema={SignupSchema}
    onSubmit={values => {
      console.log(values);
    }}
  >
    {({ errors, touched }) => (
      <Form>
        <Field name="firstName" />
      </Form>
    )}
  
}
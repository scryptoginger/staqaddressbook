import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

export interface Contact {
  name: ContactName;
  emailAddress: Email; //need to build this custom Type
  phoneNumber: string; //was going to use type number, but thought it would be best in case people add + or - symbols
  physAddress: PhysicalAddress;
  cryptoWalletAddress: string;
  cryptoWalletNickName: string;
  notes: string;
}

export interface ContactName {
  firstName: string;
  lastName: string;
}

export interface Email {
// email validation logic?
//email = new RexExp (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
//  email: Yup.string().email('Invalid email').required('Pleaes type a valid email'),
//This isn't workin in this file...
}

export interface PhysicalAddress {
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: number;
}

/* Notes
* Could consider combining the cryptoWallet Address and Nickname into a Tuple or something
*/
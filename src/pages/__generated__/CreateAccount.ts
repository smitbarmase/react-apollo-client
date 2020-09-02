/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateAccount
// ====================================================

export interface CreateAccount_createUser {
  name: string;
  username: string;
  email: string;
  id: string;
}

export interface CreateAccount {
  createUser: CreateAccount_createUser;
}

export interface CreateAccountVariables {
  data: UserInput;
}

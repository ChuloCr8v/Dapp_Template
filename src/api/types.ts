export type AuthState = {
  token: string;
};

export type LoginInput = {
  email: string;
  password: string;
};

export type AuthResult = AuthState;

export type OrgVerInput = {
  email: string;
};

export type VerifyOrgInput = {
  code: string;
};

export type OnboardOrgInput = {
  name: string;
  orgName: string;
  industry: string;
  phone: string;
  password: string;
};

export type AddStaffInput = {
  email: string;
  name: string;
};

export type Staff = {
  id: string;
  name: string;
  isActive: string;
  userId: string;
  orgId: string;
};

export type Customer = {
  id: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  isActive: string;
  userId: string;
  orgId: string;
  customerId: string;
};

export type User = {
  id: string;
  email: string;
  verified: string;
  isAdmin: string;
  orgId: string;
  staff: Staff;
  customer: Customer;
  createdAt: string;
};

export type AddCustomerInput = {
  name: string;
  email: string;
  phone: string;
  address: string;
};

export type OrgServiceType = {
  id: string;
  name: string;
};

export type OrgRequestType = {
  id: string;
  name: string;
};

export type Survey = {
  id: string;
  state: string;
  region: string;
  longitude: number;
  lattitude: number;
  serviceLocationAddress: string;
  comment: string;
  customerId: string;
  orgId: string;
  serviceTypeId: string;
  requestTypeId: string;
  createdAt: string;
  customer: Customer;
  requestType: OrgRequestType;
  serviceType: OrgServiceType;
};

export type NewSurveyInput = {
  customerId: string;
  serviceLocationAddress: string;
  serviceTypeId: string;
  requestTypeId: string;
  state: string;
  region: string;
  longitude: string;
  lattitude: string;
  comment?: string;
};
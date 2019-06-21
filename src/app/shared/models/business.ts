export interface Business {
  id: number;
  business_name: string;
  email: string;
  address: string;
  tax_number: string;
  tax_office: string;
  owner_surname: string;
  owner_patronym: string;
  id_card_number: string;
  id_card_date_of_issue: string;
  residence_address: string;
  wallet: any;
  createdAt?: Date;
  updatedAt?: Date;
}

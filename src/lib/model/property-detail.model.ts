export interface PropertyDetailModel {
  propertyId: number;
  propertyName: string;
  propertyType: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  location: {
    address: string;
    city: string;
    state: string;
    zipcode: string;
    country: string;
  }
  area: string;
  description: string;
  features: string[];
  contact: {
    agentName: string;
    agentPhone: string;
    agentEmail: string;
  };
  images: string[];
}

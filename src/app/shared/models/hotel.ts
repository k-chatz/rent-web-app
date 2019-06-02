/* TODO Use any for now, add amenities to every hotel model and create amenity model */
export interface Hotel {
  id: number;
  name: string;
  number_of_rooms: number;
  stars: string;
  email: string;
  lat: string;
  lng: string;
  description_short: string;
  description_long: string;
  createdAt?: Date;
  updatedAt?: Date;
}

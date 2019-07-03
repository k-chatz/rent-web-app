export interface Room {
  id: number;
  room_number: number;
  photos: [];
  capacity: number;
  createdAt?: Date;
  updatedAt?: Date;
  price: number;
}

export interface Room {
  id: number;
  room_number: number;
  photo: string;
  description: string;
  capacity: number;
  createdAt?: Date;
  updatedAt?: Date;
  price: number;
}

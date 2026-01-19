// Global type definitions

export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  location: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Invitation {
  id: string;
  eventId: string;
  recipientEmail: string;
  recipientName: string;
  status: "pending" | "accepted" | "declined";
  createdAt: Date;
  updatedAt: Date;
}

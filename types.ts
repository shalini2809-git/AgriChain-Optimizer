
export type ViewType = 'Dashboard' | 'Inventory' | 'Shipments' | 'Marketplace' | 'Analytics';

export interface Crop {
  id: string;
  name: string;
  stage: 'Planting' | 'Growing' | 'Harvesting' | 'Storage';
  quantity: number; // in kg
  harvestDate: string;
  spoilageRisk: 'Low' | 'Medium' | 'High';
}

export interface Shipment {
  id: string;
  product: string;
  quantity: number; // in kg
  origin: string;
  destination: string;
  status: 'Pending' | 'In Transit' | 'Delivered' | 'Delayed';
  carrier: string;
  estDelivery: string;
}

export interface MarketListing {
  id: string;
  product: string;
  farmer: string;
  price: number; // per kg
  quantity: number; // in kg
  location: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

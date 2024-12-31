export interface Device {
    id: number;
    name: string;
    type: string;
    status: string;
    temperature?: number;
    resolution?: string;
  }
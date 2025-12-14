export type Category = 'Browsers' | 'Development' | 'Gaming' | 'Multimedia' | 'Utilities' | 'Drivers' | 'Communication' | 'Creative';

export type ProfileType = 'General' | 'Gaming' | 'Development' | 'Creative';

export type Language = 'en' | 'pt';

export interface SoftwareItem {
  id: string; // Winget ID
  name: string;
  description: string;
  category: Category;
  icon: string; // URL or Lucide icon name placeholder
  website: string; // Official website URL
  downloadUrl?: string; // Direct download URL for the installer (if available static)
  popular?: boolean;
}

export interface UserSelection {
  [key: string]: boolean; // ID -> Selected status
}

export interface GeneratedScript {
  code: string;
  explanation: string;
}
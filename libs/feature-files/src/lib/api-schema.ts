export interface RawFile {
  center: string;
  title: string;
  photographer: string;
  keywords: string[];
  location: string;
  nasa_id: string;
  media_type: string;
  date_created: string;
  description: string;
  description_508: string;
  secondary_creator: string;
  album: string[];
}

export interface Link {
  href: string;
  rel: string;
  render: string;
}

export interface Item {
  href: string;
  data: RawFile[];
  links: Link[];
}

export interface Metadata {
  total_hits: number;
}

export interface Link2 {
  rel: string;
  prompt: string;
  href: string;
}

export interface Collection {
  version: string;
  href: string;
  items: Item[];
  metadata: Metadata;
  links: Link2[];
}

export interface ApiResponse {
  collection: Collection;
}

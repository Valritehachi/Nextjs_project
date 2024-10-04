export interface SearchInstantType {
  common?: CommonEntity[] | null;
  branded?: BrandedEntity[] | null;
}
export interface CommonEntity {
  serving_unit: string;
  tag_id: string;
  food_name: string;
  serving_qty: number;
  photo: Photo;
  tag_name: string;
  common_type?: null;
  locale: string;
}
export interface Photo {
  thumb: string;
  highres?: null;
  is_user_uploaded?: boolean | null;
}
export interface BrandedEntity {
  nix_brand_id: string;
  brand_name_item_name: string;
  photo: Photo1;
  nix_item_id: string;
  brand_type: number;
  brand_name: string;
  nf_calories: number;
  serving_unit: string;
  region: number;
  serving_qty: number;
  food_name: string;
  locale: string;
}
export interface Photo1 {
  thumb: string;
}

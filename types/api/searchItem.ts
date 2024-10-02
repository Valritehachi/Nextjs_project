export interface SearchItemType {
  foods?: (FoodsEntity)[] | null;
}
export interface FoodsEntity {
  food_name: string;
  brand_name: string;
  serving_qty: number;
  serving_unit: string;
  serving_weight_grams: number;
  nf_metric_qty: number;
  nf_metric_uom: string;
  nf_calories: number;
  nf_total_fat: number;
  nf_saturated_fat: number;
  nf_cholesterol: number;
  nf_sodium: number;
  nf_total_carbohydrate: number;
  nf_dietary_fiber: number;
  nf_sugars: number;
  nf_protein: number;
  nf_potassium: number;
  nf_p?: null;
  full_nutrients?: (FullNutrientsEntity)[] | null;
  nix_brand_name: string;
  nix_brand_id: string;
  nix_item_name: string;
  nix_item_id: string;
  metadata: Metadata;
  source: number;
  ndb_no?: null;
  alt_measures?: null;
  lat?: null;
  lng?: null;
  photo: Photo;
  note?: null;
  class_code?: null;
  brick_code?: null;
  tag_id?: null;
  updated_at: string;
  nf_ingredient_statement: string;
}
export interface FullNutrientsEntity {
  attr_id: number;
  value: number;
}
export interface Metadata {
}
export interface Photo {
  thumb: string;
  highres?: null;
  is_user_uploaded: boolean;
}

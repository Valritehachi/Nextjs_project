export interface SearchNaturalNutrientsType {
  foods?: (FoodsEntity)[] | null;
}
export interface FoodsEntity {
  food_name: string;
  brand_name?: null;
  serving_qty: number;
  serving_unit: string;
  serving_weight_grams: number;
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
  nf_p: number;
  full_nutrients?: (FullNutrientsEntity)[] | null;
  nix_brand_name?: null;
  nix_brand_id?: null;
  nix_item_name?: null;
  nix_item_id?: null;
  upc?: null;
  consumed_at: string;
  metadata: Metadata;
  source: number;
  ndb_no: number;
  tags: Tags;
  alt_measures?: (AltMeasuresEntity)[] | null;
  lat?: null;
  lng?: null;
  meal_type: number;
  photo: Photo;
  sub_recipe?: null;
  class_code?: null;
  brick_code?: null;
  tag_id?: null;
}
export interface FullNutrientsEntity {
  attr_id: number;
  value: number;
}
export interface Metadata {
  is_raw_food: boolean;
}
export interface Tags {
  item: string;
  measure?: null;
  quantity: string;
  food_group: number;
  tag_id: number;
}
export interface AltMeasuresEntity {
  serving_weight: number;
  measure: string;
  seq?: number | null;
  qty: number;
}
export interface Photo {
  thumb: string;
  highres: string;
  is_user_uploaded: boolean;
}

export interface userInterface {
  id?: number;
  name: string | null;
  email: string | null;
  phone: string | null;
  image?: string | null;
  reset_pass?: boolean | null;
  pay?: number | string;
  id_chosen_plan?: number | string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string | null;
  token_push?: string | null;
  pay_updated_at?: string | null;
  next_payment_date?: string | null
}

export interface stickersInterface {
  id: number | string;
  figure_name: string;
  figure_image: string;
  figure_activated: number;
  id_segment: number;
  deleted_at: string | null;
  created_at: string | null;
  updated_at: string | null;
  id_subsegments: number | string | null;
  favorite?: boolean
  base64?: string
  blob?: any
}

export interface stickerFavoriteInterface {
  id: number | string;
  type_item: number | string;
  id_item: number;
  id_user: number;
  deleted_at: string | null;
  created_at: string | null;
  updated_at: string | null;
}

export interface segmentsInterface {
  id: number | string;
  type_item: number | string;
  id_item: number | string;
  id_user: number | string;
  stickers_count: number;
  subsegments: any,
  favorite?: boolean;
  segment_activated?: boolean;
  segment_image?: string | null;
  segment_name: string | null;
  deleted_at: string | null;
  created_at: string | null;
  updated_at: string | null;
}

export interface subsegmentsInterface {
  id: number | string;
  segment_id: number | string;
  subsegment_activated: number | string;
  subsegment_image?: string | null;
  subsegment_name: string | null;
  deleted_at: string | null;
  created_at: string | null;
  updated_at: string | null;
}

export interface bonusInterface {
  id: number | string;
  bonus_name: string;
  bonus_actived: number | string;
  bonus_image: string;
  deleted_at: string | null;
  created_at: string | null;
  updated_at: string | null;
}

export interface bonusVideoInterface {
  id: number | string;
  bonus_video_title: string;
  bonus_video_link: string;
  bonus_video_activated: number | string;
  bonus_video_segment: number | string;
  deleted_at: string | null;
  created_at: string | null;
  updated_at: string | null;
}

export interface planInterface {
  id: string | number;
  plan_name: string;
  description: string | null;
  planNameValue: string | null;
  activated: number;
  plan_value: number;
  duration_in_days: number | null;
  chosen_plan: string | number | null
}

export interface tutorialsInterface {
  id: string | number;
  training_title: string
  training_link_video: string
  training_activated: number
  playing: boolean | null
  type: string
}

export interface bonusVideoFileInterface {
  id: number | string;
  bonus_video_arquive_name: string;
  bonus_video_arquive_type: number | string;
  bonus_video_arquive_link: string;
  bonus_video_segment: number | string;
  deleted_at: string | null;
  created_at: string | null;
  updated_at: string | null;
  name_file: string | null;
  bonus_id: string | number;
}

export interface appDataInterface {
  allBonus: bonusInterface[];
  allBonusLinks: bonusVideoFileInterface[];
  allBonusVideos: bonusVideoInterface[];
  allFavoritesSegmentList: stickerFavoriteInterface[];
  allFavoritesStickerList: stickerFavoriteInterface[];
  allFigure: stickersInterface[];
  allSegments: segmentsInterface[];
  allSegmentsFavoriteFiltered: segmentsInterface[];
}

export interface forgotPasswordInterface {
  from: string;
  data: {
    email: string
  };
}

export interface loginResponseInterface {
  user: userInterface;
  adm: boolean
  error: string
}

export interface updatePasswordInterface {
  current_pass: string | number,
  new_pass: string | number,
}

export interface createFavoriteInterface {
  type_item: number,
  id_item: string | number,
  id_user: string | number,
}


export interface createCustomerInterface {
  firstname: string,
  lastname: string,
  email: string,
  telephone: string | number,
  postcode: string | number,
}

export interface createOrderInterface {
  id_chosen_plan: string | number,
  customer_id: string | number,
  discount: string | number,
}

export interface createPixPaymentInterface {
  order_id: string | number,
  customer_id: string | number,
  document_number: string | number,
  expiration_date: string | number,
}

export interface createSuccessfulPaymentInterface {
  id_chosen_plan: string | number,
  id_user: string | number,
}

export interface createCardPaymentInterface {
  order_id: string | number,
  customer_id: string | number,
  number: string | number,
  cvv: string | number,
  month: string | number,
  year: string | number,
  document_number: string | number,
  name: string | number,
  installments: string | number,
  soft_descriptor: string | number,
}

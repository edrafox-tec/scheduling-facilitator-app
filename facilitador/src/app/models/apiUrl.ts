
export class ApiUrl {

  public static URL_BASE: string = 'https://scheduling-facilitator-back-old-dream-4754.fly.dev'
  public static URL_IMAGE: string = 'https://edralivery-images.s3.amazonaws.com/criativoImg/'
  public static URL_VIDEO: string = 'https://edralivery-images.s3.amazonaws.com/'
  public static URL_FILE: string = 'https://edralivery-images.s3.amazonaws.com/criativoArquive/'

  // LOGIN
  public static LOGIN: string = this.URL_BASE + '/api/login';

  // USERS
  public static ADD_USER: string = this.URL_BASE + '/api/add/user';
  public static UPDATE_USER: string = this.URL_BASE + '/api/update/user/:id';
  public static UPDATE_TOKEN_PUSH: string = this.URL_BASE + '/api/users/update-token-push/:id';
  public static UPDATE_TOKEN_PUSH_WEB: string = this.URL_BASE + '/api/users/update-token-push-web/:id';
  public static UPDATE_PASSWORD: string = this.URL_BASE + '/api/changePass/user/:id';
  public static GET_USERS: string = this.URL_BASE + '/api/show/user';
  public static GET_USER_ID: string = this.URL_BASE + '/api/store/user/:id';
  public static DELETE_USER: string = this.URL_BASE + '/api/destroy/user/:id';
  public static ADD_ID_ONE_SIGNAL: string = this.URL_BASE + '/api/cadastrar/player/web'
  // PASSWORD RECOVERY
  public static SEND_EMAIL_CODE: string = this.URL_BASE + '/api/password/reset';
  public static RECOVERY_PASSWORD: string = this.URL_BASE + '/api/reset/password';

  // SEGMENTS
  public static ADD_SEGMENTS: string = this.URL_BASE + '/api/add/segments';
  public static UPDATE_SEGMENTS: string = this.URL_BASE + '/api/update/segments/:id';
  public static GET_SEGMENTS: string = this.URL_BASE + '/api/show/segments';
  public static GET_SEGMENTS_ID: string = this.URL_BASE + '/api/store/segments/:id';
  public static DELETE_SEGMENTS: string = this.URL_BASE + '/api/destroy/segments/:id';

  // PAYMENT
  public static LEAD: string = this.URL_BASE + '/api/lead';
  public static PAY_ROUTE: string = this.URL_BASE + '/api/users/pay';
  public static CREATE_CUSTOMER: string = this.URL_BASE + '/api/pay/createCustomer';
  public static CREATE_ORDER: string = this.URL_BASE + '/api/pay/createOrder';
  public static CREATE_PIX_PAYMENT: string = this.URL_BASE + '/api/pay/processPixPayment';
  public static CREATE_CARD_PAYMENT: string = this.URL_BASE + '/api/pay/CreditCardPayment';
  public static CREATE_SUCCESSFUL_PAYMENT: string = this.URL_BASE + '/api/pay/update_user_pay';

  // CEP
  public static VERIFY_CEP: string = 'https://viacep.com.br/ws/:cep/json/';

  // PLANS
  public static ADD_PLANS: string = this.URL_BASE + '/api/add/plans';
  public static UPDATE_PLANS: string = this.URL_BASE + '/api/update/plans/:id';
  public static GET_PLANS: string = this.URL_BASE + '/api/show/plans';
  public static GET_PLANS_ID: string = this.URL_BASE + '/api/store/plans/:id';
  public static DELETE_PLANS: string = this.URL_BASE + '/api/destroy/plans/:id';
  public static GET_INSTALLMENTS: string = this.URL_BASE + '/api/show/installments/plans/:id';

  // STICKER
  public static ADD_STICKER: string = this.URL_BASE + '/api/add/sticker';
  public static UPDATE_STICKER: string = this.URL_BASE + '/api/update/sticker/:id';
  // public static GET_STICKER: string = this.URL_BASE + '/api/show/sticker';
  public static GET_STICKER: string = this.URL_BASE + '/api/show/list/sticker';
  public static GET_STICKER_ID: string = this.URL_BASE + '/api/store/sticker/:id';
  public static DELETE_STICKER: string = this.URL_BASE + '/api/destroy/sticker/:id';

  // FAVORITE
  public static ADD_FAVORITE: string = this.URL_BASE + '/api/add/favorites';
  public static UPDATE_FAVORITE: string = this.URL_BASE + '/api/update/favorites/:id';
  public static GET_FAVORITE: string = this.URL_BASE + '/api/show/favorites';
  public static GET_FAVORITE_ID: string = this.URL_BASE + '/api/store/favorites/:id';
  public static DELETE_FAVORITE: string = this.URL_BASE + '/api/destroy/favorites/:id';
  public static GET_SEGMENT_FAVORITE: string = this.URL_BASE + '/api/favorites/segments';
  public static GET_STICKER_FAVORITE: string = this.URL_BASE + '/api/favorites/stickers';

  // TRAINING
  public static ADD_TRAINING: string = this.URL_BASE + '/api/add/trainings';
  public static UPDATE_TRAINING: string = this.URL_BASE + '/api/update/trainings/:id';
  public static GET_TRAINING: string = this.URL_BASE + '/api/show/trainings';
  public static GET_TRAINING_ID: string = this.URL_BASE + '/api/store/trainings/:id';
  public static DELETE_TRAINING: string = this.URL_BASE + '/api/destroy/trainings/:id';

  // BONUS
  public static ADD_BONUS: string = this.URL_BASE + '/api/add/bonus';
  public static UPDATE_BONUS: string = this.URL_BASE + '/api/update/bonus/:id';
  public static GET_BONUS: string = this.URL_BASE + '/api/show/bonus';
  public static GET_BONUS_ID: string = this.URL_BASE + '/api/store/bonus/:id';
  public static DELETE_BONUS: string = this.URL_BASE + '/api/destroy/bonus/:id';

  // BONUS VIDEO
  public static ADD_BONUS_VIDEO: string = this.URL_BASE + '/api/add/bonus_video';
  public static UPDATE_BONUS_VIDEO: string = this.URL_BASE + '/api/update/bonus_video/:id';
  public static GET_BONUS_VIDEO: string = this.URL_BASE + '/api/show/bonus_video';
  public static GET_BONUS_VIDEO_ID: string = this.URL_BASE + '/api/store/bonus_video/:id';
  public static DELETE_BONUS_VIDEO: string = this.URL_BASE + '/api/destroy/bonus_video/:id';

  // BONUS VIDEO FILE
  public static ADD_BONUS_VIDEO_FILE: string = this.URL_BASE + '/api/add/bonus_video_file';
  public static UPDATE_BONUS_VIDEO_FILE: string = this.URL_BASE + '/api/update/bonus_video_file/:id';
  public static GET_BONUS_VIDEO_FILE: string = this.URL_BASE + '/api/show/bonus_video_file';
  public static GET_BONUS_VIDEO_FILE_ID: string = this.URL_BASE + '/api/store/bonus_video_file/:id';
  public static DELETE_BONUS_VIDEO_FILE: string = this.URL_BASE + '/api/destroy/bonus_video_file/:id';


};

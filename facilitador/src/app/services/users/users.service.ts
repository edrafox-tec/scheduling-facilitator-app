import { Injectable } from '@angular/core';
import { userInterface } from 'src/app/models/interfaces';
import { ApiUrl } from './../../models/apiUrl';
import { FormDataUtil } from './../../utils/formData.util';
import { StringHelp } from './../../utils/string.help';
import { RequestService } from './../request/request.service';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private requestService: RequestService,
  ) { }


  public async getUser(): Promise<userInterface> {
    return await this.requestService
      .setHeaderToken()
      .post(
        ApiUrl.GET_USERS,
      );
  }


  public async setIdOneSignal(data:any){
    const formData = FormDataUtil.createFormData([data]);
    return await this.requestService.setHeaderToken().post(ApiUrl.ADD_ID_ONE_SIGNAL,[formData])
  }

  public async getUserId(id: any) {
    return await this.requestService
      .setHeaderToken()
      .post(StringHelp.replaceParametersWithValue(ApiUrl.GET_USER_ID, [
        { id: id },
      ]),);
  }

  public async deleteUser(id: any) {
    return await this.requestService
      .setHeaderToken()
      .post(StringHelp.replaceParametersWithValue(ApiUrl.DELETE_USER, [
        { id: id },
      ]),);
  }

  public async createUser(data: any): Promise<userInterface> {
    const formData = FormDataUtil.createFormData([data]);
    return await this.requestService
      .setHeaderToken()
      .post(ApiUrl.ADD_USER, formData);
  }


  public async updateUser(data: any, id: any) {
    const formData = FormDataUtil.createFormData([data]);
    return await this.requestService
      .setHeaderToken()
      .post(StringHelp.replaceParametersWithValue(ApiUrl.UPDATE_USER, [
        { id: id },
      ]), formData);
  }

  public async updateTokenPush(data: any, id: any) {
    const formData = FormDataUtil.createFormData([data]);
    return await this.requestService
      .setHeaderToken()
      .post(StringHelp.replaceParametersWithValue(ApiUrl.UPDATE_TOKEN_PUSH, [
        { id: id },
      ]), formData);
  }

  public async updateTokenPushWeb(data: any, id: any) {
    const formData = FormDataUtil.createFormData([data]);
    return await this.requestService
      .setHeaderToken()
      .post(StringHelp.replaceParametersWithValue(ApiUrl.UPDATE_TOKEN_PUSH_WEB, [
        { id: id },
      ]), formData);
  }

  public async updatePassword(data: any, id: any) {
    const formData = FormDataUtil.createFormData([data]);
    return await this.requestService
      .setHeaderToken()
      .post(StringHelp.replaceParametersWithValue(ApiUrl.UPDATE_PASSWORD, [
        { id: id },
      ]), formData);
  }
}

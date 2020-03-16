// package: standard
// file: protos/account.proto

import * as jspb from 'google-protobuf';

export class Group extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getCategory(): string;
  setCategory(value: string): void;

  getState(): string;
  setState(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getCreatedtime(): string;
  setCreatedtime(value: string): void;

  getUpdatedtime(): string;
  setUpdatedtime(value: string): void;

  getDeletedtime(): string;
  setDeletedtime(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Group.AsObject;
  static toObject(includeInstance: boolean, msg: Group): Group.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Group, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Group;
  static deserializeBinaryFromReader(message: Group, reader: jspb.BinaryReader): Group;
}

export namespace Group {
  export type AsObject = {
    id: number,
    name: string,
    category: string,
    state: string,
    description: string,
    createdtime: string,
    updatedtime: string,
    deletedtime: string,
  }
}

export class Label extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getCategory(): string;
  setCategory(value: string): void;

  getState(): string;
  setState(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  getCreatedtime(): string;
  setCreatedtime(value: string): void;

  getUpdatedtime(): string;
  setUpdatedtime(value: string): void;

  getDeletedtime(): string;
  setDeletedtime(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Label.AsObject;
  static toObject(includeInstance: boolean, msg: Label): Label.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Label, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Label;
  static deserializeBinaryFromReader(message: Label, reader: jspb.BinaryReader): Label;
}

export namespace Label {
  export type AsObject = {
    id: number,
    name: string,
    category: string,
    state: string,
    value: string,
    createdtime: string,
    updatedtime: string,
    deletedtime: string,
  }
}

export class User extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getCategory(): string;
  setCategory(value: string): void;

  getAvatar(): string;
  setAvatar(value: string): void;

  getInviter(): number;
  setInviter(value: number): void;

  getNickname(): string;
  setNickname(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getCreatedtime(): string;
  setCreatedtime(value: string): void;

  getUpdatedtime(): string;
  setUpdatedtime(value: string): void;

  getDeletedtime(): string;
  setDeletedtime(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: number,
    category: string,
    avatar: string,
    inviter: number,
    nickname: string,
    username: string,
    password: string,
    createdtime: string,
    updatedtime: string,
    deletedtime: string,
  }
}

export class CreateUserRequest extends jspb.Message {
  getCategory(): string;
  setCategory(value: string): void;

  getInviter(): number;
  setInviter(value: number): void;

  getNickname(): string;
  setNickname(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserRequest): CreateUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserRequest;
  static deserializeBinaryFromReader(message: CreateUserRequest, reader: jspb.BinaryReader): CreateUserRequest;
}

export namespace CreateUserRequest {
  export type AsObject = {
    category: string,
    inviter: number,
    nickname: string,
    username: string,
    password: string,
  }
}

export class CreateUserResponse extends jspb.Message {
  getState(): State;
  setState(value: State): void;

  getMessage(): string;
  setMessage(value: string): void;

  hasData(): boolean;
  clearData(): void;
  getData(): User | undefined;
  setData(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserResponse): CreateUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserResponse;
  static deserializeBinaryFromReader(message: CreateUserResponse, reader: jspb.BinaryReader): CreateUserResponse;
}

export namespace CreateUserResponse {
  export type AsObject = {
    state: State,
    message: string,
    data?: User.AsObject,
  }
}

export class QueryUsersRequest extends jspb.Message {
  getPage(): number;
  setPage(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryUsersRequest): QueryUsersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryUsersRequest;
  static deserializeBinaryFromReader(message: QueryUsersRequest, reader: jspb.BinaryReader): QueryUsersRequest;
}

export namespace QueryUsersRequest {
  export type AsObject = {
    page: number,
    limit: number,
  }
}

export class QueryUsersResponse extends jspb.Message {
  getState(): State;
  setState(value: State): void;

  getMessage(): string;
  setMessage(value: string): void;

  getTotalpage(): number;
  setTotalpage(value: number): void;

  getCurrentpage(): number;
  setCurrentpage(value: number): void;

  clearDataList(): void;
  getDataList(): Array<User>;
  setDataList(value: Array<User>): void;
  addData(value?: User, index?: number): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryUsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryUsersResponse): QueryUsersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryUsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryUsersResponse;
  static deserializeBinaryFromReader(message: QueryUsersResponse, reader: jspb.BinaryReader): QueryUsersResponse;
}

export namespace QueryUsersResponse {
  export type AsObject = {
    state: State,
    message: string,
    totalpage: number,
    currentpage: number,
    dataList: Array<User.AsObject>,
  }
}

export class QueryUserByIDRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryUserByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryUserByIDRequest): QueryUserByIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryUserByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryUserByIDRequest;
  static deserializeBinaryFromReader(message: QueryUserByIDRequest, reader: jspb.BinaryReader): QueryUserByIDRequest;
}

export namespace QueryUserByIDRequest {
  export type AsObject = {
    id: number,
  }
}

export class QueryUserByIDResponse extends jspb.Message {
  getState(): State;
  setState(value: State): void;

  getMessage(): string;
  setMessage(value: string): void;

  hasData(): boolean;
  clearData(): void;
  getData(): User | undefined;
  setData(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryUserByIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryUserByIDResponse): QueryUserByIDResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryUserByIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryUserByIDResponse;
  static deserializeBinaryFromReader(message: QueryUserByIDResponse, reader: jspb.BinaryReader): QueryUserByIDResponse;
}

export namespace QueryUserByIDResponse {
  export type AsObject = {
    state: State,
    message: string,
    data?: User.AsObject,
  }
}

export class QueryUsersByInviterRequest extends jspb.Message {
  getInviter(): number;
  setInviter(value: number): void;

  getPage(): number;
  setPage(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryUsersByInviterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryUsersByInviterRequest): QueryUsersByInviterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryUsersByInviterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryUsersByInviterRequest;
  static deserializeBinaryFromReader(message: QueryUsersByInviterRequest, reader: jspb.BinaryReader): QueryUsersByInviterRequest;
}

export namespace QueryUsersByInviterRequest {
  export type AsObject = {
    inviter: number,
    page: number,
    limit: number,
  }
}

export class QueryUsersByInviterResponse extends jspb.Message {
  getState(): State;
  setState(value: State): void;

  getMessage(): string;
  setMessage(value: string): void;

  getTotalpage(): number;
  setTotalpage(value: number): void;

  getCurrentpage(): number;
  setCurrentpage(value: number): void;

  clearDataList(): void;
  getDataList(): Array<User>;
  setDataList(value: Array<User>): void;
  addData(value?: User, index?: number): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryUsersByInviterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryUsersByInviterResponse): QueryUsersByInviterResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryUsersByInviterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryUsersByInviterResponse;
  static deserializeBinaryFromReader(message: QueryUsersByInviterResponse, reader: jspb.BinaryReader): QueryUsersByInviterResponse;
}

export namespace QueryUsersByInviterResponse {
  export type AsObject = {
    state: State,
    message: string,
    totalpage: number,
    currentpage: number,
    dataList: Array<User.AsObject>,
  }
}

export class QueryUserByUsernameRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryUserByUsernameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryUserByUsernameRequest): QueryUserByUsernameRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryUserByUsernameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryUserByUsernameRequest;
  static deserializeBinaryFromReader(message: QueryUserByUsernameRequest, reader: jspb.BinaryReader): QueryUserByUsernameRequest;
}

export namespace QueryUserByUsernameRequest {
  export type AsObject = {
    username: string,
  }
}

export class QueryUserByUsernameResponse extends jspb.Message {
  getState(): State;
  setState(value: State): void;

  getMessage(): string;
  setMessage(value: string): void;

  hasData(): boolean;
  clearData(): void;
  getData(): User | undefined;
  setData(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryUserByUsernameResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryUserByUsernameResponse): QueryUserByUsernameResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryUserByUsernameResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryUserByUsernameResponse;
  static deserializeBinaryFromReader(message: QueryUserByUsernameResponse, reader: jspb.BinaryReader): QueryUserByUsernameResponse;
}

export namespace QueryUserByUsernameResponse {
  export type AsObject = {
    state: State,
    message: string,
    data?: User.AsObject,
  }
}

export class DeleteUserByIDRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserByIDRequest): DeleteUserByIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteUserByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserByIDRequest;
  static deserializeBinaryFromReader(message: DeleteUserByIDRequest, reader: jspb.BinaryReader): DeleteUserByIDRequest;
}

export namespace DeleteUserByIDRequest {
  export type AsObject = {
    id: number,
  }
}

export class DeleteUserByIDResponse extends jspb.Message {
  getState(): State;
  setState(value: State): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserByIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserByIDResponse): DeleteUserByIDResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteUserByIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserByIDResponse;
  static deserializeBinaryFromReader(message: DeleteUserByIDResponse, reader: jspb.BinaryReader): DeleteUserByIDResponse;
}

export namespace DeleteUserByIDResponse {
  export type AsObject = {
    state: State,
    message: string,
  }
}

export class UpdateUserCategoryByIDRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getCategory(): string;
  setCategory(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserCategoryByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserCategoryByIDRequest): UpdateUserCategoryByIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserCategoryByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserCategoryByIDRequest;
  static deserializeBinaryFromReader(message: UpdateUserCategoryByIDRequest, reader: jspb.BinaryReader): UpdateUserCategoryByIDRequest;
}

export namespace UpdateUserCategoryByIDRequest {
  export type AsObject = {
    id: number,
    category: string,
  }
}

export class UpdateUserCategoryByIDResponse extends jspb.Message {
  getState(): State;
  setState(value: State): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserCategoryByIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserCategoryByIDResponse): UpdateUserCategoryByIDResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserCategoryByIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserCategoryByIDResponse;
  static deserializeBinaryFromReader(message: UpdateUserCategoryByIDResponse, reader: jspb.BinaryReader): UpdateUserCategoryByIDResponse;
}

export namespace UpdateUserCategoryByIDResponse {
  export type AsObject = {
    state: State,
    message: string,
  }
}

export class UpdateUserAvatarByIDRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getAvatar(): string;
  setAvatar(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserAvatarByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserAvatarByIDRequest): UpdateUserAvatarByIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserAvatarByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserAvatarByIDRequest;
  static deserializeBinaryFromReader(message: UpdateUserAvatarByIDRequest, reader: jspb.BinaryReader): UpdateUserAvatarByIDRequest;
}

export namespace UpdateUserAvatarByIDRequest {
  export type AsObject = {
    id: number,
    avatar: string,
  }
}

export class UpdateUserAvatarByIDResponse extends jspb.Message {
  getState(): State;
  setState(value: State): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserAvatarByIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserAvatarByIDResponse): UpdateUserAvatarByIDResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserAvatarByIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserAvatarByIDResponse;
  static deserializeBinaryFromReader(message: UpdateUserAvatarByIDResponse, reader: jspb.BinaryReader): UpdateUserAvatarByIDResponse;
}

export namespace UpdateUserAvatarByIDResponse {
  export type AsObject = {
    state: State,
    message: string,
  }
}

export class UpdateUserInviterByIDRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getInviter(): number;
  setInviter(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserInviterByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserInviterByIDRequest): UpdateUserInviterByIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserInviterByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserInviterByIDRequest;
  static deserializeBinaryFromReader(message: UpdateUserInviterByIDRequest, reader: jspb.BinaryReader): UpdateUserInviterByIDRequest;
}

export namespace UpdateUserInviterByIDRequest {
  export type AsObject = {
    id: number,
    inviter: number,
  }
}

export class UpdateUserInviterByIDResponse extends jspb.Message {
  getState(): State;
  setState(value: State): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserInviterByIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserInviterByIDResponse): UpdateUserInviterByIDResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserInviterByIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserInviterByIDResponse;
  static deserializeBinaryFromReader(message: UpdateUserInviterByIDResponse, reader: jspb.BinaryReader): UpdateUserInviterByIDResponse;
}

export namespace UpdateUserInviterByIDResponse {
  export type AsObject = {
    state: State,
    message: string,
  }
}

export class UpdateUserNicknameByIDRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getNickname(): string;
  setNickname(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserNicknameByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserNicknameByIDRequest): UpdateUserNicknameByIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserNicknameByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserNicknameByIDRequest;
  static deserializeBinaryFromReader(message: UpdateUserNicknameByIDRequest, reader: jspb.BinaryReader): UpdateUserNicknameByIDRequest;
}

export namespace UpdateUserNicknameByIDRequest {
  export type AsObject = {
    id: number,
    nickname: string,
  }
}

export class UpdateUserNicknameByIDResponse extends jspb.Message {
  getState(): State;
  setState(value: State): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserNicknameByIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserNicknameByIDResponse): UpdateUserNicknameByIDResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserNicknameByIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserNicknameByIDResponse;
  static deserializeBinaryFromReader(message: UpdateUserNicknameByIDResponse, reader: jspb.BinaryReader): UpdateUserNicknameByIDResponse;
}

export namespace UpdateUserNicknameByIDResponse {
  export type AsObject = {
    state: State,
    message: string,
  }
}

export class UpdateUserPasswordByIDRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserPasswordByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserPasswordByIDRequest): UpdateUserPasswordByIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserPasswordByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserPasswordByIDRequest;
  static deserializeBinaryFromReader(message: UpdateUserPasswordByIDRequest, reader: jspb.BinaryReader): UpdateUserPasswordByIDRequest;
}

export namespace UpdateUserPasswordByIDRequest {
  export type AsObject = {
    id: number,
    password: string,
  }
}

export class UpdateUserPasswordByIDResponse extends jspb.Message {
  getState(): State;
  setState(value: State): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserPasswordByIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserPasswordByIDResponse): UpdateUserPasswordByIDResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserPasswordByIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserPasswordByIDResponse;
  static deserializeBinaryFromReader(message: UpdateUserPasswordByIDResponse, reader: jspb.BinaryReader): UpdateUserPasswordByIDResponse;
}

export namespace UpdateUserPasswordByIDResponse {
  export type AsObject = {
    state: State,
    message: string,
  }
}

export class VerifyUserPasswordByIDRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyUserPasswordByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyUserPasswordByIDRequest): VerifyUserPasswordByIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerifyUserPasswordByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyUserPasswordByIDRequest;
  static deserializeBinaryFromReader(message: VerifyUserPasswordByIDRequest, reader: jspb.BinaryReader): VerifyUserPasswordByIDRequest;
}

export namespace VerifyUserPasswordByIDRequest {
  export type AsObject = {
    id: number,
    password: string,
  }
}

export class VerifyUserPasswordByIDResponse extends jspb.Message {
  getState(): State;
  setState(value: State): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyUserPasswordByIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyUserPasswordByIDResponse): VerifyUserPasswordByIDResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerifyUserPasswordByIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyUserPasswordByIDResponse;
  static deserializeBinaryFromReader(message: VerifyUserPasswordByIDResponse, reader: jspb.BinaryReader): VerifyUserPasswordByIDResponse;
}

export namespace VerifyUserPasswordByIDResponse {
  export type AsObject = {
    state: State,
    message: string,
  }
}

export class VerifyUserPasswordByUsernameRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyUserPasswordByUsernameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyUserPasswordByUsernameRequest): VerifyUserPasswordByUsernameRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerifyUserPasswordByUsernameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyUserPasswordByUsernameRequest;
  static deserializeBinaryFromReader(message: VerifyUserPasswordByUsernameRequest, reader: jspb.BinaryReader): VerifyUserPasswordByUsernameRequest;
}

export namespace VerifyUserPasswordByUsernameRequest {
  export type AsObject = {
    username: string,
    password: string,
  }
}

export class VerifyUserPasswordByUsernameResponse extends jspb.Message {
  getState(): State;
  setState(value: State): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyUserPasswordByUsernameResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyUserPasswordByUsernameResponse): VerifyUserPasswordByUsernameResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerifyUserPasswordByUsernameResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyUserPasswordByUsernameResponse;
  static deserializeBinaryFromReader(message: VerifyUserPasswordByUsernameResponse, reader: jspb.BinaryReader): VerifyUserPasswordByUsernameResponse;
}

export namespace VerifyUserPasswordByUsernameResponse {
  export type AsObject = {
    state: State,
    message: string,
  }
}

export class CreateLabelRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getCategory(): string;
  setCategory(value: string): void;

  getState(): string;
  setState(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLabelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLabelRequest): CreateLabelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateLabelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLabelRequest;
  static deserializeBinaryFromReader(message: CreateLabelRequest, reader: jspb.BinaryReader): CreateLabelRequest;
}

export namespace CreateLabelRequest {
  export type AsObject = {
    name: string,
    category: string,
    state: string,
    value: string,
  }
}

export class CreateLabelResponse extends jspb.Message {
  getState(): State;
  setState(value: State): void;

  getMessage(): string;
  setMessage(value: string): void;

  hasData(): boolean;
  clearData(): void;
  getData(): Label | undefined;
  setData(value?: Label): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLabelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLabelResponse): CreateLabelResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateLabelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLabelResponse;
  static deserializeBinaryFromReader(message: CreateLabelResponse, reader: jspb.BinaryReader): CreateLabelResponse;
}

export namespace CreateLabelResponse {
  export type AsObject = {
    state: State,
    message: string,
    data?: Label.AsObject,
  }
}

export class CreateLabelForUserRequest extends jspb.Message {
  getUserid(): number;
  setUserid(value: number): void;

  getName(): string;
  setName(value: string): void;

  getCategory(): string;
  setCategory(value: string): void;

  getState(): string;
  setState(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLabelForUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLabelForUserRequest): CreateLabelForUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateLabelForUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLabelForUserRequest;
  static deserializeBinaryFromReader(message: CreateLabelForUserRequest, reader: jspb.BinaryReader): CreateLabelForUserRequest;
}

export namespace CreateLabelForUserRequest {
  export type AsObject = {
    userid: number,
    name: string,
    category: string,
    state: string,
    value: string,
  }
}

export class CreateLabelForUserResponse extends jspb.Message {
  getState(): State;
  setState(value: State): void;

  getMessage(): string;
  setMessage(value: string): void;

  hasData(): boolean;
  clearData(): void;
  getData(): Label | undefined;
  setData(value?: Label): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLabelForUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLabelForUserResponse): CreateLabelForUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateLabelForUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLabelForUserResponse;
  static deserializeBinaryFromReader(message: CreateLabelForUserResponse, reader: jspb.BinaryReader): CreateLabelForUserResponse;
}

export namespace CreateLabelForUserResponse {
  export type AsObject = {
    state: State,
    message: string,
    data?: Label.AsObject,
  }
}

export class QueryLabelsRequest extends jspb.Message {
  getPage(): number;
  setPage(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryLabelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryLabelsRequest): QueryLabelsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryLabelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryLabelsRequest;
  static deserializeBinaryFromReader(message: QueryLabelsRequest, reader: jspb.BinaryReader): QueryLabelsRequest;
}

export namespace QueryLabelsRequest {
  export type AsObject = {
    page: number,
    limit: number,
  }
}

export class QueryLabelsResponse extends jspb.Message {
  getState(): State;
  setState(value: State): void;

  getMessage(): string;
  setMessage(value: string): void;

  getTotalpage(): number;
  setTotalpage(value: number): void;

  getCurrentpage(): number;
  setCurrentpage(value: number): void;

  clearDataList(): void;
  getDataList(): Array<Label>;
  setDataList(value: Array<Label>): void;
  addData(value?: Label, index?: number): Label;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryLabelsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryLabelsResponse): QueryLabelsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryLabelsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryLabelsResponse;
  static deserializeBinaryFromReader(message: QueryLabelsResponse, reader: jspb.BinaryReader): QueryLabelsResponse;
}

export namespace QueryLabelsResponse {
  export type AsObject = {
    state: State,
    message: string,
    totalpage: number,
    currentpage: number,
    dataList: Array<Label.AsObject>,
  }
}

export class QueryLabelByIDRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryLabelByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryLabelByIDRequest): QueryLabelByIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryLabelByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryLabelByIDRequest;
  static deserializeBinaryFromReader(message: QueryLabelByIDRequest, reader: jspb.BinaryReader): QueryLabelByIDRequest;
}

export namespace QueryLabelByIDRequest {
  export type AsObject = {
    id: number,
  }
}

export class QueryLabelByIDResponse extends jspb.Message {
  getState(): State;
  setState(value: State): void;

  getMessage(): string;
  setMessage(value: string): void;

  hasData(): boolean;
  clearData(): void;
  getData(): Label | undefined;
  setData(value?: Label): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryLabelByIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryLabelByIDResponse): QueryLabelByIDResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryLabelByIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryLabelByIDResponse;
  static deserializeBinaryFromReader(message: QueryLabelByIDResponse, reader: jspb.BinaryReader): QueryLabelByIDResponse;
}

export namespace QueryLabelByIDResponse {
  export type AsObject = {
    state: State,
    message: string,
    data?: Label.AsObject,
  }
}

export class UpdateLabelNameByIDRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLabelNameByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLabelNameByIDRequest): UpdateLabelNameByIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateLabelNameByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLabelNameByIDRequest;
  static deserializeBinaryFromReader(message: UpdateLabelNameByIDRequest, reader: jspb.BinaryReader): UpdateLabelNameByIDRequest;
}

export namespace UpdateLabelNameByIDRequest {
  export type AsObject = {
    id: number,
    name: string,
  }
}

export class UpdateLabelNameByIDResponse extends jspb.Message {
  getState(): State;
  setState(value: State): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLabelNameByIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLabelNameByIDResponse): UpdateLabelNameByIDResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateLabelNameByIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLabelNameByIDResponse;
  static deserializeBinaryFromReader(message: UpdateLabelNameByIDResponse, reader: jspb.BinaryReader): UpdateLabelNameByIDResponse;
}

export namespace UpdateLabelNameByIDResponse {
  export type AsObject = {
    state: State,
    message: string,
  }
}

export class UpdateLabelCategoryByIDRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getCategory(): string;
  setCategory(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLabelCategoryByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLabelCategoryByIDRequest): UpdateLabelCategoryByIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateLabelCategoryByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLabelCategoryByIDRequest;
  static deserializeBinaryFromReader(message: UpdateLabelCategoryByIDRequest, reader: jspb.BinaryReader): UpdateLabelCategoryByIDRequest;
}

export namespace UpdateLabelCategoryByIDRequest {
  export type AsObject = {
    id: number,
    category: string,
  }
}

export class UpdateLabelCategoryByIDResponse extends jspb.Message {
  getState(): State;
  setState(value: State): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLabelCategoryByIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLabelCategoryByIDResponse): UpdateLabelCategoryByIDResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateLabelCategoryByIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLabelCategoryByIDResponse;
  static deserializeBinaryFromReader(message: UpdateLabelCategoryByIDResponse, reader: jspb.BinaryReader): UpdateLabelCategoryByIDResponse;
}

export namespace UpdateLabelCategoryByIDResponse {
  export type AsObject = {
    state: State,
    message: string,
  }
}

export class UpdateLabelStateByIDRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getState(): string;
  setState(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLabelStateByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLabelStateByIDRequest): UpdateLabelStateByIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateLabelStateByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLabelStateByIDRequest;
  static deserializeBinaryFromReader(message: UpdateLabelStateByIDRequest, reader: jspb.BinaryReader): UpdateLabelStateByIDRequest;
}

export namespace UpdateLabelStateByIDRequest {
  export type AsObject = {
    id: number,
    state: string,
  }
}

export class UpdateLabelStateByIDResponse extends jspb.Message {
  getState(): State;
  setState(value: State): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLabelStateByIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLabelStateByIDResponse): UpdateLabelStateByIDResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateLabelStateByIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLabelStateByIDResponse;
  static deserializeBinaryFromReader(message: UpdateLabelStateByIDResponse, reader: jspb.BinaryReader): UpdateLabelStateByIDResponse;
}

export namespace UpdateLabelStateByIDResponse {
  export type AsObject = {
    state: State,
    message: string,
  }
}

export class UpdateLabelValueByIDRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLabelValueByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLabelValueByIDRequest): UpdateLabelValueByIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateLabelValueByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLabelValueByIDRequest;
  static deserializeBinaryFromReader(message: UpdateLabelValueByIDRequest, reader: jspb.BinaryReader): UpdateLabelValueByIDRequest;
}

export namespace UpdateLabelValueByIDRequest {
  export type AsObject = {
    id: number,
    value: string,
  }
}

export class UpdateLabelValueByIDResponse extends jspb.Message {
  getState(): State;
  setState(value: State): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLabelValueByIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLabelValueByIDResponse): UpdateLabelValueByIDResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateLabelValueByIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLabelValueByIDResponse;
  static deserializeBinaryFromReader(message: UpdateLabelValueByIDResponse, reader: jspb.BinaryReader): UpdateLabelValueByIDResponse;
}

export namespace UpdateLabelValueByIDResponse {
  export type AsObject = {
    state: State,
    message: string,
  }
}

export class DeleteLabelByIDRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLabelByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLabelByIDRequest): DeleteLabelByIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteLabelByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLabelByIDRequest;
  static deserializeBinaryFromReader(message: DeleteLabelByIDRequest, reader: jspb.BinaryReader): DeleteLabelByIDRequest;
}

export namespace DeleteLabelByIDRequest {
  export type AsObject = {
    id: number,
  }
}

export class DeleteLabelByIDResponse extends jspb.Message {
  getState(): State;
  setState(value: State): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLabelByIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLabelByIDResponse): DeleteLabelByIDResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteLabelByIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLabelByIDResponse;
  static deserializeBinaryFromReader(message: DeleteLabelByIDResponse, reader: jspb.BinaryReader): DeleteLabelByIDResponse;
}

export namespace DeleteLabelByIDResponse {
  export type AsObject = {
    state: State,
    message: string,
  }
}

export class AddLabelToUserByIDRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getUserid(): number;
  setUserid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddLabelToUserByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddLabelToUserByIDRequest): AddLabelToUserByIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddLabelToUserByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddLabelToUserByIDRequest;
  static deserializeBinaryFromReader(message: AddLabelToUserByIDRequest, reader: jspb.BinaryReader): AddLabelToUserByIDRequest;
}

export namespace AddLabelToUserByIDRequest {
  export type AsObject = {
    id: number,
    userid: number,
  }
}

export class AddLabelToUserByIDResponse extends jspb.Message {
  getState(): State;
  setState(value: State): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddLabelToUserByIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddLabelToUserByIDResponse): AddLabelToUserByIDResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddLabelToUserByIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddLabelToUserByIDResponse;
  static deserializeBinaryFromReader(message: AddLabelToUserByIDResponse, reader: jspb.BinaryReader): AddLabelToUserByIDResponse;
}

export namespace AddLabelToUserByIDResponse {
  export type AsObject = {
    state: State,
    message: string,
  }
}

export class RemoveLabelFromUserByIDRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getLabelid(): number;
  setLabelid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveLabelFromUserByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveLabelFromUserByIDRequest): RemoveLabelFromUserByIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveLabelFromUserByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveLabelFromUserByIDRequest;
  static deserializeBinaryFromReader(message: RemoveLabelFromUserByIDRequest, reader: jspb.BinaryReader): RemoveLabelFromUserByIDRequest;
}

export namespace RemoveLabelFromUserByIDRequest {
  export type AsObject = {
    id: number,
    labelid: number,
  }
}

export class RemoveLabelFromUserByIDResponse extends jspb.Message {
  getState(): State;
  setState(value: State): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveLabelFromUserByIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveLabelFromUserByIDResponse): RemoveLabelFromUserByIDResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveLabelFromUserByIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveLabelFromUserByIDResponse;
  static deserializeBinaryFromReader(message: RemoveLabelFromUserByIDResponse, reader: jspb.BinaryReader): RemoveLabelFromUserByIDResponse;
}

export namespace RemoveLabelFromUserByIDResponse {
  export type AsObject = {
    state: State,
    message: string,
  }
}

export class CreateGroupRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getCategory(): string;
  setCategory(value: string): void;

  getState(): string;
  setState(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateGroupRequest): CreateGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateGroupRequest;
  static deserializeBinaryFromReader(message: CreateGroupRequest, reader: jspb.BinaryReader): CreateGroupRequest;
}

export namespace CreateGroupRequest {
  export type AsObject = {
    name: string,
    category: string,
    state: string,
    description: string,
  }
}

export class CreateGroupResponse extends jspb.Message {
  getState(): State;
  setState(value: State): void;

  getMessage(): string;
  setMessage(value: string): void;

  hasData(): boolean;
  clearData(): void;
  getData(): Group | undefined;
  setData(value?: Group): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateGroupResponse): CreateGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateGroupResponse;
  static deserializeBinaryFromReader(message: CreateGroupResponse, reader: jspb.BinaryReader): CreateGroupResponse;
}

export namespace CreateGroupResponse {
  export type AsObject = {
    state: State,
    message: string,
    data?: Group.AsObject,
  }
}

export class QueryGroupsRequest extends jspb.Message {
  getPage(): number;
  setPage(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryGroupsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryGroupsRequest): QueryGroupsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryGroupsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryGroupsRequest;
  static deserializeBinaryFromReader(message: QueryGroupsRequest, reader: jspb.BinaryReader): QueryGroupsRequest;
}

export namespace QueryGroupsRequest {
  export type AsObject = {
    page: number,
    limit: number,
  }
}

export class QueryGroupsResponse extends jspb.Message {
  getState(): State;
  setState(value: State): void;

  getMessage(): string;
  setMessage(value: string): void;

  getTotalpage(): number;
  setTotalpage(value: number): void;

  getCurrentpage(): number;
  setCurrentpage(value: number): void;

  clearDataList(): void;
  getDataList(): Array<Group>;
  setDataList(value: Array<Group>): void;
  addData(value?: Group, index?: number): Group;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryGroupsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryGroupsResponse): QueryGroupsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryGroupsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryGroupsResponse;
  static deserializeBinaryFromReader(message: QueryGroupsResponse, reader: jspb.BinaryReader): QueryGroupsResponse;
}

export namespace QueryGroupsResponse {
  export type AsObject = {
    state: State,
    message: string,
    totalpage: number,
    currentpage: number,
    dataList: Array<Group.AsObject>,
  }
}

export class QueryGroupByIDRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryGroupByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryGroupByIDRequest): QueryGroupByIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryGroupByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryGroupByIDRequest;
  static deserializeBinaryFromReader(message: QueryGroupByIDRequest, reader: jspb.BinaryReader): QueryGroupByIDRequest;
}

export namespace QueryGroupByIDRequest {
  export type AsObject = {
    id: number,
  }
}

export class QueryGroupByIDResponse extends jspb.Message {
  getState(): State;
  setState(value: State): void;

  getMessage(): string;
  setMessage(value: string): void;

  hasData(): boolean;
  clearData(): void;
  getData(): Group | undefined;
  setData(value?: Group): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryGroupByIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryGroupByIDResponse): QueryGroupByIDResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryGroupByIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryGroupByIDResponse;
  static deserializeBinaryFromReader(message: QueryGroupByIDResponse, reader: jspb.BinaryReader): QueryGroupByIDResponse;
}

export namespace QueryGroupByIDResponse {
  export type AsObject = {
    state: State,
    message: string,
    data?: Group.AsObject,
  }
}

export class UpdateGroupNameByIDRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateGroupNameByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateGroupNameByIDRequest): UpdateGroupNameByIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateGroupNameByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateGroupNameByIDRequest;
  static deserializeBinaryFromReader(message: UpdateGroupNameByIDRequest, reader: jspb.BinaryReader): UpdateGroupNameByIDRequest;
}

export namespace UpdateGroupNameByIDRequest {
  export type AsObject = {
    id: number,
    name: string,
  }
}

export class UpdateGroupNameByIDResponse extends jspb.Message {
  getState(): State;
  setState(value: State): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateGroupNameByIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateGroupNameByIDResponse): UpdateGroupNameByIDResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateGroupNameByIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateGroupNameByIDResponse;
  static deserializeBinaryFromReader(message: UpdateGroupNameByIDResponse, reader: jspb.BinaryReader): UpdateGroupNameByIDResponse;
}

export namespace UpdateGroupNameByIDResponse {
  export type AsObject = {
    state: State,
    message: string,
  }
}

export class UpdateGroupCategoryByIDRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getCategory(): string;
  setCategory(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateGroupCategoryByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateGroupCategoryByIDRequest): UpdateGroupCategoryByIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateGroupCategoryByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateGroupCategoryByIDRequest;
  static deserializeBinaryFromReader(message: UpdateGroupCategoryByIDRequest, reader: jspb.BinaryReader): UpdateGroupCategoryByIDRequest;
}

export namespace UpdateGroupCategoryByIDRequest {
  export type AsObject = {
    id: number,
    category: string,
  }
}

export class UpdateGroupCategoryByIDResponse extends jspb.Message {
  getState(): State;
  setState(value: State): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateGroupCategoryByIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateGroupCategoryByIDResponse): UpdateGroupCategoryByIDResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateGroupCategoryByIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateGroupCategoryByIDResponse;
  static deserializeBinaryFromReader(message: UpdateGroupCategoryByIDResponse, reader: jspb.BinaryReader): UpdateGroupCategoryByIDResponse;
}

export namespace UpdateGroupCategoryByIDResponse {
  export type AsObject = {
    state: State,
    message: string,
  }
}

export class UpdateGroupStateByIDRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getState(): string;
  setState(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateGroupStateByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateGroupStateByIDRequest): UpdateGroupStateByIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateGroupStateByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateGroupStateByIDRequest;
  static deserializeBinaryFromReader(message: UpdateGroupStateByIDRequest, reader: jspb.BinaryReader): UpdateGroupStateByIDRequest;
}

export namespace UpdateGroupStateByIDRequest {
  export type AsObject = {
    id: number,
    state: string,
  }
}

export class UpdateGroupStateByIDResponse extends jspb.Message {
  getState(): State;
  setState(value: State): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateGroupStateByIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateGroupStateByIDResponse): UpdateGroupStateByIDResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateGroupStateByIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateGroupStateByIDResponse;
  static deserializeBinaryFromReader(message: UpdateGroupStateByIDResponse, reader: jspb.BinaryReader): UpdateGroupStateByIDResponse;
}

export namespace UpdateGroupStateByIDResponse {
  export type AsObject = {
    state: State,
    message: string,
  }
}

export class UpdateGroupDescriptionByIDRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateGroupDescriptionByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateGroupDescriptionByIDRequest): UpdateGroupDescriptionByIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateGroupDescriptionByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateGroupDescriptionByIDRequest;
  static deserializeBinaryFromReader(message: UpdateGroupDescriptionByIDRequest, reader: jspb.BinaryReader): UpdateGroupDescriptionByIDRequest;
}

export namespace UpdateGroupDescriptionByIDRequest {
  export type AsObject = {
    id: number,
    description: string,
  }
}

export class UpdateGroupDescriptionByIDResponse extends jspb.Message {
  getState(): State;
  setState(value: State): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateGroupDescriptionByIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateGroupDescriptionByIDResponse): UpdateGroupDescriptionByIDResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateGroupDescriptionByIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateGroupDescriptionByIDResponse;
  static deserializeBinaryFromReader(message: UpdateGroupDescriptionByIDResponse, reader: jspb.BinaryReader): UpdateGroupDescriptionByIDResponse;
}

export namespace UpdateGroupDescriptionByIDResponse {
  export type AsObject = {
    state: State,
    message: string,
  }
}

export class DeleteGroupByIDRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteGroupByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteGroupByIDRequest): DeleteGroupByIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteGroupByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteGroupByIDRequest;
  static deserializeBinaryFromReader(message: DeleteGroupByIDRequest, reader: jspb.BinaryReader): DeleteGroupByIDRequest;
}

export namespace DeleteGroupByIDRequest {
  export type AsObject = {
    id: number,
  }
}

export class DeleteGroupByIDResponse extends jspb.Message {
  getState(): State;
  setState(value: State): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteGroupByIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteGroupByIDResponse): DeleteGroupByIDResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteGroupByIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteGroupByIDResponse;
  static deserializeBinaryFromReader(message: DeleteGroupByIDResponse, reader: jspb.BinaryReader): DeleteGroupByIDResponse;
}

export namespace DeleteGroupByIDResponse {
  export type AsObject = {
    state: State,
    message: string,
  }
}

export class AddUserToGroupByIDRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getGroupid(): number;
  setGroupid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddUserToGroupByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddUserToGroupByIDRequest): AddUserToGroupByIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddUserToGroupByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddUserToGroupByIDRequest;
  static deserializeBinaryFromReader(message: AddUserToGroupByIDRequest, reader: jspb.BinaryReader): AddUserToGroupByIDRequest;
}

export namespace AddUserToGroupByIDRequest {
  export type AsObject = {
    id: number,
    groupid: number,
  }
}

export class AddUserToGroupByIDResponse extends jspb.Message {
  getState(): State;
  setState(value: State): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddUserToGroupByIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddUserToGroupByIDResponse): AddUserToGroupByIDResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddUserToGroupByIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddUserToGroupByIDResponse;
  static deserializeBinaryFromReader(message: AddUserToGroupByIDResponse, reader: jspb.BinaryReader): AddUserToGroupByIDResponse;
}

export namespace AddUserToGroupByIDResponse {
  export type AsObject = {
    state: State,
    message: string,
  }
}

export class RemoveUserFromGroupByIDRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getUserid(): number;
  setUserid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveUserFromGroupByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveUserFromGroupByIDRequest): RemoveUserFromGroupByIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveUserFromGroupByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveUserFromGroupByIDRequest;
  static deserializeBinaryFromReader(message: RemoveUserFromGroupByIDRequest, reader: jspb.BinaryReader): RemoveUserFromGroupByIDRequest;
}

export namespace RemoveUserFromGroupByIDRequest {
  export type AsObject = {
    id: number,
    userid: number,
  }
}

export class RemoveUserFromGroupByIDResponse extends jspb.Message {
  getState(): State;
  setState(value: State): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveUserFromGroupByIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveUserFromGroupByIDResponse): RemoveUserFromGroupByIDResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveUserFromGroupByIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveUserFromGroupByIDResponse;
  static deserializeBinaryFromReader(message: RemoveUserFromGroupByIDResponse, reader: jspb.BinaryReader): RemoveUserFromGroupByIDResponse;
}

export namespace RemoveUserFromGroupByIDResponse {
  export type AsObject = {
    state: State,
    message: string,
  }
}

export enum State {
  UNKNOWN = 0,
  SUCCESS = 1,
  FAILURE = 2,
  SERVICE_ERROR = 3,
  PARAMS_INVALID = 4,
  ILLEGAL_REQUEST = 5,
  USER_NOT_EXIST = 8,
  LABEL_NOT_EXIST = 6,
  GROUP_NOT_EXIST = 7,
  USER_ALREADY_EXISTS = 9,
  LABEL_ALREADY_EXISTS = 11,
  GROUP_ALREADY_EXISTS = 12,
  USER_ALREADY_DELETE = 14,
  LABEL_ALREADY_DELETE = 15,
  GROUP_ALREADY_DELETE = 16,
  DB_OPERATION_FATLURE = 13,
}


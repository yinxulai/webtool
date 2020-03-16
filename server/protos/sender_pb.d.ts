// package: standard
// file: protos/sender.proto

import * as jspb from 'google-protobuf';

export class VerifyCode extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getCode(): string;
  setCode(value: string): void;

  getOperation(): string;
  setOperation(value: string): void;

  getExpiretime(): string;
  setExpiretime(value: string): void;

  getDeletedtime(): string;
  setDeletedtime(value: string): void;

  getCreatedtime(): string;
  setCreatedtime(value: string): void;

  getUpdatedtime(): string;
  setUpdatedtime(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyCode.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyCode): VerifyCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerifyCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyCode;
  static deserializeBinaryFromReader(message: VerifyCode, reader: jspb.BinaryReader): VerifyCode;
}

export namespace VerifyCode {
  export type AsObject = {
    key: string,
    code: string,
    operation: string,
    expiretime: string,
    deletedtime: string,
    createdtime: string,
    updatedtime: string,
  }
}

export class CheckVerifyCodeRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getVerifycode(): string;
  setVerifycode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckVerifyCodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckVerifyCodeRequest): CheckVerifyCodeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckVerifyCodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckVerifyCodeRequest;
  static deserializeBinaryFromReader(message: CheckVerifyCodeRequest, reader: jspb.BinaryReader): CheckVerifyCodeRequest;
}

export namespace CheckVerifyCodeRequest {
  export type AsObject = {
    key: string,
    verifycode: string,
  }
}

export class CheckVerifyCodeeResponse extends jspb.Message {
  getState(): State;
  setState(value: State): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckVerifyCodeeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckVerifyCodeeResponse): CheckVerifyCodeeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckVerifyCodeeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckVerifyCodeeResponse;
  static deserializeBinaryFromReader(message: CheckVerifyCodeeResponse, reader: jspb.BinaryReader): CheckVerifyCodeeResponse;
}

export namespace CheckVerifyCodeeResponse {
  export type AsObject = {
    state: State,
    message: string,
  }
}

export class DestroyVerifyCodeByKeyRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DestroyVerifyCodeByKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DestroyVerifyCodeByKeyRequest): DestroyVerifyCodeByKeyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DestroyVerifyCodeByKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DestroyVerifyCodeByKeyRequest;
  static deserializeBinaryFromReader(message: DestroyVerifyCodeByKeyRequest, reader: jspb.BinaryReader): DestroyVerifyCodeByKeyRequest;
}

export namespace DestroyVerifyCodeByKeyRequest {
  export type AsObject = {
    key: string,
  }
}

export class DestroyVerifyCodeByKeyResponse extends jspb.Message {
  getState(): State;
  setState(value: State): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DestroyVerifyCodeByKeyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DestroyVerifyCodeByKeyResponse): DestroyVerifyCodeByKeyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DestroyVerifyCodeByKeyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DestroyVerifyCodeByKeyResponse;
  static deserializeBinaryFromReader(message: DestroyVerifyCodeByKeyResponse, reader: jspb.BinaryReader): DestroyVerifyCodeByKeyResponse;
}

export namespace DestroyVerifyCodeByKeyResponse {
  export type AsObject = {
    state: State,
    message: string,
  }
}

export class SendVerifyCodeByEmailRequest extends jspb.Message {
  getOperation(): string;
  setOperation(value: string): void;

  getEmailaddress(): string;
  setEmailaddress(value: string): void;

  getValidityperiod(): number;
  setValidityperiod(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendVerifyCodeByEmailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendVerifyCodeByEmailRequest): SendVerifyCodeByEmailRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendVerifyCodeByEmailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendVerifyCodeByEmailRequest;
  static deserializeBinaryFromReader(message: SendVerifyCodeByEmailRequest, reader: jspb.BinaryReader): SendVerifyCodeByEmailRequest;
}

export namespace SendVerifyCodeByEmailRequest {
  export type AsObject = {
    operation: string,
    emailaddress: string,
    validityperiod: number,
  }
}

export class SendVerifyCodeByEmailResponse extends jspb.Message {
  getState(): State;
  setState(value: State): void;

  getMessage(): string;
  setMessage(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendVerifyCodeByEmailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendVerifyCodeByEmailResponse): SendVerifyCodeByEmailResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendVerifyCodeByEmailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendVerifyCodeByEmailResponse;
  static deserializeBinaryFromReader(message: SendVerifyCodeByEmailResponse, reader: jspb.BinaryReader): SendVerifyCodeByEmailResponse;
}

export namespace SendVerifyCodeByEmailResponse {
  export type AsObject = {
    state: State,
    message: string,
    key: string,
  }
}

export class SendVerifyCodeBySmsRequest extends jspb.Message {
  getOperation(): string;
  setOperation(value: string): void;

  getPhonenumber(): string;
  setPhonenumber(value: string): void;

  getCountrycode(): string;
  setCountrycode(value: string): void;

  getValidityperiod(): number;
  setValidityperiod(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendVerifyCodeBySmsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendVerifyCodeBySmsRequest): SendVerifyCodeBySmsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendVerifyCodeBySmsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendVerifyCodeBySmsRequest;
  static deserializeBinaryFromReader(message: SendVerifyCodeBySmsRequest, reader: jspb.BinaryReader): SendVerifyCodeBySmsRequest;
}

export namespace SendVerifyCodeBySmsRequest {
  export type AsObject = {
    operation: string,
    phonenumber: string,
    countrycode: string,
    validityperiod: number,
  }
}

export class SendVerifyCodeBySmsResponse extends jspb.Message {
  getState(): State;
  setState(value: State): void;

  getMessage(): string;
  setMessage(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendVerifyCodeBySmsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendVerifyCodeBySmsResponse): SendVerifyCodeBySmsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendVerifyCodeBySmsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendVerifyCodeBySmsResponse;
  static deserializeBinaryFromReader(message: SendVerifyCodeBySmsResponse, reader: jspb.BinaryReader): SendVerifyCodeBySmsResponse;
}

export namespace SendVerifyCodeBySmsResponse {
  export type AsObject = {
    state: State,
    message: string,
    key: string,
  }
}

export class SendVerifyCodeByCallPhoneRequest extends jspb.Message {
  getOperation(): string;
  setOperation(value: string): void;

  getPhonenumber(): string;
  setPhonenumber(value: string): void;

  getCountrycode(): string;
  setCountrycode(value: string): void;

  getValidityperiod(): number;
  setValidityperiod(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendVerifyCodeByCallPhoneRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendVerifyCodeByCallPhoneRequest): SendVerifyCodeByCallPhoneRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendVerifyCodeByCallPhoneRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendVerifyCodeByCallPhoneRequest;
  static deserializeBinaryFromReader(message: SendVerifyCodeByCallPhoneRequest, reader: jspb.BinaryReader): SendVerifyCodeByCallPhoneRequest;
}

export namespace SendVerifyCodeByCallPhoneRequest {
  export type AsObject = {
    operation: string,
    phonenumber: string,
    countrycode: string,
    validityperiod: number,
  }
}

export class SendVerifyCodeByCallPhoneResponse extends jspb.Message {
  getState(): State;
  setState(value: State): void;

  getMessage(): string;
  setMessage(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendVerifyCodeByCallPhoneResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendVerifyCodeByCallPhoneResponse): SendVerifyCodeByCallPhoneResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendVerifyCodeByCallPhoneResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendVerifyCodeByCallPhoneResponse;
  static deserializeBinaryFromReader(message: SendVerifyCodeByCallPhoneResponse, reader: jspb.BinaryReader): SendVerifyCodeByCallPhoneResponse;
}

export namespace SendVerifyCodeByCallPhoneResponse {
  export type AsObject = {
    state: State,
    message: string,
    key: string,
  }
}

export enum State {
  UNKNOWN = 0,
  SUCCESS = 1,
  FAILURE = 2,
  NOT_EXIST = 3,
  UNDEFINED = 4,
  PROHIBITED = 5,
  NO_SERVICE_AVAILABLE = 6,
  DB_OPERATION_FATLURE = 7,
}


// package: standard
// file: protos/sender.proto

import * as grpc from 'grpc';
import * as protos_sender_pb from '../protos/sender_pb';

interface ISenderService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  checkVerifyCode: ICheckVerifyCode
  sendVerifyCodeBySms: ISendVerifyCodeBySms
  destroyVerifyCodeByKey: IDestroyVerifyCodeByKey
  sendVerifyCodeByEmail: ISendVerifyCodeByEmail
  sendVerifyCodeByCallPhone: ISendVerifyCodeByCallPhone
}

interface ICheckVerifyCode {
  path: string; // "/standard.Sender/CheckVerifyCode"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: protos_sender_pb.CheckVerifyCodeRequest;
  responseType: protos_sender_pb.CheckVerifyCodeeResponse;
  requestSerialize: (arg: protos_sender_pb.CheckVerifyCodeRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => protos_sender_pb.CheckVerifyCodeRequest;
  responseSerialize: (arg: protos_sender_pb.CheckVerifyCodeeResponse) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => protos_sender_pb.CheckVerifyCodeeResponse;
}

interface ISendVerifyCodeBySms {
  path: string; // "/standard.Sender/SendVerifyCodeBySms"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: protos_sender_pb.SendVerifyCodeBySmsRequest;
  responseType: protos_sender_pb.SendVerifyCodeBySmsResponse;
  requestSerialize: (arg: protos_sender_pb.SendVerifyCodeBySmsRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => protos_sender_pb.SendVerifyCodeBySmsRequest;
  responseSerialize: (arg: protos_sender_pb.SendVerifyCodeBySmsResponse) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => protos_sender_pb.SendVerifyCodeBySmsResponse;
}

interface IDestroyVerifyCodeByKey {
  path: string; // "/standard.Sender/DestroyVerifyCodeByKey"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: protos_sender_pb.DestroyVerifyCodeByKeyRequest;
  responseType: protos_sender_pb.DestroyVerifyCodeByKeyResponse;
  requestSerialize: (arg: protos_sender_pb.DestroyVerifyCodeByKeyRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => protos_sender_pb.DestroyVerifyCodeByKeyRequest;
  responseSerialize: (arg: protos_sender_pb.DestroyVerifyCodeByKeyResponse) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => protos_sender_pb.DestroyVerifyCodeByKeyResponse;
}

interface ISendVerifyCodeByEmail {
  path: string; // "/standard.Sender/SendVerifyCodeByEmail"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: protos_sender_pb.SendVerifyCodeByEmailRequest;
  responseType: protos_sender_pb.SendVerifyCodeByEmailResponse;
  requestSerialize: (arg: protos_sender_pb.SendVerifyCodeByEmailRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => protos_sender_pb.SendVerifyCodeByEmailRequest;
  responseSerialize: (arg: protos_sender_pb.SendVerifyCodeByEmailResponse) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => protos_sender_pb.SendVerifyCodeByEmailResponse;
}

interface ISendVerifyCodeByCallPhone {
  path: string; // "/standard.Sender/SendVerifyCodeByCallPhone"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: protos_sender_pb.SendVerifyCodeByCallPhoneRequest;
  responseType: protos_sender_pb.SendVerifyCodeByCallPhoneResponse;
  requestSerialize: (arg: protos_sender_pb.SendVerifyCodeByCallPhoneRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => protos_sender_pb.SendVerifyCodeByCallPhoneRequest;
  responseSerialize: (arg: protos_sender_pb.SendVerifyCodeByCallPhoneResponse) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => protos_sender_pb.SendVerifyCodeByCallPhoneResponse;
}

export interface ISenderClient {
  checkVerifyCode(request: protos_sender_pb.CheckVerifyCodeRequest, callback: (error: Error | null, response: protos_sender_pb.CheckVerifyCodeeResponse) => void): grpc.ClientUnaryCall;
  checkVerifyCode(request: protos_sender_pb.CheckVerifyCodeRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_sender_pb.CheckVerifyCodeeResponse) => void): grpc.ClientUnaryCall;
  sendVerifyCodeBySms(request: protos_sender_pb.SendVerifyCodeBySmsRequest, callback: (error: Error | null, response: protos_sender_pb.SendVerifyCodeBySmsResponse) => void): grpc.ClientUnaryCall;
  sendVerifyCodeBySms(request: protos_sender_pb.SendVerifyCodeBySmsRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_sender_pb.SendVerifyCodeBySmsResponse) => void): grpc.ClientUnaryCall;
  destroyVerifyCodeByKey(request: protos_sender_pb.DestroyVerifyCodeByKeyRequest, callback: (error: Error | null, response: protos_sender_pb.DestroyVerifyCodeByKeyResponse) => void): grpc.ClientUnaryCall;
  destroyVerifyCodeByKey(request: protos_sender_pb.DestroyVerifyCodeByKeyRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_sender_pb.DestroyVerifyCodeByKeyResponse) => void): grpc.ClientUnaryCall;
  sendVerifyCodeByEmail(request: protos_sender_pb.SendVerifyCodeByEmailRequest, callback: (error: Error | null, response: protos_sender_pb.SendVerifyCodeByEmailResponse) => void): grpc.ClientUnaryCall;
  sendVerifyCodeByEmail(request: protos_sender_pb.SendVerifyCodeByEmailRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_sender_pb.SendVerifyCodeByEmailResponse) => void): grpc.ClientUnaryCall;
  sendVerifyCodeByCallPhone(request: protos_sender_pb.SendVerifyCodeByCallPhoneRequest, callback: (error: Error | null, response: protos_sender_pb.SendVerifyCodeByCallPhoneResponse) => void): grpc.ClientUnaryCall;
  sendVerifyCodeByCallPhone(request: protos_sender_pb.SendVerifyCodeByCallPhoneRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_sender_pb.SendVerifyCodeByCallPhoneResponse) => void): grpc.ClientUnaryCall;
}

export const SenderService: ISenderService;
export class SenderClient extends grpc.Client implements ISenderClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  public checkVerifyCode(request: protos_sender_pb.CheckVerifyCodeRequest, callback: (error: Error | null, response: protos_sender_pb.CheckVerifyCodeeResponse) => void): grpc.ClientUnaryCall;
  public checkVerifyCode(request: protos_sender_pb.CheckVerifyCodeRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_sender_pb.CheckVerifyCodeeResponse) => void): grpc.ClientUnaryCall;
  public sendVerifyCodeBySms(request: protos_sender_pb.SendVerifyCodeBySmsRequest, callback: (error: Error | null, response: protos_sender_pb.SendVerifyCodeBySmsResponse) => void): grpc.ClientUnaryCall;
  public sendVerifyCodeBySms(request: protos_sender_pb.SendVerifyCodeBySmsRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_sender_pb.SendVerifyCodeBySmsResponse) => void): grpc.ClientUnaryCall;
  public destroyVerifyCodeByKey(request: protos_sender_pb.DestroyVerifyCodeByKeyRequest, callback: (error: Error | null, response: protos_sender_pb.DestroyVerifyCodeByKeyResponse) => void): grpc.ClientUnaryCall;
  public destroyVerifyCodeByKey(request: protos_sender_pb.DestroyVerifyCodeByKeyRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_sender_pb.DestroyVerifyCodeByKeyResponse) => void): grpc.ClientUnaryCall;
  public sendVerifyCodeByEmail(request: protos_sender_pb.SendVerifyCodeByEmailRequest, callback: (error: Error | null, response: protos_sender_pb.SendVerifyCodeByEmailResponse) => void): grpc.ClientUnaryCall;
  public sendVerifyCodeByEmail(request: protos_sender_pb.SendVerifyCodeByEmailRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_sender_pb.SendVerifyCodeByEmailResponse) => void): grpc.ClientUnaryCall;
  public sendVerifyCodeByCallPhone(request: protos_sender_pb.SendVerifyCodeByCallPhoneRequest, callback: (error: Error | null, response: protos_sender_pb.SendVerifyCodeByCallPhoneResponse) => void): grpc.ClientUnaryCall;
  public sendVerifyCodeByCallPhone(request: protos_sender_pb.SendVerifyCodeByCallPhoneRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_sender_pb.SendVerifyCodeByCallPhoneResponse) => void): grpc.ClientUnaryCall;
}


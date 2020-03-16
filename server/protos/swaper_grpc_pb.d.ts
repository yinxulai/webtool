// package: standard
// file: protos/swaper.proto

import * as grpc from 'grpc';
import * as protos_swaper_pb from '../protos/swaper_pb';

interface ISwaperService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createUnitData: ICreateUnitData
  getUnitDataByKey: IGetUnitDataByKey
  destroyUnitDataByKey: IDestroyUnitDataByKey
  updateUnitDataBodyByKey: IUpdateUnitDataBodyByKey
  updateUnitDataExpiryTimeByKey: IUpdateUnitDataExpiryTimeByKey
  updateUnitDataDestroyTimeByKey: IUpdateUnitDataDestroyTimeByKey
  updateUnitDataEffectiveTimeByKey: IUpdateUnitDataEffectiveTimeByKey
}

interface ICreateUnitData {
  path: string; // "/standard.Swaper/CreateUnitData"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: protos_swaper_pb.CreateUnitDataRequest;
  responseType: protos_swaper_pb.CreateUnitDataResponse;
  requestSerialize: (arg: protos_swaper_pb.CreateUnitDataRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => protos_swaper_pb.CreateUnitDataRequest;
  responseSerialize: (arg: protos_swaper_pb.CreateUnitDataResponse) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => protos_swaper_pb.CreateUnitDataResponse;
}

interface IGetUnitDataByKey {
  path: string; // "/standard.Swaper/GetUnitDataByKey"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: protos_swaper_pb.GetUnitDataByKeyRequest;
  responseType: protos_swaper_pb.GetUnitDataByKeyResponse;
  requestSerialize: (arg: protos_swaper_pb.GetUnitDataByKeyRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => protos_swaper_pb.GetUnitDataByKeyRequest;
  responseSerialize: (arg: protos_swaper_pb.GetUnitDataByKeyResponse) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => protos_swaper_pb.GetUnitDataByKeyResponse;
}

interface IDestroyUnitDataByKey {
  path: string; // "/standard.Swaper/DestroyUnitDataByKey"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: protos_swaper_pb.DestroyUnitDataByKeyRequest;
  responseType: protos_swaper_pb.DestroyUnitDataByKeyResponse;
  requestSerialize: (arg: protos_swaper_pb.DestroyUnitDataByKeyRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => protos_swaper_pb.DestroyUnitDataByKeyRequest;
  responseSerialize: (arg: protos_swaper_pb.DestroyUnitDataByKeyResponse) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => protos_swaper_pb.DestroyUnitDataByKeyResponse;
}

interface IUpdateUnitDataBodyByKey {
  path: string; // "/standard.Swaper/UpdateUnitDataBodyByKey"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: protos_swaper_pb.UpdateUnitDataBodyByKeyRequest;
  responseType: protos_swaper_pb.UpdateUnitDataBodyByKeyResponse;
  requestSerialize: (arg: protos_swaper_pb.UpdateUnitDataBodyByKeyRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => protos_swaper_pb.UpdateUnitDataBodyByKeyRequest;
  responseSerialize: (arg: protos_swaper_pb.UpdateUnitDataBodyByKeyResponse) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => protos_swaper_pb.UpdateUnitDataBodyByKeyResponse;
}

interface IUpdateUnitDataExpiryTimeByKey {
  path: string; // "/standard.Swaper/UpdateUnitDataExpiryTimeByKey"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: protos_swaper_pb.UpdateUnitDataExpiryTimeByKeyRequest;
  responseType: protos_swaper_pb.UpdateUnitDataExpiryTimeByKeyResponse;
  requestSerialize: (arg: protos_swaper_pb.UpdateUnitDataExpiryTimeByKeyRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => protos_swaper_pb.UpdateUnitDataExpiryTimeByKeyRequest;
  responseSerialize: (arg: protos_swaper_pb.UpdateUnitDataExpiryTimeByKeyResponse) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => protos_swaper_pb.UpdateUnitDataExpiryTimeByKeyResponse;
}

interface IUpdateUnitDataDestroyTimeByKey {
  path: string; // "/standard.Swaper/UpdateUnitDataDestroyTimeByKey"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: protos_swaper_pb.UpdateUnitDataDestroyTimeByKeyRequest;
  responseType: protos_swaper_pb.UpdateUnitDataDestroyTimeByKeyResponse;
  requestSerialize: (arg: protos_swaper_pb.UpdateUnitDataDestroyTimeByKeyRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => protos_swaper_pb.UpdateUnitDataDestroyTimeByKeyRequest;
  responseSerialize: (arg: protos_swaper_pb.UpdateUnitDataDestroyTimeByKeyResponse) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => protos_swaper_pb.UpdateUnitDataDestroyTimeByKeyResponse;
}

interface IUpdateUnitDataEffectiveTimeByKey {
  path: string; // "/standard.Swaper/UpdateUnitDataEffectiveTimeByKey"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: protos_swaper_pb.UpdateUnitDataEffectiveTimeByKeyRequest;
  responseType: protos_swaper_pb.UpdateUnitDataEffectiveTimeByKeyResponse;
  requestSerialize: (arg: protos_swaper_pb.UpdateUnitDataEffectiveTimeByKeyRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => protos_swaper_pb.UpdateUnitDataEffectiveTimeByKeyRequest;
  responseSerialize: (arg: protos_swaper_pb.UpdateUnitDataEffectiveTimeByKeyResponse) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => protos_swaper_pb.UpdateUnitDataEffectiveTimeByKeyResponse;
}

export interface ISwaperClient {
  createUnitData(request: protos_swaper_pb.CreateUnitDataRequest, callback: (error: Error | null, response: protos_swaper_pb.CreateUnitDataResponse) => void): grpc.ClientUnaryCall;
  createUnitData(request: protos_swaper_pb.CreateUnitDataRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_swaper_pb.CreateUnitDataResponse) => void): grpc.ClientUnaryCall;
  getUnitDataByKey(request: protos_swaper_pb.GetUnitDataByKeyRequest, callback: (error: Error | null, response: protos_swaper_pb.GetUnitDataByKeyResponse) => void): grpc.ClientUnaryCall;
  getUnitDataByKey(request: protos_swaper_pb.GetUnitDataByKeyRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_swaper_pb.GetUnitDataByKeyResponse) => void): grpc.ClientUnaryCall;
  destroyUnitDataByKey(request: protos_swaper_pb.DestroyUnitDataByKeyRequest, callback: (error: Error | null, response: protos_swaper_pb.DestroyUnitDataByKeyResponse) => void): grpc.ClientUnaryCall;
  destroyUnitDataByKey(request: protos_swaper_pb.DestroyUnitDataByKeyRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_swaper_pb.DestroyUnitDataByKeyResponse) => void): grpc.ClientUnaryCall;
  updateUnitDataBodyByKey(request: protos_swaper_pb.UpdateUnitDataBodyByKeyRequest, callback: (error: Error | null, response: protos_swaper_pb.UpdateUnitDataBodyByKeyResponse) => void): grpc.ClientUnaryCall;
  updateUnitDataBodyByKey(request: protos_swaper_pb.UpdateUnitDataBodyByKeyRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_swaper_pb.UpdateUnitDataBodyByKeyResponse) => void): grpc.ClientUnaryCall;
  updateUnitDataExpiryTimeByKey(request: protos_swaper_pb.UpdateUnitDataExpiryTimeByKeyRequest, callback: (error: Error | null, response: protos_swaper_pb.UpdateUnitDataExpiryTimeByKeyResponse) => void): grpc.ClientUnaryCall;
  updateUnitDataExpiryTimeByKey(request: protos_swaper_pb.UpdateUnitDataExpiryTimeByKeyRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_swaper_pb.UpdateUnitDataExpiryTimeByKeyResponse) => void): grpc.ClientUnaryCall;
  updateUnitDataDestroyTimeByKey(request: protos_swaper_pb.UpdateUnitDataDestroyTimeByKeyRequest, callback: (error: Error | null, response: protos_swaper_pb.UpdateUnitDataDestroyTimeByKeyResponse) => void): grpc.ClientUnaryCall;
  updateUnitDataDestroyTimeByKey(request: protos_swaper_pb.UpdateUnitDataDestroyTimeByKeyRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_swaper_pb.UpdateUnitDataDestroyTimeByKeyResponse) => void): grpc.ClientUnaryCall;
  updateUnitDataEffectiveTimeByKey(request: protos_swaper_pb.UpdateUnitDataEffectiveTimeByKeyRequest, callback: (error: Error | null, response: protos_swaper_pb.UpdateUnitDataEffectiveTimeByKeyResponse) => void): grpc.ClientUnaryCall;
  updateUnitDataEffectiveTimeByKey(request: protos_swaper_pb.UpdateUnitDataEffectiveTimeByKeyRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_swaper_pb.UpdateUnitDataEffectiveTimeByKeyResponse) => void): grpc.ClientUnaryCall;
}

export const SwaperService: ISwaperService;
export class SwaperClient extends grpc.Client implements ISwaperClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  public createUnitData(request: protos_swaper_pb.CreateUnitDataRequest, callback: (error: Error | null, response: protos_swaper_pb.CreateUnitDataResponse) => void): grpc.ClientUnaryCall;
  public createUnitData(request: protos_swaper_pb.CreateUnitDataRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_swaper_pb.CreateUnitDataResponse) => void): grpc.ClientUnaryCall;
  public getUnitDataByKey(request: protos_swaper_pb.GetUnitDataByKeyRequest, callback: (error: Error | null, response: protos_swaper_pb.GetUnitDataByKeyResponse) => void): grpc.ClientUnaryCall;
  public getUnitDataByKey(request: protos_swaper_pb.GetUnitDataByKeyRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_swaper_pb.GetUnitDataByKeyResponse) => void): grpc.ClientUnaryCall;
  public destroyUnitDataByKey(request: protos_swaper_pb.DestroyUnitDataByKeyRequest, callback: (error: Error | null, response: protos_swaper_pb.DestroyUnitDataByKeyResponse) => void): grpc.ClientUnaryCall;
  public destroyUnitDataByKey(request: protos_swaper_pb.DestroyUnitDataByKeyRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_swaper_pb.DestroyUnitDataByKeyResponse) => void): grpc.ClientUnaryCall;
  public updateUnitDataBodyByKey(request: protos_swaper_pb.UpdateUnitDataBodyByKeyRequest, callback: (error: Error | null, response: protos_swaper_pb.UpdateUnitDataBodyByKeyResponse) => void): grpc.ClientUnaryCall;
  public updateUnitDataBodyByKey(request: protos_swaper_pb.UpdateUnitDataBodyByKeyRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_swaper_pb.UpdateUnitDataBodyByKeyResponse) => void): grpc.ClientUnaryCall;
  public updateUnitDataExpiryTimeByKey(request: protos_swaper_pb.UpdateUnitDataExpiryTimeByKeyRequest, callback: (error: Error | null, response: protos_swaper_pb.UpdateUnitDataExpiryTimeByKeyResponse) => void): grpc.ClientUnaryCall;
  public updateUnitDataExpiryTimeByKey(request: protos_swaper_pb.UpdateUnitDataExpiryTimeByKeyRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_swaper_pb.UpdateUnitDataExpiryTimeByKeyResponse) => void): grpc.ClientUnaryCall;
  public updateUnitDataDestroyTimeByKey(request: protos_swaper_pb.UpdateUnitDataDestroyTimeByKeyRequest, callback: (error: Error | null, response: protos_swaper_pb.UpdateUnitDataDestroyTimeByKeyResponse) => void): grpc.ClientUnaryCall;
  public updateUnitDataDestroyTimeByKey(request: protos_swaper_pb.UpdateUnitDataDestroyTimeByKeyRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_swaper_pb.UpdateUnitDataDestroyTimeByKeyResponse) => void): grpc.ClientUnaryCall;
  public updateUnitDataEffectiveTimeByKey(request: protos_swaper_pb.UpdateUnitDataEffectiveTimeByKeyRequest, callback: (error: Error | null, response: protos_swaper_pb.UpdateUnitDataEffectiveTimeByKeyResponse) => void): grpc.ClientUnaryCall;
  public updateUnitDataEffectiveTimeByKey(request: protos_swaper_pb.UpdateUnitDataEffectiveTimeByKeyRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_swaper_pb.UpdateUnitDataEffectiveTimeByKeyResponse) => void): grpc.ClientUnaryCall;
}


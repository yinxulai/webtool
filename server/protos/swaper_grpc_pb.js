// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var protos_swaper_pb = require('../protos/swaper_pb.js');

function serialize_standard_CreateUnitDataRequest(arg) {
  if (!(arg instanceof protos_swaper_pb.CreateUnitDataRequest)) {
    throw new Error('Expected argument of type standard.CreateUnitDataRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_CreateUnitDataRequest(buffer_arg) {
  return protos_swaper_pb.CreateUnitDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_CreateUnitDataResponse(arg) {
  if (!(arg instanceof protos_swaper_pb.CreateUnitDataResponse)) {
    throw new Error('Expected argument of type standard.CreateUnitDataResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_CreateUnitDataResponse(buffer_arg) {
  return protos_swaper_pb.CreateUnitDataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_DestroyUnitDataByKeyRequest(arg) {
  if (!(arg instanceof protos_swaper_pb.DestroyUnitDataByKeyRequest)) {
    throw new Error('Expected argument of type standard.DestroyUnitDataByKeyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_DestroyUnitDataByKeyRequest(buffer_arg) {
  return protos_swaper_pb.DestroyUnitDataByKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_DestroyUnitDataByKeyResponse(arg) {
  if (!(arg instanceof protos_swaper_pb.DestroyUnitDataByKeyResponse)) {
    throw new Error('Expected argument of type standard.DestroyUnitDataByKeyResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_DestroyUnitDataByKeyResponse(buffer_arg) {
  return protos_swaper_pb.DestroyUnitDataByKeyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_GetUnitDataByKeyRequest(arg) {
  if (!(arg instanceof protos_swaper_pb.GetUnitDataByKeyRequest)) {
    throw new Error('Expected argument of type standard.GetUnitDataByKeyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_GetUnitDataByKeyRequest(buffer_arg) {
  return protos_swaper_pb.GetUnitDataByKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_GetUnitDataByKeyResponse(arg) {
  if (!(arg instanceof protos_swaper_pb.GetUnitDataByKeyResponse)) {
    throw new Error('Expected argument of type standard.GetUnitDataByKeyResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_GetUnitDataByKeyResponse(buffer_arg) {
  return protos_swaper_pb.GetUnitDataByKeyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_UpdateUnitDataBodyByKeyRequest(arg) {
  if (!(arg instanceof protos_swaper_pb.UpdateUnitDataBodyByKeyRequest)) {
    throw new Error('Expected argument of type standard.UpdateUnitDataBodyByKeyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_UpdateUnitDataBodyByKeyRequest(buffer_arg) {
  return protos_swaper_pb.UpdateUnitDataBodyByKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_UpdateUnitDataBodyByKeyResponse(arg) {
  if (!(arg instanceof protos_swaper_pb.UpdateUnitDataBodyByKeyResponse)) {
    throw new Error('Expected argument of type standard.UpdateUnitDataBodyByKeyResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_UpdateUnitDataBodyByKeyResponse(buffer_arg) {
  return protos_swaper_pb.UpdateUnitDataBodyByKeyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_UpdateUnitDataDestroyTimeByKeyRequest(arg) {
  if (!(arg instanceof protos_swaper_pb.UpdateUnitDataDestroyTimeByKeyRequest)) {
    throw new Error('Expected argument of type standard.UpdateUnitDataDestroyTimeByKeyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_UpdateUnitDataDestroyTimeByKeyRequest(buffer_arg) {
  return protos_swaper_pb.UpdateUnitDataDestroyTimeByKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_UpdateUnitDataDestroyTimeByKeyResponse(arg) {
  if (!(arg instanceof protos_swaper_pb.UpdateUnitDataDestroyTimeByKeyResponse)) {
    throw new Error('Expected argument of type standard.UpdateUnitDataDestroyTimeByKeyResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_UpdateUnitDataDestroyTimeByKeyResponse(buffer_arg) {
  return protos_swaper_pb.UpdateUnitDataDestroyTimeByKeyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_UpdateUnitDataEffectiveTimeByKeyRequest(arg) {
  if (!(arg instanceof protos_swaper_pb.UpdateUnitDataEffectiveTimeByKeyRequest)) {
    throw new Error('Expected argument of type standard.UpdateUnitDataEffectiveTimeByKeyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_UpdateUnitDataEffectiveTimeByKeyRequest(buffer_arg) {
  return protos_swaper_pb.UpdateUnitDataEffectiveTimeByKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_UpdateUnitDataEffectiveTimeByKeyResponse(arg) {
  if (!(arg instanceof protos_swaper_pb.UpdateUnitDataEffectiveTimeByKeyResponse)) {
    throw new Error('Expected argument of type standard.UpdateUnitDataEffectiveTimeByKeyResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_UpdateUnitDataEffectiveTimeByKeyResponse(buffer_arg) {
  return protos_swaper_pb.UpdateUnitDataEffectiveTimeByKeyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_UpdateUnitDataExpiryTimeByKeyRequest(arg) {
  if (!(arg instanceof protos_swaper_pb.UpdateUnitDataExpiryTimeByKeyRequest)) {
    throw new Error('Expected argument of type standard.UpdateUnitDataExpiryTimeByKeyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_UpdateUnitDataExpiryTimeByKeyRequest(buffer_arg) {
  return protos_swaper_pb.UpdateUnitDataExpiryTimeByKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_UpdateUnitDataExpiryTimeByKeyResponse(arg) {
  if (!(arg instanceof protos_swaper_pb.UpdateUnitDataExpiryTimeByKeyResponse)) {
    throw new Error('Expected argument of type standard.UpdateUnitDataExpiryTimeByKeyResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_UpdateUnitDataExpiryTimeByKeyResponse(buffer_arg) {
  return protos_swaper_pb.UpdateUnitDataExpiryTimeByKeyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// 在里面流通的是 `UnitData`
// 每个 `UnitData` 有自己的一些生命周期设定
// 可以创建一个 `UnitData` 并获得这个 `UnitData` 的对应加密 number
// 或者通过一个的特定的 `UnitData` 的 number 在有效的生命周期内获取这个数据
var SwaperService = exports.SwaperService = {
  createUnitData: {
    path: '/standard.Swaper/CreateUnitData',
    requestStream: false,
    responseStream: false,
    requestType: protos_swaper_pb.CreateUnitDataRequest,
    responseType: protos_swaper_pb.CreateUnitDataResponse,
    requestSerialize: serialize_standard_CreateUnitDataRequest,
    requestDeserialize: deserialize_standard_CreateUnitDataRequest,
    responseSerialize: serialize_standard_CreateUnitDataResponse,
    responseDeserialize: deserialize_standard_CreateUnitDataResponse,
  },
  getUnitDataByKey: {
    path: '/standard.Swaper/GetUnitDataByKey',
    requestStream: false,
    responseStream: false,
    requestType: protos_swaper_pb.GetUnitDataByKeyRequest,
    responseType: protos_swaper_pb.GetUnitDataByKeyResponse,
    requestSerialize: serialize_standard_GetUnitDataByKeyRequest,
    requestDeserialize: deserialize_standard_GetUnitDataByKeyRequest,
    responseSerialize: serialize_standard_GetUnitDataByKeyResponse,
    responseDeserialize: deserialize_standard_GetUnitDataByKeyResponse,
  },
  destroyUnitDataByKey: {
    path: '/standard.Swaper/DestroyUnitDataByKey',
    requestStream: false,
    responseStream: false,
    requestType: protos_swaper_pb.DestroyUnitDataByKeyRequest,
    responseType: protos_swaper_pb.DestroyUnitDataByKeyResponse,
    requestSerialize: serialize_standard_DestroyUnitDataByKeyRequest,
    requestDeserialize: deserialize_standard_DestroyUnitDataByKeyRequest,
    responseSerialize: serialize_standard_DestroyUnitDataByKeyResponse,
    responseDeserialize: deserialize_standard_DestroyUnitDataByKeyResponse,
  },
  updateUnitDataBodyByKey: {
    path: '/standard.Swaper/UpdateUnitDataBodyByKey',
    requestStream: false,
    responseStream: false,
    requestType: protos_swaper_pb.UpdateUnitDataBodyByKeyRequest,
    responseType: protos_swaper_pb.UpdateUnitDataBodyByKeyResponse,
    requestSerialize: serialize_standard_UpdateUnitDataBodyByKeyRequest,
    requestDeserialize: deserialize_standard_UpdateUnitDataBodyByKeyRequest,
    responseSerialize: serialize_standard_UpdateUnitDataBodyByKeyResponse,
    responseDeserialize: deserialize_standard_UpdateUnitDataBodyByKeyResponse,
  },
  updateUnitDataExpiryTimeByKey: {
    path: '/standard.Swaper/UpdateUnitDataExpiryTimeByKey',
    requestStream: false,
    responseStream: false,
    requestType: protos_swaper_pb.UpdateUnitDataExpiryTimeByKeyRequest,
    responseType: protos_swaper_pb.UpdateUnitDataExpiryTimeByKeyResponse,
    requestSerialize: serialize_standard_UpdateUnitDataExpiryTimeByKeyRequest,
    requestDeserialize: deserialize_standard_UpdateUnitDataExpiryTimeByKeyRequest,
    responseSerialize: serialize_standard_UpdateUnitDataExpiryTimeByKeyResponse,
    responseDeserialize: deserialize_standard_UpdateUnitDataExpiryTimeByKeyResponse,
  },
  updateUnitDataDestroyTimeByKey: {
    path: '/standard.Swaper/UpdateUnitDataDestroyTimeByKey',
    requestStream: false,
    responseStream: false,
    requestType: protos_swaper_pb.UpdateUnitDataDestroyTimeByKeyRequest,
    responseType: protos_swaper_pb.UpdateUnitDataDestroyTimeByKeyResponse,
    requestSerialize: serialize_standard_UpdateUnitDataDestroyTimeByKeyRequest,
    requestDeserialize: deserialize_standard_UpdateUnitDataDestroyTimeByKeyRequest,
    responseSerialize: serialize_standard_UpdateUnitDataDestroyTimeByKeyResponse,
    responseDeserialize: deserialize_standard_UpdateUnitDataDestroyTimeByKeyResponse,
  },
  updateUnitDataEffectiveTimeByKey: {
    path: '/standard.Swaper/UpdateUnitDataEffectiveTimeByKey',
    requestStream: false,
    responseStream: false,
    requestType: protos_swaper_pb.UpdateUnitDataEffectiveTimeByKeyRequest,
    responseType: protos_swaper_pb.UpdateUnitDataEffectiveTimeByKeyResponse,
    requestSerialize: serialize_standard_UpdateUnitDataEffectiveTimeByKeyRequest,
    requestDeserialize: deserialize_standard_UpdateUnitDataEffectiveTimeByKeyRequest,
    responseSerialize: serialize_standard_UpdateUnitDataEffectiveTimeByKeyResponse,
    responseDeserialize: deserialize_standard_UpdateUnitDataEffectiveTimeByKeyResponse,
  },
};

exports.SwaperClient = grpc.makeGenericClientConstructor(SwaperService);

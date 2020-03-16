// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var protos_sender_pb = require('../protos/sender_pb.js');

function serialize_standard_CheckVerifyCodeRequest(arg) {
  if (!(arg instanceof protos_sender_pb.CheckVerifyCodeRequest)) {
    throw new Error('Expected argument of type standard.CheckVerifyCodeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_CheckVerifyCodeRequest(buffer_arg) {
  return protos_sender_pb.CheckVerifyCodeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_CheckVerifyCodeeResponse(arg) {
  if (!(arg instanceof protos_sender_pb.CheckVerifyCodeeResponse)) {
    throw new Error('Expected argument of type standard.CheckVerifyCodeeResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_CheckVerifyCodeeResponse(buffer_arg) {
  return protos_sender_pb.CheckVerifyCodeeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_DestroyVerifyCodeByKeyRequest(arg) {
  if (!(arg instanceof protos_sender_pb.DestroyVerifyCodeByKeyRequest)) {
    throw new Error('Expected argument of type standard.DestroyVerifyCodeByKeyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_DestroyVerifyCodeByKeyRequest(buffer_arg) {
  return protos_sender_pb.DestroyVerifyCodeByKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_DestroyVerifyCodeByKeyResponse(arg) {
  if (!(arg instanceof protos_sender_pb.DestroyVerifyCodeByKeyResponse)) {
    throw new Error('Expected argument of type standard.DestroyVerifyCodeByKeyResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_DestroyVerifyCodeByKeyResponse(buffer_arg) {
  return protos_sender_pb.DestroyVerifyCodeByKeyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_SendVerifyCodeByCallPhoneRequest(arg) {
  if (!(arg instanceof protos_sender_pb.SendVerifyCodeByCallPhoneRequest)) {
    throw new Error('Expected argument of type standard.SendVerifyCodeByCallPhoneRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_SendVerifyCodeByCallPhoneRequest(buffer_arg) {
  return protos_sender_pb.SendVerifyCodeByCallPhoneRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_SendVerifyCodeByCallPhoneResponse(arg) {
  if (!(arg instanceof protos_sender_pb.SendVerifyCodeByCallPhoneResponse)) {
    throw new Error('Expected argument of type standard.SendVerifyCodeByCallPhoneResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_SendVerifyCodeByCallPhoneResponse(buffer_arg) {
  return protos_sender_pb.SendVerifyCodeByCallPhoneResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_SendVerifyCodeByEmailRequest(arg) {
  if (!(arg instanceof protos_sender_pb.SendVerifyCodeByEmailRequest)) {
    throw new Error('Expected argument of type standard.SendVerifyCodeByEmailRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_SendVerifyCodeByEmailRequest(buffer_arg) {
  return protos_sender_pb.SendVerifyCodeByEmailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_SendVerifyCodeByEmailResponse(arg) {
  if (!(arg instanceof protos_sender_pb.SendVerifyCodeByEmailResponse)) {
    throw new Error('Expected argument of type standard.SendVerifyCodeByEmailResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_SendVerifyCodeByEmailResponse(buffer_arg) {
  return protos_sender_pb.SendVerifyCodeByEmailResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_SendVerifyCodeBySmsRequest(arg) {
  if (!(arg instanceof protos_sender_pb.SendVerifyCodeBySmsRequest)) {
    throw new Error('Expected argument of type standard.SendVerifyCodeBySmsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_SendVerifyCodeBySmsRequest(buffer_arg) {
  return protos_sender_pb.SendVerifyCodeBySmsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_SendVerifyCodeBySmsResponse(arg) {
  if (!(arg instanceof protos_sender_pb.SendVerifyCodeBySmsResponse)) {
    throw new Error('Expected argument of type standard.SendVerifyCodeBySmsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_SendVerifyCodeBySmsResponse(buffer_arg) {
  return protos_sender_pb.SendVerifyCodeBySmsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SenderService = exports.SenderService = {
  checkVerifyCode: {
    path: '/standard.Sender/CheckVerifyCode',
    requestStream: false,
    responseStream: false,
    requestType: protos_sender_pb.CheckVerifyCodeRequest,
    responseType: protos_sender_pb.CheckVerifyCodeeResponse,
    requestSerialize: serialize_standard_CheckVerifyCodeRequest,
    requestDeserialize: deserialize_standard_CheckVerifyCodeRequest,
    responseSerialize: serialize_standard_CheckVerifyCodeeResponse,
    responseDeserialize: deserialize_standard_CheckVerifyCodeeResponse,
  },
  sendVerifyCodeBySms: {
    path: '/standard.Sender/SendVerifyCodeBySms',
    requestStream: false,
    responseStream: false,
    requestType: protos_sender_pb.SendVerifyCodeBySmsRequest,
    responseType: protos_sender_pb.SendVerifyCodeBySmsResponse,
    requestSerialize: serialize_standard_SendVerifyCodeBySmsRequest,
    requestDeserialize: deserialize_standard_SendVerifyCodeBySmsRequest,
    responseSerialize: serialize_standard_SendVerifyCodeBySmsResponse,
    responseDeserialize: deserialize_standard_SendVerifyCodeBySmsResponse,
  },
  destroyVerifyCodeByKey: {
    path: '/standard.Sender/DestroyVerifyCodeByKey',
    requestStream: false,
    responseStream: false,
    requestType: protos_sender_pb.DestroyVerifyCodeByKeyRequest,
    responseType: protos_sender_pb.DestroyVerifyCodeByKeyResponse,
    requestSerialize: serialize_standard_DestroyVerifyCodeByKeyRequest,
    requestDeserialize: deserialize_standard_DestroyVerifyCodeByKeyRequest,
    responseSerialize: serialize_standard_DestroyVerifyCodeByKeyResponse,
    responseDeserialize: deserialize_standard_DestroyVerifyCodeByKeyResponse,
  },
  sendVerifyCodeByEmail: {
    path: '/standard.Sender/SendVerifyCodeByEmail',
    requestStream: false,
    responseStream: false,
    requestType: protos_sender_pb.SendVerifyCodeByEmailRequest,
    responseType: protos_sender_pb.SendVerifyCodeByEmailResponse,
    requestSerialize: serialize_standard_SendVerifyCodeByEmailRequest,
    requestDeserialize: deserialize_standard_SendVerifyCodeByEmailRequest,
    responseSerialize: serialize_standard_SendVerifyCodeByEmailResponse,
    responseDeserialize: deserialize_standard_SendVerifyCodeByEmailResponse,
  },
  sendVerifyCodeByCallPhone: {
    path: '/standard.Sender/SendVerifyCodeByCallPhone',
    requestStream: false,
    responseStream: false,
    requestType: protos_sender_pb.SendVerifyCodeByCallPhoneRequest,
    responseType: protos_sender_pb.SendVerifyCodeByCallPhoneResponse,
    requestSerialize: serialize_standard_SendVerifyCodeByCallPhoneRequest,
    requestDeserialize: deserialize_standard_SendVerifyCodeByCallPhoneRequest,
    responseSerialize: serialize_standard_SendVerifyCodeByCallPhoneResponse,
    responseDeserialize: deserialize_standard_SendVerifyCodeByCallPhoneResponse,
  },
};

exports.SenderClient = grpc.makeGenericClientConstructor(SenderService);

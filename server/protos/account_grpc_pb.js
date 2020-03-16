// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var protos_account_pb = require('../protos/account_pb.js');

function serialize_standard_AddLabelToUserByIDRequest(arg) {
  if (!(arg instanceof protos_account_pb.AddLabelToUserByIDRequest)) {
    throw new Error('Expected argument of type standard.AddLabelToUserByIDRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_AddLabelToUserByIDRequest(buffer_arg) {
  return protos_account_pb.AddLabelToUserByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_AddLabelToUserByIDResponse(arg) {
  if (!(arg instanceof protos_account_pb.AddLabelToUserByIDResponse)) {
    throw new Error('Expected argument of type standard.AddLabelToUserByIDResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_AddLabelToUserByIDResponse(buffer_arg) {
  return protos_account_pb.AddLabelToUserByIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_AddUserToGroupByIDRequest(arg) {
  if (!(arg instanceof protos_account_pb.AddUserToGroupByIDRequest)) {
    throw new Error('Expected argument of type standard.AddUserToGroupByIDRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_AddUserToGroupByIDRequest(buffer_arg) {
  return protos_account_pb.AddUserToGroupByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_AddUserToGroupByIDResponse(arg) {
  if (!(arg instanceof protos_account_pb.AddUserToGroupByIDResponse)) {
    throw new Error('Expected argument of type standard.AddUserToGroupByIDResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_AddUserToGroupByIDResponse(buffer_arg) {
  return protos_account_pb.AddUserToGroupByIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_CreateGroupRequest(arg) {
  if (!(arg instanceof protos_account_pb.CreateGroupRequest)) {
    throw new Error('Expected argument of type standard.CreateGroupRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_CreateGroupRequest(buffer_arg) {
  return protos_account_pb.CreateGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_CreateGroupResponse(arg) {
  if (!(arg instanceof protos_account_pb.CreateGroupResponse)) {
    throw new Error('Expected argument of type standard.CreateGroupResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_CreateGroupResponse(buffer_arg) {
  return protos_account_pb.CreateGroupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_CreateLabelForUserRequest(arg) {
  if (!(arg instanceof protos_account_pb.CreateLabelForUserRequest)) {
    throw new Error('Expected argument of type standard.CreateLabelForUserRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_CreateLabelForUserRequest(buffer_arg) {
  return protos_account_pb.CreateLabelForUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_CreateLabelForUserResponse(arg) {
  if (!(arg instanceof protos_account_pb.CreateLabelForUserResponse)) {
    throw new Error('Expected argument of type standard.CreateLabelForUserResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_CreateLabelForUserResponse(buffer_arg) {
  return protos_account_pb.CreateLabelForUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_CreateLabelRequest(arg) {
  if (!(arg instanceof protos_account_pb.CreateLabelRequest)) {
    throw new Error('Expected argument of type standard.CreateLabelRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_CreateLabelRequest(buffer_arg) {
  return protos_account_pb.CreateLabelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_CreateLabelResponse(arg) {
  if (!(arg instanceof protos_account_pb.CreateLabelResponse)) {
    throw new Error('Expected argument of type standard.CreateLabelResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_CreateLabelResponse(buffer_arg) {
  return protos_account_pb.CreateLabelResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_CreateUserRequest(arg) {
  if (!(arg instanceof protos_account_pb.CreateUserRequest)) {
    throw new Error('Expected argument of type standard.CreateUserRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_CreateUserRequest(buffer_arg) {
  return protos_account_pb.CreateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_CreateUserResponse(arg) {
  if (!(arg instanceof protos_account_pb.CreateUserResponse)) {
    throw new Error('Expected argument of type standard.CreateUserResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_CreateUserResponse(buffer_arg) {
  return protos_account_pb.CreateUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_DeleteGroupByIDRequest(arg) {
  if (!(arg instanceof protos_account_pb.DeleteGroupByIDRequest)) {
    throw new Error('Expected argument of type standard.DeleteGroupByIDRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_DeleteGroupByIDRequest(buffer_arg) {
  return protos_account_pb.DeleteGroupByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_DeleteGroupByIDResponse(arg) {
  if (!(arg instanceof protos_account_pb.DeleteGroupByIDResponse)) {
    throw new Error('Expected argument of type standard.DeleteGroupByIDResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_DeleteGroupByIDResponse(buffer_arg) {
  return protos_account_pb.DeleteGroupByIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_DeleteLabelByIDRequest(arg) {
  if (!(arg instanceof protos_account_pb.DeleteLabelByIDRequest)) {
    throw new Error('Expected argument of type standard.DeleteLabelByIDRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_DeleteLabelByIDRequest(buffer_arg) {
  return protos_account_pb.DeleteLabelByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_DeleteLabelByIDResponse(arg) {
  if (!(arg instanceof protos_account_pb.DeleteLabelByIDResponse)) {
    throw new Error('Expected argument of type standard.DeleteLabelByIDResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_DeleteLabelByIDResponse(buffer_arg) {
  return protos_account_pb.DeleteLabelByIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_DeleteUserByIDRequest(arg) {
  if (!(arg instanceof protos_account_pb.DeleteUserByIDRequest)) {
    throw new Error('Expected argument of type standard.DeleteUserByIDRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_DeleteUserByIDRequest(buffer_arg) {
  return protos_account_pb.DeleteUserByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_DeleteUserByIDResponse(arg) {
  if (!(arg instanceof protos_account_pb.DeleteUserByIDResponse)) {
    throw new Error('Expected argument of type standard.DeleteUserByIDResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_DeleteUserByIDResponse(buffer_arg) {
  return protos_account_pb.DeleteUserByIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_QueryGroupByIDRequest(arg) {
  if (!(arg instanceof protos_account_pb.QueryGroupByIDRequest)) {
    throw new Error('Expected argument of type standard.QueryGroupByIDRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_QueryGroupByIDRequest(buffer_arg) {
  return protos_account_pb.QueryGroupByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_QueryGroupByIDResponse(arg) {
  if (!(arg instanceof protos_account_pb.QueryGroupByIDResponse)) {
    throw new Error('Expected argument of type standard.QueryGroupByIDResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_QueryGroupByIDResponse(buffer_arg) {
  return protos_account_pb.QueryGroupByIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_QueryGroupsRequest(arg) {
  if (!(arg instanceof protos_account_pb.QueryGroupsRequest)) {
    throw new Error('Expected argument of type standard.QueryGroupsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_QueryGroupsRequest(buffer_arg) {
  return protos_account_pb.QueryGroupsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_QueryGroupsResponse(arg) {
  if (!(arg instanceof protos_account_pb.QueryGroupsResponse)) {
    throw new Error('Expected argument of type standard.QueryGroupsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_QueryGroupsResponse(buffer_arg) {
  return protos_account_pb.QueryGroupsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_QueryLabelByIDRequest(arg) {
  if (!(arg instanceof protos_account_pb.QueryLabelByIDRequest)) {
    throw new Error('Expected argument of type standard.QueryLabelByIDRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_QueryLabelByIDRequest(buffer_arg) {
  return protos_account_pb.QueryLabelByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_QueryLabelByIDResponse(arg) {
  if (!(arg instanceof protos_account_pb.QueryLabelByIDResponse)) {
    throw new Error('Expected argument of type standard.QueryLabelByIDResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_QueryLabelByIDResponse(buffer_arg) {
  return protos_account_pb.QueryLabelByIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_QueryLabelsRequest(arg) {
  if (!(arg instanceof protos_account_pb.QueryLabelsRequest)) {
    throw new Error('Expected argument of type standard.QueryLabelsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_QueryLabelsRequest(buffer_arg) {
  return protos_account_pb.QueryLabelsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_QueryLabelsResponse(arg) {
  if (!(arg instanceof protos_account_pb.QueryLabelsResponse)) {
    throw new Error('Expected argument of type standard.QueryLabelsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_QueryLabelsResponse(buffer_arg) {
  return protos_account_pb.QueryLabelsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_QueryUserByIDRequest(arg) {
  if (!(arg instanceof protos_account_pb.QueryUserByIDRequest)) {
    throw new Error('Expected argument of type standard.QueryUserByIDRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_QueryUserByIDRequest(buffer_arg) {
  return protos_account_pb.QueryUserByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_QueryUserByIDResponse(arg) {
  if (!(arg instanceof protos_account_pb.QueryUserByIDResponse)) {
    throw new Error('Expected argument of type standard.QueryUserByIDResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_QueryUserByIDResponse(buffer_arg) {
  return protos_account_pb.QueryUserByIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_QueryUserByUsernameRequest(arg) {
  if (!(arg instanceof protos_account_pb.QueryUserByUsernameRequest)) {
    throw new Error('Expected argument of type standard.QueryUserByUsernameRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_QueryUserByUsernameRequest(buffer_arg) {
  return protos_account_pb.QueryUserByUsernameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_QueryUserByUsernameResponse(arg) {
  if (!(arg instanceof protos_account_pb.QueryUserByUsernameResponse)) {
    throw new Error('Expected argument of type standard.QueryUserByUsernameResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_QueryUserByUsernameResponse(buffer_arg) {
  return protos_account_pb.QueryUserByUsernameResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_QueryUsersByInviterRequest(arg) {
  if (!(arg instanceof protos_account_pb.QueryUsersByInviterRequest)) {
    throw new Error('Expected argument of type standard.QueryUsersByInviterRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_QueryUsersByInviterRequest(buffer_arg) {
  return protos_account_pb.QueryUsersByInviterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_QueryUsersByInviterResponse(arg) {
  if (!(arg instanceof protos_account_pb.QueryUsersByInviterResponse)) {
    throw new Error('Expected argument of type standard.QueryUsersByInviterResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_QueryUsersByInviterResponse(buffer_arg) {
  return protos_account_pb.QueryUsersByInviterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_QueryUsersRequest(arg) {
  if (!(arg instanceof protos_account_pb.QueryUsersRequest)) {
    throw new Error('Expected argument of type standard.QueryUsersRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_QueryUsersRequest(buffer_arg) {
  return protos_account_pb.QueryUsersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_QueryUsersResponse(arg) {
  if (!(arg instanceof protos_account_pb.QueryUsersResponse)) {
    throw new Error('Expected argument of type standard.QueryUsersResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_QueryUsersResponse(buffer_arg) {
  return protos_account_pb.QueryUsersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_RemoveLabelFromUserByIDRequest(arg) {
  if (!(arg instanceof protos_account_pb.RemoveLabelFromUserByIDRequest)) {
    throw new Error('Expected argument of type standard.RemoveLabelFromUserByIDRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_RemoveLabelFromUserByIDRequest(buffer_arg) {
  return protos_account_pb.RemoveLabelFromUserByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_RemoveLabelFromUserByIDResponse(arg) {
  if (!(arg instanceof protos_account_pb.RemoveLabelFromUserByIDResponse)) {
    throw new Error('Expected argument of type standard.RemoveLabelFromUserByIDResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_RemoveLabelFromUserByIDResponse(buffer_arg) {
  return protos_account_pb.RemoveLabelFromUserByIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_RemoveUserFromGroupByIDRequest(arg) {
  if (!(arg instanceof protos_account_pb.RemoveUserFromGroupByIDRequest)) {
    throw new Error('Expected argument of type standard.RemoveUserFromGroupByIDRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_RemoveUserFromGroupByIDRequest(buffer_arg) {
  return protos_account_pb.RemoveUserFromGroupByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_RemoveUserFromGroupByIDResponse(arg) {
  if (!(arg instanceof protos_account_pb.RemoveUserFromGroupByIDResponse)) {
    throw new Error('Expected argument of type standard.RemoveUserFromGroupByIDResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_RemoveUserFromGroupByIDResponse(buffer_arg) {
  return protos_account_pb.RemoveUserFromGroupByIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_UpdateGroupCategoryByIDRequest(arg) {
  if (!(arg instanceof protos_account_pb.UpdateGroupCategoryByIDRequest)) {
    throw new Error('Expected argument of type standard.UpdateGroupCategoryByIDRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_UpdateGroupCategoryByIDRequest(buffer_arg) {
  return protos_account_pb.UpdateGroupCategoryByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_UpdateGroupCategoryByIDResponse(arg) {
  if (!(arg instanceof protos_account_pb.UpdateGroupCategoryByIDResponse)) {
    throw new Error('Expected argument of type standard.UpdateGroupCategoryByIDResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_UpdateGroupCategoryByIDResponse(buffer_arg) {
  return protos_account_pb.UpdateGroupCategoryByIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_UpdateGroupDescriptionByIDRequest(arg) {
  if (!(arg instanceof protos_account_pb.UpdateGroupDescriptionByIDRequest)) {
    throw new Error('Expected argument of type standard.UpdateGroupDescriptionByIDRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_UpdateGroupDescriptionByIDRequest(buffer_arg) {
  return protos_account_pb.UpdateGroupDescriptionByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_UpdateGroupDescriptionByIDResponse(arg) {
  if (!(arg instanceof protos_account_pb.UpdateGroupDescriptionByIDResponse)) {
    throw new Error('Expected argument of type standard.UpdateGroupDescriptionByIDResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_UpdateGroupDescriptionByIDResponse(buffer_arg) {
  return protos_account_pb.UpdateGroupDescriptionByIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_UpdateGroupNameByIDRequest(arg) {
  if (!(arg instanceof protos_account_pb.UpdateGroupNameByIDRequest)) {
    throw new Error('Expected argument of type standard.UpdateGroupNameByIDRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_UpdateGroupNameByIDRequest(buffer_arg) {
  return protos_account_pb.UpdateGroupNameByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_UpdateGroupNameByIDResponse(arg) {
  if (!(arg instanceof protos_account_pb.UpdateGroupNameByIDResponse)) {
    throw new Error('Expected argument of type standard.UpdateGroupNameByIDResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_UpdateGroupNameByIDResponse(buffer_arg) {
  return protos_account_pb.UpdateGroupNameByIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_UpdateGroupStateByIDRequest(arg) {
  if (!(arg instanceof protos_account_pb.UpdateGroupStateByIDRequest)) {
    throw new Error('Expected argument of type standard.UpdateGroupStateByIDRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_UpdateGroupStateByIDRequest(buffer_arg) {
  return protos_account_pb.UpdateGroupStateByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_UpdateGroupStateByIDResponse(arg) {
  if (!(arg instanceof protos_account_pb.UpdateGroupStateByIDResponse)) {
    throw new Error('Expected argument of type standard.UpdateGroupStateByIDResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_UpdateGroupStateByIDResponse(buffer_arg) {
  return protos_account_pb.UpdateGroupStateByIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_UpdateLabelCategoryByIDRequest(arg) {
  if (!(arg instanceof protos_account_pb.UpdateLabelCategoryByIDRequest)) {
    throw new Error('Expected argument of type standard.UpdateLabelCategoryByIDRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_UpdateLabelCategoryByIDRequest(buffer_arg) {
  return protos_account_pb.UpdateLabelCategoryByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_UpdateLabelCategoryByIDResponse(arg) {
  if (!(arg instanceof protos_account_pb.UpdateLabelCategoryByIDResponse)) {
    throw new Error('Expected argument of type standard.UpdateLabelCategoryByIDResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_UpdateLabelCategoryByIDResponse(buffer_arg) {
  return protos_account_pb.UpdateLabelCategoryByIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_UpdateLabelNameByIDRequest(arg) {
  if (!(arg instanceof protos_account_pb.UpdateLabelNameByIDRequest)) {
    throw new Error('Expected argument of type standard.UpdateLabelNameByIDRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_UpdateLabelNameByIDRequest(buffer_arg) {
  return protos_account_pb.UpdateLabelNameByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_UpdateLabelNameByIDResponse(arg) {
  if (!(arg instanceof protos_account_pb.UpdateLabelNameByIDResponse)) {
    throw new Error('Expected argument of type standard.UpdateLabelNameByIDResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_UpdateLabelNameByIDResponse(buffer_arg) {
  return protos_account_pb.UpdateLabelNameByIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_UpdateLabelStateByIDRequest(arg) {
  if (!(arg instanceof protos_account_pb.UpdateLabelStateByIDRequest)) {
    throw new Error('Expected argument of type standard.UpdateLabelStateByIDRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_UpdateLabelStateByIDRequest(buffer_arg) {
  return protos_account_pb.UpdateLabelStateByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_UpdateLabelStateByIDResponse(arg) {
  if (!(arg instanceof protos_account_pb.UpdateLabelStateByIDResponse)) {
    throw new Error('Expected argument of type standard.UpdateLabelStateByIDResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_UpdateLabelStateByIDResponse(buffer_arg) {
  return protos_account_pb.UpdateLabelStateByIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_UpdateLabelValueByIDRequest(arg) {
  if (!(arg instanceof protos_account_pb.UpdateLabelValueByIDRequest)) {
    throw new Error('Expected argument of type standard.UpdateLabelValueByIDRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_UpdateLabelValueByIDRequest(buffer_arg) {
  return protos_account_pb.UpdateLabelValueByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_UpdateLabelValueByIDResponse(arg) {
  if (!(arg instanceof protos_account_pb.UpdateLabelValueByIDResponse)) {
    throw new Error('Expected argument of type standard.UpdateLabelValueByIDResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_UpdateLabelValueByIDResponse(buffer_arg) {
  return protos_account_pb.UpdateLabelValueByIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_UpdateUserAvatarByIDRequest(arg) {
  if (!(arg instanceof protos_account_pb.UpdateUserAvatarByIDRequest)) {
    throw new Error('Expected argument of type standard.UpdateUserAvatarByIDRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_UpdateUserAvatarByIDRequest(buffer_arg) {
  return protos_account_pb.UpdateUserAvatarByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_UpdateUserAvatarByIDResponse(arg) {
  if (!(arg instanceof protos_account_pb.UpdateUserAvatarByIDResponse)) {
    throw new Error('Expected argument of type standard.UpdateUserAvatarByIDResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_UpdateUserAvatarByIDResponse(buffer_arg) {
  return protos_account_pb.UpdateUserAvatarByIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_UpdateUserCategoryByIDRequest(arg) {
  if (!(arg instanceof protos_account_pb.UpdateUserCategoryByIDRequest)) {
    throw new Error('Expected argument of type standard.UpdateUserCategoryByIDRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_UpdateUserCategoryByIDRequest(buffer_arg) {
  return protos_account_pb.UpdateUserCategoryByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_UpdateUserCategoryByIDResponse(arg) {
  if (!(arg instanceof protos_account_pb.UpdateUserCategoryByIDResponse)) {
    throw new Error('Expected argument of type standard.UpdateUserCategoryByIDResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_UpdateUserCategoryByIDResponse(buffer_arg) {
  return protos_account_pb.UpdateUserCategoryByIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_UpdateUserInviterByIDRequest(arg) {
  if (!(arg instanceof protos_account_pb.UpdateUserInviterByIDRequest)) {
    throw new Error('Expected argument of type standard.UpdateUserInviterByIDRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_UpdateUserInviterByIDRequest(buffer_arg) {
  return protos_account_pb.UpdateUserInviterByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_UpdateUserInviterByIDResponse(arg) {
  if (!(arg instanceof protos_account_pb.UpdateUserInviterByIDResponse)) {
    throw new Error('Expected argument of type standard.UpdateUserInviterByIDResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_UpdateUserInviterByIDResponse(buffer_arg) {
  return protos_account_pb.UpdateUserInviterByIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_UpdateUserNicknameByIDRequest(arg) {
  if (!(arg instanceof protos_account_pb.UpdateUserNicknameByIDRequest)) {
    throw new Error('Expected argument of type standard.UpdateUserNicknameByIDRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_UpdateUserNicknameByIDRequest(buffer_arg) {
  return protos_account_pb.UpdateUserNicknameByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_UpdateUserNicknameByIDResponse(arg) {
  if (!(arg instanceof protos_account_pb.UpdateUserNicknameByIDResponse)) {
    throw new Error('Expected argument of type standard.UpdateUserNicknameByIDResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_UpdateUserNicknameByIDResponse(buffer_arg) {
  return protos_account_pb.UpdateUserNicknameByIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_UpdateUserPasswordByIDRequest(arg) {
  if (!(arg instanceof protos_account_pb.UpdateUserPasswordByIDRequest)) {
    throw new Error('Expected argument of type standard.UpdateUserPasswordByIDRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_UpdateUserPasswordByIDRequest(buffer_arg) {
  return protos_account_pb.UpdateUserPasswordByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_UpdateUserPasswordByIDResponse(arg) {
  if (!(arg instanceof protos_account_pb.UpdateUserPasswordByIDResponse)) {
    throw new Error('Expected argument of type standard.UpdateUserPasswordByIDResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_UpdateUserPasswordByIDResponse(buffer_arg) {
  return protos_account_pb.UpdateUserPasswordByIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_VerifyUserPasswordByIDRequest(arg) {
  if (!(arg instanceof protos_account_pb.VerifyUserPasswordByIDRequest)) {
    throw new Error('Expected argument of type standard.VerifyUserPasswordByIDRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_VerifyUserPasswordByIDRequest(buffer_arg) {
  return protos_account_pb.VerifyUserPasswordByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_VerifyUserPasswordByIDResponse(arg) {
  if (!(arg instanceof protos_account_pb.VerifyUserPasswordByIDResponse)) {
    throw new Error('Expected argument of type standard.VerifyUserPasswordByIDResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_VerifyUserPasswordByIDResponse(buffer_arg) {
  return protos_account_pb.VerifyUserPasswordByIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_VerifyUserPasswordByUsernameRequest(arg) {
  if (!(arg instanceof protos_account_pb.VerifyUserPasswordByUsernameRequest)) {
    throw new Error('Expected argument of type standard.VerifyUserPasswordByUsernameRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_VerifyUserPasswordByUsernameRequest(buffer_arg) {
  return protos_account_pb.VerifyUserPasswordByUsernameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_standard_VerifyUserPasswordByUsernameResponse(arg) {
  if (!(arg instanceof protos_account_pb.VerifyUserPasswordByUsernameResponse)) {
    throw new Error('Expected argument of type standard.VerifyUserPasswordByUsernameResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_standard_VerifyUserPasswordByUsernameResponse(buffer_arg) {
  return protos_account_pb.VerifyUserPasswordByUsernameResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AccountService = exports.AccountService = {
  // 用户操作
  createUser: {
    path: '/standard.Account/CreateUser',
    requestStream: false,
    responseStream: false,
    requestType: protos_account_pb.CreateUserRequest,
    responseType: protos_account_pb.CreateUserResponse,
    requestSerialize: serialize_standard_CreateUserRequest,
    requestDeserialize: deserialize_standard_CreateUserRequest,
    responseSerialize: serialize_standard_CreateUserResponse,
    responseDeserialize: deserialize_standard_CreateUserResponse,
  },
  queryUsers: {
    path: '/standard.Account/QueryUsers',
    requestStream: false,
    responseStream: false,
    requestType: protos_account_pb.QueryUsersRequest,
    responseType: protos_account_pb.QueryUsersResponse,
    requestSerialize: serialize_standard_QueryUsersRequest,
    requestDeserialize: deserialize_standard_QueryUsersRequest,
    responseSerialize: serialize_standard_QueryUsersResponse,
    responseDeserialize: deserialize_standard_QueryUsersResponse,
  },
  queryUserByID: {
    path: '/standard.Account/QueryUserByID',
    requestStream: false,
    responseStream: false,
    requestType: protos_account_pb.QueryUserByIDRequest,
    responseType: protos_account_pb.QueryUserByIDResponse,
    requestSerialize: serialize_standard_QueryUserByIDRequest,
    requestDeserialize: deserialize_standard_QueryUserByIDRequest,
    responseSerialize: serialize_standard_QueryUserByIDResponse,
    responseDeserialize: deserialize_standard_QueryUserByIDResponse,
  },
  queryUsersByInviter: {
    path: '/standard.Account/QueryUsersByInviter',
    requestStream: false,
    responseStream: false,
    requestType: protos_account_pb.QueryUsersByInviterRequest,
    responseType: protos_account_pb.QueryUsersByInviterResponse,
    requestSerialize: serialize_standard_QueryUsersByInviterRequest,
    requestDeserialize: deserialize_standard_QueryUsersByInviterRequest,
    responseSerialize: serialize_standard_QueryUsersByInviterResponse,
    responseDeserialize: deserialize_standard_QueryUsersByInviterResponse,
  },
  deleteUserByID: {
    path: '/standard.Account/DeleteUserByID',
    requestStream: false,
    responseStream: false,
    requestType: protos_account_pb.DeleteUserByIDRequest,
    responseType: protos_account_pb.DeleteUserByIDResponse,
    requestSerialize: serialize_standard_DeleteUserByIDRequest,
    requestDeserialize: deserialize_standard_DeleteUserByIDRequest,
    responseSerialize: serialize_standard_DeleteUserByIDResponse,
    responseDeserialize: deserialize_standard_DeleteUserByIDResponse,
  },
  queryUserByUsername: {
    path: '/standard.Account/QueryUserByUsername',
    requestStream: false,
    responseStream: false,
    requestType: protos_account_pb.QueryUserByUsernameRequest,
    responseType: protos_account_pb.QueryUserByUsernameResponse,
    requestSerialize: serialize_standard_QueryUserByUsernameRequest,
    requestDeserialize: deserialize_standard_QueryUserByUsernameRequest,
    responseSerialize: serialize_standard_QueryUserByUsernameResponse,
    responseDeserialize: deserialize_standard_QueryUserByUsernameResponse,
  },
  updateUserCategoryByID: {
    path: '/standard.Account/UpdateUserCategoryByID',
    requestStream: false,
    responseStream: false,
    requestType: protos_account_pb.UpdateUserCategoryByIDRequest,
    responseType: protos_account_pb.UpdateUserCategoryByIDResponse,
    requestSerialize: serialize_standard_UpdateUserCategoryByIDRequest,
    requestDeserialize: deserialize_standard_UpdateUserCategoryByIDRequest,
    responseSerialize: serialize_standard_UpdateUserCategoryByIDResponse,
    responseDeserialize: deserialize_standard_UpdateUserCategoryByIDResponse,
  },
  updateUserAvatarByID: {
    path: '/standard.Account/UpdateUserAvatarByID',
    requestStream: false,
    responseStream: false,
    requestType: protos_account_pb.UpdateUserAvatarByIDRequest,
    responseType: protos_account_pb.UpdateUserAvatarByIDResponse,
    requestSerialize: serialize_standard_UpdateUserAvatarByIDRequest,
    requestDeserialize: deserialize_standard_UpdateUserAvatarByIDRequest,
    responseSerialize: serialize_standard_UpdateUserAvatarByIDResponse,
    responseDeserialize: deserialize_standard_UpdateUserAvatarByIDResponse,
  },
  updateUserInviterByID: {
    path: '/standard.Account/UpdateUserInviterByID',
    requestStream: false,
    responseStream: false,
    requestType: protos_account_pb.UpdateUserInviterByIDRequest,
    responseType: protos_account_pb.UpdateUserInviterByIDResponse,
    requestSerialize: serialize_standard_UpdateUserInviterByIDRequest,
    requestDeserialize: deserialize_standard_UpdateUserInviterByIDRequest,
    responseSerialize: serialize_standard_UpdateUserInviterByIDResponse,
    responseDeserialize: deserialize_standard_UpdateUserInviterByIDResponse,
  },
  updateUserNicknameByID: {
    path: '/standard.Account/UpdateUserNicknameByID',
    requestStream: false,
    responseStream: false,
    requestType: protos_account_pb.UpdateUserNicknameByIDRequest,
    responseType: protos_account_pb.UpdateUserNicknameByIDResponse,
    requestSerialize: serialize_standard_UpdateUserNicknameByIDRequest,
    requestDeserialize: deserialize_standard_UpdateUserNicknameByIDRequest,
    responseSerialize: serialize_standard_UpdateUserNicknameByIDResponse,
    responseDeserialize: deserialize_standard_UpdateUserNicknameByIDResponse,
  },
  updateUserPasswordByID: {
    path: '/standard.Account/UpdateUserPasswordByID',
    requestStream: false,
    responseStream: false,
    requestType: protos_account_pb.UpdateUserPasswordByIDRequest,
    responseType: protos_account_pb.UpdateUserPasswordByIDResponse,
    requestSerialize: serialize_standard_UpdateUserPasswordByIDRequest,
    requestDeserialize: deserialize_standard_UpdateUserPasswordByIDRequest,
    responseSerialize: serialize_standard_UpdateUserPasswordByIDResponse,
    responseDeserialize: deserialize_standard_UpdateUserPasswordByIDResponse,
  },
  verifyUserPasswordByID: {
    path: '/standard.Account/VerifyUserPasswordByID',
    requestStream: false,
    responseStream: false,
    requestType: protos_account_pb.VerifyUserPasswordByIDRequest,
    responseType: protos_account_pb.VerifyUserPasswordByIDResponse,
    requestSerialize: serialize_standard_VerifyUserPasswordByIDRequest,
    requestDeserialize: deserialize_standard_VerifyUserPasswordByIDRequest,
    responseSerialize: serialize_standard_VerifyUserPasswordByIDResponse,
    responseDeserialize: deserialize_standard_VerifyUserPasswordByIDResponse,
  },
  verifyUserPasswordByUsername: {
    path: '/standard.Account/VerifyUserPasswordByUsername',
    requestStream: false,
    responseStream: false,
    requestType: protos_account_pb.VerifyUserPasswordByUsernameRequest,
    responseType: protos_account_pb.VerifyUserPasswordByUsernameResponse,
    requestSerialize: serialize_standard_VerifyUserPasswordByUsernameRequest,
    requestDeserialize: deserialize_standard_VerifyUserPasswordByUsernameRequest,
    responseSerialize: serialize_standard_VerifyUserPasswordByUsernameResponse,
    responseDeserialize: deserialize_standard_VerifyUserPasswordByUsernameResponse,
  },
  // 标签操作 标签用来处理其他额外的用户数据、例如一些地址 手机 邮箱等信息
  // 创建一个标签 然后分配给一个用户 多个用户可以共享同一个标签（共有数据）
  queryLabels: {
    path: '/standard.Account/QueryLabels',
    requestStream: false,
    responseStream: false,
    requestType: protos_account_pb.QueryLabelsRequest,
    responseType: protos_account_pb.QueryLabelsResponse,
    requestSerialize: serialize_standard_QueryLabelsRequest,
    requestDeserialize: deserialize_standard_QueryLabelsRequest,
    responseSerialize: serialize_standard_QueryLabelsResponse,
    responseDeserialize: deserialize_standard_QueryLabelsResponse,
  },
  createLabel: {
    path: '/standard.Account/CreateLabel',
    requestStream: false,
    responseStream: false,
    requestType: protos_account_pb.CreateLabelRequest,
    responseType: protos_account_pb.CreateLabelResponse,
    requestSerialize: serialize_standard_CreateLabelRequest,
    requestDeserialize: deserialize_standard_CreateLabelRequest,
    responseSerialize: serialize_standard_CreateLabelResponse,
    responseDeserialize: deserialize_standard_CreateLabelResponse,
  },
  createLabelForUser: {
    path: '/standard.Account/CreateLabelForUser',
    requestStream: false,
    responseStream: false,
    requestType: protos_account_pb.CreateLabelForUserRequest,
    responseType: protos_account_pb.CreateLabelForUserResponse,
    requestSerialize: serialize_standard_CreateLabelForUserRequest,
    requestDeserialize: deserialize_standard_CreateLabelForUserRequest,
    responseSerialize: serialize_standard_CreateLabelForUserResponse,
    responseDeserialize: deserialize_standard_CreateLabelForUserResponse,
  },
  queryLabelByID: {
    path: '/standard.Account/QueryLabelByID',
    requestStream: false,
    responseStream: false,
    requestType: protos_account_pb.QueryLabelByIDRequest,
    responseType: protos_account_pb.QueryLabelByIDResponse,
    requestSerialize: serialize_standard_QueryLabelByIDRequest,
    requestDeserialize: deserialize_standard_QueryLabelByIDRequest,
    responseSerialize: serialize_standard_QueryLabelByIDResponse,
    responseDeserialize: deserialize_standard_QueryLabelByIDResponse,
  },
  deleteLabelByID: {
    path: '/standard.Account/DeleteLabelByID',
    requestStream: false,
    responseStream: false,
    requestType: protos_account_pb.DeleteLabelByIDRequest,
    responseType: protos_account_pb.DeleteLabelByIDResponse,
    requestSerialize: serialize_standard_DeleteLabelByIDRequest,
    requestDeserialize: deserialize_standard_DeleteLabelByIDRequest,
    responseSerialize: serialize_standard_DeleteLabelByIDResponse,
    responseDeserialize: deserialize_standard_DeleteLabelByIDResponse,
  },
  updateLabelNameByID: {
    path: '/standard.Account/UpdateLabelNameByID',
    requestStream: false,
    responseStream: false,
    requestType: protos_account_pb.UpdateLabelNameByIDRequest,
    responseType: protos_account_pb.UpdateLabelNameByIDResponse,
    requestSerialize: serialize_standard_UpdateLabelNameByIDRequest,
    requestDeserialize: deserialize_standard_UpdateLabelNameByIDRequest,
    responseSerialize: serialize_standard_UpdateLabelNameByIDResponse,
    responseDeserialize: deserialize_standard_UpdateLabelNameByIDResponse,
  },
  updateLabelCategoryByID: {
    path: '/standard.Account/UpdateLabelCategoryByID',
    requestStream: false,
    responseStream: false,
    requestType: protos_account_pb.UpdateLabelCategoryByIDRequest,
    responseType: protos_account_pb.UpdateLabelCategoryByIDResponse,
    requestSerialize: serialize_standard_UpdateLabelCategoryByIDRequest,
    requestDeserialize: deserialize_standard_UpdateLabelCategoryByIDRequest,
    responseSerialize: serialize_standard_UpdateLabelCategoryByIDResponse,
    responseDeserialize: deserialize_standard_UpdateLabelCategoryByIDResponse,
  },
  updateLabelStateByID: {
    path: '/standard.Account/UpdateLabelStateByID',
    requestStream: false,
    responseStream: false,
    requestType: protos_account_pb.UpdateLabelStateByIDRequest,
    responseType: protos_account_pb.UpdateLabelStateByIDResponse,
    requestSerialize: serialize_standard_UpdateLabelStateByIDRequest,
    requestDeserialize: deserialize_standard_UpdateLabelStateByIDRequest,
    responseSerialize: serialize_standard_UpdateLabelStateByIDResponse,
    responseDeserialize: deserialize_standard_UpdateLabelStateByIDResponse,
  },
  updateLabelValueByID: {
    path: '/standard.Account/UpdateLabelValueByID',
    requestStream: false,
    responseStream: false,
    requestType: protos_account_pb.UpdateLabelValueByIDRequest,
    responseType: protos_account_pb.UpdateLabelValueByIDResponse,
    requestSerialize: serialize_standard_UpdateLabelValueByIDRequest,
    requestDeserialize: deserialize_standard_UpdateLabelValueByIDRequest,
    responseSerialize: serialize_standard_UpdateLabelValueByIDResponse,
    responseDeserialize: deserialize_standard_UpdateLabelValueByIDResponse,
  },
  addLabelToUserByID: {
    path: '/standard.Account/AddLabelToUserByID',
    requestStream: false,
    responseStream: false,
    requestType: protos_account_pb.AddLabelToUserByIDRequest,
    responseType: protos_account_pb.AddLabelToUserByIDResponse,
    requestSerialize: serialize_standard_AddLabelToUserByIDRequest,
    requestDeserialize: deserialize_standard_AddLabelToUserByIDRequest,
    responseSerialize: serialize_standard_AddLabelToUserByIDResponse,
    responseDeserialize: deserialize_standard_AddLabelToUserByIDResponse,
  },
  removeLabelFromUserByID: {
    path: '/standard.Account/RemoveLabelFromUserByID',
    requestStream: false,
    responseStream: false,
    requestType: protos_account_pb.RemoveLabelFromUserByIDRequest,
    responseType: protos_account_pb.RemoveLabelFromUserByIDResponse,
    requestSerialize: serialize_standard_RemoveLabelFromUserByIDRequest,
    requestDeserialize: deserialize_standard_RemoveLabelFromUserByIDRequest,
    responseSerialize: serialize_standard_RemoveLabelFromUserByIDResponse,
    responseDeserialize: deserialize_standard_RemoveLabelFromUserByIDResponse,
  },
  // 组操作
  // 同一个用户可以存在于多个组里
  createGroup: {
    path: '/standard.Account/CreateGroup',
    requestStream: false,
    responseStream: false,
    requestType: protos_account_pb.CreateGroupRequest,
    responseType: protos_account_pb.CreateGroupResponse,
    requestSerialize: serialize_standard_CreateGroupRequest,
    requestDeserialize: deserialize_standard_CreateGroupRequest,
    responseSerialize: serialize_standard_CreateGroupResponse,
    responseDeserialize: deserialize_standard_CreateGroupResponse,
  },
  queryGroups: {
    path: '/standard.Account/QueryGroups',
    requestStream: false,
    responseStream: false,
    requestType: protos_account_pb.QueryGroupsRequest,
    responseType: protos_account_pb.QueryGroupsResponse,
    requestSerialize: serialize_standard_QueryGroupsRequest,
    requestDeserialize: deserialize_standard_QueryGroupsRequest,
    responseSerialize: serialize_standard_QueryGroupsResponse,
    responseDeserialize: deserialize_standard_QueryGroupsResponse,
  },
  queryGroupByID: {
    path: '/standard.Account/QueryGroupByID',
    requestStream: false,
    responseStream: false,
    requestType: protos_account_pb.QueryGroupByIDRequest,
    responseType: protos_account_pb.QueryGroupByIDResponse,
    requestSerialize: serialize_standard_QueryGroupByIDRequest,
    requestDeserialize: deserialize_standard_QueryGroupByIDRequest,
    responseSerialize: serialize_standard_QueryGroupByIDResponse,
    responseDeserialize: deserialize_standard_QueryGroupByIDResponse,
  },
  deleteGroupByID: {
    path: '/standard.Account/DeleteGroupByID',
    requestStream: false,
    responseStream: false,
    requestType: protos_account_pb.DeleteGroupByIDRequest,
    responseType: protos_account_pb.DeleteGroupByIDResponse,
    requestSerialize: serialize_standard_DeleteGroupByIDRequest,
    requestDeserialize: deserialize_standard_DeleteGroupByIDRequest,
    responseSerialize: serialize_standard_DeleteGroupByIDResponse,
    responseDeserialize: deserialize_standard_DeleteGroupByIDResponse,
  },
  updateGroupNameByID: {
    path: '/standard.Account/UpdateGroupNameByID',
    requestStream: false,
    responseStream: false,
    requestType: protos_account_pb.UpdateGroupNameByIDRequest,
    responseType: protos_account_pb.UpdateGroupNameByIDResponse,
    requestSerialize: serialize_standard_UpdateGroupNameByIDRequest,
    requestDeserialize: deserialize_standard_UpdateGroupNameByIDRequest,
    responseSerialize: serialize_standard_UpdateGroupNameByIDResponse,
    responseDeserialize: deserialize_standard_UpdateGroupNameByIDResponse,
  },
  updateGroupCategoryByID: {
    path: '/standard.Account/UpdateGroupCategoryByID',
    requestStream: false,
    responseStream: false,
    requestType: protos_account_pb.UpdateGroupCategoryByIDRequest,
    responseType: protos_account_pb.UpdateGroupCategoryByIDResponse,
    requestSerialize: serialize_standard_UpdateGroupCategoryByIDRequest,
    requestDeserialize: deserialize_standard_UpdateGroupCategoryByIDRequest,
    responseSerialize: serialize_standard_UpdateGroupCategoryByIDResponse,
    responseDeserialize: deserialize_standard_UpdateGroupCategoryByIDResponse,
  },
  updateGroupStateByID: {
    path: '/standard.Account/UpdateGroupStateByID',
    requestStream: false,
    responseStream: false,
    requestType: protos_account_pb.UpdateGroupStateByIDRequest,
    responseType: protos_account_pb.UpdateGroupStateByIDResponse,
    requestSerialize: serialize_standard_UpdateGroupStateByIDRequest,
    requestDeserialize: deserialize_standard_UpdateGroupStateByIDRequest,
    responseSerialize: serialize_standard_UpdateGroupStateByIDResponse,
    responseDeserialize: deserialize_standard_UpdateGroupStateByIDResponse,
  },
  updateGroupDescriptionByID: {
    path: '/standard.Account/UpdateGroupDescriptionByID',
    requestStream: false,
    responseStream: false,
    requestType: protos_account_pb.UpdateGroupDescriptionByIDRequest,
    responseType: protos_account_pb.UpdateGroupDescriptionByIDResponse,
    requestSerialize: serialize_standard_UpdateGroupDescriptionByIDRequest,
    requestDeserialize: deserialize_standard_UpdateGroupDescriptionByIDRequest,
    responseSerialize: serialize_standard_UpdateGroupDescriptionByIDResponse,
    responseDeserialize: deserialize_standard_UpdateGroupDescriptionByIDResponse,
  },
  // 组关系操作
  addUserToGroupByID: {
    path: '/standard.Account/AddUserToGroupByID',
    requestStream: false,
    responseStream: false,
    requestType: protos_account_pb.AddUserToGroupByIDRequest,
    responseType: protos_account_pb.AddUserToGroupByIDResponse,
    requestSerialize: serialize_standard_AddUserToGroupByIDRequest,
    requestDeserialize: deserialize_standard_AddUserToGroupByIDRequest,
    responseSerialize: serialize_standard_AddUserToGroupByIDResponse,
    responseDeserialize: deserialize_standard_AddUserToGroupByIDResponse,
  },
  removeUserFromGroupByID: {
    path: '/standard.Account/RemoveUserFromGroupByID',
    requestStream: false,
    responseStream: false,
    requestType: protos_account_pb.RemoveUserFromGroupByIDRequest,
    responseType: protos_account_pb.RemoveUserFromGroupByIDResponse,
    requestSerialize: serialize_standard_RemoveUserFromGroupByIDRequest,
    requestDeserialize: deserialize_standard_RemoveUserFromGroupByIDRequest,
    responseSerialize: serialize_standard_RemoveUserFromGroupByIDResponse,
    responseDeserialize: deserialize_standard_RemoveUserFromGroupByIDResponse,
  },
};

exports.AccountClient = grpc.makeGenericClientConstructor(AccountService);

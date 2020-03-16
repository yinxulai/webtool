// package: standard
// file: protos/account.proto

import * as grpc from 'grpc';
import * as protos_account_pb from '../protos/account_pb';

interface IAccountService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createUser: ICreateUser
  queryUsers: IQueryUsers
  queryUserByID: IQueryUserByID
  queryUsersByInviter: IQueryUsersByInviter
  deleteUserByID: IDeleteUserByID
  queryUserByUsername: IQueryUserByUsername
  updateUserCategoryByID: IUpdateUserCategoryByID
  updateUserAvatarByID: IUpdateUserAvatarByID
  updateUserInviterByID: IUpdateUserInviterByID
  updateUserNicknameByID: IUpdateUserNicknameByID
  updateUserPasswordByID: IUpdateUserPasswordByID
  verifyUserPasswordByID: IVerifyUserPasswordByID
  verifyUserPasswordByUsername: IVerifyUserPasswordByUsername
  queryLabels: IQueryLabels
  createLabel: ICreateLabel
  createLabelForUser: ICreateLabelForUser
  queryLabelByID: IQueryLabelByID
  deleteLabelByID: IDeleteLabelByID
  updateLabelNameByID: IUpdateLabelNameByID
  updateLabelCategoryByID: IUpdateLabelCategoryByID
  updateLabelStateByID: IUpdateLabelStateByID
  updateLabelValueByID: IUpdateLabelValueByID
  addLabelToUserByID: IAddLabelToUserByID
  removeLabelFromUserByID: IRemoveLabelFromUserByID
  createGroup: ICreateGroup
  queryGroups: IQueryGroups
  queryGroupByID: IQueryGroupByID
  deleteGroupByID: IDeleteGroupByID
  updateGroupNameByID: IUpdateGroupNameByID
  updateGroupCategoryByID: IUpdateGroupCategoryByID
  updateGroupStateByID: IUpdateGroupStateByID
  updateGroupDescriptionByID: IUpdateGroupDescriptionByID
  addUserToGroupByID: IAddUserToGroupByID
  removeUserFromGroupByID: IRemoveUserFromGroupByID
}

interface ICreateUser {
  path: string; // "/standard.Account/CreateUser"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: protos_account_pb.CreateUserRequest;
  responseType: protos_account_pb.CreateUserResponse;
  requestSerialize: (arg: protos_account_pb.CreateUserRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => protos_account_pb.CreateUserRequest;
  responseSerialize: (arg: protos_account_pb.CreateUserResponse) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => protos_account_pb.CreateUserResponse;
}

interface IQueryUsers {
  path: string; // "/standard.Account/QueryUsers"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: protos_account_pb.QueryUsersRequest;
  responseType: protos_account_pb.QueryUsersResponse;
  requestSerialize: (arg: protos_account_pb.QueryUsersRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => protos_account_pb.QueryUsersRequest;
  responseSerialize: (arg: protos_account_pb.QueryUsersResponse) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => protos_account_pb.QueryUsersResponse;
}

interface IQueryUserByID {
  path: string; // "/standard.Account/QueryUserByID"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: protos_account_pb.QueryUserByIDRequest;
  responseType: protos_account_pb.QueryUserByIDResponse;
  requestSerialize: (arg: protos_account_pb.QueryUserByIDRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => protos_account_pb.QueryUserByIDRequest;
  responseSerialize: (arg: protos_account_pb.QueryUserByIDResponse) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => protos_account_pb.QueryUserByIDResponse;
}

interface IQueryUsersByInviter {
  path: string; // "/standard.Account/QueryUsersByInviter"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: protos_account_pb.QueryUsersByInviterRequest;
  responseType: protos_account_pb.QueryUsersByInviterResponse;
  requestSerialize: (arg: protos_account_pb.QueryUsersByInviterRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => protos_account_pb.QueryUsersByInviterRequest;
  responseSerialize: (arg: protos_account_pb.QueryUsersByInviterResponse) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => protos_account_pb.QueryUsersByInviterResponse;
}

interface IDeleteUserByID {
  path: string; // "/standard.Account/DeleteUserByID"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: protos_account_pb.DeleteUserByIDRequest;
  responseType: protos_account_pb.DeleteUserByIDResponse;
  requestSerialize: (arg: protos_account_pb.DeleteUserByIDRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => protos_account_pb.DeleteUserByIDRequest;
  responseSerialize: (arg: protos_account_pb.DeleteUserByIDResponse) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => protos_account_pb.DeleteUserByIDResponse;
}

interface IQueryUserByUsername {
  path: string; // "/standard.Account/QueryUserByUsername"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: protos_account_pb.QueryUserByUsernameRequest;
  responseType: protos_account_pb.QueryUserByUsernameResponse;
  requestSerialize: (arg: protos_account_pb.QueryUserByUsernameRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => protos_account_pb.QueryUserByUsernameRequest;
  responseSerialize: (arg: protos_account_pb.QueryUserByUsernameResponse) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => protos_account_pb.QueryUserByUsernameResponse;
}

interface IUpdateUserCategoryByID {
  path: string; // "/standard.Account/UpdateUserCategoryByID"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: protos_account_pb.UpdateUserCategoryByIDRequest;
  responseType: protos_account_pb.UpdateUserCategoryByIDResponse;
  requestSerialize: (arg: protos_account_pb.UpdateUserCategoryByIDRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => protos_account_pb.UpdateUserCategoryByIDRequest;
  responseSerialize: (arg: protos_account_pb.UpdateUserCategoryByIDResponse) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => protos_account_pb.UpdateUserCategoryByIDResponse;
}

interface IUpdateUserAvatarByID {
  path: string; // "/standard.Account/UpdateUserAvatarByID"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: protos_account_pb.UpdateUserAvatarByIDRequest;
  responseType: protos_account_pb.UpdateUserAvatarByIDResponse;
  requestSerialize: (arg: protos_account_pb.UpdateUserAvatarByIDRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => protos_account_pb.UpdateUserAvatarByIDRequest;
  responseSerialize: (arg: protos_account_pb.UpdateUserAvatarByIDResponse) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => protos_account_pb.UpdateUserAvatarByIDResponse;
}

interface IUpdateUserInviterByID {
  path: string; // "/standard.Account/UpdateUserInviterByID"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: protos_account_pb.UpdateUserInviterByIDRequest;
  responseType: protos_account_pb.UpdateUserInviterByIDResponse;
  requestSerialize: (arg: protos_account_pb.UpdateUserInviterByIDRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => protos_account_pb.UpdateUserInviterByIDRequest;
  responseSerialize: (arg: protos_account_pb.UpdateUserInviterByIDResponse) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => protos_account_pb.UpdateUserInviterByIDResponse;
}

interface IUpdateUserNicknameByID {
  path: string; // "/standard.Account/UpdateUserNicknameByID"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: protos_account_pb.UpdateUserNicknameByIDRequest;
  responseType: protos_account_pb.UpdateUserNicknameByIDResponse;
  requestSerialize: (arg: protos_account_pb.UpdateUserNicknameByIDRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => protos_account_pb.UpdateUserNicknameByIDRequest;
  responseSerialize: (arg: protos_account_pb.UpdateUserNicknameByIDResponse) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => protos_account_pb.UpdateUserNicknameByIDResponse;
}

interface IUpdateUserPasswordByID {
  path: string; // "/standard.Account/UpdateUserPasswordByID"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: protos_account_pb.UpdateUserPasswordByIDRequest;
  responseType: protos_account_pb.UpdateUserPasswordByIDResponse;
  requestSerialize: (arg: protos_account_pb.UpdateUserPasswordByIDRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => protos_account_pb.UpdateUserPasswordByIDRequest;
  responseSerialize: (arg: protos_account_pb.UpdateUserPasswordByIDResponse) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => protos_account_pb.UpdateUserPasswordByIDResponse;
}

interface IVerifyUserPasswordByID {
  path: string; // "/standard.Account/VerifyUserPasswordByID"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: protos_account_pb.VerifyUserPasswordByIDRequest;
  responseType: protos_account_pb.VerifyUserPasswordByIDResponse;
  requestSerialize: (arg: protos_account_pb.VerifyUserPasswordByIDRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => protos_account_pb.VerifyUserPasswordByIDRequest;
  responseSerialize: (arg: protos_account_pb.VerifyUserPasswordByIDResponse) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => protos_account_pb.VerifyUserPasswordByIDResponse;
}

interface IVerifyUserPasswordByUsername {
  path: string; // "/standard.Account/VerifyUserPasswordByUsername"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: protos_account_pb.VerifyUserPasswordByUsernameRequest;
  responseType: protos_account_pb.VerifyUserPasswordByUsernameResponse;
  requestSerialize: (arg: protos_account_pb.VerifyUserPasswordByUsernameRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => protos_account_pb.VerifyUserPasswordByUsernameRequest;
  responseSerialize: (arg: protos_account_pb.VerifyUserPasswordByUsernameResponse) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => protos_account_pb.VerifyUserPasswordByUsernameResponse;
}

interface IQueryLabels {
  path: string; // "/standard.Account/QueryLabels"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: protos_account_pb.QueryLabelsRequest;
  responseType: protos_account_pb.QueryLabelsResponse;
  requestSerialize: (arg: protos_account_pb.QueryLabelsRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => protos_account_pb.QueryLabelsRequest;
  responseSerialize: (arg: protos_account_pb.QueryLabelsResponse) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => protos_account_pb.QueryLabelsResponse;
}

interface ICreateLabel {
  path: string; // "/standard.Account/CreateLabel"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: protos_account_pb.CreateLabelRequest;
  responseType: protos_account_pb.CreateLabelResponse;
  requestSerialize: (arg: protos_account_pb.CreateLabelRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => protos_account_pb.CreateLabelRequest;
  responseSerialize: (arg: protos_account_pb.CreateLabelResponse) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => protos_account_pb.CreateLabelResponse;
}

interface ICreateLabelForUser {
  path: string; // "/standard.Account/CreateLabelForUser"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: protos_account_pb.CreateLabelForUserRequest;
  responseType: protos_account_pb.CreateLabelForUserResponse;
  requestSerialize: (arg: protos_account_pb.CreateLabelForUserRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => protos_account_pb.CreateLabelForUserRequest;
  responseSerialize: (arg: protos_account_pb.CreateLabelForUserResponse) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => protos_account_pb.CreateLabelForUserResponse;
}

interface IQueryLabelByID {
  path: string; // "/standard.Account/QueryLabelByID"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: protos_account_pb.QueryLabelByIDRequest;
  responseType: protos_account_pb.QueryLabelByIDResponse;
  requestSerialize: (arg: protos_account_pb.QueryLabelByIDRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => protos_account_pb.QueryLabelByIDRequest;
  responseSerialize: (arg: protos_account_pb.QueryLabelByIDResponse) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => protos_account_pb.QueryLabelByIDResponse;
}

interface IDeleteLabelByID {
  path: string; // "/standard.Account/DeleteLabelByID"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: protos_account_pb.DeleteLabelByIDRequest;
  responseType: protos_account_pb.DeleteLabelByIDResponse;
  requestSerialize: (arg: protos_account_pb.DeleteLabelByIDRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => protos_account_pb.DeleteLabelByIDRequest;
  responseSerialize: (arg: protos_account_pb.DeleteLabelByIDResponse) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => protos_account_pb.DeleteLabelByIDResponse;
}

interface IUpdateLabelNameByID {
  path: string; // "/standard.Account/UpdateLabelNameByID"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: protos_account_pb.UpdateLabelNameByIDRequest;
  responseType: protos_account_pb.UpdateLabelNameByIDResponse;
  requestSerialize: (arg: protos_account_pb.UpdateLabelNameByIDRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => protos_account_pb.UpdateLabelNameByIDRequest;
  responseSerialize: (arg: protos_account_pb.UpdateLabelNameByIDResponse) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => protos_account_pb.UpdateLabelNameByIDResponse;
}

interface IUpdateLabelCategoryByID {
  path: string; // "/standard.Account/UpdateLabelCategoryByID"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: protos_account_pb.UpdateLabelCategoryByIDRequest;
  responseType: protos_account_pb.UpdateLabelCategoryByIDResponse;
  requestSerialize: (arg: protos_account_pb.UpdateLabelCategoryByIDRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => protos_account_pb.UpdateLabelCategoryByIDRequest;
  responseSerialize: (arg: protos_account_pb.UpdateLabelCategoryByIDResponse) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => protos_account_pb.UpdateLabelCategoryByIDResponse;
}

interface IUpdateLabelStateByID {
  path: string; // "/standard.Account/UpdateLabelStateByID"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: protos_account_pb.UpdateLabelStateByIDRequest;
  responseType: protos_account_pb.UpdateLabelStateByIDResponse;
  requestSerialize: (arg: protos_account_pb.UpdateLabelStateByIDRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => protos_account_pb.UpdateLabelStateByIDRequest;
  responseSerialize: (arg: protos_account_pb.UpdateLabelStateByIDResponse) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => protos_account_pb.UpdateLabelStateByIDResponse;
}

interface IUpdateLabelValueByID {
  path: string; // "/standard.Account/UpdateLabelValueByID"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: protos_account_pb.UpdateLabelValueByIDRequest;
  responseType: protos_account_pb.UpdateLabelValueByIDResponse;
  requestSerialize: (arg: protos_account_pb.UpdateLabelValueByIDRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => protos_account_pb.UpdateLabelValueByIDRequest;
  responseSerialize: (arg: protos_account_pb.UpdateLabelValueByIDResponse) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => protos_account_pb.UpdateLabelValueByIDResponse;
}

interface IAddLabelToUserByID {
  path: string; // "/standard.Account/AddLabelToUserByID"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: protos_account_pb.AddLabelToUserByIDRequest;
  responseType: protos_account_pb.AddLabelToUserByIDResponse;
  requestSerialize: (arg: protos_account_pb.AddLabelToUserByIDRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => protos_account_pb.AddLabelToUserByIDRequest;
  responseSerialize: (arg: protos_account_pb.AddLabelToUserByIDResponse) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => protos_account_pb.AddLabelToUserByIDResponse;
}

interface IRemoveLabelFromUserByID {
  path: string; // "/standard.Account/RemoveLabelFromUserByID"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: protos_account_pb.RemoveLabelFromUserByIDRequest;
  responseType: protos_account_pb.RemoveLabelFromUserByIDResponse;
  requestSerialize: (arg: protos_account_pb.RemoveLabelFromUserByIDRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => protos_account_pb.RemoveLabelFromUserByIDRequest;
  responseSerialize: (arg: protos_account_pb.RemoveLabelFromUserByIDResponse) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => protos_account_pb.RemoveLabelFromUserByIDResponse;
}

interface ICreateGroup {
  path: string; // "/standard.Account/CreateGroup"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: protos_account_pb.CreateGroupRequest;
  responseType: protos_account_pb.CreateGroupResponse;
  requestSerialize: (arg: protos_account_pb.CreateGroupRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => protos_account_pb.CreateGroupRequest;
  responseSerialize: (arg: protos_account_pb.CreateGroupResponse) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => protos_account_pb.CreateGroupResponse;
}

interface IQueryGroups {
  path: string; // "/standard.Account/QueryGroups"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: protos_account_pb.QueryGroupsRequest;
  responseType: protos_account_pb.QueryGroupsResponse;
  requestSerialize: (arg: protos_account_pb.QueryGroupsRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => protos_account_pb.QueryGroupsRequest;
  responseSerialize: (arg: protos_account_pb.QueryGroupsResponse) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => protos_account_pb.QueryGroupsResponse;
}

interface IQueryGroupByID {
  path: string; // "/standard.Account/QueryGroupByID"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: protos_account_pb.QueryGroupByIDRequest;
  responseType: protos_account_pb.QueryGroupByIDResponse;
  requestSerialize: (arg: protos_account_pb.QueryGroupByIDRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => protos_account_pb.QueryGroupByIDRequest;
  responseSerialize: (arg: protos_account_pb.QueryGroupByIDResponse) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => protos_account_pb.QueryGroupByIDResponse;
}

interface IDeleteGroupByID {
  path: string; // "/standard.Account/DeleteGroupByID"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: protos_account_pb.DeleteGroupByIDRequest;
  responseType: protos_account_pb.DeleteGroupByIDResponse;
  requestSerialize: (arg: protos_account_pb.DeleteGroupByIDRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => protos_account_pb.DeleteGroupByIDRequest;
  responseSerialize: (arg: protos_account_pb.DeleteGroupByIDResponse) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => protos_account_pb.DeleteGroupByIDResponse;
}

interface IUpdateGroupNameByID {
  path: string; // "/standard.Account/UpdateGroupNameByID"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: protos_account_pb.UpdateGroupNameByIDRequest;
  responseType: protos_account_pb.UpdateGroupNameByIDResponse;
  requestSerialize: (arg: protos_account_pb.UpdateGroupNameByIDRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => protos_account_pb.UpdateGroupNameByIDRequest;
  responseSerialize: (arg: protos_account_pb.UpdateGroupNameByIDResponse) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => protos_account_pb.UpdateGroupNameByIDResponse;
}

interface IUpdateGroupCategoryByID {
  path: string; // "/standard.Account/UpdateGroupCategoryByID"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: protos_account_pb.UpdateGroupCategoryByIDRequest;
  responseType: protos_account_pb.UpdateGroupCategoryByIDResponse;
  requestSerialize: (arg: protos_account_pb.UpdateGroupCategoryByIDRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => protos_account_pb.UpdateGroupCategoryByIDRequest;
  responseSerialize: (arg: protos_account_pb.UpdateGroupCategoryByIDResponse) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => protos_account_pb.UpdateGroupCategoryByIDResponse;
}

interface IUpdateGroupStateByID {
  path: string; // "/standard.Account/UpdateGroupStateByID"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: protos_account_pb.UpdateGroupStateByIDRequest;
  responseType: protos_account_pb.UpdateGroupStateByIDResponse;
  requestSerialize: (arg: protos_account_pb.UpdateGroupStateByIDRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => protos_account_pb.UpdateGroupStateByIDRequest;
  responseSerialize: (arg: protos_account_pb.UpdateGroupStateByIDResponse) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => protos_account_pb.UpdateGroupStateByIDResponse;
}

interface IUpdateGroupDescriptionByID {
  path: string; // "/standard.Account/UpdateGroupDescriptionByID"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: protos_account_pb.UpdateGroupDescriptionByIDRequest;
  responseType: protos_account_pb.UpdateGroupDescriptionByIDResponse;
  requestSerialize: (arg: protos_account_pb.UpdateGroupDescriptionByIDRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => protos_account_pb.UpdateGroupDescriptionByIDRequest;
  responseSerialize: (arg: protos_account_pb.UpdateGroupDescriptionByIDResponse) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => protos_account_pb.UpdateGroupDescriptionByIDResponse;
}

interface IAddUserToGroupByID {
  path: string; // "/standard.Account/AddUserToGroupByID"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: protos_account_pb.AddUserToGroupByIDRequest;
  responseType: protos_account_pb.AddUserToGroupByIDResponse;
  requestSerialize: (arg: protos_account_pb.AddUserToGroupByIDRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => protos_account_pb.AddUserToGroupByIDRequest;
  responseSerialize: (arg: protos_account_pb.AddUserToGroupByIDResponse) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => protos_account_pb.AddUserToGroupByIDResponse;
}

interface IRemoveUserFromGroupByID {
  path: string; // "/standard.Account/RemoveUserFromGroupByID"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestType: protos_account_pb.RemoveUserFromGroupByIDRequest;
  responseType: protos_account_pb.RemoveUserFromGroupByIDResponse;
  requestSerialize: (arg: protos_account_pb.RemoveUserFromGroupByIDRequest) => Buffer;
  requestDeserialize: (buffer: Uint8Array) => protos_account_pb.RemoveUserFromGroupByIDRequest;
  responseSerialize: (arg: protos_account_pb.RemoveUserFromGroupByIDResponse) => Buffer;
  responseDeserialize: (buffer: Uint8Array) => protos_account_pb.RemoveUserFromGroupByIDResponse;
}

export interface IAccountClient {
  createUser(request: protos_account_pb.CreateUserRequest, callback: (error: Error | null, response: protos_account_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
  createUser(request: protos_account_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
  queryUsers(request: protos_account_pb.QueryUsersRequest, callback: (error: Error | null, response: protos_account_pb.QueryUsersResponse) => void): grpc.ClientUnaryCall;
  queryUsers(request: protos_account_pb.QueryUsersRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.QueryUsersResponse) => void): grpc.ClientUnaryCall;
  queryUserByID(request: protos_account_pb.QueryUserByIDRequest, callback: (error: Error | null, response: protos_account_pb.QueryUserByIDResponse) => void): grpc.ClientUnaryCall;
  queryUserByID(request: protos_account_pb.QueryUserByIDRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.QueryUserByIDResponse) => void): grpc.ClientUnaryCall;
  queryUsersByInviter(request: protos_account_pb.QueryUsersByInviterRequest, callback: (error: Error | null, response: protos_account_pb.QueryUsersByInviterResponse) => void): grpc.ClientUnaryCall;
  queryUsersByInviter(request: protos_account_pb.QueryUsersByInviterRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.QueryUsersByInviterResponse) => void): grpc.ClientUnaryCall;
  deleteUserByID(request: protos_account_pb.DeleteUserByIDRequest, callback: (error: Error | null, response: protos_account_pb.DeleteUserByIDResponse) => void): grpc.ClientUnaryCall;
  deleteUserByID(request: protos_account_pb.DeleteUserByIDRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.DeleteUserByIDResponse) => void): grpc.ClientUnaryCall;
  queryUserByUsername(request: protos_account_pb.QueryUserByUsernameRequest, callback: (error: Error | null, response: protos_account_pb.QueryUserByUsernameResponse) => void): grpc.ClientUnaryCall;
  queryUserByUsername(request: protos_account_pb.QueryUserByUsernameRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.QueryUserByUsernameResponse) => void): grpc.ClientUnaryCall;
  updateUserCategoryByID(request: protos_account_pb.UpdateUserCategoryByIDRequest, callback: (error: Error | null, response: protos_account_pb.UpdateUserCategoryByIDResponse) => void): grpc.ClientUnaryCall;
  updateUserCategoryByID(request: protos_account_pb.UpdateUserCategoryByIDRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.UpdateUserCategoryByIDResponse) => void): grpc.ClientUnaryCall;
  updateUserAvatarByID(request: protos_account_pb.UpdateUserAvatarByIDRequest, callback: (error: Error | null, response: protos_account_pb.UpdateUserAvatarByIDResponse) => void): grpc.ClientUnaryCall;
  updateUserAvatarByID(request: protos_account_pb.UpdateUserAvatarByIDRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.UpdateUserAvatarByIDResponse) => void): grpc.ClientUnaryCall;
  updateUserInviterByID(request: protos_account_pb.UpdateUserInviterByIDRequest, callback: (error: Error | null, response: protos_account_pb.UpdateUserInviterByIDResponse) => void): grpc.ClientUnaryCall;
  updateUserInviterByID(request: protos_account_pb.UpdateUserInviterByIDRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.UpdateUserInviterByIDResponse) => void): grpc.ClientUnaryCall;
  updateUserNicknameByID(request: protos_account_pb.UpdateUserNicknameByIDRequest, callback: (error: Error | null, response: protos_account_pb.UpdateUserNicknameByIDResponse) => void): grpc.ClientUnaryCall;
  updateUserNicknameByID(request: protos_account_pb.UpdateUserNicknameByIDRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.UpdateUserNicknameByIDResponse) => void): grpc.ClientUnaryCall;
  updateUserPasswordByID(request: protos_account_pb.UpdateUserPasswordByIDRequest, callback: (error: Error | null, response: protos_account_pb.UpdateUserPasswordByIDResponse) => void): grpc.ClientUnaryCall;
  updateUserPasswordByID(request: protos_account_pb.UpdateUserPasswordByIDRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.UpdateUserPasswordByIDResponse) => void): grpc.ClientUnaryCall;
  verifyUserPasswordByID(request: protos_account_pb.VerifyUserPasswordByIDRequest, callback: (error: Error | null, response: protos_account_pb.VerifyUserPasswordByIDResponse) => void): grpc.ClientUnaryCall;
  verifyUserPasswordByID(request: protos_account_pb.VerifyUserPasswordByIDRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.VerifyUserPasswordByIDResponse) => void): grpc.ClientUnaryCall;
  verifyUserPasswordByUsername(request: protos_account_pb.VerifyUserPasswordByUsernameRequest, callback: (error: Error | null, response: protos_account_pb.VerifyUserPasswordByUsernameResponse) => void): grpc.ClientUnaryCall;
  verifyUserPasswordByUsername(request: protos_account_pb.VerifyUserPasswordByUsernameRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.VerifyUserPasswordByUsernameResponse) => void): grpc.ClientUnaryCall;
  queryLabels(request: protos_account_pb.QueryLabelsRequest, callback: (error: Error | null, response: protos_account_pb.QueryLabelsResponse) => void): grpc.ClientUnaryCall;
  queryLabels(request: protos_account_pb.QueryLabelsRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.QueryLabelsResponse) => void): grpc.ClientUnaryCall;
  createLabel(request: protos_account_pb.CreateLabelRequest, callback: (error: Error | null, response: protos_account_pb.CreateLabelResponse) => void): grpc.ClientUnaryCall;
  createLabel(request: protos_account_pb.CreateLabelRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.CreateLabelResponse) => void): grpc.ClientUnaryCall;
  createLabelForUser(request: protos_account_pb.CreateLabelForUserRequest, callback: (error: Error | null, response: protos_account_pb.CreateLabelForUserResponse) => void): grpc.ClientUnaryCall;
  createLabelForUser(request: protos_account_pb.CreateLabelForUserRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.CreateLabelForUserResponse) => void): grpc.ClientUnaryCall;
  queryLabelByID(request: protos_account_pb.QueryLabelByIDRequest, callback: (error: Error | null, response: protos_account_pb.QueryLabelByIDResponse) => void): grpc.ClientUnaryCall;
  queryLabelByID(request: protos_account_pb.QueryLabelByIDRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.QueryLabelByIDResponse) => void): grpc.ClientUnaryCall;
  deleteLabelByID(request: protos_account_pb.DeleteLabelByIDRequest, callback: (error: Error | null, response: protos_account_pb.DeleteLabelByIDResponse) => void): grpc.ClientUnaryCall;
  deleteLabelByID(request: protos_account_pb.DeleteLabelByIDRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.DeleteLabelByIDResponse) => void): grpc.ClientUnaryCall;
  updateLabelNameByID(request: protos_account_pb.UpdateLabelNameByIDRequest, callback: (error: Error | null, response: protos_account_pb.UpdateLabelNameByIDResponse) => void): grpc.ClientUnaryCall;
  updateLabelNameByID(request: protos_account_pb.UpdateLabelNameByIDRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.UpdateLabelNameByIDResponse) => void): grpc.ClientUnaryCall;
  updateLabelCategoryByID(request: protos_account_pb.UpdateLabelCategoryByIDRequest, callback: (error: Error | null, response: protos_account_pb.UpdateLabelCategoryByIDResponse) => void): grpc.ClientUnaryCall;
  updateLabelCategoryByID(request: protos_account_pb.UpdateLabelCategoryByIDRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.UpdateLabelCategoryByIDResponse) => void): grpc.ClientUnaryCall;
  updateLabelStateByID(request: protos_account_pb.UpdateLabelStateByIDRequest, callback: (error: Error | null, response: protos_account_pb.UpdateLabelStateByIDResponse) => void): grpc.ClientUnaryCall;
  updateLabelStateByID(request: protos_account_pb.UpdateLabelStateByIDRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.UpdateLabelStateByIDResponse) => void): grpc.ClientUnaryCall;
  updateLabelValueByID(request: protos_account_pb.UpdateLabelValueByIDRequest, callback: (error: Error | null, response: protos_account_pb.UpdateLabelValueByIDResponse) => void): grpc.ClientUnaryCall;
  updateLabelValueByID(request: protos_account_pb.UpdateLabelValueByIDRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.UpdateLabelValueByIDResponse) => void): grpc.ClientUnaryCall;
  addLabelToUserByID(request: protos_account_pb.AddLabelToUserByIDRequest, callback: (error: Error | null, response: protos_account_pb.AddLabelToUserByIDResponse) => void): grpc.ClientUnaryCall;
  addLabelToUserByID(request: protos_account_pb.AddLabelToUserByIDRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.AddLabelToUserByIDResponse) => void): grpc.ClientUnaryCall;
  removeLabelFromUserByID(request: protos_account_pb.RemoveLabelFromUserByIDRequest, callback: (error: Error | null, response: protos_account_pb.RemoveLabelFromUserByIDResponse) => void): grpc.ClientUnaryCall;
  removeLabelFromUserByID(request: protos_account_pb.RemoveLabelFromUserByIDRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.RemoveLabelFromUserByIDResponse) => void): grpc.ClientUnaryCall;
  createGroup(request: protos_account_pb.CreateGroupRequest, callback: (error: Error | null, response: protos_account_pb.CreateGroupResponse) => void): grpc.ClientUnaryCall;
  createGroup(request: protos_account_pb.CreateGroupRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.CreateGroupResponse) => void): grpc.ClientUnaryCall;
  queryGroups(request: protos_account_pb.QueryGroupsRequest, callback: (error: Error | null, response: protos_account_pb.QueryGroupsResponse) => void): grpc.ClientUnaryCall;
  queryGroups(request: protos_account_pb.QueryGroupsRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.QueryGroupsResponse) => void): grpc.ClientUnaryCall;
  queryGroupByID(request: protos_account_pb.QueryGroupByIDRequest, callback: (error: Error | null, response: protos_account_pb.QueryGroupByIDResponse) => void): grpc.ClientUnaryCall;
  queryGroupByID(request: protos_account_pb.QueryGroupByIDRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.QueryGroupByIDResponse) => void): grpc.ClientUnaryCall;
  deleteGroupByID(request: protos_account_pb.DeleteGroupByIDRequest, callback: (error: Error | null, response: protos_account_pb.DeleteGroupByIDResponse) => void): grpc.ClientUnaryCall;
  deleteGroupByID(request: protos_account_pb.DeleteGroupByIDRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.DeleteGroupByIDResponse) => void): grpc.ClientUnaryCall;
  updateGroupNameByID(request: protos_account_pb.UpdateGroupNameByIDRequest, callback: (error: Error | null, response: protos_account_pb.UpdateGroupNameByIDResponse) => void): grpc.ClientUnaryCall;
  updateGroupNameByID(request: protos_account_pb.UpdateGroupNameByIDRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.UpdateGroupNameByIDResponse) => void): grpc.ClientUnaryCall;
  updateGroupCategoryByID(request: protos_account_pb.UpdateGroupCategoryByIDRequest, callback: (error: Error | null, response: protos_account_pb.UpdateGroupCategoryByIDResponse) => void): grpc.ClientUnaryCall;
  updateGroupCategoryByID(request: protos_account_pb.UpdateGroupCategoryByIDRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.UpdateGroupCategoryByIDResponse) => void): grpc.ClientUnaryCall;
  updateGroupStateByID(request: protos_account_pb.UpdateGroupStateByIDRequest, callback: (error: Error | null, response: protos_account_pb.UpdateGroupStateByIDResponse) => void): grpc.ClientUnaryCall;
  updateGroupStateByID(request: protos_account_pb.UpdateGroupStateByIDRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.UpdateGroupStateByIDResponse) => void): grpc.ClientUnaryCall;
  updateGroupDescriptionByID(request: protos_account_pb.UpdateGroupDescriptionByIDRequest, callback: (error: Error | null, response: protos_account_pb.UpdateGroupDescriptionByIDResponse) => void): grpc.ClientUnaryCall;
  updateGroupDescriptionByID(request: protos_account_pb.UpdateGroupDescriptionByIDRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.UpdateGroupDescriptionByIDResponse) => void): grpc.ClientUnaryCall;
  addUserToGroupByID(request: protos_account_pb.AddUserToGroupByIDRequest, callback: (error: Error | null, response: protos_account_pb.AddUserToGroupByIDResponse) => void): grpc.ClientUnaryCall;
  addUserToGroupByID(request: protos_account_pb.AddUserToGroupByIDRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.AddUserToGroupByIDResponse) => void): grpc.ClientUnaryCall;
  removeUserFromGroupByID(request: protos_account_pb.RemoveUserFromGroupByIDRequest, callback: (error: Error | null, response: protos_account_pb.RemoveUserFromGroupByIDResponse) => void): grpc.ClientUnaryCall;
  removeUserFromGroupByID(request: protos_account_pb.RemoveUserFromGroupByIDRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.RemoveUserFromGroupByIDResponse) => void): grpc.ClientUnaryCall;
}

export const AccountService: IAccountService;
export class AccountClient extends grpc.Client implements IAccountClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  public createUser(request: protos_account_pb.CreateUserRequest, callback: (error: Error | null, response: protos_account_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
  public createUser(request: protos_account_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
  public queryUsers(request: protos_account_pb.QueryUsersRequest, callback: (error: Error | null, response: protos_account_pb.QueryUsersResponse) => void): grpc.ClientUnaryCall;
  public queryUsers(request: protos_account_pb.QueryUsersRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.QueryUsersResponse) => void): grpc.ClientUnaryCall;
  public queryUserByID(request: protos_account_pb.QueryUserByIDRequest, callback: (error: Error | null, response: protos_account_pb.QueryUserByIDResponse) => void): grpc.ClientUnaryCall;
  public queryUserByID(request: protos_account_pb.QueryUserByIDRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.QueryUserByIDResponse) => void): grpc.ClientUnaryCall;
  public queryUsersByInviter(request: protos_account_pb.QueryUsersByInviterRequest, callback: (error: Error | null, response: protos_account_pb.QueryUsersByInviterResponse) => void): grpc.ClientUnaryCall;
  public queryUsersByInviter(request: protos_account_pb.QueryUsersByInviterRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.QueryUsersByInviterResponse) => void): grpc.ClientUnaryCall;
  public deleteUserByID(request: protos_account_pb.DeleteUserByIDRequest, callback: (error: Error | null, response: protos_account_pb.DeleteUserByIDResponse) => void): grpc.ClientUnaryCall;
  public deleteUserByID(request: protos_account_pb.DeleteUserByIDRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.DeleteUserByIDResponse) => void): grpc.ClientUnaryCall;
  public queryUserByUsername(request: protos_account_pb.QueryUserByUsernameRequest, callback: (error: Error | null, response: protos_account_pb.QueryUserByUsernameResponse) => void): grpc.ClientUnaryCall;
  public queryUserByUsername(request: protos_account_pb.QueryUserByUsernameRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.QueryUserByUsernameResponse) => void): grpc.ClientUnaryCall;
  public updateUserCategoryByID(request: protos_account_pb.UpdateUserCategoryByIDRequest, callback: (error: Error | null, response: protos_account_pb.UpdateUserCategoryByIDResponse) => void): grpc.ClientUnaryCall;
  public updateUserCategoryByID(request: protos_account_pb.UpdateUserCategoryByIDRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.UpdateUserCategoryByIDResponse) => void): grpc.ClientUnaryCall;
  public updateUserAvatarByID(request: protos_account_pb.UpdateUserAvatarByIDRequest, callback: (error: Error | null, response: protos_account_pb.UpdateUserAvatarByIDResponse) => void): grpc.ClientUnaryCall;
  public updateUserAvatarByID(request: protos_account_pb.UpdateUserAvatarByIDRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.UpdateUserAvatarByIDResponse) => void): grpc.ClientUnaryCall;
  public updateUserInviterByID(request: protos_account_pb.UpdateUserInviterByIDRequest, callback: (error: Error | null, response: protos_account_pb.UpdateUserInviterByIDResponse) => void): grpc.ClientUnaryCall;
  public updateUserInviterByID(request: protos_account_pb.UpdateUserInviterByIDRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.UpdateUserInviterByIDResponse) => void): grpc.ClientUnaryCall;
  public updateUserNicknameByID(request: protos_account_pb.UpdateUserNicknameByIDRequest, callback: (error: Error | null, response: protos_account_pb.UpdateUserNicknameByIDResponse) => void): grpc.ClientUnaryCall;
  public updateUserNicknameByID(request: protos_account_pb.UpdateUserNicknameByIDRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.UpdateUserNicknameByIDResponse) => void): grpc.ClientUnaryCall;
  public updateUserPasswordByID(request: protos_account_pb.UpdateUserPasswordByIDRequest, callback: (error: Error | null, response: protos_account_pb.UpdateUserPasswordByIDResponse) => void): grpc.ClientUnaryCall;
  public updateUserPasswordByID(request: protos_account_pb.UpdateUserPasswordByIDRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.UpdateUserPasswordByIDResponse) => void): grpc.ClientUnaryCall;
  public verifyUserPasswordByID(request: protos_account_pb.VerifyUserPasswordByIDRequest, callback: (error: Error | null, response: protos_account_pb.VerifyUserPasswordByIDResponse) => void): grpc.ClientUnaryCall;
  public verifyUserPasswordByID(request: protos_account_pb.VerifyUserPasswordByIDRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.VerifyUserPasswordByIDResponse) => void): grpc.ClientUnaryCall;
  public verifyUserPasswordByUsername(request: protos_account_pb.VerifyUserPasswordByUsernameRequest, callback: (error: Error | null, response: protos_account_pb.VerifyUserPasswordByUsernameResponse) => void): grpc.ClientUnaryCall;
  public verifyUserPasswordByUsername(request: protos_account_pb.VerifyUserPasswordByUsernameRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.VerifyUserPasswordByUsernameResponse) => void): grpc.ClientUnaryCall;
  public queryLabels(request: protos_account_pb.QueryLabelsRequest, callback: (error: Error | null, response: protos_account_pb.QueryLabelsResponse) => void): grpc.ClientUnaryCall;
  public queryLabels(request: protos_account_pb.QueryLabelsRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.QueryLabelsResponse) => void): grpc.ClientUnaryCall;
  public createLabel(request: protos_account_pb.CreateLabelRequest, callback: (error: Error | null, response: protos_account_pb.CreateLabelResponse) => void): grpc.ClientUnaryCall;
  public createLabel(request: protos_account_pb.CreateLabelRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.CreateLabelResponse) => void): grpc.ClientUnaryCall;
  public createLabelForUser(request: protos_account_pb.CreateLabelForUserRequest, callback: (error: Error | null, response: protos_account_pb.CreateLabelForUserResponse) => void): grpc.ClientUnaryCall;
  public createLabelForUser(request: protos_account_pb.CreateLabelForUserRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.CreateLabelForUserResponse) => void): grpc.ClientUnaryCall;
  public queryLabelByID(request: protos_account_pb.QueryLabelByIDRequest, callback: (error: Error | null, response: protos_account_pb.QueryLabelByIDResponse) => void): grpc.ClientUnaryCall;
  public queryLabelByID(request: protos_account_pb.QueryLabelByIDRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.QueryLabelByIDResponse) => void): grpc.ClientUnaryCall;
  public deleteLabelByID(request: protos_account_pb.DeleteLabelByIDRequest, callback: (error: Error | null, response: protos_account_pb.DeleteLabelByIDResponse) => void): grpc.ClientUnaryCall;
  public deleteLabelByID(request: protos_account_pb.DeleteLabelByIDRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.DeleteLabelByIDResponse) => void): grpc.ClientUnaryCall;
  public updateLabelNameByID(request: protos_account_pb.UpdateLabelNameByIDRequest, callback: (error: Error | null, response: protos_account_pb.UpdateLabelNameByIDResponse) => void): grpc.ClientUnaryCall;
  public updateLabelNameByID(request: protos_account_pb.UpdateLabelNameByIDRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.UpdateLabelNameByIDResponse) => void): grpc.ClientUnaryCall;
  public updateLabelCategoryByID(request: protos_account_pb.UpdateLabelCategoryByIDRequest, callback: (error: Error | null, response: protos_account_pb.UpdateLabelCategoryByIDResponse) => void): grpc.ClientUnaryCall;
  public updateLabelCategoryByID(request: protos_account_pb.UpdateLabelCategoryByIDRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.UpdateLabelCategoryByIDResponse) => void): grpc.ClientUnaryCall;
  public updateLabelStateByID(request: protos_account_pb.UpdateLabelStateByIDRequest, callback: (error: Error | null, response: protos_account_pb.UpdateLabelStateByIDResponse) => void): grpc.ClientUnaryCall;
  public updateLabelStateByID(request: protos_account_pb.UpdateLabelStateByIDRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.UpdateLabelStateByIDResponse) => void): grpc.ClientUnaryCall;
  public updateLabelValueByID(request: protos_account_pb.UpdateLabelValueByIDRequest, callback: (error: Error | null, response: protos_account_pb.UpdateLabelValueByIDResponse) => void): grpc.ClientUnaryCall;
  public updateLabelValueByID(request: protos_account_pb.UpdateLabelValueByIDRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.UpdateLabelValueByIDResponse) => void): grpc.ClientUnaryCall;
  public addLabelToUserByID(request: protos_account_pb.AddLabelToUserByIDRequest, callback: (error: Error | null, response: protos_account_pb.AddLabelToUserByIDResponse) => void): grpc.ClientUnaryCall;
  public addLabelToUserByID(request: protos_account_pb.AddLabelToUserByIDRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.AddLabelToUserByIDResponse) => void): grpc.ClientUnaryCall;
  public removeLabelFromUserByID(request: protos_account_pb.RemoveLabelFromUserByIDRequest, callback: (error: Error | null, response: protos_account_pb.RemoveLabelFromUserByIDResponse) => void): grpc.ClientUnaryCall;
  public removeLabelFromUserByID(request: protos_account_pb.RemoveLabelFromUserByIDRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.RemoveLabelFromUserByIDResponse) => void): grpc.ClientUnaryCall;
  public createGroup(request: protos_account_pb.CreateGroupRequest, callback: (error: Error | null, response: protos_account_pb.CreateGroupResponse) => void): grpc.ClientUnaryCall;
  public createGroup(request: protos_account_pb.CreateGroupRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.CreateGroupResponse) => void): grpc.ClientUnaryCall;
  public queryGroups(request: protos_account_pb.QueryGroupsRequest, callback: (error: Error | null, response: protos_account_pb.QueryGroupsResponse) => void): grpc.ClientUnaryCall;
  public queryGroups(request: protos_account_pb.QueryGroupsRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.QueryGroupsResponse) => void): grpc.ClientUnaryCall;
  public queryGroupByID(request: protos_account_pb.QueryGroupByIDRequest, callback: (error: Error | null, response: protos_account_pb.QueryGroupByIDResponse) => void): grpc.ClientUnaryCall;
  public queryGroupByID(request: protos_account_pb.QueryGroupByIDRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.QueryGroupByIDResponse) => void): grpc.ClientUnaryCall;
  public deleteGroupByID(request: protos_account_pb.DeleteGroupByIDRequest, callback: (error: Error | null, response: protos_account_pb.DeleteGroupByIDResponse) => void): grpc.ClientUnaryCall;
  public deleteGroupByID(request: protos_account_pb.DeleteGroupByIDRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.DeleteGroupByIDResponse) => void): grpc.ClientUnaryCall;
  public updateGroupNameByID(request: protos_account_pb.UpdateGroupNameByIDRequest, callback: (error: Error | null, response: protos_account_pb.UpdateGroupNameByIDResponse) => void): grpc.ClientUnaryCall;
  public updateGroupNameByID(request: protos_account_pb.UpdateGroupNameByIDRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.UpdateGroupNameByIDResponse) => void): grpc.ClientUnaryCall;
  public updateGroupCategoryByID(request: protos_account_pb.UpdateGroupCategoryByIDRequest, callback: (error: Error | null, response: protos_account_pb.UpdateGroupCategoryByIDResponse) => void): grpc.ClientUnaryCall;
  public updateGroupCategoryByID(request: protos_account_pb.UpdateGroupCategoryByIDRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.UpdateGroupCategoryByIDResponse) => void): grpc.ClientUnaryCall;
  public updateGroupStateByID(request: protos_account_pb.UpdateGroupStateByIDRequest, callback: (error: Error | null, response: protos_account_pb.UpdateGroupStateByIDResponse) => void): grpc.ClientUnaryCall;
  public updateGroupStateByID(request: protos_account_pb.UpdateGroupStateByIDRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.UpdateGroupStateByIDResponse) => void): grpc.ClientUnaryCall;
  public updateGroupDescriptionByID(request: protos_account_pb.UpdateGroupDescriptionByIDRequest, callback: (error: Error | null, response: protos_account_pb.UpdateGroupDescriptionByIDResponse) => void): grpc.ClientUnaryCall;
  public updateGroupDescriptionByID(request: protos_account_pb.UpdateGroupDescriptionByIDRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.UpdateGroupDescriptionByIDResponse) => void): grpc.ClientUnaryCall;
  public addUserToGroupByID(request: protos_account_pb.AddUserToGroupByIDRequest, callback: (error: Error | null, response: protos_account_pb.AddUserToGroupByIDResponse) => void): grpc.ClientUnaryCall;
  public addUserToGroupByID(request: protos_account_pb.AddUserToGroupByIDRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.AddUserToGroupByIDResponse) => void): grpc.ClientUnaryCall;
  public removeUserFromGroupByID(request: protos_account_pb.RemoveUserFromGroupByIDRequest, callback: (error: Error | null, response: protos_account_pb.RemoveUserFromGroupByIDResponse) => void): grpc.ClientUnaryCall;
  public removeUserFromGroupByID(request: protos_account_pb.RemoveUserFromGroupByIDRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: protos_account_pb.RemoveUserFromGroupByIDResponse) => void): grpc.ClientUnaryCall;
}


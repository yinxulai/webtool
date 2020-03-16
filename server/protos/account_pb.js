/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.standard.AddLabelToUserByIDRequest', null, global);
goog.exportSymbol('proto.standard.AddLabelToUserByIDResponse', null, global);
goog.exportSymbol('proto.standard.AddUserToGroupByIDRequest', null, global);
goog.exportSymbol('proto.standard.AddUserToGroupByIDResponse', null, global);
goog.exportSymbol('proto.standard.CreateGroupRequest', null, global);
goog.exportSymbol('proto.standard.CreateGroupResponse', null, global);
goog.exportSymbol('proto.standard.CreateLabelForUserRequest', null, global);
goog.exportSymbol('proto.standard.CreateLabelForUserResponse', null, global);
goog.exportSymbol('proto.standard.CreateLabelRequest', null, global);
goog.exportSymbol('proto.standard.CreateLabelResponse', null, global);
goog.exportSymbol('proto.standard.CreateUserRequest', null, global);
goog.exportSymbol('proto.standard.CreateUserResponse', null, global);
goog.exportSymbol('proto.standard.DeleteGroupByIDRequest', null, global);
goog.exportSymbol('proto.standard.DeleteGroupByIDResponse', null, global);
goog.exportSymbol('proto.standard.DeleteLabelByIDRequest', null, global);
goog.exportSymbol('proto.standard.DeleteLabelByIDResponse', null, global);
goog.exportSymbol('proto.standard.DeleteUserByIDRequest', null, global);
goog.exportSymbol('proto.standard.DeleteUserByIDResponse', null, global);
goog.exportSymbol('proto.standard.Group', null, global);
goog.exportSymbol('proto.standard.Label', null, global);
goog.exportSymbol('proto.standard.QueryGroupByIDRequest', null, global);
goog.exportSymbol('proto.standard.QueryGroupByIDResponse', null, global);
goog.exportSymbol('proto.standard.QueryGroupsRequest', null, global);
goog.exportSymbol('proto.standard.QueryGroupsResponse', null, global);
goog.exportSymbol('proto.standard.QueryLabelByIDRequest', null, global);
goog.exportSymbol('proto.standard.QueryLabelByIDResponse', null, global);
goog.exportSymbol('proto.standard.QueryLabelsRequest', null, global);
goog.exportSymbol('proto.standard.QueryLabelsResponse', null, global);
goog.exportSymbol('proto.standard.QueryUserByIDRequest', null, global);
goog.exportSymbol('proto.standard.QueryUserByIDResponse', null, global);
goog.exportSymbol('proto.standard.QueryUserByUsernameRequest', null, global);
goog.exportSymbol('proto.standard.QueryUserByUsernameResponse', null, global);
goog.exportSymbol('proto.standard.QueryUsersByInviterRequest', null, global);
goog.exportSymbol('proto.standard.QueryUsersByInviterResponse', null, global);
goog.exportSymbol('proto.standard.QueryUsersRequest', null, global);
goog.exportSymbol('proto.standard.QueryUsersResponse', null, global);
goog.exportSymbol('proto.standard.RemoveLabelFromUserByIDRequest', null, global);
goog.exportSymbol('proto.standard.RemoveLabelFromUserByIDResponse', null, global);
goog.exportSymbol('proto.standard.RemoveUserFromGroupByIDRequest', null, global);
goog.exportSymbol('proto.standard.RemoveUserFromGroupByIDResponse', null, global);
goog.exportSymbol('proto.standard.State', null, global);
goog.exportSymbol('proto.standard.UpdateGroupCategoryByIDRequest', null, global);
goog.exportSymbol('proto.standard.UpdateGroupCategoryByIDResponse', null, global);
goog.exportSymbol('proto.standard.UpdateGroupDescriptionByIDRequest', null, global);
goog.exportSymbol('proto.standard.UpdateGroupDescriptionByIDResponse', null, global);
goog.exportSymbol('proto.standard.UpdateGroupNameByIDRequest', null, global);
goog.exportSymbol('proto.standard.UpdateGroupNameByIDResponse', null, global);
goog.exportSymbol('proto.standard.UpdateGroupStateByIDRequest', null, global);
goog.exportSymbol('proto.standard.UpdateGroupStateByIDResponse', null, global);
goog.exportSymbol('proto.standard.UpdateLabelCategoryByIDRequest', null, global);
goog.exportSymbol('proto.standard.UpdateLabelCategoryByIDResponse', null, global);
goog.exportSymbol('proto.standard.UpdateLabelNameByIDRequest', null, global);
goog.exportSymbol('proto.standard.UpdateLabelNameByIDResponse', null, global);
goog.exportSymbol('proto.standard.UpdateLabelStateByIDRequest', null, global);
goog.exportSymbol('proto.standard.UpdateLabelStateByIDResponse', null, global);
goog.exportSymbol('proto.standard.UpdateLabelValueByIDRequest', null, global);
goog.exportSymbol('proto.standard.UpdateLabelValueByIDResponse', null, global);
goog.exportSymbol('proto.standard.UpdateUserAvatarByIDRequest', null, global);
goog.exportSymbol('proto.standard.UpdateUserAvatarByIDResponse', null, global);
goog.exportSymbol('proto.standard.UpdateUserCategoryByIDRequest', null, global);
goog.exportSymbol('proto.standard.UpdateUserCategoryByIDResponse', null, global);
goog.exportSymbol('proto.standard.UpdateUserInviterByIDRequest', null, global);
goog.exportSymbol('proto.standard.UpdateUserInviterByIDResponse', null, global);
goog.exportSymbol('proto.standard.UpdateUserNicknameByIDRequest', null, global);
goog.exportSymbol('proto.standard.UpdateUserNicknameByIDResponse', null, global);
goog.exportSymbol('proto.standard.UpdateUserPasswordByIDRequest', null, global);
goog.exportSymbol('proto.standard.UpdateUserPasswordByIDResponse', null, global);
goog.exportSymbol('proto.standard.User', null, global);
goog.exportSymbol('proto.standard.VerifyUserPasswordByIDRequest', null, global);
goog.exportSymbol('proto.standard.VerifyUserPasswordByIDResponse', null, global);
goog.exportSymbol('proto.standard.VerifyUserPasswordByUsernameRequest', null, global);
goog.exportSymbol('proto.standard.VerifyUserPasswordByUsernameResponse', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.Group = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.Group, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.Group.displayName = 'proto.standard.Group';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.Group.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.Group.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.Group} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.Group.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    category: jspb.Message.getFieldWithDefault(msg, 3, ""),
    state: jspb.Message.getFieldWithDefault(msg, 4, ""),
    description: jspb.Message.getFieldWithDefault(msg, 5, ""),
    createdtime: jspb.Message.getFieldWithDefault(msg, 6, ""),
    updatedtime: jspb.Message.getFieldWithDefault(msg, 7, ""),
    deletedtime: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.Group}
 */
proto.standard.Group.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.Group;
  return proto.standard.Group.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.Group} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.Group}
 */
proto.standard.Group.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedtime(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedtime(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeletedtime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.Group.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.Group.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.Group} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.Group.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCreatedtime();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getUpdatedtime();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getDeletedtime();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional int64 ID = 1;
 * @return {number}
 */
proto.standard.Group.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.standard.Group.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Name = 2;
 * @return {string}
 */
proto.standard.Group.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.Group.prototype.setName = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string Category = 3;
 * @return {string}
 */
proto.standard.Group.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.standard.Group.prototype.setCategory = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string State = 4;
 * @return {string}
 */
proto.standard.Group.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.standard.Group.prototype.setState = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional string Description = 5;
 * @return {string}
 */
proto.standard.Group.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.standard.Group.prototype.setDescription = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional string CreatedTime = 6;
 * @return {string}
 */
proto.standard.Group.prototype.getCreatedtime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.standard.Group.prototype.setCreatedtime = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional string UpdatedTime = 7;
 * @return {string}
 */
proto.standard.Group.prototype.getUpdatedtime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.standard.Group.prototype.setUpdatedtime = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * optional string DeletedTime = 8;
 * @return {string}
 */
proto.standard.Group.prototype.getDeletedtime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.standard.Group.prototype.setDeletedtime = function(value) {
  jspb.Message.setField(this, 8, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.Label = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.Label, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.Label.displayName = 'proto.standard.Label';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.Label.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.Label.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.Label} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.Label.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    category: jspb.Message.getFieldWithDefault(msg, 3, ""),
    state: jspb.Message.getFieldWithDefault(msg, 4, ""),
    value: jspb.Message.getFieldWithDefault(msg, 5, ""),
    createdtime: jspb.Message.getFieldWithDefault(msg, 6, ""),
    updatedtime: jspb.Message.getFieldWithDefault(msg, 7, ""),
    deletedtime: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.Label}
 */
proto.standard.Label.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.Label;
  return proto.standard.Label.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.Label} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.Label}
 */
proto.standard.Label.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedtime(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedtime(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeletedtime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.Label.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.Label.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.Label} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.Label.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCreatedtime();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getUpdatedtime();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getDeletedtime();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional int64 ID = 1;
 * @return {number}
 */
proto.standard.Label.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.standard.Label.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Name = 2;
 * @return {string}
 */
proto.standard.Label.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.Label.prototype.setName = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string Category = 3;
 * @return {string}
 */
proto.standard.Label.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.standard.Label.prototype.setCategory = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string State = 4;
 * @return {string}
 */
proto.standard.Label.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.standard.Label.prototype.setState = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional string Value = 5;
 * @return {string}
 */
proto.standard.Label.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.standard.Label.prototype.setValue = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional string CreatedTime = 6;
 * @return {string}
 */
proto.standard.Label.prototype.getCreatedtime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.standard.Label.prototype.setCreatedtime = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional string UpdatedTime = 7;
 * @return {string}
 */
proto.standard.Label.prototype.getUpdatedtime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.standard.Label.prototype.setUpdatedtime = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * optional string DeletedTime = 8;
 * @return {string}
 */
proto.standard.Label.prototype.getDeletedtime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.standard.Label.prototype.setDeletedtime = function(value) {
  jspb.Message.setField(this, 8, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.User = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.User, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.User.displayName = 'proto.standard.User';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.User.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.User.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.User} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.User.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    category: jspb.Message.getFieldWithDefault(msg, 2, ""),
    avatar: jspb.Message.getFieldWithDefault(msg, 3, ""),
    inviter: jspb.Message.getFieldWithDefault(msg, 4, 0),
    nickname: jspb.Message.getFieldWithDefault(msg, 5, ""),
    username: jspb.Message.getFieldWithDefault(msg, 6, ""),
    password: jspb.Message.getFieldWithDefault(msg, 7, ""),
    createdtime: jspb.Message.getFieldWithDefault(msg, 8, ""),
    updatedtime: jspb.Message.getFieldWithDefault(msg, 9, ""),
    deletedtime: jspb.Message.getFieldWithDefault(msg, 10, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.User}
 */
proto.standard.User.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.User;
  return proto.standard.User.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.User} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.User}
 */
proto.standard.User.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatar(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInviter(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setNickname(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedtime(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedtime(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeletedtime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.User.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.User.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.User} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.User.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAvatar();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getInviter();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getNickname();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getCreatedtime();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getUpdatedtime();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getDeletedtime();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional int64 ID = 1;
 * @return {number}
 */
proto.standard.User.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.standard.User.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Category = 2;
 * @return {string}
 */
proto.standard.User.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.User.prototype.setCategory = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string Avatar = 3;
 * @return {string}
 */
proto.standard.User.prototype.getAvatar = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.standard.User.prototype.setAvatar = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional int64 Inviter = 4;
 * @return {number}
 */
proto.standard.User.prototype.getInviter = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.standard.User.prototype.setInviter = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional string Nickname = 5;
 * @return {string}
 */
proto.standard.User.prototype.getNickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.standard.User.prototype.setNickname = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional string Username = 6;
 * @return {string}
 */
proto.standard.User.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.standard.User.prototype.setUsername = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional string Password = 7;
 * @return {string}
 */
proto.standard.User.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.standard.User.prototype.setPassword = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * optional string CreatedTime = 8;
 * @return {string}
 */
proto.standard.User.prototype.getCreatedtime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.standard.User.prototype.setCreatedtime = function(value) {
  jspb.Message.setField(this, 8, value);
};


/**
 * optional string UpdatedTime = 9;
 * @return {string}
 */
proto.standard.User.prototype.getUpdatedtime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.standard.User.prototype.setUpdatedtime = function(value) {
  jspb.Message.setField(this, 9, value);
};


/**
 * optional string DeletedTime = 10;
 * @return {string}
 */
proto.standard.User.prototype.getDeletedtime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.standard.User.prototype.setDeletedtime = function(value) {
  jspb.Message.setField(this, 10, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.CreateUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.CreateUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.CreateUserRequest.displayName = 'proto.standard.CreateUserRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.CreateUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.CreateUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.CreateUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.CreateUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    category: jspb.Message.getFieldWithDefault(msg, 1, ""),
    inviter: jspb.Message.getFieldWithDefault(msg, 3, 0),
    nickname: jspb.Message.getFieldWithDefault(msg, 4, ""),
    username: jspb.Message.getFieldWithDefault(msg, 5, ""),
    password: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.CreateUserRequest}
 */
proto.standard.CreateUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.CreateUserRequest;
  return proto.standard.CreateUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.CreateUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.CreateUserRequest}
 */
proto.standard.CreateUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInviter(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNickname(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.CreateUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.CreateUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.CreateUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.CreateUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInviter();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getNickname();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string Category = 1;
 * @return {string}
 */
proto.standard.CreateUserRequest.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.standard.CreateUserRequest.prototype.setCategory = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int64 Inviter = 3;
 * @return {number}
 */
proto.standard.CreateUserRequest.prototype.getInviter = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.standard.CreateUserRequest.prototype.setInviter = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string Nickname = 4;
 * @return {string}
 */
proto.standard.CreateUserRequest.prototype.getNickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.standard.CreateUserRequest.prototype.setNickname = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional string Username = 5;
 * @return {string}
 */
proto.standard.CreateUserRequest.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.standard.CreateUserRequest.prototype.setUsername = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional string Password = 6;
 * @return {string}
 */
proto.standard.CreateUserRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.standard.CreateUserRequest.prototype.setPassword = function(value) {
  jspb.Message.setField(this, 6, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.CreateUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.CreateUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.CreateUserResponse.displayName = 'proto.standard.CreateUserResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.CreateUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.CreateUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.CreateUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.CreateUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    data: (f = msg.getData()) && proto.standard.User.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.CreateUserResponse}
 */
proto.standard.CreateUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.CreateUserResponse;
  return proto.standard.CreateUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.CreateUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.CreateUserResponse}
 */
proto.standard.CreateUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.standard.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = new proto.standard.User;
      reader.readMessage(value,proto.standard.User.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.CreateUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.CreateUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.CreateUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.CreateUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.standard.User.serializeBinaryToWriter
    );
  }
};


/**
 * optional State State = 1;
 * @return {!proto.standard.State}
 */
proto.standard.CreateUserResponse.prototype.getState = function() {
  return /** @type {!proto.standard.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.standard.State} value */
proto.standard.CreateUserResponse.prototype.setState = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Message = 2;
 * @return {string}
 */
proto.standard.CreateUserResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.CreateUserResponse.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional User Data = 3;
 * @return {?proto.standard.User}
 */
proto.standard.CreateUserResponse.prototype.getData = function() {
  return /** @type{?proto.standard.User} */ (
    jspb.Message.getWrapperField(this, proto.standard.User, 3));
};


/** @param {?proto.standard.User|undefined} value */
proto.standard.CreateUserResponse.prototype.setData = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.standard.CreateUserResponse.prototype.clearData = function() {
  this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.standard.CreateUserResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.QueryUsersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.QueryUsersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.QueryUsersRequest.displayName = 'proto.standard.QueryUsersRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.QueryUsersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.QueryUsersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.QueryUsersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.QueryUsersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    page: jspb.Message.getFieldWithDefault(msg, 1, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.QueryUsersRequest}
 */
proto.standard.QueryUsersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.QueryUsersRequest;
  return proto.standard.QueryUsersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.QueryUsersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.QueryUsersRequest}
 */
proto.standard.QueryUsersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPage(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.QueryUsersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.QueryUsersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.QueryUsersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.QueryUsersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPage();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 Page = 1;
 * @return {number}
 */
proto.standard.QueryUsersRequest.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.standard.QueryUsersRequest.prototype.setPage = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int64 Limit = 2;
 * @return {number}
 */
proto.standard.QueryUsersRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.standard.QueryUsersRequest.prototype.setLimit = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.QueryUsersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.standard.QueryUsersResponse.repeatedFields_, null);
};
goog.inherits(proto.standard.QueryUsersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.QueryUsersResponse.displayName = 'proto.standard.QueryUsersResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.standard.QueryUsersResponse.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.QueryUsersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.QueryUsersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.QueryUsersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.QueryUsersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    totalpage: jspb.Message.getFieldWithDefault(msg, 3, 0),
    currentpage: jspb.Message.getFieldWithDefault(msg, 4, 0),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.standard.User.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.QueryUsersResponse}
 */
proto.standard.QueryUsersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.QueryUsersResponse;
  return proto.standard.QueryUsersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.QueryUsersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.QueryUsersResponse}
 */
proto.standard.QueryUsersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.standard.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalpage(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCurrentpage(value);
      break;
    case 5:
      var value = new proto.standard.User;
      reader.readMessage(value,proto.standard.User.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.QueryUsersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.QueryUsersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.QueryUsersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.QueryUsersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTotalpage();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getCurrentpage();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.standard.User.serializeBinaryToWriter
    );
  }
};


/**
 * optional State State = 1;
 * @return {!proto.standard.State}
 */
proto.standard.QueryUsersResponse.prototype.getState = function() {
  return /** @type {!proto.standard.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.standard.State} value */
proto.standard.QueryUsersResponse.prototype.setState = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Message = 2;
 * @return {string}
 */
proto.standard.QueryUsersResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.QueryUsersResponse.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int64 totalPage = 3;
 * @return {number}
 */
proto.standard.QueryUsersResponse.prototype.getTotalpage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.standard.QueryUsersResponse.prototype.setTotalpage = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional int64 currentPage = 4;
 * @return {number}
 */
proto.standard.QueryUsersResponse.prototype.getCurrentpage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.standard.QueryUsersResponse.prototype.setCurrentpage = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * repeated User Data = 5;
 * @return {!Array.<!proto.standard.User>}
 */
proto.standard.QueryUsersResponse.prototype.getDataList = function() {
  return /** @type{!Array.<!proto.standard.User>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.standard.User, 5));
};


/** @param {!Array.<!proto.standard.User>} value */
proto.standard.QueryUsersResponse.prototype.setDataList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.standard.User=} opt_value
 * @param {number=} opt_index
 * @return {!proto.standard.User}
 */
proto.standard.QueryUsersResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.standard.User, opt_index);
};


proto.standard.QueryUsersResponse.prototype.clearDataList = function() {
  this.setDataList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.QueryUserByIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.QueryUserByIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.QueryUserByIDRequest.displayName = 'proto.standard.QueryUserByIDRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.QueryUserByIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.QueryUserByIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.QueryUserByIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.QueryUserByIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.QueryUserByIDRequest}
 */
proto.standard.QueryUserByIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.QueryUserByIDRequest;
  return proto.standard.QueryUserByIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.QueryUserByIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.QueryUserByIDRequest}
 */
proto.standard.QueryUserByIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.QueryUserByIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.QueryUserByIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.QueryUserByIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.QueryUserByIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 ID = 1;
 * @return {number}
 */
proto.standard.QueryUserByIDRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.standard.QueryUserByIDRequest.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.QueryUserByIDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.QueryUserByIDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.QueryUserByIDResponse.displayName = 'proto.standard.QueryUserByIDResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.QueryUserByIDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.QueryUserByIDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.QueryUserByIDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.QueryUserByIDResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    data: (f = msg.getData()) && proto.standard.User.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.QueryUserByIDResponse}
 */
proto.standard.QueryUserByIDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.QueryUserByIDResponse;
  return proto.standard.QueryUserByIDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.QueryUserByIDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.QueryUserByIDResponse}
 */
proto.standard.QueryUserByIDResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.standard.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = new proto.standard.User;
      reader.readMessage(value,proto.standard.User.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.QueryUserByIDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.QueryUserByIDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.QueryUserByIDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.QueryUserByIDResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.standard.User.serializeBinaryToWriter
    );
  }
};


/**
 * optional State State = 1;
 * @return {!proto.standard.State}
 */
proto.standard.QueryUserByIDResponse.prototype.getState = function() {
  return /** @type {!proto.standard.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.standard.State} value */
proto.standard.QueryUserByIDResponse.prototype.setState = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Message = 2;
 * @return {string}
 */
proto.standard.QueryUserByIDResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.QueryUserByIDResponse.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional User Data = 3;
 * @return {?proto.standard.User}
 */
proto.standard.QueryUserByIDResponse.prototype.getData = function() {
  return /** @type{?proto.standard.User} */ (
    jspb.Message.getWrapperField(this, proto.standard.User, 3));
};


/** @param {?proto.standard.User|undefined} value */
proto.standard.QueryUserByIDResponse.prototype.setData = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.standard.QueryUserByIDResponse.prototype.clearData = function() {
  this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.standard.QueryUserByIDResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.QueryUsersByInviterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.QueryUsersByInviterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.QueryUsersByInviterRequest.displayName = 'proto.standard.QueryUsersByInviterRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.QueryUsersByInviterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.QueryUsersByInviterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.QueryUsersByInviterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.QueryUsersByInviterRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    inviter: jspb.Message.getFieldWithDefault(msg, 1, 0),
    page: jspb.Message.getFieldWithDefault(msg, 2, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.QueryUsersByInviterRequest}
 */
proto.standard.QueryUsersByInviterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.QueryUsersByInviterRequest;
  return proto.standard.QueryUsersByInviterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.QueryUsersByInviterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.QueryUsersByInviterRequest}
 */
proto.standard.QueryUsersByInviterRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInviter(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.QueryUsersByInviterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.QueryUsersByInviterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.QueryUsersByInviterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.QueryUsersByInviterRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInviter();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPage();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional int64 Inviter = 1;
 * @return {number}
 */
proto.standard.QueryUsersByInviterRequest.prototype.getInviter = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.standard.QueryUsersByInviterRequest.prototype.setInviter = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int64 Page = 2;
 * @return {number}
 */
proto.standard.QueryUsersByInviterRequest.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.standard.QueryUsersByInviterRequest.prototype.setPage = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int64 Limit = 3;
 * @return {number}
 */
proto.standard.QueryUsersByInviterRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.standard.QueryUsersByInviterRequest.prototype.setLimit = function(value) {
  jspb.Message.setField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.QueryUsersByInviterResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.standard.QueryUsersByInviterResponse.repeatedFields_, null);
};
goog.inherits(proto.standard.QueryUsersByInviterResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.QueryUsersByInviterResponse.displayName = 'proto.standard.QueryUsersByInviterResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.standard.QueryUsersByInviterResponse.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.QueryUsersByInviterResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.QueryUsersByInviterResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.QueryUsersByInviterResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.QueryUsersByInviterResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    totalpage: jspb.Message.getFieldWithDefault(msg, 3, 0),
    currentpage: jspb.Message.getFieldWithDefault(msg, 4, 0),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.standard.User.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.QueryUsersByInviterResponse}
 */
proto.standard.QueryUsersByInviterResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.QueryUsersByInviterResponse;
  return proto.standard.QueryUsersByInviterResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.QueryUsersByInviterResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.QueryUsersByInviterResponse}
 */
proto.standard.QueryUsersByInviterResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.standard.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalpage(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCurrentpage(value);
      break;
    case 5:
      var value = new proto.standard.User;
      reader.readMessage(value,proto.standard.User.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.QueryUsersByInviterResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.QueryUsersByInviterResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.QueryUsersByInviterResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.QueryUsersByInviterResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTotalpage();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getCurrentpage();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.standard.User.serializeBinaryToWriter
    );
  }
};


/**
 * optional State State = 1;
 * @return {!proto.standard.State}
 */
proto.standard.QueryUsersByInviterResponse.prototype.getState = function() {
  return /** @type {!proto.standard.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.standard.State} value */
proto.standard.QueryUsersByInviterResponse.prototype.setState = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Message = 2;
 * @return {string}
 */
proto.standard.QueryUsersByInviterResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.QueryUsersByInviterResponse.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int64 totalPage = 3;
 * @return {number}
 */
proto.standard.QueryUsersByInviterResponse.prototype.getTotalpage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.standard.QueryUsersByInviterResponse.prototype.setTotalpage = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional int64 currentPage = 4;
 * @return {number}
 */
proto.standard.QueryUsersByInviterResponse.prototype.getCurrentpage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.standard.QueryUsersByInviterResponse.prototype.setCurrentpage = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * repeated User Data = 5;
 * @return {!Array.<!proto.standard.User>}
 */
proto.standard.QueryUsersByInviterResponse.prototype.getDataList = function() {
  return /** @type{!Array.<!proto.standard.User>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.standard.User, 5));
};


/** @param {!Array.<!proto.standard.User>} value */
proto.standard.QueryUsersByInviterResponse.prototype.setDataList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.standard.User=} opt_value
 * @param {number=} opt_index
 * @return {!proto.standard.User}
 */
proto.standard.QueryUsersByInviterResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.standard.User, opt_index);
};


proto.standard.QueryUsersByInviterResponse.prototype.clearDataList = function() {
  this.setDataList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.QueryUserByUsernameRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.QueryUserByUsernameRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.QueryUserByUsernameRequest.displayName = 'proto.standard.QueryUserByUsernameRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.QueryUserByUsernameRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.QueryUserByUsernameRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.QueryUserByUsernameRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.QueryUserByUsernameRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    username: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.QueryUserByUsernameRequest}
 */
proto.standard.QueryUserByUsernameRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.QueryUserByUsernameRequest;
  return proto.standard.QueryUserByUsernameRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.QueryUserByUsernameRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.QueryUserByUsernameRequest}
 */
proto.standard.QueryUserByUsernameRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.QueryUserByUsernameRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.QueryUserByUsernameRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.QueryUserByUsernameRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.QueryUserByUsernameRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string Username = 1;
 * @return {string}
 */
proto.standard.QueryUserByUsernameRequest.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.standard.QueryUserByUsernameRequest.prototype.setUsername = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.QueryUserByUsernameResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.QueryUserByUsernameResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.QueryUserByUsernameResponse.displayName = 'proto.standard.QueryUserByUsernameResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.QueryUserByUsernameResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.QueryUserByUsernameResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.QueryUserByUsernameResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.QueryUserByUsernameResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    data: (f = msg.getData()) && proto.standard.User.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.QueryUserByUsernameResponse}
 */
proto.standard.QueryUserByUsernameResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.QueryUserByUsernameResponse;
  return proto.standard.QueryUserByUsernameResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.QueryUserByUsernameResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.QueryUserByUsernameResponse}
 */
proto.standard.QueryUserByUsernameResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.standard.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = new proto.standard.User;
      reader.readMessage(value,proto.standard.User.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.QueryUserByUsernameResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.QueryUserByUsernameResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.QueryUserByUsernameResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.QueryUserByUsernameResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.standard.User.serializeBinaryToWriter
    );
  }
};


/**
 * optional State State = 1;
 * @return {!proto.standard.State}
 */
proto.standard.QueryUserByUsernameResponse.prototype.getState = function() {
  return /** @type {!proto.standard.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.standard.State} value */
proto.standard.QueryUserByUsernameResponse.prototype.setState = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Message = 2;
 * @return {string}
 */
proto.standard.QueryUserByUsernameResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.QueryUserByUsernameResponse.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional User Data = 3;
 * @return {?proto.standard.User}
 */
proto.standard.QueryUserByUsernameResponse.prototype.getData = function() {
  return /** @type{?proto.standard.User} */ (
    jspb.Message.getWrapperField(this, proto.standard.User, 3));
};


/** @param {?proto.standard.User|undefined} value */
proto.standard.QueryUserByUsernameResponse.prototype.setData = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.standard.QueryUserByUsernameResponse.prototype.clearData = function() {
  this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.standard.QueryUserByUsernameResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.DeleteUserByIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.DeleteUserByIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.DeleteUserByIDRequest.displayName = 'proto.standard.DeleteUserByIDRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.DeleteUserByIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.DeleteUserByIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.DeleteUserByIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.DeleteUserByIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.DeleteUserByIDRequest}
 */
proto.standard.DeleteUserByIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.DeleteUserByIDRequest;
  return proto.standard.DeleteUserByIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.DeleteUserByIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.DeleteUserByIDRequest}
 */
proto.standard.DeleteUserByIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.DeleteUserByIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.DeleteUserByIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.DeleteUserByIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.DeleteUserByIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 ID = 1;
 * @return {number}
 */
proto.standard.DeleteUserByIDRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.standard.DeleteUserByIDRequest.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.DeleteUserByIDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.DeleteUserByIDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.DeleteUserByIDResponse.displayName = 'proto.standard.DeleteUserByIDResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.DeleteUserByIDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.DeleteUserByIDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.DeleteUserByIDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.DeleteUserByIDResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.DeleteUserByIDResponse}
 */
proto.standard.DeleteUserByIDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.DeleteUserByIDResponse;
  return proto.standard.DeleteUserByIDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.DeleteUserByIDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.DeleteUserByIDResponse}
 */
proto.standard.DeleteUserByIDResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.standard.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.DeleteUserByIDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.DeleteUserByIDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.DeleteUserByIDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.DeleteUserByIDResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional State State = 1;
 * @return {!proto.standard.State}
 */
proto.standard.DeleteUserByIDResponse.prototype.getState = function() {
  return /** @type {!proto.standard.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.standard.State} value */
proto.standard.DeleteUserByIDResponse.prototype.setState = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Message = 2;
 * @return {string}
 */
proto.standard.DeleteUserByIDResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.DeleteUserByIDResponse.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.UpdateUserCategoryByIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.UpdateUserCategoryByIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.UpdateUserCategoryByIDRequest.displayName = 'proto.standard.UpdateUserCategoryByIDRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.UpdateUserCategoryByIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.UpdateUserCategoryByIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.UpdateUserCategoryByIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateUserCategoryByIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    category: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.UpdateUserCategoryByIDRequest}
 */
proto.standard.UpdateUserCategoryByIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.UpdateUserCategoryByIDRequest;
  return proto.standard.UpdateUserCategoryByIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.UpdateUserCategoryByIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.UpdateUserCategoryByIDRequest}
 */
proto.standard.UpdateUserCategoryByIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.UpdateUserCategoryByIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.UpdateUserCategoryByIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.UpdateUserCategoryByIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateUserCategoryByIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 ID = 1;
 * @return {number}
 */
proto.standard.UpdateUserCategoryByIDRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.standard.UpdateUserCategoryByIDRequest.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Category = 2;
 * @return {string}
 */
proto.standard.UpdateUserCategoryByIDRequest.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.UpdateUserCategoryByIDRequest.prototype.setCategory = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.UpdateUserCategoryByIDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.UpdateUserCategoryByIDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.UpdateUserCategoryByIDResponse.displayName = 'proto.standard.UpdateUserCategoryByIDResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.UpdateUserCategoryByIDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.UpdateUserCategoryByIDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.UpdateUserCategoryByIDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateUserCategoryByIDResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.UpdateUserCategoryByIDResponse}
 */
proto.standard.UpdateUserCategoryByIDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.UpdateUserCategoryByIDResponse;
  return proto.standard.UpdateUserCategoryByIDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.UpdateUserCategoryByIDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.UpdateUserCategoryByIDResponse}
 */
proto.standard.UpdateUserCategoryByIDResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.standard.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.UpdateUserCategoryByIDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.UpdateUserCategoryByIDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.UpdateUserCategoryByIDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateUserCategoryByIDResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional State State = 1;
 * @return {!proto.standard.State}
 */
proto.standard.UpdateUserCategoryByIDResponse.prototype.getState = function() {
  return /** @type {!proto.standard.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.standard.State} value */
proto.standard.UpdateUserCategoryByIDResponse.prototype.setState = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Message = 2;
 * @return {string}
 */
proto.standard.UpdateUserCategoryByIDResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.UpdateUserCategoryByIDResponse.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.UpdateUserAvatarByIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.UpdateUserAvatarByIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.UpdateUserAvatarByIDRequest.displayName = 'proto.standard.UpdateUserAvatarByIDRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.UpdateUserAvatarByIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.UpdateUserAvatarByIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.UpdateUserAvatarByIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateUserAvatarByIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    avatar: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.UpdateUserAvatarByIDRequest}
 */
proto.standard.UpdateUserAvatarByIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.UpdateUserAvatarByIDRequest;
  return proto.standard.UpdateUserAvatarByIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.UpdateUserAvatarByIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.UpdateUserAvatarByIDRequest}
 */
proto.standard.UpdateUserAvatarByIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatar(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.UpdateUserAvatarByIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.UpdateUserAvatarByIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.UpdateUserAvatarByIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateUserAvatarByIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getAvatar();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 ID = 1;
 * @return {number}
 */
proto.standard.UpdateUserAvatarByIDRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.standard.UpdateUserAvatarByIDRequest.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Avatar = 2;
 * @return {string}
 */
proto.standard.UpdateUserAvatarByIDRequest.prototype.getAvatar = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.UpdateUserAvatarByIDRequest.prototype.setAvatar = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.UpdateUserAvatarByIDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.UpdateUserAvatarByIDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.UpdateUserAvatarByIDResponse.displayName = 'proto.standard.UpdateUserAvatarByIDResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.UpdateUserAvatarByIDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.UpdateUserAvatarByIDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.UpdateUserAvatarByIDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateUserAvatarByIDResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.UpdateUserAvatarByIDResponse}
 */
proto.standard.UpdateUserAvatarByIDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.UpdateUserAvatarByIDResponse;
  return proto.standard.UpdateUserAvatarByIDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.UpdateUserAvatarByIDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.UpdateUserAvatarByIDResponse}
 */
proto.standard.UpdateUserAvatarByIDResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.standard.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.UpdateUserAvatarByIDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.UpdateUserAvatarByIDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.UpdateUserAvatarByIDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateUserAvatarByIDResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional State State = 1;
 * @return {!proto.standard.State}
 */
proto.standard.UpdateUserAvatarByIDResponse.prototype.getState = function() {
  return /** @type {!proto.standard.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.standard.State} value */
proto.standard.UpdateUserAvatarByIDResponse.prototype.setState = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Message = 2;
 * @return {string}
 */
proto.standard.UpdateUserAvatarByIDResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.UpdateUserAvatarByIDResponse.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.UpdateUserInviterByIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.UpdateUserInviterByIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.UpdateUserInviterByIDRequest.displayName = 'proto.standard.UpdateUserInviterByIDRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.UpdateUserInviterByIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.UpdateUserInviterByIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.UpdateUserInviterByIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateUserInviterByIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    inviter: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.UpdateUserInviterByIDRequest}
 */
proto.standard.UpdateUserInviterByIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.UpdateUserInviterByIDRequest;
  return proto.standard.UpdateUserInviterByIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.UpdateUserInviterByIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.UpdateUserInviterByIDRequest}
 */
proto.standard.UpdateUserInviterByIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInviter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.UpdateUserInviterByIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.UpdateUserInviterByIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.UpdateUserInviterByIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateUserInviterByIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getInviter();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 ID = 1;
 * @return {number}
 */
proto.standard.UpdateUserInviterByIDRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.standard.UpdateUserInviterByIDRequest.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int64 Inviter = 2;
 * @return {number}
 */
proto.standard.UpdateUserInviterByIDRequest.prototype.getInviter = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.standard.UpdateUserInviterByIDRequest.prototype.setInviter = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.UpdateUserInviterByIDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.UpdateUserInviterByIDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.UpdateUserInviterByIDResponse.displayName = 'proto.standard.UpdateUserInviterByIDResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.UpdateUserInviterByIDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.UpdateUserInviterByIDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.UpdateUserInviterByIDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateUserInviterByIDResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.UpdateUserInviterByIDResponse}
 */
proto.standard.UpdateUserInviterByIDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.UpdateUserInviterByIDResponse;
  return proto.standard.UpdateUserInviterByIDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.UpdateUserInviterByIDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.UpdateUserInviterByIDResponse}
 */
proto.standard.UpdateUserInviterByIDResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.standard.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.UpdateUserInviterByIDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.UpdateUserInviterByIDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.UpdateUserInviterByIDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateUserInviterByIDResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional State State = 1;
 * @return {!proto.standard.State}
 */
proto.standard.UpdateUserInviterByIDResponse.prototype.getState = function() {
  return /** @type {!proto.standard.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.standard.State} value */
proto.standard.UpdateUserInviterByIDResponse.prototype.setState = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Message = 2;
 * @return {string}
 */
proto.standard.UpdateUserInviterByIDResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.UpdateUserInviterByIDResponse.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.UpdateUserNicknameByIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.UpdateUserNicknameByIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.UpdateUserNicknameByIDRequest.displayName = 'proto.standard.UpdateUserNicknameByIDRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.UpdateUserNicknameByIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.UpdateUserNicknameByIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.UpdateUserNicknameByIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateUserNicknameByIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    nickname: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.UpdateUserNicknameByIDRequest}
 */
proto.standard.UpdateUserNicknameByIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.UpdateUserNicknameByIDRequest;
  return proto.standard.UpdateUserNicknameByIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.UpdateUserNicknameByIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.UpdateUserNicknameByIDRequest}
 */
proto.standard.UpdateUserNicknameByIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNickname(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.UpdateUserNicknameByIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.UpdateUserNicknameByIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.UpdateUserNicknameByIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateUserNicknameByIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getNickname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 ID = 1;
 * @return {number}
 */
proto.standard.UpdateUserNicknameByIDRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.standard.UpdateUserNicknameByIDRequest.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Nickname = 2;
 * @return {string}
 */
proto.standard.UpdateUserNicknameByIDRequest.prototype.getNickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.UpdateUserNicknameByIDRequest.prototype.setNickname = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.UpdateUserNicknameByIDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.UpdateUserNicknameByIDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.UpdateUserNicknameByIDResponse.displayName = 'proto.standard.UpdateUserNicknameByIDResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.UpdateUserNicknameByIDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.UpdateUserNicknameByIDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.UpdateUserNicknameByIDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateUserNicknameByIDResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.UpdateUserNicknameByIDResponse}
 */
proto.standard.UpdateUserNicknameByIDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.UpdateUserNicknameByIDResponse;
  return proto.standard.UpdateUserNicknameByIDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.UpdateUserNicknameByIDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.UpdateUserNicknameByIDResponse}
 */
proto.standard.UpdateUserNicknameByIDResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.standard.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.UpdateUserNicknameByIDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.UpdateUserNicknameByIDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.UpdateUserNicknameByIDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateUserNicknameByIDResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional State State = 1;
 * @return {!proto.standard.State}
 */
proto.standard.UpdateUserNicknameByIDResponse.prototype.getState = function() {
  return /** @type {!proto.standard.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.standard.State} value */
proto.standard.UpdateUserNicknameByIDResponse.prototype.setState = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Message = 2;
 * @return {string}
 */
proto.standard.UpdateUserNicknameByIDResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.UpdateUserNicknameByIDResponse.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.UpdateUserPasswordByIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.UpdateUserPasswordByIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.UpdateUserPasswordByIDRequest.displayName = 'proto.standard.UpdateUserPasswordByIDRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.UpdateUserPasswordByIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.UpdateUserPasswordByIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.UpdateUserPasswordByIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateUserPasswordByIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    password: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.UpdateUserPasswordByIDRequest}
 */
proto.standard.UpdateUserPasswordByIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.UpdateUserPasswordByIDRequest;
  return proto.standard.UpdateUserPasswordByIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.UpdateUserPasswordByIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.UpdateUserPasswordByIDRequest}
 */
proto.standard.UpdateUserPasswordByIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.UpdateUserPasswordByIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.UpdateUserPasswordByIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.UpdateUserPasswordByIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateUserPasswordByIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 ID = 1;
 * @return {number}
 */
proto.standard.UpdateUserPasswordByIDRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.standard.UpdateUserPasswordByIDRequest.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Password = 2;
 * @return {string}
 */
proto.standard.UpdateUserPasswordByIDRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.UpdateUserPasswordByIDRequest.prototype.setPassword = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.UpdateUserPasswordByIDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.UpdateUserPasswordByIDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.UpdateUserPasswordByIDResponse.displayName = 'proto.standard.UpdateUserPasswordByIDResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.UpdateUserPasswordByIDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.UpdateUserPasswordByIDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.UpdateUserPasswordByIDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateUserPasswordByIDResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.UpdateUserPasswordByIDResponse}
 */
proto.standard.UpdateUserPasswordByIDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.UpdateUserPasswordByIDResponse;
  return proto.standard.UpdateUserPasswordByIDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.UpdateUserPasswordByIDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.UpdateUserPasswordByIDResponse}
 */
proto.standard.UpdateUserPasswordByIDResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.standard.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.UpdateUserPasswordByIDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.UpdateUserPasswordByIDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.UpdateUserPasswordByIDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateUserPasswordByIDResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional State State = 1;
 * @return {!proto.standard.State}
 */
proto.standard.UpdateUserPasswordByIDResponse.prototype.getState = function() {
  return /** @type {!proto.standard.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.standard.State} value */
proto.standard.UpdateUserPasswordByIDResponse.prototype.setState = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Message = 2;
 * @return {string}
 */
proto.standard.UpdateUserPasswordByIDResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.UpdateUserPasswordByIDResponse.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.VerifyUserPasswordByIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.VerifyUserPasswordByIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.VerifyUserPasswordByIDRequest.displayName = 'proto.standard.VerifyUserPasswordByIDRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.VerifyUserPasswordByIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.VerifyUserPasswordByIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.VerifyUserPasswordByIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.VerifyUserPasswordByIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    password: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.VerifyUserPasswordByIDRequest}
 */
proto.standard.VerifyUserPasswordByIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.VerifyUserPasswordByIDRequest;
  return proto.standard.VerifyUserPasswordByIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.VerifyUserPasswordByIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.VerifyUserPasswordByIDRequest}
 */
proto.standard.VerifyUserPasswordByIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.VerifyUserPasswordByIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.VerifyUserPasswordByIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.VerifyUserPasswordByIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.VerifyUserPasswordByIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 ID = 1;
 * @return {number}
 */
proto.standard.VerifyUserPasswordByIDRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.standard.VerifyUserPasswordByIDRequest.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Password = 2;
 * @return {string}
 */
proto.standard.VerifyUserPasswordByIDRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.VerifyUserPasswordByIDRequest.prototype.setPassword = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.VerifyUserPasswordByIDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.VerifyUserPasswordByIDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.VerifyUserPasswordByIDResponse.displayName = 'proto.standard.VerifyUserPasswordByIDResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.VerifyUserPasswordByIDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.VerifyUserPasswordByIDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.VerifyUserPasswordByIDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.VerifyUserPasswordByIDResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.VerifyUserPasswordByIDResponse}
 */
proto.standard.VerifyUserPasswordByIDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.VerifyUserPasswordByIDResponse;
  return proto.standard.VerifyUserPasswordByIDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.VerifyUserPasswordByIDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.VerifyUserPasswordByIDResponse}
 */
proto.standard.VerifyUserPasswordByIDResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.standard.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.VerifyUserPasswordByIDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.VerifyUserPasswordByIDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.VerifyUserPasswordByIDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.VerifyUserPasswordByIDResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional State State = 1;
 * @return {!proto.standard.State}
 */
proto.standard.VerifyUserPasswordByIDResponse.prototype.getState = function() {
  return /** @type {!proto.standard.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.standard.State} value */
proto.standard.VerifyUserPasswordByIDResponse.prototype.setState = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Message = 2;
 * @return {string}
 */
proto.standard.VerifyUserPasswordByIDResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.VerifyUserPasswordByIDResponse.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.VerifyUserPasswordByUsernameRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.VerifyUserPasswordByUsernameRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.VerifyUserPasswordByUsernameRequest.displayName = 'proto.standard.VerifyUserPasswordByUsernameRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.VerifyUserPasswordByUsernameRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.VerifyUserPasswordByUsernameRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.VerifyUserPasswordByUsernameRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.VerifyUserPasswordByUsernameRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    username: jspb.Message.getFieldWithDefault(msg, 1, ""),
    password: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.VerifyUserPasswordByUsernameRequest}
 */
proto.standard.VerifyUserPasswordByUsernameRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.VerifyUserPasswordByUsernameRequest;
  return proto.standard.VerifyUserPasswordByUsernameRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.VerifyUserPasswordByUsernameRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.VerifyUserPasswordByUsernameRequest}
 */
proto.standard.VerifyUserPasswordByUsernameRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.VerifyUserPasswordByUsernameRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.VerifyUserPasswordByUsernameRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.VerifyUserPasswordByUsernameRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.VerifyUserPasswordByUsernameRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string Username = 1;
 * @return {string}
 */
proto.standard.VerifyUserPasswordByUsernameRequest.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.standard.VerifyUserPasswordByUsernameRequest.prototype.setUsername = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Password = 2;
 * @return {string}
 */
proto.standard.VerifyUserPasswordByUsernameRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.VerifyUserPasswordByUsernameRequest.prototype.setPassword = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.VerifyUserPasswordByUsernameResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.VerifyUserPasswordByUsernameResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.VerifyUserPasswordByUsernameResponse.displayName = 'proto.standard.VerifyUserPasswordByUsernameResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.VerifyUserPasswordByUsernameResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.VerifyUserPasswordByUsernameResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.VerifyUserPasswordByUsernameResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.VerifyUserPasswordByUsernameResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.VerifyUserPasswordByUsernameResponse}
 */
proto.standard.VerifyUserPasswordByUsernameResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.VerifyUserPasswordByUsernameResponse;
  return proto.standard.VerifyUserPasswordByUsernameResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.VerifyUserPasswordByUsernameResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.VerifyUserPasswordByUsernameResponse}
 */
proto.standard.VerifyUserPasswordByUsernameResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.standard.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.VerifyUserPasswordByUsernameResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.VerifyUserPasswordByUsernameResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.VerifyUserPasswordByUsernameResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.VerifyUserPasswordByUsernameResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional State State = 1;
 * @return {!proto.standard.State}
 */
proto.standard.VerifyUserPasswordByUsernameResponse.prototype.getState = function() {
  return /** @type {!proto.standard.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.standard.State} value */
proto.standard.VerifyUserPasswordByUsernameResponse.prototype.setState = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Message = 2;
 * @return {string}
 */
proto.standard.VerifyUserPasswordByUsernameResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.VerifyUserPasswordByUsernameResponse.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.CreateLabelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.CreateLabelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.CreateLabelRequest.displayName = 'proto.standard.CreateLabelRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.CreateLabelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.CreateLabelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.CreateLabelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.CreateLabelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    category: jspb.Message.getFieldWithDefault(msg, 2, ""),
    state: jspb.Message.getFieldWithDefault(msg, 3, ""),
    value: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.CreateLabelRequest}
 */
proto.standard.CreateLabelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.CreateLabelRequest;
  return proto.standard.CreateLabelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.CreateLabelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.CreateLabelRequest}
 */
proto.standard.CreateLabelRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.CreateLabelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.CreateLabelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.CreateLabelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.CreateLabelRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string Name = 1;
 * @return {string}
 */
proto.standard.CreateLabelRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.standard.CreateLabelRequest.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Category = 2;
 * @return {string}
 */
proto.standard.CreateLabelRequest.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.CreateLabelRequest.prototype.setCategory = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string State = 3;
 * @return {string}
 */
proto.standard.CreateLabelRequest.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.standard.CreateLabelRequest.prototype.setState = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string Value = 4;
 * @return {string}
 */
proto.standard.CreateLabelRequest.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.standard.CreateLabelRequest.prototype.setValue = function(value) {
  jspb.Message.setField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.CreateLabelResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.CreateLabelResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.CreateLabelResponse.displayName = 'proto.standard.CreateLabelResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.CreateLabelResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.CreateLabelResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.CreateLabelResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.CreateLabelResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    data: (f = msg.getData()) && proto.standard.Label.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.CreateLabelResponse}
 */
proto.standard.CreateLabelResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.CreateLabelResponse;
  return proto.standard.CreateLabelResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.CreateLabelResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.CreateLabelResponse}
 */
proto.standard.CreateLabelResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.standard.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = new proto.standard.Label;
      reader.readMessage(value,proto.standard.Label.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.CreateLabelResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.CreateLabelResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.CreateLabelResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.CreateLabelResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.standard.Label.serializeBinaryToWriter
    );
  }
};


/**
 * optional State State = 1;
 * @return {!proto.standard.State}
 */
proto.standard.CreateLabelResponse.prototype.getState = function() {
  return /** @type {!proto.standard.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.standard.State} value */
proto.standard.CreateLabelResponse.prototype.setState = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Message = 2;
 * @return {string}
 */
proto.standard.CreateLabelResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.CreateLabelResponse.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional Label Data = 3;
 * @return {?proto.standard.Label}
 */
proto.standard.CreateLabelResponse.prototype.getData = function() {
  return /** @type{?proto.standard.Label} */ (
    jspb.Message.getWrapperField(this, proto.standard.Label, 3));
};


/** @param {?proto.standard.Label|undefined} value */
proto.standard.CreateLabelResponse.prototype.setData = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.standard.CreateLabelResponse.prototype.clearData = function() {
  this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.standard.CreateLabelResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.CreateLabelForUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.CreateLabelForUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.CreateLabelForUserRequest.displayName = 'proto.standard.CreateLabelForUserRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.CreateLabelForUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.CreateLabelForUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.CreateLabelForUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.CreateLabelForUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    category: jspb.Message.getFieldWithDefault(msg, 3, ""),
    state: jspb.Message.getFieldWithDefault(msg, 4, ""),
    value: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.CreateLabelForUserRequest}
 */
proto.standard.CreateLabelForUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.CreateLabelForUserRequest;
  return proto.standard.CreateLabelForUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.CreateLabelForUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.CreateLabelForUserRequest}
 */
proto.standard.CreateLabelForUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.CreateLabelForUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.CreateLabelForUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.CreateLabelForUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.CreateLabelForUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional int64 UserID = 1;
 * @return {number}
 */
proto.standard.CreateLabelForUserRequest.prototype.getUserid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.standard.CreateLabelForUserRequest.prototype.setUserid = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Name = 2;
 * @return {string}
 */
proto.standard.CreateLabelForUserRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.CreateLabelForUserRequest.prototype.setName = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string Category = 3;
 * @return {string}
 */
proto.standard.CreateLabelForUserRequest.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.standard.CreateLabelForUserRequest.prototype.setCategory = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string State = 4;
 * @return {string}
 */
proto.standard.CreateLabelForUserRequest.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.standard.CreateLabelForUserRequest.prototype.setState = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional string Value = 5;
 * @return {string}
 */
proto.standard.CreateLabelForUserRequest.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.standard.CreateLabelForUserRequest.prototype.setValue = function(value) {
  jspb.Message.setField(this, 5, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.CreateLabelForUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.CreateLabelForUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.CreateLabelForUserResponse.displayName = 'proto.standard.CreateLabelForUserResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.CreateLabelForUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.CreateLabelForUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.CreateLabelForUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.CreateLabelForUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    data: (f = msg.getData()) && proto.standard.Label.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.CreateLabelForUserResponse}
 */
proto.standard.CreateLabelForUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.CreateLabelForUserResponse;
  return proto.standard.CreateLabelForUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.CreateLabelForUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.CreateLabelForUserResponse}
 */
proto.standard.CreateLabelForUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.standard.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = new proto.standard.Label;
      reader.readMessage(value,proto.standard.Label.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.CreateLabelForUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.CreateLabelForUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.CreateLabelForUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.CreateLabelForUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.standard.Label.serializeBinaryToWriter
    );
  }
};


/**
 * optional State State = 1;
 * @return {!proto.standard.State}
 */
proto.standard.CreateLabelForUserResponse.prototype.getState = function() {
  return /** @type {!proto.standard.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.standard.State} value */
proto.standard.CreateLabelForUserResponse.prototype.setState = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Message = 2;
 * @return {string}
 */
proto.standard.CreateLabelForUserResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.CreateLabelForUserResponse.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional Label Data = 3;
 * @return {?proto.standard.Label}
 */
proto.standard.CreateLabelForUserResponse.prototype.getData = function() {
  return /** @type{?proto.standard.Label} */ (
    jspb.Message.getWrapperField(this, proto.standard.Label, 3));
};


/** @param {?proto.standard.Label|undefined} value */
proto.standard.CreateLabelForUserResponse.prototype.setData = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.standard.CreateLabelForUserResponse.prototype.clearData = function() {
  this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.standard.CreateLabelForUserResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.QueryLabelsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.QueryLabelsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.QueryLabelsRequest.displayName = 'proto.standard.QueryLabelsRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.QueryLabelsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.QueryLabelsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.QueryLabelsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.QueryLabelsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    page: jspb.Message.getFieldWithDefault(msg, 1, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.QueryLabelsRequest}
 */
proto.standard.QueryLabelsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.QueryLabelsRequest;
  return proto.standard.QueryLabelsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.QueryLabelsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.QueryLabelsRequest}
 */
proto.standard.QueryLabelsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPage(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.QueryLabelsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.QueryLabelsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.QueryLabelsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.QueryLabelsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPage();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 Page = 1;
 * @return {number}
 */
proto.standard.QueryLabelsRequest.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.standard.QueryLabelsRequest.prototype.setPage = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int64 Limit = 2;
 * @return {number}
 */
proto.standard.QueryLabelsRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.standard.QueryLabelsRequest.prototype.setLimit = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.QueryLabelsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.standard.QueryLabelsResponse.repeatedFields_, null);
};
goog.inherits(proto.standard.QueryLabelsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.QueryLabelsResponse.displayName = 'proto.standard.QueryLabelsResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.standard.QueryLabelsResponse.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.QueryLabelsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.QueryLabelsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.QueryLabelsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.QueryLabelsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    totalpage: jspb.Message.getFieldWithDefault(msg, 3, 0),
    currentpage: jspb.Message.getFieldWithDefault(msg, 4, 0),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.standard.Label.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.QueryLabelsResponse}
 */
proto.standard.QueryLabelsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.QueryLabelsResponse;
  return proto.standard.QueryLabelsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.QueryLabelsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.QueryLabelsResponse}
 */
proto.standard.QueryLabelsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.standard.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalpage(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCurrentpage(value);
      break;
    case 5:
      var value = new proto.standard.Label;
      reader.readMessage(value,proto.standard.Label.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.QueryLabelsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.QueryLabelsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.QueryLabelsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.QueryLabelsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTotalpage();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getCurrentpage();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.standard.Label.serializeBinaryToWriter
    );
  }
};


/**
 * optional State State = 1;
 * @return {!proto.standard.State}
 */
proto.standard.QueryLabelsResponse.prototype.getState = function() {
  return /** @type {!proto.standard.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.standard.State} value */
proto.standard.QueryLabelsResponse.prototype.setState = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Message = 2;
 * @return {string}
 */
proto.standard.QueryLabelsResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.QueryLabelsResponse.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int64 totalPage = 3;
 * @return {number}
 */
proto.standard.QueryLabelsResponse.prototype.getTotalpage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.standard.QueryLabelsResponse.prototype.setTotalpage = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional int64 currentPage = 4;
 * @return {number}
 */
proto.standard.QueryLabelsResponse.prototype.getCurrentpage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.standard.QueryLabelsResponse.prototype.setCurrentpage = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * repeated Label Data = 5;
 * @return {!Array.<!proto.standard.Label>}
 */
proto.standard.QueryLabelsResponse.prototype.getDataList = function() {
  return /** @type{!Array.<!proto.standard.Label>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.standard.Label, 5));
};


/** @param {!Array.<!proto.standard.Label>} value */
proto.standard.QueryLabelsResponse.prototype.setDataList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.standard.Label=} opt_value
 * @param {number=} opt_index
 * @return {!proto.standard.Label}
 */
proto.standard.QueryLabelsResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.standard.Label, opt_index);
};


proto.standard.QueryLabelsResponse.prototype.clearDataList = function() {
  this.setDataList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.QueryLabelByIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.QueryLabelByIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.QueryLabelByIDRequest.displayName = 'proto.standard.QueryLabelByIDRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.QueryLabelByIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.QueryLabelByIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.QueryLabelByIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.QueryLabelByIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.QueryLabelByIDRequest}
 */
proto.standard.QueryLabelByIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.QueryLabelByIDRequest;
  return proto.standard.QueryLabelByIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.QueryLabelByIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.QueryLabelByIDRequest}
 */
proto.standard.QueryLabelByIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.QueryLabelByIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.QueryLabelByIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.QueryLabelByIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.QueryLabelByIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 ID = 1;
 * @return {number}
 */
proto.standard.QueryLabelByIDRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.standard.QueryLabelByIDRequest.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.QueryLabelByIDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.QueryLabelByIDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.QueryLabelByIDResponse.displayName = 'proto.standard.QueryLabelByIDResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.QueryLabelByIDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.QueryLabelByIDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.QueryLabelByIDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.QueryLabelByIDResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    data: (f = msg.getData()) && proto.standard.Label.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.QueryLabelByIDResponse}
 */
proto.standard.QueryLabelByIDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.QueryLabelByIDResponse;
  return proto.standard.QueryLabelByIDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.QueryLabelByIDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.QueryLabelByIDResponse}
 */
proto.standard.QueryLabelByIDResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.standard.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = new proto.standard.Label;
      reader.readMessage(value,proto.standard.Label.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.QueryLabelByIDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.QueryLabelByIDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.QueryLabelByIDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.QueryLabelByIDResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.standard.Label.serializeBinaryToWriter
    );
  }
};


/**
 * optional State State = 1;
 * @return {!proto.standard.State}
 */
proto.standard.QueryLabelByIDResponse.prototype.getState = function() {
  return /** @type {!proto.standard.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.standard.State} value */
proto.standard.QueryLabelByIDResponse.prototype.setState = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Message = 2;
 * @return {string}
 */
proto.standard.QueryLabelByIDResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.QueryLabelByIDResponse.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional Label Data = 3;
 * @return {?proto.standard.Label}
 */
proto.standard.QueryLabelByIDResponse.prototype.getData = function() {
  return /** @type{?proto.standard.Label} */ (
    jspb.Message.getWrapperField(this, proto.standard.Label, 3));
};


/** @param {?proto.standard.Label|undefined} value */
proto.standard.QueryLabelByIDResponse.prototype.setData = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.standard.QueryLabelByIDResponse.prototype.clearData = function() {
  this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.standard.QueryLabelByIDResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.UpdateLabelNameByIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.UpdateLabelNameByIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.UpdateLabelNameByIDRequest.displayName = 'proto.standard.UpdateLabelNameByIDRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.UpdateLabelNameByIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.UpdateLabelNameByIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.UpdateLabelNameByIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateLabelNameByIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.UpdateLabelNameByIDRequest}
 */
proto.standard.UpdateLabelNameByIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.UpdateLabelNameByIDRequest;
  return proto.standard.UpdateLabelNameByIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.UpdateLabelNameByIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.UpdateLabelNameByIDRequest}
 */
proto.standard.UpdateLabelNameByIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.UpdateLabelNameByIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.UpdateLabelNameByIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.UpdateLabelNameByIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateLabelNameByIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 ID = 1;
 * @return {number}
 */
proto.standard.UpdateLabelNameByIDRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.standard.UpdateLabelNameByIDRequest.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Name = 2;
 * @return {string}
 */
proto.standard.UpdateLabelNameByIDRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.UpdateLabelNameByIDRequest.prototype.setName = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.UpdateLabelNameByIDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.UpdateLabelNameByIDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.UpdateLabelNameByIDResponse.displayName = 'proto.standard.UpdateLabelNameByIDResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.UpdateLabelNameByIDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.UpdateLabelNameByIDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.UpdateLabelNameByIDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateLabelNameByIDResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.UpdateLabelNameByIDResponse}
 */
proto.standard.UpdateLabelNameByIDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.UpdateLabelNameByIDResponse;
  return proto.standard.UpdateLabelNameByIDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.UpdateLabelNameByIDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.UpdateLabelNameByIDResponse}
 */
proto.standard.UpdateLabelNameByIDResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.standard.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.UpdateLabelNameByIDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.UpdateLabelNameByIDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.UpdateLabelNameByIDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateLabelNameByIDResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional State State = 1;
 * @return {!proto.standard.State}
 */
proto.standard.UpdateLabelNameByIDResponse.prototype.getState = function() {
  return /** @type {!proto.standard.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.standard.State} value */
proto.standard.UpdateLabelNameByIDResponse.prototype.setState = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Message = 2;
 * @return {string}
 */
proto.standard.UpdateLabelNameByIDResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.UpdateLabelNameByIDResponse.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.UpdateLabelCategoryByIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.UpdateLabelCategoryByIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.UpdateLabelCategoryByIDRequest.displayName = 'proto.standard.UpdateLabelCategoryByIDRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.UpdateLabelCategoryByIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.UpdateLabelCategoryByIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.UpdateLabelCategoryByIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateLabelCategoryByIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    category: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.UpdateLabelCategoryByIDRequest}
 */
proto.standard.UpdateLabelCategoryByIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.UpdateLabelCategoryByIDRequest;
  return proto.standard.UpdateLabelCategoryByIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.UpdateLabelCategoryByIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.UpdateLabelCategoryByIDRequest}
 */
proto.standard.UpdateLabelCategoryByIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.UpdateLabelCategoryByIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.UpdateLabelCategoryByIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.UpdateLabelCategoryByIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateLabelCategoryByIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 ID = 1;
 * @return {number}
 */
proto.standard.UpdateLabelCategoryByIDRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.standard.UpdateLabelCategoryByIDRequest.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Category = 2;
 * @return {string}
 */
proto.standard.UpdateLabelCategoryByIDRequest.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.UpdateLabelCategoryByIDRequest.prototype.setCategory = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.UpdateLabelCategoryByIDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.UpdateLabelCategoryByIDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.UpdateLabelCategoryByIDResponse.displayName = 'proto.standard.UpdateLabelCategoryByIDResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.UpdateLabelCategoryByIDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.UpdateLabelCategoryByIDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.UpdateLabelCategoryByIDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateLabelCategoryByIDResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.UpdateLabelCategoryByIDResponse}
 */
proto.standard.UpdateLabelCategoryByIDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.UpdateLabelCategoryByIDResponse;
  return proto.standard.UpdateLabelCategoryByIDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.UpdateLabelCategoryByIDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.UpdateLabelCategoryByIDResponse}
 */
proto.standard.UpdateLabelCategoryByIDResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.standard.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.UpdateLabelCategoryByIDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.UpdateLabelCategoryByIDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.UpdateLabelCategoryByIDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateLabelCategoryByIDResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional State State = 1;
 * @return {!proto.standard.State}
 */
proto.standard.UpdateLabelCategoryByIDResponse.prototype.getState = function() {
  return /** @type {!proto.standard.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.standard.State} value */
proto.standard.UpdateLabelCategoryByIDResponse.prototype.setState = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Message = 2;
 * @return {string}
 */
proto.standard.UpdateLabelCategoryByIDResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.UpdateLabelCategoryByIDResponse.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.UpdateLabelStateByIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.UpdateLabelStateByIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.UpdateLabelStateByIDRequest.displayName = 'proto.standard.UpdateLabelStateByIDRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.UpdateLabelStateByIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.UpdateLabelStateByIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.UpdateLabelStateByIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateLabelStateByIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    state: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.UpdateLabelStateByIDRequest}
 */
proto.standard.UpdateLabelStateByIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.UpdateLabelStateByIDRequest;
  return proto.standard.UpdateLabelStateByIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.UpdateLabelStateByIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.UpdateLabelStateByIDRequest}
 */
proto.standard.UpdateLabelStateByIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.UpdateLabelStateByIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.UpdateLabelStateByIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.UpdateLabelStateByIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateLabelStateByIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 ID = 1;
 * @return {number}
 */
proto.standard.UpdateLabelStateByIDRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.standard.UpdateLabelStateByIDRequest.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string State = 2;
 * @return {string}
 */
proto.standard.UpdateLabelStateByIDRequest.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.UpdateLabelStateByIDRequest.prototype.setState = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.UpdateLabelStateByIDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.UpdateLabelStateByIDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.UpdateLabelStateByIDResponse.displayName = 'proto.standard.UpdateLabelStateByIDResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.UpdateLabelStateByIDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.UpdateLabelStateByIDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.UpdateLabelStateByIDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateLabelStateByIDResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.UpdateLabelStateByIDResponse}
 */
proto.standard.UpdateLabelStateByIDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.UpdateLabelStateByIDResponse;
  return proto.standard.UpdateLabelStateByIDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.UpdateLabelStateByIDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.UpdateLabelStateByIDResponse}
 */
proto.standard.UpdateLabelStateByIDResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.standard.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.UpdateLabelStateByIDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.UpdateLabelStateByIDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.UpdateLabelStateByIDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateLabelStateByIDResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional State State = 1;
 * @return {!proto.standard.State}
 */
proto.standard.UpdateLabelStateByIDResponse.prototype.getState = function() {
  return /** @type {!proto.standard.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.standard.State} value */
proto.standard.UpdateLabelStateByIDResponse.prototype.setState = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Message = 2;
 * @return {string}
 */
proto.standard.UpdateLabelStateByIDResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.UpdateLabelStateByIDResponse.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.UpdateLabelValueByIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.UpdateLabelValueByIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.UpdateLabelValueByIDRequest.displayName = 'proto.standard.UpdateLabelValueByIDRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.UpdateLabelValueByIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.UpdateLabelValueByIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.UpdateLabelValueByIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateLabelValueByIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    value: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.UpdateLabelValueByIDRequest}
 */
proto.standard.UpdateLabelValueByIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.UpdateLabelValueByIDRequest;
  return proto.standard.UpdateLabelValueByIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.UpdateLabelValueByIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.UpdateLabelValueByIDRequest}
 */
proto.standard.UpdateLabelValueByIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.UpdateLabelValueByIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.UpdateLabelValueByIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.UpdateLabelValueByIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateLabelValueByIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 ID = 1;
 * @return {number}
 */
proto.standard.UpdateLabelValueByIDRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.standard.UpdateLabelValueByIDRequest.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Value = 2;
 * @return {string}
 */
proto.standard.UpdateLabelValueByIDRequest.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.UpdateLabelValueByIDRequest.prototype.setValue = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.UpdateLabelValueByIDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.UpdateLabelValueByIDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.UpdateLabelValueByIDResponse.displayName = 'proto.standard.UpdateLabelValueByIDResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.UpdateLabelValueByIDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.UpdateLabelValueByIDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.UpdateLabelValueByIDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateLabelValueByIDResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.UpdateLabelValueByIDResponse}
 */
proto.standard.UpdateLabelValueByIDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.UpdateLabelValueByIDResponse;
  return proto.standard.UpdateLabelValueByIDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.UpdateLabelValueByIDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.UpdateLabelValueByIDResponse}
 */
proto.standard.UpdateLabelValueByIDResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.standard.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.UpdateLabelValueByIDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.UpdateLabelValueByIDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.UpdateLabelValueByIDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateLabelValueByIDResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional State State = 1;
 * @return {!proto.standard.State}
 */
proto.standard.UpdateLabelValueByIDResponse.prototype.getState = function() {
  return /** @type {!proto.standard.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.standard.State} value */
proto.standard.UpdateLabelValueByIDResponse.prototype.setState = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Message = 2;
 * @return {string}
 */
proto.standard.UpdateLabelValueByIDResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.UpdateLabelValueByIDResponse.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.DeleteLabelByIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.DeleteLabelByIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.DeleteLabelByIDRequest.displayName = 'proto.standard.DeleteLabelByIDRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.DeleteLabelByIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.DeleteLabelByIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.DeleteLabelByIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.DeleteLabelByIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.DeleteLabelByIDRequest}
 */
proto.standard.DeleteLabelByIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.DeleteLabelByIDRequest;
  return proto.standard.DeleteLabelByIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.DeleteLabelByIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.DeleteLabelByIDRequest}
 */
proto.standard.DeleteLabelByIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.DeleteLabelByIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.DeleteLabelByIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.DeleteLabelByIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.DeleteLabelByIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 ID = 1;
 * @return {number}
 */
proto.standard.DeleteLabelByIDRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.standard.DeleteLabelByIDRequest.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.DeleteLabelByIDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.DeleteLabelByIDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.DeleteLabelByIDResponse.displayName = 'proto.standard.DeleteLabelByIDResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.DeleteLabelByIDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.DeleteLabelByIDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.DeleteLabelByIDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.DeleteLabelByIDResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.DeleteLabelByIDResponse}
 */
proto.standard.DeleteLabelByIDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.DeleteLabelByIDResponse;
  return proto.standard.DeleteLabelByIDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.DeleteLabelByIDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.DeleteLabelByIDResponse}
 */
proto.standard.DeleteLabelByIDResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.standard.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.DeleteLabelByIDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.DeleteLabelByIDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.DeleteLabelByIDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.DeleteLabelByIDResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional State State = 1;
 * @return {!proto.standard.State}
 */
proto.standard.DeleteLabelByIDResponse.prototype.getState = function() {
  return /** @type {!proto.standard.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.standard.State} value */
proto.standard.DeleteLabelByIDResponse.prototype.setState = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Message = 2;
 * @return {string}
 */
proto.standard.DeleteLabelByIDResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.DeleteLabelByIDResponse.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.AddLabelToUserByIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.AddLabelToUserByIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.AddLabelToUserByIDRequest.displayName = 'proto.standard.AddLabelToUserByIDRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.AddLabelToUserByIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.AddLabelToUserByIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.AddLabelToUserByIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.AddLabelToUserByIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    userid: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.AddLabelToUserByIDRequest}
 */
proto.standard.AddLabelToUserByIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.AddLabelToUserByIDRequest;
  return proto.standard.AddLabelToUserByIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.AddLabelToUserByIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.AddLabelToUserByIDRequest}
 */
proto.standard.AddLabelToUserByIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.AddLabelToUserByIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.AddLabelToUserByIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.AddLabelToUserByIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.AddLabelToUserByIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getUserid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 ID = 1;
 * @return {number}
 */
proto.standard.AddLabelToUserByIDRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.standard.AddLabelToUserByIDRequest.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int64 UserID = 2;
 * @return {number}
 */
proto.standard.AddLabelToUserByIDRequest.prototype.getUserid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.standard.AddLabelToUserByIDRequest.prototype.setUserid = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.AddLabelToUserByIDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.AddLabelToUserByIDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.AddLabelToUserByIDResponse.displayName = 'proto.standard.AddLabelToUserByIDResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.AddLabelToUserByIDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.AddLabelToUserByIDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.AddLabelToUserByIDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.AddLabelToUserByIDResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.AddLabelToUserByIDResponse}
 */
proto.standard.AddLabelToUserByIDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.AddLabelToUserByIDResponse;
  return proto.standard.AddLabelToUserByIDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.AddLabelToUserByIDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.AddLabelToUserByIDResponse}
 */
proto.standard.AddLabelToUserByIDResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.standard.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.AddLabelToUserByIDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.AddLabelToUserByIDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.AddLabelToUserByIDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.AddLabelToUserByIDResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional State State = 1;
 * @return {!proto.standard.State}
 */
proto.standard.AddLabelToUserByIDResponse.prototype.getState = function() {
  return /** @type {!proto.standard.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.standard.State} value */
proto.standard.AddLabelToUserByIDResponse.prototype.setState = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Message = 2;
 * @return {string}
 */
proto.standard.AddLabelToUserByIDResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.AddLabelToUserByIDResponse.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.RemoveLabelFromUserByIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.RemoveLabelFromUserByIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.RemoveLabelFromUserByIDRequest.displayName = 'proto.standard.RemoveLabelFromUserByIDRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.RemoveLabelFromUserByIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.RemoveLabelFromUserByIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.RemoveLabelFromUserByIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.RemoveLabelFromUserByIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    labelid: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.RemoveLabelFromUserByIDRequest}
 */
proto.standard.RemoveLabelFromUserByIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.RemoveLabelFromUserByIDRequest;
  return proto.standard.RemoveLabelFromUserByIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.RemoveLabelFromUserByIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.RemoveLabelFromUserByIDRequest}
 */
proto.standard.RemoveLabelFromUserByIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLabelid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.RemoveLabelFromUserByIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.RemoveLabelFromUserByIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.RemoveLabelFromUserByIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.RemoveLabelFromUserByIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getLabelid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 ID = 1;
 * @return {number}
 */
proto.standard.RemoveLabelFromUserByIDRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.standard.RemoveLabelFromUserByIDRequest.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int64 LabelID = 2;
 * @return {number}
 */
proto.standard.RemoveLabelFromUserByIDRequest.prototype.getLabelid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.standard.RemoveLabelFromUserByIDRequest.prototype.setLabelid = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.RemoveLabelFromUserByIDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.RemoveLabelFromUserByIDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.RemoveLabelFromUserByIDResponse.displayName = 'proto.standard.RemoveLabelFromUserByIDResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.RemoveLabelFromUserByIDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.RemoveLabelFromUserByIDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.RemoveLabelFromUserByIDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.RemoveLabelFromUserByIDResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.RemoveLabelFromUserByIDResponse}
 */
proto.standard.RemoveLabelFromUserByIDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.RemoveLabelFromUserByIDResponse;
  return proto.standard.RemoveLabelFromUserByIDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.RemoveLabelFromUserByIDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.RemoveLabelFromUserByIDResponse}
 */
proto.standard.RemoveLabelFromUserByIDResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.standard.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.RemoveLabelFromUserByIDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.RemoveLabelFromUserByIDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.RemoveLabelFromUserByIDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.RemoveLabelFromUserByIDResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional State State = 1;
 * @return {!proto.standard.State}
 */
proto.standard.RemoveLabelFromUserByIDResponse.prototype.getState = function() {
  return /** @type {!proto.standard.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.standard.State} value */
proto.standard.RemoveLabelFromUserByIDResponse.prototype.setState = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Message = 2;
 * @return {string}
 */
proto.standard.RemoveLabelFromUserByIDResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.RemoveLabelFromUserByIDResponse.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.CreateGroupRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.CreateGroupRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.CreateGroupRequest.displayName = 'proto.standard.CreateGroupRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.CreateGroupRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.CreateGroupRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.CreateGroupRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.CreateGroupRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    category: jspb.Message.getFieldWithDefault(msg, 2, ""),
    state: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.CreateGroupRequest}
 */
proto.standard.CreateGroupRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.CreateGroupRequest;
  return proto.standard.CreateGroupRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.CreateGroupRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.CreateGroupRequest}
 */
proto.standard.CreateGroupRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.CreateGroupRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.CreateGroupRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.CreateGroupRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.CreateGroupRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string Name = 1;
 * @return {string}
 */
proto.standard.CreateGroupRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.standard.CreateGroupRequest.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Category = 2;
 * @return {string}
 */
proto.standard.CreateGroupRequest.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.CreateGroupRequest.prototype.setCategory = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string State = 3;
 * @return {string}
 */
proto.standard.CreateGroupRequest.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.standard.CreateGroupRequest.prototype.setState = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string Description = 4;
 * @return {string}
 */
proto.standard.CreateGroupRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.standard.CreateGroupRequest.prototype.setDescription = function(value) {
  jspb.Message.setField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.CreateGroupResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.CreateGroupResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.CreateGroupResponse.displayName = 'proto.standard.CreateGroupResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.CreateGroupResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.CreateGroupResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.CreateGroupResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.CreateGroupResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    data: (f = msg.getData()) && proto.standard.Group.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.CreateGroupResponse}
 */
proto.standard.CreateGroupResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.CreateGroupResponse;
  return proto.standard.CreateGroupResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.CreateGroupResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.CreateGroupResponse}
 */
proto.standard.CreateGroupResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.standard.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = new proto.standard.Group;
      reader.readMessage(value,proto.standard.Group.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.CreateGroupResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.CreateGroupResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.CreateGroupResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.CreateGroupResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.standard.Group.serializeBinaryToWriter
    );
  }
};


/**
 * optional State State = 1;
 * @return {!proto.standard.State}
 */
proto.standard.CreateGroupResponse.prototype.getState = function() {
  return /** @type {!proto.standard.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.standard.State} value */
proto.standard.CreateGroupResponse.prototype.setState = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Message = 2;
 * @return {string}
 */
proto.standard.CreateGroupResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.CreateGroupResponse.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional Group Data = 3;
 * @return {?proto.standard.Group}
 */
proto.standard.CreateGroupResponse.prototype.getData = function() {
  return /** @type{?proto.standard.Group} */ (
    jspb.Message.getWrapperField(this, proto.standard.Group, 3));
};


/** @param {?proto.standard.Group|undefined} value */
proto.standard.CreateGroupResponse.prototype.setData = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.standard.CreateGroupResponse.prototype.clearData = function() {
  this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.standard.CreateGroupResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.QueryGroupsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.QueryGroupsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.QueryGroupsRequest.displayName = 'proto.standard.QueryGroupsRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.QueryGroupsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.QueryGroupsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.QueryGroupsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.QueryGroupsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    page: jspb.Message.getFieldWithDefault(msg, 1, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.QueryGroupsRequest}
 */
proto.standard.QueryGroupsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.QueryGroupsRequest;
  return proto.standard.QueryGroupsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.QueryGroupsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.QueryGroupsRequest}
 */
proto.standard.QueryGroupsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPage(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.QueryGroupsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.QueryGroupsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.QueryGroupsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.QueryGroupsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPage();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 Page = 1;
 * @return {number}
 */
proto.standard.QueryGroupsRequest.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.standard.QueryGroupsRequest.prototype.setPage = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int64 Limit = 2;
 * @return {number}
 */
proto.standard.QueryGroupsRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.standard.QueryGroupsRequest.prototype.setLimit = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.QueryGroupsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.standard.QueryGroupsResponse.repeatedFields_, null);
};
goog.inherits(proto.standard.QueryGroupsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.QueryGroupsResponse.displayName = 'proto.standard.QueryGroupsResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.standard.QueryGroupsResponse.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.QueryGroupsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.QueryGroupsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.QueryGroupsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.QueryGroupsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    totalpage: jspb.Message.getFieldWithDefault(msg, 3, 0),
    currentpage: jspb.Message.getFieldWithDefault(msg, 4, 0),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.standard.Group.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.QueryGroupsResponse}
 */
proto.standard.QueryGroupsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.QueryGroupsResponse;
  return proto.standard.QueryGroupsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.QueryGroupsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.QueryGroupsResponse}
 */
proto.standard.QueryGroupsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.standard.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalpage(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCurrentpage(value);
      break;
    case 5:
      var value = new proto.standard.Group;
      reader.readMessage(value,proto.standard.Group.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.QueryGroupsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.QueryGroupsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.QueryGroupsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.QueryGroupsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTotalpage();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getCurrentpage();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.standard.Group.serializeBinaryToWriter
    );
  }
};


/**
 * optional State State = 1;
 * @return {!proto.standard.State}
 */
proto.standard.QueryGroupsResponse.prototype.getState = function() {
  return /** @type {!proto.standard.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.standard.State} value */
proto.standard.QueryGroupsResponse.prototype.setState = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Message = 2;
 * @return {string}
 */
proto.standard.QueryGroupsResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.QueryGroupsResponse.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int64 totalPage = 3;
 * @return {number}
 */
proto.standard.QueryGroupsResponse.prototype.getTotalpage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.standard.QueryGroupsResponse.prototype.setTotalpage = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional int64 currentPage = 4;
 * @return {number}
 */
proto.standard.QueryGroupsResponse.prototype.getCurrentpage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.standard.QueryGroupsResponse.prototype.setCurrentpage = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * repeated Group Data = 5;
 * @return {!Array.<!proto.standard.Group>}
 */
proto.standard.QueryGroupsResponse.prototype.getDataList = function() {
  return /** @type{!Array.<!proto.standard.Group>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.standard.Group, 5));
};


/** @param {!Array.<!proto.standard.Group>} value */
proto.standard.QueryGroupsResponse.prototype.setDataList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.standard.Group=} opt_value
 * @param {number=} opt_index
 * @return {!proto.standard.Group}
 */
proto.standard.QueryGroupsResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.standard.Group, opt_index);
};


proto.standard.QueryGroupsResponse.prototype.clearDataList = function() {
  this.setDataList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.QueryGroupByIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.QueryGroupByIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.QueryGroupByIDRequest.displayName = 'proto.standard.QueryGroupByIDRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.QueryGroupByIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.QueryGroupByIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.QueryGroupByIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.QueryGroupByIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.QueryGroupByIDRequest}
 */
proto.standard.QueryGroupByIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.QueryGroupByIDRequest;
  return proto.standard.QueryGroupByIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.QueryGroupByIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.QueryGroupByIDRequest}
 */
proto.standard.QueryGroupByIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.QueryGroupByIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.QueryGroupByIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.QueryGroupByIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.QueryGroupByIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 ID = 1;
 * @return {number}
 */
proto.standard.QueryGroupByIDRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.standard.QueryGroupByIDRequest.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.QueryGroupByIDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.QueryGroupByIDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.QueryGroupByIDResponse.displayName = 'proto.standard.QueryGroupByIDResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.QueryGroupByIDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.QueryGroupByIDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.QueryGroupByIDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.QueryGroupByIDResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    data: (f = msg.getData()) && proto.standard.Group.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.QueryGroupByIDResponse}
 */
proto.standard.QueryGroupByIDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.QueryGroupByIDResponse;
  return proto.standard.QueryGroupByIDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.QueryGroupByIDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.QueryGroupByIDResponse}
 */
proto.standard.QueryGroupByIDResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.standard.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = new proto.standard.Group;
      reader.readMessage(value,proto.standard.Group.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.QueryGroupByIDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.QueryGroupByIDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.QueryGroupByIDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.QueryGroupByIDResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.standard.Group.serializeBinaryToWriter
    );
  }
};


/**
 * optional State State = 1;
 * @return {!proto.standard.State}
 */
proto.standard.QueryGroupByIDResponse.prototype.getState = function() {
  return /** @type {!proto.standard.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.standard.State} value */
proto.standard.QueryGroupByIDResponse.prototype.setState = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Message = 2;
 * @return {string}
 */
proto.standard.QueryGroupByIDResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.QueryGroupByIDResponse.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional Group Data = 3;
 * @return {?proto.standard.Group}
 */
proto.standard.QueryGroupByIDResponse.prototype.getData = function() {
  return /** @type{?proto.standard.Group} */ (
    jspb.Message.getWrapperField(this, proto.standard.Group, 3));
};


/** @param {?proto.standard.Group|undefined} value */
proto.standard.QueryGroupByIDResponse.prototype.setData = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.standard.QueryGroupByIDResponse.prototype.clearData = function() {
  this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.standard.QueryGroupByIDResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.UpdateGroupNameByIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.UpdateGroupNameByIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.UpdateGroupNameByIDRequest.displayName = 'proto.standard.UpdateGroupNameByIDRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.UpdateGroupNameByIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.UpdateGroupNameByIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.UpdateGroupNameByIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateGroupNameByIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.UpdateGroupNameByIDRequest}
 */
proto.standard.UpdateGroupNameByIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.UpdateGroupNameByIDRequest;
  return proto.standard.UpdateGroupNameByIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.UpdateGroupNameByIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.UpdateGroupNameByIDRequest}
 */
proto.standard.UpdateGroupNameByIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.UpdateGroupNameByIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.UpdateGroupNameByIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.UpdateGroupNameByIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateGroupNameByIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 ID = 1;
 * @return {number}
 */
proto.standard.UpdateGroupNameByIDRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.standard.UpdateGroupNameByIDRequest.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Name = 2;
 * @return {string}
 */
proto.standard.UpdateGroupNameByIDRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.UpdateGroupNameByIDRequest.prototype.setName = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.UpdateGroupNameByIDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.UpdateGroupNameByIDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.UpdateGroupNameByIDResponse.displayName = 'proto.standard.UpdateGroupNameByIDResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.UpdateGroupNameByIDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.UpdateGroupNameByIDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.UpdateGroupNameByIDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateGroupNameByIDResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.UpdateGroupNameByIDResponse}
 */
proto.standard.UpdateGroupNameByIDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.UpdateGroupNameByIDResponse;
  return proto.standard.UpdateGroupNameByIDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.UpdateGroupNameByIDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.UpdateGroupNameByIDResponse}
 */
proto.standard.UpdateGroupNameByIDResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.standard.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.UpdateGroupNameByIDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.UpdateGroupNameByIDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.UpdateGroupNameByIDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateGroupNameByIDResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional State State = 1;
 * @return {!proto.standard.State}
 */
proto.standard.UpdateGroupNameByIDResponse.prototype.getState = function() {
  return /** @type {!proto.standard.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.standard.State} value */
proto.standard.UpdateGroupNameByIDResponse.prototype.setState = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Message = 2;
 * @return {string}
 */
proto.standard.UpdateGroupNameByIDResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.UpdateGroupNameByIDResponse.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.UpdateGroupCategoryByIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.UpdateGroupCategoryByIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.UpdateGroupCategoryByIDRequest.displayName = 'proto.standard.UpdateGroupCategoryByIDRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.UpdateGroupCategoryByIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.UpdateGroupCategoryByIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.UpdateGroupCategoryByIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateGroupCategoryByIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    category: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.UpdateGroupCategoryByIDRequest}
 */
proto.standard.UpdateGroupCategoryByIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.UpdateGroupCategoryByIDRequest;
  return proto.standard.UpdateGroupCategoryByIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.UpdateGroupCategoryByIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.UpdateGroupCategoryByIDRequest}
 */
proto.standard.UpdateGroupCategoryByIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.UpdateGroupCategoryByIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.UpdateGroupCategoryByIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.UpdateGroupCategoryByIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateGroupCategoryByIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 ID = 1;
 * @return {number}
 */
proto.standard.UpdateGroupCategoryByIDRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.standard.UpdateGroupCategoryByIDRequest.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Category = 2;
 * @return {string}
 */
proto.standard.UpdateGroupCategoryByIDRequest.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.UpdateGroupCategoryByIDRequest.prototype.setCategory = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.UpdateGroupCategoryByIDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.UpdateGroupCategoryByIDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.UpdateGroupCategoryByIDResponse.displayName = 'proto.standard.UpdateGroupCategoryByIDResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.UpdateGroupCategoryByIDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.UpdateGroupCategoryByIDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.UpdateGroupCategoryByIDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateGroupCategoryByIDResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.UpdateGroupCategoryByIDResponse}
 */
proto.standard.UpdateGroupCategoryByIDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.UpdateGroupCategoryByIDResponse;
  return proto.standard.UpdateGroupCategoryByIDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.UpdateGroupCategoryByIDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.UpdateGroupCategoryByIDResponse}
 */
proto.standard.UpdateGroupCategoryByIDResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.standard.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.UpdateGroupCategoryByIDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.UpdateGroupCategoryByIDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.UpdateGroupCategoryByIDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateGroupCategoryByIDResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional State State = 1;
 * @return {!proto.standard.State}
 */
proto.standard.UpdateGroupCategoryByIDResponse.prototype.getState = function() {
  return /** @type {!proto.standard.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.standard.State} value */
proto.standard.UpdateGroupCategoryByIDResponse.prototype.setState = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Message = 2;
 * @return {string}
 */
proto.standard.UpdateGroupCategoryByIDResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.UpdateGroupCategoryByIDResponse.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.UpdateGroupStateByIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.UpdateGroupStateByIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.UpdateGroupStateByIDRequest.displayName = 'proto.standard.UpdateGroupStateByIDRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.UpdateGroupStateByIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.UpdateGroupStateByIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.UpdateGroupStateByIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateGroupStateByIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    state: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.UpdateGroupStateByIDRequest}
 */
proto.standard.UpdateGroupStateByIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.UpdateGroupStateByIDRequest;
  return proto.standard.UpdateGroupStateByIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.UpdateGroupStateByIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.UpdateGroupStateByIDRequest}
 */
proto.standard.UpdateGroupStateByIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.UpdateGroupStateByIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.UpdateGroupStateByIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.UpdateGroupStateByIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateGroupStateByIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 ID = 1;
 * @return {number}
 */
proto.standard.UpdateGroupStateByIDRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.standard.UpdateGroupStateByIDRequest.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string State = 2;
 * @return {string}
 */
proto.standard.UpdateGroupStateByIDRequest.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.UpdateGroupStateByIDRequest.prototype.setState = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.UpdateGroupStateByIDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.UpdateGroupStateByIDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.UpdateGroupStateByIDResponse.displayName = 'proto.standard.UpdateGroupStateByIDResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.UpdateGroupStateByIDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.UpdateGroupStateByIDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.UpdateGroupStateByIDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateGroupStateByIDResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.UpdateGroupStateByIDResponse}
 */
proto.standard.UpdateGroupStateByIDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.UpdateGroupStateByIDResponse;
  return proto.standard.UpdateGroupStateByIDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.UpdateGroupStateByIDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.UpdateGroupStateByIDResponse}
 */
proto.standard.UpdateGroupStateByIDResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.standard.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.UpdateGroupStateByIDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.UpdateGroupStateByIDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.UpdateGroupStateByIDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateGroupStateByIDResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional State State = 1;
 * @return {!proto.standard.State}
 */
proto.standard.UpdateGroupStateByIDResponse.prototype.getState = function() {
  return /** @type {!proto.standard.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.standard.State} value */
proto.standard.UpdateGroupStateByIDResponse.prototype.setState = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Message = 2;
 * @return {string}
 */
proto.standard.UpdateGroupStateByIDResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.UpdateGroupStateByIDResponse.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.UpdateGroupDescriptionByIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.UpdateGroupDescriptionByIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.UpdateGroupDescriptionByIDRequest.displayName = 'proto.standard.UpdateGroupDescriptionByIDRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.UpdateGroupDescriptionByIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.UpdateGroupDescriptionByIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.UpdateGroupDescriptionByIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateGroupDescriptionByIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    description: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.UpdateGroupDescriptionByIDRequest}
 */
proto.standard.UpdateGroupDescriptionByIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.UpdateGroupDescriptionByIDRequest;
  return proto.standard.UpdateGroupDescriptionByIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.UpdateGroupDescriptionByIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.UpdateGroupDescriptionByIDRequest}
 */
proto.standard.UpdateGroupDescriptionByIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.UpdateGroupDescriptionByIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.UpdateGroupDescriptionByIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.UpdateGroupDescriptionByIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateGroupDescriptionByIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 ID = 1;
 * @return {number}
 */
proto.standard.UpdateGroupDescriptionByIDRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.standard.UpdateGroupDescriptionByIDRequest.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Description = 2;
 * @return {string}
 */
proto.standard.UpdateGroupDescriptionByIDRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.UpdateGroupDescriptionByIDRequest.prototype.setDescription = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.UpdateGroupDescriptionByIDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.UpdateGroupDescriptionByIDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.UpdateGroupDescriptionByIDResponse.displayName = 'proto.standard.UpdateGroupDescriptionByIDResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.UpdateGroupDescriptionByIDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.UpdateGroupDescriptionByIDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.UpdateGroupDescriptionByIDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateGroupDescriptionByIDResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.UpdateGroupDescriptionByIDResponse}
 */
proto.standard.UpdateGroupDescriptionByIDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.UpdateGroupDescriptionByIDResponse;
  return proto.standard.UpdateGroupDescriptionByIDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.UpdateGroupDescriptionByIDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.UpdateGroupDescriptionByIDResponse}
 */
proto.standard.UpdateGroupDescriptionByIDResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.standard.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.UpdateGroupDescriptionByIDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.UpdateGroupDescriptionByIDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.UpdateGroupDescriptionByIDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.UpdateGroupDescriptionByIDResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional State State = 1;
 * @return {!proto.standard.State}
 */
proto.standard.UpdateGroupDescriptionByIDResponse.prototype.getState = function() {
  return /** @type {!proto.standard.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.standard.State} value */
proto.standard.UpdateGroupDescriptionByIDResponse.prototype.setState = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Message = 2;
 * @return {string}
 */
proto.standard.UpdateGroupDescriptionByIDResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.UpdateGroupDescriptionByIDResponse.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.DeleteGroupByIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.DeleteGroupByIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.DeleteGroupByIDRequest.displayName = 'proto.standard.DeleteGroupByIDRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.DeleteGroupByIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.DeleteGroupByIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.DeleteGroupByIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.DeleteGroupByIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.DeleteGroupByIDRequest}
 */
proto.standard.DeleteGroupByIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.DeleteGroupByIDRequest;
  return proto.standard.DeleteGroupByIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.DeleteGroupByIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.DeleteGroupByIDRequest}
 */
proto.standard.DeleteGroupByIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.DeleteGroupByIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.DeleteGroupByIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.DeleteGroupByIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.DeleteGroupByIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 ID = 1;
 * @return {number}
 */
proto.standard.DeleteGroupByIDRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.standard.DeleteGroupByIDRequest.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.DeleteGroupByIDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.DeleteGroupByIDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.DeleteGroupByIDResponse.displayName = 'proto.standard.DeleteGroupByIDResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.DeleteGroupByIDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.DeleteGroupByIDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.DeleteGroupByIDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.DeleteGroupByIDResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.DeleteGroupByIDResponse}
 */
proto.standard.DeleteGroupByIDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.DeleteGroupByIDResponse;
  return proto.standard.DeleteGroupByIDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.DeleteGroupByIDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.DeleteGroupByIDResponse}
 */
proto.standard.DeleteGroupByIDResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.standard.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.DeleteGroupByIDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.DeleteGroupByIDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.DeleteGroupByIDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.DeleteGroupByIDResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional State State = 1;
 * @return {!proto.standard.State}
 */
proto.standard.DeleteGroupByIDResponse.prototype.getState = function() {
  return /** @type {!proto.standard.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.standard.State} value */
proto.standard.DeleteGroupByIDResponse.prototype.setState = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Message = 2;
 * @return {string}
 */
proto.standard.DeleteGroupByIDResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.DeleteGroupByIDResponse.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.AddUserToGroupByIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.AddUserToGroupByIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.AddUserToGroupByIDRequest.displayName = 'proto.standard.AddUserToGroupByIDRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.AddUserToGroupByIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.AddUserToGroupByIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.AddUserToGroupByIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.AddUserToGroupByIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    groupid: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.AddUserToGroupByIDRequest}
 */
proto.standard.AddUserToGroupByIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.AddUserToGroupByIDRequest;
  return proto.standard.AddUserToGroupByIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.AddUserToGroupByIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.AddUserToGroupByIDRequest}
 */
proto.standard.AddUserToGroupByIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setGroupid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.AddUserToGroupByIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.AddUserToGroupByIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.AddUserToGroupByIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.AddUserToGroupByIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getGroupid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 ID = 1;
 * @return {number}
 */
proto.standard.AddUserToGroupByIDRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.standard.AddUserToGroupByIDRequest.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int64 GroupID = 2;
 * @return {number}
 */
proto.standard.AddUserToGroupByIDRequest.prototype.getGroupid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.standard.AddUserToGroupByIDRequest.prototype.setGroupid = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.AddUserToGroupByIDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.AddUserToGroupByIDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.AddUserToGroupByIDResponse.displayName = 'proto.standard.AddUserToGroupByIDResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.AddUserToGroupByIDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.AddUserToGroupByIDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.AddUserToGroupByIDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.AddUserToGroupByIDResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.AddUserToGroupByIDResponse}
 */
proto.standard.AddUserToGroupByIDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.AddUserToGroupByIDResponse;
  return proto.standard.AddUserToGroupByIDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.AddUserToGroupByIDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.AddUserToGroupByIDResponse}
 */
proto.standard.AddUserToGroupByIDResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.standard.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.AddUserToGroupByIDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.AddUserToGroupByIDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.AddUserToGroupByIDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.AddUserToGroupByIDResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional State State = 1;
 * @return {!proto.standard.State}
 */
proto.standard.AddUserToGroupByIDResponse.prototype.getState = function() {
  return /** @type {!proto.standard.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.standard.State} value */
proto.standard.AddUserToGroupByIDResponse.prototype.setState = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Message = 2;
 * @return {string}
 */
proto.standard.AddUserToGroupByIDResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.AddUserToGroupByIDResponse.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.RemoveUserFromGroupByIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.RemoveUserFromGroupByIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.RemoveUserFromGroupByIDRequest.displayName = 'proto.standard.RemoveUserFromGroupByIDRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.RemoveUserFromGroupByIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.RemoveUserFromGroupByIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.RemoveUserFromGroupByIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.RemoveUserFromGroupByIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    userid: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.RemoveUserFromGroupByIDRequest}
 */
proto.standard.RemoveUserFromGroupByIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.RemoveUserFromGroupByIDRequest;
  return proto.standard.RemoveUserFromGroupByIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.RemoveUserFromGroupByIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.RemoveUserFromGroupByIDRequest}
 */
proto.standard.RemoveUserFromGroupByIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.RemoveUserFromGroupByIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.RemoveUserFromGroupByIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.RemoveUserFromGroupByIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.RemoveUserFromGroupByIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getUserid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 ID = 1;
 * @return {number}
 */
proto.standard.RemoveUserFromGroupByIDRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.standard.RemoveUserFromGroupByIDRequest.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int64 UserID = 2;
 * @return {number}
 */
proto.standard.RemoveUserFromGroupByIDRequest.prototype.getUserid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.standard.RemoveUserFromGroupByIDRequest.prototype.setUserid = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.standard.RemoveUserFromGroupByIDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.standard.RemoveUserFromGroupByIDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.standard.RemoveUserFromGroupByIDResponse.displayName = 'proto.standard.RemoveUserFromGroupByIDResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.standard.RemoveUserFromGroupByIDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.standard.RemoveUserFromGroupByIDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.standard.RemoveUserFromGroupByIDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.RemoveUserFromGroupByIDResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.standard.RemoveUserFromGroupByIDResponse}
 */
proto.standard.RemoveUserFromGroupByIDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.standard.RemoveUserFromGroupByIDResponse;
  return proto.standard.RemoveUserFromGroupByIDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.standard.RemoveUserFromGroupByIDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.standard.RemoveUserFromGroupByIDResponse}
 */
proto.standard.RemoveUserFromGroupByIDResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.standard.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.standard.RemoveUserFromGroupByIDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.standard.RemoveUserFromGroupByIDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.standard.RemoveUserFromGroupByIDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.standard.RemoveUserFromGroupByIDResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional State State = 1;
 * @return {!proto.standard.State}
 */
proto.standard.RemoveUserFromGroupByIDResponse.prototype.getState = function() {
  return /** @type {!proto.standard.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.standard.State} value */
proto.standard.RemoveUserFromGroupByIDResponse.prototype.setState = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Message = 2;
 * @return {string}
 */
proto.standard.RemoveUserFromGroupByIDResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.standard.RemoveUserFromGroupByIDResponse.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.standard.State = {
  UNKNOWN: 0,
  SUCCESS: 1,
  FAILURE: 2,
  SERVICE_ERROR: 3,
  PARAMS_INVALID: 4,
  ILLEGAL_REQUEST: 5,
  USER_NOT_EXIST: 8,
  LABEL_NOT_EXIST: 6,
  GROUP_NOT_EXIST: 7,
  USER_ALREADY_EXISTS: 9,
  LABEL_ALREADY_EXISTS: 11,
  GROUP_ALREADY_EXISTS: 12,
  USER_ALREADY_DELETE: 14,
  LABEL_ALREADY_DELETE: 15,
  GROUP_ALREADY_DELETE: 16,
  DB_OPERATION_FATLURE: 13
};

goog.object.extend(exports, proto.standard);

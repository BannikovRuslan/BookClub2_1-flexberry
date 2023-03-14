import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize(serialized, options) {
    if (serialized == null) {
      serialized = options.default;
    }
    return serialized;
  },

  serialize(deserialized) {
    return deserialized;
  }
});

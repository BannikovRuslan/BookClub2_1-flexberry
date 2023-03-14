import { Serializer as PresentationSerializer } from
  '../mixins/regenerated/serializers/i-i-s-book-club-2-1-presentation';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(PresentationSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

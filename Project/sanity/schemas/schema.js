// Schema creator
import createSchema from 'part:@sanity/base/schema-creator';
// Schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Schema we create
import pizzaSchema from './pizzaSchema';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([pizzaSchema]),
});

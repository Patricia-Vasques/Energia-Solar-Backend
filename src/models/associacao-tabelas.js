const Unidade = require('./unidade');
const Record = require('./lancamento');

Unidade.hasMany(Record, { foreignKey: 'id_unit' });
Record.belongsTo(Unidade, { foreignKey: 'id_unit' });

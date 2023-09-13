const Unidade = require('./unidade');
const Launch = require('./lancamento');

Unidade.hasMany(Launch, { foreignKey: 'id_unit' });
Launch.belongsTo(Unidade, { foreignKey: 'id_unit' });

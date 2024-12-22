const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Program = sequelize.define('Program', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nama_program: {
    type: DataTypes.ENUM('PKH', 'BLT', 'Bansos', 'Lainnya'),
    allowNull: false,
  },
  jumlah_penerima_bantuan: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  wilayah_provinsi: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  wilayah_kabupaten: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  wilayah_kecamatan: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tanggal_penyaluran: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  bukti_penyaluran: {
    type: DataTypes.STRING,  // Assuming it's a URL or file path
    allowNull: true,
  },
  catatan_tambahan: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Program;

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('programs', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nama_program: {
        type: Sequelize.ENUM('PKH', 'BLT', 'Bansos', 'Lainnya'),
        allowNull: false,
      },
      jumlah_penerima_bantuan: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      wilayah_provinsi: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      wilayah_kabupaten: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      wilayah_kecamatan: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tanggal_penyaluran: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      bukti_penyaluran: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      catatan_tambahan: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('programs');
  },
};

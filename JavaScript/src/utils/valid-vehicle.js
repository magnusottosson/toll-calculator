const config = require('config')
const VALID_VEHICLE_TYPES = config.validVehicleTypes

/**
 * Returns true if the vehicle type is valid
 *
 * @param vehicleType
 */
const isValidVehicle = ({ vehicleType }) => {
  return VALID_VEHICLE_TYPES.includes(vehicleType)
}

module.exports = isValidVehicle

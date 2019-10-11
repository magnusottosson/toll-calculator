const VALID_VEHICLE_TYPES = require('../constants/valid-vehicle-types')

/**
 * Returns true if the vehicle type is valid
 *
 * @param vehicleType
 */
const isValidVehicle = ({ vehicleType }) => {
  return VALID_VEHICLE_TYPES.includes(vehicleType)
}

module.exports = isValidVehicle

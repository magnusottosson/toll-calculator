const TOLL_FREE_VEHICLE_TYPES = require('../constants/toll-free-vehicle-types')
/**
 * Returns true if the vehicle type is toll free
 *
 * @param vehicleType
 */
const isTollFreeVehicle = ({ vehicleType }) => {
  return TOLL_FREE_VEHICLE_TYPES.includes(vehicleType)
}

module.exports = isTollFreeVehicle

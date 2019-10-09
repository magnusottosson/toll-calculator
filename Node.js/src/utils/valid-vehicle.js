const VALID_VEHICLE_TYPES = [
  'car',
  'diplomat',
  'emergency',
  'foreign',
  'military',
  'motorbike',
  'tractor',
]

/**
 * Returns true if the vehicle type is valid
 *
 * @param vehicleType
 */
const isValidVehicle = ({ vehicleType }) => {
  return VALID_VEHICLE_TYPES.includes(vehicleType)
}

module.exports = isValidVehicle

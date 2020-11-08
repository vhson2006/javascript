export const authenticateQuery = 'query { authenticate(username: "%username", password: "%password") }';

export const getDetailAccountQuery = 'query { getDetailAccount{name, email, phone, address, checkIn, checkOut, fixDevice, ipAddress, latitude, longitude, joinDate, dueDate} }';

export const registerMutation = 'mutation { register(name: "%fullname", email: "%email", password: "%password", phone: "%phone", address: "%address") }';

export const getEmployeesQuery = 'query { getEmployees{id, name, email, phone, address, gender, dateOfBirth, avatarUrl, deviceId, startDate, endDate, account { name, email } } }';

export const updateAccountMutation = 'mutation { updateAccount(name: "%fullname", email: "%email", phone: "%phone", address: "%address", checkIn: "%checkIn", checkOut: "%checkOut", ipAddress: "%ipAddress", latitude: "%latitude", longitude: "%longitude", fixDevice: "%fixDevice"){name, email, phone, address, checkIn, checkOut, fixDevice, ipAddress, latitude, longitude, joinDate, dueDate} }';

export const getDashboardQuery = 'query { getDashboard(type: "%type") {value, lateArrival, earlyLeave, lateAndEarly, onTime, missing, leave} }';

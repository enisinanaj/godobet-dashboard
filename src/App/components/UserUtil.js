
export const isProfileComplete = (user) => {
    if (!user._embedded 
        || !user._embedded.addresses 
        || user._embedded.addresses.filter(a => a.addressType === 1).length === 0
        || !user.name || user.name === ""
        || !user.lastName || user.lastName === "") {
        return false;
    } else {
        return true;
    }
}
import './UserInfo.scss'

export const UserInfo = (props) => {
    const initialValue = {
        firstName: 'Default',
        lastName: 'User',
        email: 'default.user@gmail.com',
        phoneNumber: '(123) 456-7891',
        location: 'Syracuse, NY',
        zipcode: '13202'
      };

    return (
        
        <div className="container-fluid acctInfo">
            <div className="row justify-content-between">
                <h3 className="acctLabel__Name">Default User</h3>
                <div className="col">
                    <p className="acctLabel">First Name:</p>
                    <input className="accountPageInfo" defaultValue={initialValue.firstName} name="firstName" placeholder='first name'></input>
                </div>
                <div className="col">
                    <p className="acctLabel">Last Name:</p>
                    <input className="accountPageInfo" defaultValue={initialValue.lastName} name="lastName" placeholder='last name'></input>
                </div>
            </div>
            <div className="row justify-content-between">
                <div className="col">
                    <p className="acctLabel">Email:</p>
                    <input className="accountPageInfo" defaultValue={initialValue.email} name="email" placeholder='email'></input>
                </div>
                <div className="col">
                    <p className="acctLabel">Phone:</p>
                    <input className="accountPageInfo" defaultValue={initialValue.phoneNumber} name="phone" placeholder='phone number'></input>
                </div>
            </div>
            <div className="row justify-content-between">
                <div className="col">
                    <p className="acctLabel">Location:</p>
                    <input className="accountPageInfo" defaultValue={initialValue.location} name="location" placeholder='location'></input>
                </div>
                <div className="col">
                    <p className="acctLabel">Zip Code:</p>
                    <input className="accountPageInfo" defaultValue={initialValue.zipcode} name="zipcode" placeholder='zip code'></input>
                </div>
            </div>
            <div className="row justify-content-center">
            <button class="saveChanges">Save Changes</button>
            </div>
        </div>
    )
}
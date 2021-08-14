import "./UserInfo.scss";

export const UserInfo = (props) => {
  const { user } = props;

  return (
    <div className="container-fluid acctInfo">
      <div className="row justify-content-between">
        <h3 className="acctLabel__Name">{user.name}</h3>
        <div className="col">
          <p className="acctLabel">First Name:</p>
          <input
            className="accountPageInfo"
            defaultValue={user.given_name}
            name="firstName"
            placeholder={user.given_name}
          ></input>
        </div>
        <div className="col">
          <p className="acctLabel">Last Name:</p>
          <input
            className="accountPageInfo"
            defaultValue={user.family_name}
            name="lastName"
            placeholder={user.family_name}
          ></input>
        </div>
      </div>
      <div className="row justify-content-between">
        <div className="col">
          <p className="acctLabel">Email:</p>
          <input
            className="accountPageInfo"
            defaultValue={user.email}
            name="email"
            placeholder={user.email}
          ></input>
        </div>
        <div className="col">
          <p className="acctLabel">Location:</p>
          <input
            className="accountPageInfo"
            name="location"
            placeholder="Syracuse, NY"
          ></input>
        </div>
      </div>
      <div className="row justify-content-center">
        <button className="saveChanges">Save Changes</button>
      </div>
    </div>
  );
};

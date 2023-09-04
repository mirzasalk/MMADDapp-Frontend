import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./admin.scss";

const AdminNav = () => {
  const [user, setUser] = useSelector({});

  const getUser = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/get-user-info-by-id",
        { token: localStorage.getItem("token") }, //ovo ubrzava obradu??
        {
          headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      if (response.data.success) {
        setUser(response.data.data);
      } else {
        localStorage.clear();
        navigate("/prijava");
      }
    } catch (error) {
      setUser(null);
      localStorage.clear();
      navigate("/prijava");
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="WorkSpaceMeniDiv">
      <div className="AdminMeniTitle">
        <div>
          <h3>Admin</h3>
          <h4>{user?.firstName}</h4>
        </div>
        <p>Control panel</p>
      </div>
      <div className="WorkSpaceMeni">
        <Link className={"adminMeniLinks"} to={"/korisnici"}>
          <div className="elemOfMeni">
            <img src="userIcon.png" alt="icon" />
            Korisinici
          </div>
        </Link>
        <Link className={"adminMeniLinks"} to={"/doktori"}>
          <div className="elemOfMeni">
            <img src="userDoctorIcon.png" alt="icon" />
            Mentori
          </div>
        </Link>
        <Link className={"adminMeniLinks"} to={"/adminprofil"}>
          <div className="elemOfMeni">
            <img src="userAdminIcon.png" alt="icon" />
            Profil
          </div>
        </Link>
        <Link className={"adminMeniLinks"} to={"/zahtevi"}>
          <div className="elemOfMeni">
            <img
              className="zahteviIcon"
              src="userNotification.png"
              alt="icon"
            />
            Zahtevi{" "}
            <strong
              className={
                user?.unseenNotifications &&
                user.unseenNotifications.length !== 0
                  ? "zahteviBrojac"
                  : "zahteviBrojacNone"
              }
            >
              {user?.unseenNotifications &&
              user.unseenNotifications.length !== 0
                ? user.unseenNotifications.length
                : null}
            </strong>
          </div>
        </Link>
        <Link className={"adminMeniLinks"} to={"/terapije"}>
          <div className="elemOfMeni">
            <img src="userTherapy.png" alt="icon" />
            Grupe
          </div>
        </Link>
        <div className="elemOfMeni">
          <img src="userLogoutIcon.png" alt="icon" />
          <Link className={"adminMeniLinks"} to={"/"}>
            Odjavi se
          </Link>
        </div>
      </div>
    </div>
  );
};
export default AdminNav;

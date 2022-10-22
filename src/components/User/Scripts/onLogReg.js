//1. fetch and return user based on if and statment (register or login?)
//2. check user is legitimate then loadUser

const onLogReg = (
  loadUser,
  onRouteChange,
  type,
  email,
  password,
  name,
  wrongDetails,
  guest
) => {
  // console.log(
  //   loadUser,
  //   onRouteChange,
  //   type,
  //   email,
  //   password,
  //   name,
  //   wrongDetails,
  //   guest
  // );
  if (type === "register") {
    console.log("register");
    fetch("https://smart-brain-alek-server.onrender.com/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          //loadUser
          loadUser(user);
          onRouteChange("home");
        } else {
          wrongDetails();
        }
      });
  } else {
    alert(
      `Please await my postgres-database deployed on "Render" to wake up. :)`
    );
    console.log("log in");
    if (guest === "guest") {
      email = "guest@gmail.com";
      password = "password";
    }
    fetch("https://smart-brain-alek-server.onrender.com/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          //loadUser
          loadUser(user);
          onRouteChange("home");
        } else {
          wrongDetails();
        }
      });
  }
};

export default onLogReg;

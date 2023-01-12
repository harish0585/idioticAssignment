import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button, Grid, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Login() {
  const [expanded, setExpanded] = React.useState(false);
  const [email, setEmail] = React.useState("fdasf");
  const [password, setPassword] = React.useState("fafsafaf");
  const [error, setError] = React.useState(false);
  const navigate = useNavigate();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    setError(false);
    console.log(email, password, "testing");
    if (
      email == localStorage.getItem("email") &&
      password == localStorage.getItem("password")
    ) {
      localStorage.setItem("auth", "true");
      navigate("/home");
    } else {
      setError(true);
    }
  };

  return (
    <Grid container>
      <Grid
        item
        alignItems={"center"}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Card sx={{ maxWidth: 345, alignItems: "center", padding: "10px" }}>
          <CardContent>
            <Grid container>
              <form>
                <Grid item xs={12}>
                  <Grid
                    container
                    direction="column"
                    textAlign={"left"}
                    spacing={2}
                  >
                    <Grid item xs={12} textAlign="center">
                      <Typography>Login Form</Typography>
                    </Grid>

                    <Grid item xs={12}>
                      <label id="enteremail">Email</label>
                      <TextField
                        style={{ marginTop: "10px" }}
                        fullWidth
                        id="enteremail"
                        type="email"
                        placeholder="Enter your Email"
                        onChange={(e) => setEmail(e.target.value)}
                        error={error}
                        helperText={error ? "Credentials Don't Match" : ""}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <label id="enteremail">Password</label>
                      <TextField
                        style={{ marginTop: "10px" }}
                        fullWidth
                        type="password"
                        placeholder="password"
                        onChange={(e) => setPassword(e.target.value)}
                        error={error}
                        helperText={error ? "Credentials Don't Match" : ""}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        fullWidth
                        variant="contained"
                        onClick={handleLogin}
                      >
                        Login
                      </Button>
                    </Grid>

                    {true && (
                      <Grid item xs={12}>
                        <Typography>
                          Go to{" "}
                          <span>
                            <Button
                              color="error"
                              onClick={() => navigate("/signup")}
                            >
                              signup
                            </Button>
                          </span>
                          Page
                        </Typography>
                      </Grid>
                    )}
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

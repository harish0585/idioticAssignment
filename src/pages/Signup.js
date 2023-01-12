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

export default function SignUp() {
  const [expanded, setExpanded] = React.useState(false);
  const [data, setData] = React.useState([]);
  const navigate = useNavigate();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data, "data");
    localStorage.setItem("name", data.name);
    localStorage.setItem("email", data.email);
    localStorage.setItem("password", data.password);
    navigate("/login");
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
              <form onSubmit={handleSubmit}>
                <Grid item xs={12}>
                  <Grid
                    container
                    direction="column"
                    textAlign={"left"}
                    spacing={2}
                  >
                    <Grid item xs={12} textAlign="center">
                      <Typography>SignUp Form</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <label id="entername">Name</label>
                      <TextField
                        style={{ marginTop: "10px" }}
                        fullWidth
                        id="entername"
                        type="text"
                        placeholder="Enter your Name"
                        name="name"
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <label id="enteremail">Email</label>
                      <TextField
                        style={{ marginTop: "10px" }}
                        fullWidth
                        id="enteremail"
                        type="email"
                        name="email"
                        placeholder="Enter your Email"
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <label id="enteremail">Password</label>
                      <TextField
                        style={{ marginTop: "10px" }}
                        fullWidth
                        type="password"
                        name="password"
                        placeholder="password"
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        disabled={
                          Object.values(data).length !== 3 ||
                          Object.values(data).includes("")
                        }
                      >
                        Submit
                      </Button>
                    </Grid>
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

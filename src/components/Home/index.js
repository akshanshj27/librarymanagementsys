import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Navbar from "./Navbar";

export default function ButtonAppBar() {
  return (
    <>
      <Navbar />
      <Box sx={{ flexGrow: 1 }}>
          <div className="container p-2 ">
              this is container
          </div>
      </Box>
    </>
  );
}

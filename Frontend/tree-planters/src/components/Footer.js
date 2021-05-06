import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
  container: {
    display: "flex",
    justifyContent: "center",
  },
}));

// social media, charities we support ...
const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container className={classes.container}>
        <FacebookIcon />
        <InstagramIcon />
        <LinkedInIcon />
        <TwitterIcon />
        <YouTubeIcon />
      </Container>
    </footer>
  );
};

export default Footer;

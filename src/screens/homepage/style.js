export default {
  container: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    height: "100vh"
  },
  des_view: {
    display: "flex",
    flex: 0.55,
    alignSelf: "center",
    alignItems: "center",
    width: "50%",
    //border: "2px solid red",
    justifyContent: "center",
    flexDirection: "column"
  },
  header_text: {
    color: "white",
    fontSize: 20,
    alignSelf: "flex-start"
  },
  des_text: {
    color: "white"
  },
  img_social_button_view: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 0.32,
    //border: "2px solid red",
    flexDirection: "column"
  },
  line: {
    display: "flex",
    width: "15%",
    borderBottom: "2px solid white"
  },
  button_view: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "10%"
  }
};
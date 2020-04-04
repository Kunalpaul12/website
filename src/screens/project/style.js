export default {
  container: {
    display: "flex",
    width: "95%",
    height: "100vh",
    marginLeft: "auto",
    marginRight: "auto",
    // border: "2px solid red",
    marginTop: "2%",
    overflowY: "scroll",
    flexDirection: "column",
  },
  mobile_header_view: {
    display: "flex",
    flex: 0.1,
    border: "1px solid white",
    borderRadius: 10,
    justifyContent: "center",
    width: "100%",
    marginBottom: "2%",
  },
  mobile_text_image_view: {
    display: "flex",
    width: "85%",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "2%",
    // border: "2px solid red",
  },
  mobile_header_text: {
    display: "flex",
    color: "white",
    marginLeft: "2%",
    fontSize: 20,
  },
  mobile_header_icon_view: {
    display: "flex",
    width: "15%",
    //border: "2px solid yellow",
    justifyContent: "space-around",
    alignItems: "center",
  },
  fontawesome_view: {
    marginLeft: "2%",
  },
  web_text_image_view: {
    display: "flex",
    width: "75%",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "2%",
    // border: "2px solid red",
  },
  web_header_icon_view: {
    display: "flex",
    width: "30%",
    //border: "2px solid yellow",
    justifyContent: "space-around",
    alignItems: "center",
  },
};

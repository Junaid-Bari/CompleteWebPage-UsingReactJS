function Navbar() {
    return (<div style={{ height: "9.5vh", backgroundColor: "#dae9b6"}}>
        <div style={{ display: "flex", flexDirection: "row", paddingTop: "24px" }}>
            <div><h1 style={{
                paddingLeft: "5vw",
                width: "42vh",
                position: "relative",
                fontSize: "52px",
                top: "-6vh",
                display: "relative",
                right: "0.5vw"
            }}>pedlar<br /><br /><br /></h1></div>
            <div > <a style={{ marginLeft: "14vw", color: "black", textDecoration: "none" }} href="#">For Creators</a>
                <a style={{ marginLeft: "2vw", color: "black", textDecoration: "none" }} href="#">For Brands</a></div>
            <div style={{
                display: "flex",
                flexDirection: "row"
            }}>
                <div style={{
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "row",
                    marginLeft: "14vw",
                    height: "23px",
                    textAlign: "center",
                    width: "56px",
                    border: "2px solid black",
                    borderRadius: "50px",
                    color: "black",
                    background: "#dae9b6"
                }}><a style={{ textDecoration: "none", textAlign: "center", color: "black", paddingLeft: "6px" }} href="#">Login</a> </div>
                <div style={{
                    textDecoration: "none",
                    marginLeft: "2vw",
                    height: "23px",
                    width: "96px",
                    border: "2px solid",
                    borderRadius: "50px",
                    background: "black"
                }}> <a style={{ marginLeft: "1vw", textDecoration: "none", textAlign: "center", color: "white" }} href="#">GetAccess</a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Navbar;
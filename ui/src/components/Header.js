import "../bootstrap/css/bootstrap.css";

function Header() {
    return (
        <div>
            <div className="container-sm m-3 p-3 bg-dark"
                style={
                    { borderRadius: "10px", fontFamily: "cursive", fontSize: "2vw", color: "#ffffff" }
                }
            >
                <span>ESK for Student Enrollment</span>
            </div>
        </div>
    );

}

export default Header;
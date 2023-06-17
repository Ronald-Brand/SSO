import UserService from "../services/UserService";

const DashboardApps = () => {
    const userRoles = UserService.getRoles();

    return (
        <div>
        <h2>Test</h2>

        {userRoles.includes("Admin") && (
            <button onClick={clickApp1}>
            Black box APP 1
            </button>
        )}

        {(userRoles.includes("Admin") || userRoles.includes("Ontwikkelaar")) && (
            <button onClick={clickApp2}>
            Black box APP 2
            </button>
        )}

        {(userRoles.includes("Admin") || userRoles.includes("Ontwikkelaar") || userRoles.includes("Stagiair")) && (
            <button onClick={clickApp3}>
            Black box APP 3
            </button>
        )}
        </div>
    );
};

function clickApp1(){
    window.open('http://localhost:8100', '_blank');
}

function clickApp2(){
    window.open('https://645d195838d1cd062aa85a45--classy-smakager-50d557.netlify.app/', '_blank');
}
function clickApp3(){
    window.open('https://645d1c59d7a619083917ffbd--willowy-marigold-023518.netlify.app/', '_blank');
}


export default DashboardApps
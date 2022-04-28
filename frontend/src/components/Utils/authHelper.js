export const signIn=(user)=>{
    return fetch(`user/token/obtain/`,{
        method: "POST",
        headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        },
        body:JSON.stringify(user),
    })
	.then(response=>response.json())
    .catch(error=>{
        console.log(error);
    })
}

export const authenticate=(data)=>{
    if (typeof window !== "undefined") {
        localStorage.setItem("jwt", JSON.stringify(data));
        console.log("AUTHENTICATION IS DONE");
    }
}

export const signOut=(next)=>{
    if (typeof window !== "undefined") {
        localStorage.removeItem("jwt");
        next();
    }
}

export  const isAuthenticate=()=>{
    if(typeof window == "undefined"){
        return false;
    }
    if (localStorage.getItem("jwt")) {
        return JSON.parse(localStorage.getItem("jwt"));
    } else {
    return false;
    }
}
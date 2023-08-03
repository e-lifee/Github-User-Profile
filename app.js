//const user=document.querySelector(".form")
document.querySelector(".searchBtn").addEventListener('click', showUser)

function showUser() {
    let userName = document.getElementById("searchUser").value
    const url = `https://api.github.com/users/${userName}`
    fetch(url).then(response => response.json())
        .then((jsonName) => {
            console.log(jsonName)
            document.getElementById("infos").innerHTML = `
                <p>Name: ${jsonName.name}</p>
                <img src="${jsonName.avatar_url}" width="280" height="280">
                <p>Followers: ${jsonName.followers}</p>
                <p>Followings: ${jsonName.following}</p>
                <p>Public Repos: ${jsonName.public_repos}</p>
            `
        })
    const repoUrl = url + "/repos"
    let repoDOM = document.getElementById("repos")
        //const repoUrl=`https://api.github.com/users/${userName}/repos`
    fetch(repoUrl).then(response => response.json())
        .then((repo) => {
            repoDOM.innerHTML = ""
            repo.forEach(item => {
                    let rList = document.createElement('li')
                    let rLink = document.createElement('a')

                    rLink.href = item.html_url
                    rLink.textContent = item.name
                    rList.appendChild(rLink)
                    repoDOM.appendChild(rList)

                    rLink.addEventListener("click", () => {
                        window.open(item.html_url, "_blank")
                    })
                })
                // const reposBody = document.getElementById("repos")
                // reposBody.innerHTML = ""
                // repo.forEach(function(repo) {
                //     const body = `<div>
                //       <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                //     </div>`
                //     reposBody.insertAdjacentHTML("beforeend", body);
                // })
        })
}




// window.onload = () => {
//     const searchUser = document.getElementById("searchUser")
//     searchUser.onkeyup = (event) => {
//         showUser(searchUser.value)
//     }
// }
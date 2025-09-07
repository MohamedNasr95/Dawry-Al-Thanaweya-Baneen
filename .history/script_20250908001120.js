table = document.getElementById("tbody")
// console.log(table)
// name = "Mustafa";
players = [{ID: 1, name: "Mohamed Nasr", position: 6, points: 0, win: 0, loss: 0, rWin: 0, rLost: 0, pGained: 0, pLost:0},
    {ID: 2, name: "Mohy Mahmoud", position: 1, points: 0, win: 0, loss: 0, rWin: 0, rLost: 0, pGained: 0, pLost:0},
    {ID: 3, name: "Mohamed Fayed", position: 4, points: 0, win: 0, loss: 0, rWin: 0, rLost: 0, pGained: 0, pLost:0},
    {ID: 4, name: "Ahmed Magdy", position: 2, points: 0, win: 0, loss: 0, rWin: 0, rLost: 0, pGained: 0, pLost:0},
    {ID: 5, name: "Mahmoud Meredian", position: 3, points: 0, win: 0, loss: 0, rWin: 0, rLost: 0, pGained: 0, pLost:0},
    {ID: 6, name: "Abdelrahman Meredian", position: 5, points: 0, win: 0, loss: 0, rWin: 0, rLost: 0, pGained: 0, pLost:0},
    {ID: 7, name: "Mohamed Osama", position: 7, points: 0, win: 0, loss: 0, rWin: 0, rLost: 0, pGained: 0, pLost:0},
]

players.sort(function(a, b){return a.position - b.position})
console.log()

// for( tVar = 0 ; tVar < players.length ; tVar++ )
// {
//     table.innerHTML += 
//     `
//         <tr>
//             <td>${players[tVar].name}</td>
//             <td>${players[tVar].position}</td>
//             <td>${players[tVar].points}</td>
//             <td>${players[tVar].win}</td>
//             <td>${players[tVar].loss}</td>
//             <td>${players[tVar].rWin}</td>
//             <td>${players[tVar].rLost}</td>
//             <td>${players[tVar].pGained}</td>
//             <td>${players[tVar].pLost}</td>
//         </tr>
//     `
// }

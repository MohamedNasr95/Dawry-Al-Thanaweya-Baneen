table = document.getElementById("tbody")
// console.log(table)
// name = "Mustafa";
players = [{ID: 1, name: "Mohamed Nasr", position: 0, points: 0, win: 0, loss: 0, rWin: 0, rLost: 0, pGained: 0, pLost:0},
    {ID: 2, name: "Mohy Mahmoud", position: 0, points: 0, win: 0, loss: 0, rWin: 0, rLost: 0, pGained: 0, pLost:0},
    {ID: 3, name: "Mohamed Fayed", position: 0, points: 0, win: 0, loss: 0, rWin: 0, rLost: 0, pGained: 0, pLost:0},
    {ID: 4, name: "Ahmed Magdy", position: 0, points: 0, win: 0, loss: 0, rWin: 0, rLost: 0, pGained: 0, pLost:0},
    {ID: 5, name: "Mahmoud Meredian", position: 0, points: 0, win: 0, loss: 0, rWin: 0, rLost: 0, pGained: 0, pLost:0},
    {ID: 6, name: "Abdelrahman Meredian", position: 0, points: 0, win: 0, loss: 0, rWin: 0, rLost: 0, pGained: 0, pLost:0},
    {ID: 7, name: "Mohamed Osama", position: 0, points: 0, win: 0, loss: 0, rWin: 0, rLost: 0, pGained: 0, pLost:0},
]

for( tVar = 0 ; tVar < players.length ; tVar++ )
{
    table.innerHTML += 
    `
        <tr>
            <td>${players[tVar].name}</td>
            <td>${player[tVar].position}</td>
            <td>${player[tVar].points}</td>
            <td>${player[tVar].win}</td>
            <td>${player[tVar].loss}</td>
            <td>${player[tVar].rWin}</td>
            <td>${player[tVar].rLost}</td>
            <td>${player[tVar].pGained}</td>
            <td>${player[tVar].pLost}</td>
        </tr>
    `
}

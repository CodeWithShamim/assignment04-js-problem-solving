// Problem 1:
function anaToVori(ana) {
    if (ana < 0) {
        return "Please input positive number!";
    } else {
        const voriValue = 0.0625;
        let vori = ana * voriValue;
        return vori;
    }
}
// const result = anaToVori(16);
// console.log(result);

// Problem 2:
function pandaCost(singara, samosa, jilapi) {
    if (singara < 0 || samosa < 0 || jilapi < 0) {
        return "Use valid number!";
    } else {
        const singaraPrice = 7;
        const samosaPrice = 10;
        const jilapiPrice = 15;
        let singaraValue = singara * singaraPrice;
        let samosaValue = samosa * samosaPrice;
        let jilapiValue = jilapi * jilapiPrice;

        let totalValue = singaraValue + samosaValue + jilapiValue;
        return totalValue;
    }
}
// const result = pandaCost(1, 1, 1);
// console.log(result);

// Problem 3:
function picnicBudget(members) {
    if (members < 0) {
        return "we can't accept this value!";
    } else {
        if (members <= 100) {
            let first100Budget = members * 5000;
            return first100Budget;
        } else if (members <= 200) {
            let firstBudget = 100 * 5000;
            let rest100 = members - 100;
            let second200Budget = rest100 * 4000;
            const totalSecond200Budget = firstBudget + second200Budget;
            return totalSecond200Budget;
        } else {
            let first = 100 * 5000;
            let second = 100 * 4000;
            let rest200 = members - 200;
            let restBudget = rest200 * 3000;
            const totalRestBudget = first + second + restBudget;
            return totalRestBudget;
        }
    }
}
// const result = picnicBudget(100);
// console.log(result);

// Problem 4:
function oddFriend(friends) {
    if (friends.length > 0) {
        for (let friend of friends) {
            if (typeof(friend) == "number") {
                return "Error! Number not allow";
            } else if (friend.length % 2 != 0) {
                return friend;
            }
        }

        return "Odd friend nothing here!"
    } else {
        return "Use any value in your Array!"
    }
}
// let myFriend = ['shamim', 'salman', 'ismail', 'ayman sadik', 'safin', 'kobir', 'rafi'];
// const result = oddFriend(myFriend);
// console.log(result);
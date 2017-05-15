function longProcess(cycleWait : number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let result = 0;
            for (let i = 0; i < cycleWait; i++) {
                result += 1;
            }
            resolve(result);
        }, 0);

    });

}

function main() {
    let result = longProcess(2000000000).then((res) => console.log(`Promise result: ${res}`)).catch((error) => console.log(`Error was: ${error}`));

    console.log("I'm done from main");
}

main();

for(let i = 0; i < 10; i++){
    console.log(`After invoking main, i cycle: ${i}`);
}

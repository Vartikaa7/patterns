let n=prompt("enter size");
let choice=prompt("choose pattern number");

let patterns={
    pattern1(n){
        let i=1;
        while(i<=n){
            console.log("*".repeat(i));
            i++;
        }
        console.log(" ");
    },
    pattern2(n){
        while(n>=1){
            console.log("*".repeat(n));
            n--;
        }
        console.log(" ");
    },
    pattern3(n){
        let i=n;
        while(i>=1){
            str="";
            let j=(n-i);
            str+=(" ".repeat(j))+("*".repeat(i));
            console.log(str)
            i--;
        }
        console.log(" ");
    },
    pattern4(n){
        let i=1;
        while(i<=n){
            str=""
            let j=(n-i);
            str+=(" ".repeat(j))+("*".repeat(i));
            console.log(str)
            i++;
        }
        console.log(" ");
    },
    pattern5(n){
        let i=1;
        console.log("*".repeat(n));
        while(i<n){
            console.log("*"+" ".repeat(n-2)+"*");
            i++;
        }
        console.log("*".repeat(n));
        console.log(" ");
    
    },
    pattern6(n){
        console.log("*".repeat(n));
        let i=n-2;
        while(i>0){
            console.log(" ".repeat(i)+"*");
            i--;
        }
        console.log("*".repeat(n));
    
    },
    pattern7(n){
        console.log("*".repeat(n));
        let i=1;
        while(i<n-1){
            console.log(" ".repeat(i)+"*");
            i++;
        }
        console.log("*".repeat(n));
    },
    pattern8(n){
        console.log("*".repeat(n));
        let i=1;
        while(i<n/2){
            console.log(" ".repeat(i)+"*"+" ".repeat((n-2)-2*i)+"*"+" ".repeat(i));
            i++;
        }
        console.log(" ".repeat((n/2)-1)+"*");
        i=n/2-1;
        while(i>0){
            console.log(" ".repeat(i)+"*"+" ".repeat((n-2)-2*i)+"*"+" ".repeat(i));
            i--;
        }
        console.log("*".repeat(n));
    },
    pattern9(n){
        console.log("*".repeat(n));
        let i=1;
        while(i<n/2){
            console.log("*"+" ".repeat(i-1)+"*"+" ".repeat((n-2)-2*i)+"*"+" ".repeat(i-1)+"*");
            i++;
        }
        console.log("*"+" ".repeat((n/2)-2)+"*"+" ".repeat((n/2)-1)+"*");
        i=n/2-1;
        while(i>0){
            console.log("*"+" ".repeat(i-1)+"*"+" ".repeat((n-2)-2*i)+"*"+" ".repeat(i-1)+"*");
            i--;
        }
        console.log("*".repeat(n));
    }
}
switch(choice){
        case "1":
            patterns.pattern1(n);
            break
        case "2":
            patterns.pattern2(n);
            break
        case "3":
            patterns.pattern3(n);
            break
        case "4":
            patterns.pattern4(n);
            break
        case "5":
            patterns.pattern5(n);
            break
        case "6":
            patterns.pattern6(n);
            break
        case "7":
            patterns.pattern7(n);
            break
        case "8":
            patterns.pattern8(n);
            break
        case "9":
            patterns.pattern9(n);
            break
        default:
            console.log("wrong choice");
}



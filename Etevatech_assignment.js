let List1=['Arjun', 'Adwait', 'Swapnil','Amit', 'Vishal', 'Adnan'];
let List2=[ 'Adwait','Laxman','Amit','Adnan','Nitin','Gaurav'];
let n_list_1=[];
let n_list_2=[];
let unique_in_both=[];

for(let i of List1){
    if(List2.includes(i)){
        continue;
    }else{
        n_list_1.push(i)
    }
}
console.log(n_list_1)

for(let j of List2){
    if(List1.includes(j)){
        continue;
    }else{
        n_list_2.push(j)
    }
}
console.log(n_list_2)

for(let k of List1){
    if(List2.includes(k)){
        unique_in_both.push(k)
    }
}
console.log(unique_in_both)
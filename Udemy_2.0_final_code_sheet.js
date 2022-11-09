// alert("It works!");
//                          ***SECTION 19***                            //  
//                  ***201-Todo List Project Intro***                   //
//----------------------------------------------------------------------//

// let todo = ["Finish todo", "Go shopping"];

// while (true) {
//     let input = prompt("Please select an option?");
//     if ( input === 'quit') {
//         console.log("Exiting todo list");
//         alert("Exiting todo list");
//         break;

//     } else if (input === 'new') {
//         todo.push(prompt("Add new list!"));
//         console.log(todo); //todo.indexOf
//         alert(`Added: ${todo}`);
        
//     } else if (input === 'delete') {
//         todo.splice(prompt("Select index of list?"), prompt("Select how many to delete?"));
//         console.log(todo);
//         alert(todo);
    
//     } else if (input === 'list') {
//         for (let i = 0; i < todo.length; i++) {
//             console.log(todo[i]);
//             alert(todo[i]);
//         }
//     } else {
//         console.log("Invalid option");
//         alert("Invalid option");
//     }
// }